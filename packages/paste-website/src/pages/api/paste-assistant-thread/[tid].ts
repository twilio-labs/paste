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

const LOG_PREFIX = "[/api/paste-assistant-thread/:tid]:";

async function getThread(id: OpenAI.Beta.Thread["id"]): Promise<OpenAI.Beta.Threads.Thread> {
  return openai.beta.threads.retrieve(id);
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

  const { tid: threadId } = req.query;

  if (threadId === undefined || threadId === "") {
    logger.error(`${LOG_PREFIX} Thread ID is undefined`);
    rollbar.error(`${LOG_PREFIX} Thread ID is undefined`);
    res.status(500).json({
      error: "Thread ID is undefined",
    });
    return;
  }

  if (typeof threadId !== "string") {
    logger.error(`${LOG_PREFIX} Thread ID is not a string`);
    rollbar.error(`${LOG_PREFIX} Thread ID is not a string`);
    res.status(500).json({
      error: "Thread ID is not a string",
    });
    return;
  }

  logger.info(`${LOG_PREFIX} Getting thread messages`, { threadId });

  const thread = await getThread(threadId);

  logger.info(`${LOG_PREFIX} Recieved thread`, { thread });
  res.status(200).json(thread);
}
