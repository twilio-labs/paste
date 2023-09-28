/* eslint-disable max-classes-per-file */
/**
 * API endpoint for querying our doc site with ChatGPT4
 * Copied from Supabase article.
 * https://supabase.com/blog/chatgpt-supabase-docs
 *
 * Requires four environment variables:
 * - OPENAI_API_KEY: Your OpenAI API key
 * - OPENAI_API_SECRET: Custom secret to block unauthorized requests
 * - NEXT_PUBLIC_SUPABASE_URL: Url to your Supabase project
 * - SUPABASE_SERVICE_ROLE_KEY: Service role key for your Supabase project
 *
 * Please set these in your .env file and on your deployment boxes configuration.
 */
import type {NextRequest} from 'next/server';
import {createClient} from '@supabase/supabase-js';
// @ts-expect-error not typed
import {codeBlock, oneLine} from 'common-tags';
import GPT3Tokenizer from 'gpt3-tokenizer';
import {
  Configuration,
  OpenAIApi,
  CreateModerationResponse,
  CreateEmbeddingResponse,
  ChatCompletionRequestMessage,
} from 'openai-edge';
import {OpenAIStream, StreamingTextResponse} from 'ai';

class ApplicationError extends Error {
  // eslint-disable-next-line @typescript-eslint/no-parameter-properties
  constructor(message: string, public data: Record<string, any> = {}) {
    super(message);
  }
}
class UserError extends ApplicationError {}

const openAiKey = process.env.OPENAI_API_KEY;
const openAiSecret = process.env.OPENAI_API_SECRET;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const config = new Configuration({
  apiKey: openAiKey,
});
const openai = new OpenAIApi(config);

export const runtime = 'edge';

export default async function handler(req: NextRequest): Promise<void | Response> {
  try {
    if (!openAiKey) {
      throw new ApplicationError('Missing environment variable OPENAI_API_KEY');
    }
    if (!openAiSecret) {
      throw new ApplicationError('Missing environment variable OPENAI_API_SECRET');
    }

    if (!supabaseUrl) {
      throw new ApplicationError('Missing environment variable SUPABASE_URL');
    }

    if (!supabaseServiceKey) {
      throw new ApplicationError('Missing environment variable SUPABASE_SERVICE_ROLE_KEY');
    }

    const requestData = await req.json();

    if (!requestData) {
      throw new UserError('Missing request data');
    }

    const {prompt: query, secret} = requestData;

    if (!secret || secret !== openAiSecret) {
      throw new UserError("Incorrect 'secret' in request data");
    }

    if (!query) {
      throw new UserError("Missing 'prompt' in request data");
    }

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

    // Moderate the content to comply with OpenAI T&C
    const sanitizedQuery = query.trim();
    const moderationResponse: CreateModerationResponse = await openai
      .createModeration({input: sanitizedQuery})
      .then((res: any) => res.json());

    // @ts-expect-error this is a bug in the types
    if (moderationResponse.error) {
      // @ts-expect-error this is a bug in the types
      throw new ApplicationError('Failed to moderate content', moderationResponse.error.message);
    }
    const [results] = moderationResponse.results;

    if (results.flagged) {
      throw new UserError('Flagged content', {
        flagged: true,
        categories: results.categories,
      });
    }

    // Create embedding from query
    const embeddingResponse = await openai.createEmbedding({
      model: 'text-embedding-ada-002',
      input: sanitizedQuery.replaceAll('\n', ' '),
    });

    if (embeddingResponse.status !== 200) {
      throw new ApplicationError('Failed to create embedding for question', embeddingResponse);
    }

    const {
      data: [{embedding}],
    }: CreateEmbeddingResponse = await embeddingResponse.json();

    const {error: matchError, data: pageSections} = await supabaseClient.rpc('match_page_sections', {
      embedding,
      /* eslint-disable camelcase */
      match_threshold: 0.78,
      match_count: 10,
      min_content_length: 50,
      /* eslint-enable camelcase */
    });

    if (matchError) {
      throw new ApplicationError('Failed to match page sections', matchError);
    }

    const tokenizer = new GPT3Tokenizer({type: 'gpt3'});
    let tokenCount = 0;
    let contextText = '';

    // eslint-disable-next-line unicorn/no-for-loop
    for (const {content} of pageSections) {
      const encoded = tokenizer.encode(content);
      tokenCount += encoded.text.length;

      if (tokenCount >= 1500) {
        break;
      }

      contextText += `${content.trim()}\n---\n`;
    }

    const prompt = codeBlock`
      ${oneLine`
        You are a very enthusiastic Supabase representative who loves
        to help people! Given the following sections from the Supabase
        documentation, answer the question using only that information,
        outputted in markdown format. If you are unsure and the answer
        is not explicitly written in the documentation, say
        "Sorry, I don't know how to help with that."
      `}

      Context sections:
      ${contextText}

      Question: """
      ${sanitizedQuery}
      """

      Answer as markdown (including related code snippets if available):
    `;

    const chatMessage: ChatCompletionRequestMessage = {
      role: 'user',
      content: prompt,
    };

    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [chatMessage],
      // eslint-disable-next-line camelcase
      max_tokens: 512,
      temperature: 0,
      stream: true,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new ApplicationError('Failed to generate completion', error);
    }

    // Transform the response into a readable stream
    const stream = OpenAIStream(response);

    // Return a StreamingTextResponse, which can be consumed by the client
    return new StreamingTextResponse(stream);
  } catch (error: unknown) {
    if (error instanceof UserError) {
      return new Response(
        JSON.stringify({
          error: error.message,
          data: error.data,
        }),
        {
          status: 400,
          headers: {'Content-Type': 'application/json'},
        }
      );
    } else if (error instanceof ApplicationError) {
      // Print out application errors with their additional data
      // eslint-disable-next-line no-console
      console.error(`${error.message}: ${JSON.stringify(error.data)}`);
    } else {
      // Print out unexpected errors as is to help with debugging
      // eslint-disable-next-line no-console
      console.error(error);
    }

    return new Response(
      JSON.stringify({
        error: 'There was an error processing your request',
      }),
      {
        status: 500,
        headers: {'Content-Type': 'application/json'},
      }
    );
  }
}
/* eslint-enable max-classes-per-file */
