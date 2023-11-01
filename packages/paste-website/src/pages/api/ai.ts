/* eslint-disable max-classes-per-file */
/**
 * API endpoint for querying our doc site with ChatGPT4
 * Copied from Supabase article.
 * https://supabase.com/blog/chatgpt-supabase-docs
 *
 * Requires four environment variables:
 * - OPENAI_API_KEY: Your OpenAI API key
 * - OPENAI_API_SECRET: Custom secret to block unauthorized requests
 * - SUPABASE_URL: Url to your Supabase project
 * - SUPABASE_KEY: Service role key for your Supabase project
 *
 * Please set these in your .env file and on your deployment boxes configuration.
 */
import { createClient } from "@supabase/supabase-js";
import { OpenAIStream, StreamingTextResponse } from "ai";
// @ts-expect-error not typed
import { codeBlock, oneLine } from "common-tags";
import GPT3Tokenizer from "gpt3-tokenizer";
import type { NextRequest } from "next/server";
import {
  type ChatCompletionRequestMessage,
  Configuration,
  type CreateEmbeddingResponse,
  type CreateModerationResponse,
  OpenAIApi,
} from "openai-edge";

class ApplicationError extends Error {
  // eslint-disable-next-line @typescript-eslint/no-parameter-properties
  constructor(message: string, public data: Record<string, any> = {}) {
    super(message);
  }
}
class UserError extends ApplicationError {}

const openAiKey = process.env.OPENAI_API_KEY;
const openAiSecret = process.env.OPENAI_API_SECRET;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY;

const config = new Configuration({
  apiKey: openAiKey,
});
const openai = new OpenAIApi(config);

/**
 * Because we're using an edge function for streaming we can't use winston for logging
 * or rollbar for error reporting. Instead we'll use console.log and console.error and
 * Datadog synthetics to monitor up time.
 */
export const runtime = "edge";

const LOG_PREFIX = "[/api/ai]:";

export default async function handler(req: NextRequest): Promise<void | Response> {
  // eslint-disable-next-line no-console
  console.log(`${LOG_PREFIX} Incoming request`);
  try {
    if (!openAiKey) {
      throw new ApplicationError("Missing environment variable OPENAI_API_KEY");
    }
    if (!openAiSecret) {
      throw new ApplicationError("Missing environment variable OPENAI_API_SECRET");
    }

    if (!supabaseUrl) {
      throw new ApplicationError("Missing environment variable SUPABASE_URL");
    }

    if (!supabaseServiceKey) {
      throw new ApplicationError("Missing environment variable SUPABASE_KEY");
    }

    const requestData = await req.json();
    // eslint-disable-next-line no-console
    console.log(`${LOG_PREFIX} Request data`, { requestData });

    if (!requestData) {
      throw new UserError("Missing request data");
    }

    const { prompt: query, secret } = requestData;
    // eslint-disable-next-line no-console
    console.log(`${LOG_PREFIX} User query`, { query });

    if (!secret || secret !== openAiSecret) {
      throw new UserError("Incorrect 'secret' in request data");
    }

    if (!query) {
      throw new UserError("Missing 'prompt' in request data");
    }

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

    const sanitizedQuery = query.trim();
    // eslint-disable-next-line no-console
    console.log(`${LOG_PREFIX} Sanitized query`, { sanitizedQuery });

    // eslint-disable-next-line no-console
    console.log(`${LOG_PREFIX} Moderate user prompt`);

    // Moderate the content to comply with OpenAI T&C
    const moderationResponse: CreateModerationResponse = await openai
      .createModeration({ input: sanitizedQuery })
      .then((res: any) => res.json());

    // @ts-expect-error this is a bug in the types
    if (moderationResponse.error) {
      // @ts-expect-error this is a bug in the types
      throw new ApplicationError("Failed to moderate content", moderationResponse.error.message);
    }
    const [results] = moderationResponse.results;
    // eslint-disable-next-line no-console
    console.log(`${LOG_PREFIX} Moderated prompt`, { results });

    if (results.flagged) {
      throw new UserError("Flagged content", {
        flagged: true,
        categories: results.categories,
      });
    }

    // eslint-disable-next-line no-console
    console.log(`${LOG_PREFIX} Reqesting openai embedding`);

    // Create embedding from query
    const embeddingResponse = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: sanitizedQuery.replaceAll("\n", " "),
    });

    if (embeddingResponse.status !== 200) {
      throw new ApplicationError("Failed to create embedding for question", embeddingResponse);
    }

    const {
      data: [{ embedding }],
    }: CreateEmbeddingResponse = await embeddingResponse.json();

    // eslint-disable-next-line no-console
    console.log(`${LOG_PREFIX} Request Page sections based on embeddings`);

    const { error: matchError, data: pageSections } = await supabaseClient.rpc("match_page_sections_for_ai", {
      embedding,
      /* eslint-disable camelcase */
      match_threshold: 0.78,
      match_count: 10,
      min_content_length: 50,
      /* eslint-enable camelcase */
    });

    if (matchError) {
      throw new ApplicationError("Failed to match page sections", matchError);
    }

    // eslint-disable-next-line no-console
    console.log(`${LOG_PREFIX} Returned ${pageSections.length} page sections`);

    const tokenizer = new GPT3Tokenizer({ type: "gpt3" });
    let tokenCount = 0;
    let contextText = "";

    // eslint-disable-next-line unicorn/no-for-loop
    for (const { content } of pageSections) {
      const encoded = tokenizer.encode(content);
      tokenCount += encoded.text.length;

      if (tokenCount >= 1500) {
        break;
      }

      contextText += `${content.trim()}\n---\n`;
    }

    // eslint-disable-next-line no-console
    console.log(`${LOG_PREFIX} Context text: ${contextText}`);

    const prompt = codeBlock`
      ${oneLine`
        You are a very enthusiastic Paste design system representative who loves
        to help people! Given the following sections from the Paste
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
      role: "user",
      content: prompt,
    };
    // eslint-disable-next-line no-console
    console.log(`${LOG_PREFIX} Request chat completion`);

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [chatMessage],
      // eslint-disable-next-line camelcase
      max_tokens: 512,
      temperature: 0,
      stream: true,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new ApplicationError("Failed to generate completion", error);
    }

    // eslint-disable-next-line no-console
    console.log(`${LOG_PREFIX} Open ai Returned response`);

    // Transform the response into a readable stream
    const stream = OpenAIStream(response);

    // Return a StreamingTextResponse, which can be consumed by the client
    return new StreamingTextResponse(stream);
  } catch (error: unknown) {
    if (error instanceof UserError) {
      // eslint-disable-next-line no-console
      console.error(`${LOG_PREFIX} User error`, { error });

      return new Response(
        JSON.stringify({
          error: error.message,
          data: error.data,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    } else if (error instanceof ApplicationError) {
      // Print out application errors with their additional data
      // eslint-disable-next-line no-console
      console.error(`${LOG_PREFIX} ${error.message}: ${JSON.stringify(error.data)}`);
    } else {
      // Print out unexpected errors as is to help with debugging
      // eslint-disable-next-line no-console
      console.error(`${LOG_PREFIX} ${error}`);
    }

    return new Response(
      JSON.stringify({
        error: "There was an error processing your request",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
/* eslint-enable max-classes-per-file */
