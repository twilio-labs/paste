import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import Rollbar from "rollbar";

import { logger } from "../../../functions-utils/logger";

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const openAiKey = process.env.OPENAI_API_KEY;
const openAiSecret = process.env.OPENAI_API_SECRET;
const assistantID = process.env.OPENAI_ASSISTANT_ID;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const LOG_PREFIX = "[/api/paste-assistant-thread]:";

async function createThread(): Promise<OpenAI.Beta.Threads.ThreadCreateParams> {
  return openai.beta.threads.create({ metadata: { threadTitle: "New thread" } });
}

async function deleteThread(id: string): Promise<OpenAI.Beta.Threads.ThreadDeleted> {
  return openai.beta.threads.del(id);
}

async function updateThread({
  id,
  metadata,
}: {
  id: OpenAI.Beta.Thread["id"];
  metadata: OpenAI.Beta.Thread["metadata"];
}): Promise<OpenAI.Beta.Threads.ThreadUpdateParams> {
  return openai.beta.threads.update(id, { metadata });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void | Response> {
  logger.info(`${LOG_PREFIX} Incoming request`);

  if (openAiKey === undefined || openAiSecret === undefined) {
    logger.error(`${LOG_PREFIX} OpenAI API key or secret is undefined`);
    rollbar.error(`${LOG_PREFIX} OpenAI API key or secret is undefined`);
    res.status(500).json({
      error: "OpenAI API key or secret is undefined",
    });
  }

  if (assistantID === undefined) {
    logger.error(`${LOG_PREFIX} OpenAI assistant ID is undefined`);
    rollbar.error(`${LOG_PREFIX} OpenAI assistant ID is undefined`);
    res.status(500).json({
      error: "OpenAI assistant ID is undefined",
    });
  }

  const requestData = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  logger.info(`${LOG_PREFIX} Request data`, { requestData });

  const { method } = req;

  switch (method) {
    case "POST": {
      logger.info(`${LOG_PREFIX} POST request`);
      try {
        const thread = await createThread();
        logger.info(`${LOG_PREFIX} Created thread`, { thread });
        res.status(200).json(thread);
      } catch (error) {
        logger.error(`${LOG_PREFIX} Error creating thread`, { error });
        rollbar.error(`${LOG_PREFIX} Error creating thread`, { error });
        res.status(500).json({
          error: "Error creating thread",
        });
      }
      break;
    }
    case "DELETE": {
      logger.info(`${LOG_PREFIX} DELETE request`);
      try {
        const thread = await deleteThread(requestData.id);
        logger.info(`${LOG_PREFIX} Deleted thread`, { thread });
        res.status(200).json(thread);
      } catch (error) {
        logger.error(`${LOG_PREFIX} Error deleting thread`, { error });
        rollbar.error(`${LOG_PREFIX} Error deleting thread`, { error });
        res.status(500).json({
          error: "Error deleting thread",
        });
      }
      break;
    }
    case "PUT": {
      logger.info(`${LOG_PREFIX} PUT request`);
      try {
        const thread = await updateThread(requestData);
        logger.info(`${LOG_PREFIX} Updated thread`, { thread });
        res.status(200).json(thread);
      } catch (error) {
        logger.error(`${LOG_PREFIX} Error updating thread`, { error });
        rollbar.error(`${LOG_PREFIX} Error updating thread`, { error });
        res.status(500).json({
          error: "Error updating thread",
        });
      }
      break;
    }
  }
}
