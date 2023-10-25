/* eslint-disable max-classes-per-file */
import { createClient } from "@supabase/supabase-js";
import type { NextRequest } from "next/server";
import { Configuration, type CreateEmbeddingResponse, OpenAIApi } from "openai-edge";
import Rollbar from "rollbar";

import { logger } from "../../functions-utils/logger";

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});
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

const LOG_PREFIX = "[/api/discussions-search]:";

export default async function handler(req: NextRequest): Promise<void | Response> {
  logger.info(`${LOG_PREFIX} Incoming request`);
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
    logger.info(`${LOG_PREFIX} Request data`, { requestData });

    if (!requestData) {
      throw new UserError("Missing request data");
    }

    const { prompt: query, secret } = requestData;
    logger.info(`${LOG_PREFIX} User query`, { query });

    if (!secret || secret !== openAiSecret) {
      throw new UserError("Incorrect 'secret' in request data");
    }

    if (!query) {
      throw new UserError("Missing 'prompt' in request data");
    }

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

    const sanitizedQuery = query.trim();
    logger.info(`${LOG_PREFIX} Sanitized query`, { sanitizedQuery });

    logger.info(`${LOG_PREFIX} Reqesting openai embedding`);

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

    logger.info(`${LOG_PREFIX} Request Discussion sections based on embeddings`);

    const { error: matchError, data: discussionSections } = await supabaseClient.rpc("match_discussions", {
      embedding,
      /* eslint-disable camelcase */
      match_threshold: 0.78,
      match_count: 20,
      min_content_length: 50,
      /* eslint-enable camelcase */
    });

    if (matchError) {
      throw new ApplicationError("Failed to match discussion sections", matchError);
    }

    logger.info(`${LOG_PREFIX} Returned ${discussionSections.length} discussion sections`);

    return new Response(
      JSON.stringify({
        data: discussionSections,
      }),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error: unknown) {
    if (error instanceof UserError) {
      logger.error(`${LOG_PREFIX} User error`, { error });
      rollbar.error(error);
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
      logger.error(`${LOG_PREFIX} ${error.message}: ${JSON.stringify(error.data)}`);
      rollbar.error(error);
    } else {
      // Print out unexpected errors as is to help with debugging
      logger.error(`${LOG_PREFIX} ${error}`);
      rollbar.error(error as Error);
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
