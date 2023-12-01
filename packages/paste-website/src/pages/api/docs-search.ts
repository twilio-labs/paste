/* eslint-disable max-classes-per-file */
import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import Rollbar from "rollbar";

import { logger } from "../../functions-utils/logger";

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
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY;

const openai = new OpenAI({
  apiKey: openAiKey,
});

const LOG_PREFIX = "[/api/docs-search]:";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void | Response> {
  logger.info(`${LOG_PREFIX} Incoming request`);
  try {
    if (!openAiKey) {
      throw new ApplicationError("Missing environment variable OPENAI_API_KEY");
    }

    if (!supabaseUrl) {
      throw new ApplicationError("Missing environment variable SUPABASE_URL");
    }

    if (!supabaseServiceKey) {
      throw new ApplicationError("Missing environment variable SUPABASE_KEY");
    }

    const requestData = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    logger.info(`${LOG_PREFIX} Request data`, { requestData });

    if (!requestData) {
      throw new UserError("Missing request data");
    }

    const { prompt: query } = requestData;
    logger.info(`${LOG_PREFIX} User query`, { query });

    if (!query) {
      throw new UserError("Missing 'prompt' in request data");
    }

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

    const sanitizedQuery = query.trim();
    logger.info(`${LOG_PREFIX} Sanitized query`, { sanitizedQuery });

    logger.info(`${LOG_PREFIX} Reqesting openai embedding`);

    // Create embedding from query
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: sanitizedQuery.replaceAll("\n", " "),
    });

    if (embeddingResponse.data.length === 0) {
      throw new ApplicationError("Failed to create embedding for question", embeddingResponse);
    }

    const { embedding } = embeddingResponse.data[0];

    logger.info(`${LOG_PREFIX} Request page sections based on embeddings`);

    const { error: matchError, data: pageSections } = await supabaseClient.rpc("match_page_sections_v3", {
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

    logger.info(`${LOG_PREFIX} Returned ${pageSections.length} page sections`);

    const { data: queryTrackingData, error: queryTrackingError } = await supabaseClient
      .from("queries")
      // eslint-disable-next-line camelcase
      .insert({ query_string: sanitizedQuery, type: "docs-search" });

    if (queryTrackingError) {
      throw new ApplicationError("Failed to track search query", queryTrackingError);
    }

    logger.info(`${LOG_PREFIX} Inserted query into tracking database`, { queriesData: queryTrackingData });

    res.status(200).json({ data: pageSections });
  } catch (error: unknown) {
    if (error instanceof UserError) {
      logger.error(`${LOG_PREFIX} User error`, { error });
      rollbar.error(error);
      res.status(400).json({
        error: error.message,
        data: error.data,
      });
    } else if (error instanceof ApplicationError) {
      // Print out application errors with their additional data
      logger.error(`${LOG_PREFIX} ${error.message}: ${JSON.stringify(error.data)}`);
      rollbar.error(error);
    } else {
      // Print out unexpected errors as is to help with debugging
      logger.error(`${LOG_PREFIX} ${error}`);
      rollbar.error(error as Error);
    }

    res.status(500).json({
      error: "There was an error processing your request",
    });
  }
}
/* eslint-enable max-classes-per-file */
