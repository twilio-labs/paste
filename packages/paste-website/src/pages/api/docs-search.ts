/* eslint-disable max-classes-per-file */
import { createClient } from "@supabase/supabase-js";
import type { NextRequest } from "next/server";
import {
  Configuration,
  type CreateEmbeddingResponse,
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

export const runtime = "edge";

export default async function handler(req: NextRequest): Promise<void | Response> {
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

    if (!requestData) {
      throw new UserError("Missing request data");
    }

    const { prompt: query, secret } = requestData;

    if (!secret || secret !== openAiSecret) {
      throw new UserError("Incorrect 'secret' in request data");
    }

    if (!query) {
      throw new UserError("Missing 'prompt' in request data");
    }

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

    const sanitizedQuery = query.trim();

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

    const { error: matchError, data: pageSections } = await supabaseClient.rpc("match_page_sections_v3", {
      embedding,
      /* eslint-disable camelcase */
      match_threshold: 0.78,
      match_count: 20,
      min_content_length: 50,
      /* eslint-enable camelcase */
    });

    if (matchError) {
      throw new ApplicationError("Failed to match page sections", matchError);
    }

    return new Response(
      JSON.stringify({
        data: pageSections,
      }),
      {
        headers: { "Content-Type": "application/json" },
      },
    );


  } catch (error: unknown) {
    if (error instanceof UserError) {
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
      console.error(`${error.message}: ${JSON.stringify(error.data)}`);
    } else {
      // Print out unexpected errors as is to help with debugging
      // eslint-disable-next-line no-console
      console.error(error);
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
