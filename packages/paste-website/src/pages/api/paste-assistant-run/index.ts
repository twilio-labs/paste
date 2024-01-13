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

const LOG_PREFIX = "[/api/paste-assistant-run/:rid]:";

async function getRun(
  threadId: OpenAI.Beta.Thread["id"],
  runId: OpenAI.Beta.Threads.Run["id"],
): Promise<OpenAI.Beta.Threads.Run> {
  return openai.beta.threads.runs.retrieve(threadId, runId);
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

  const { threadId, runId } = requestData;

  if (threadId === undefined || threadId === "") {
    logger.error(`${LOG_PREFIX} Thread ID is undefined`);
    rollbar.error(`${LOG_PREFIX} Thread ID is undefined`);
    res.status(500).json({
      error: "Thread ID is undefined",
    });
    return;
  }

  if (runId === undefined || runId === "") {
    logger.error(`${LOG_PREFIX} Run ID is undefined`);
    rollbar.error(`${LOG_PREFIX} Run ID is undefined`);
    res.status(500).json({
      error: "Run ID is undefined",
    });
    return;
  }

  if (typeof runId !== "string") {
    logger.error(`${LOG_PREFIX} Run ID is not a string`);
    rollbar.error(`${LOG_PREFIX} Run ID is not a string`);
    res.status(500).json({
      error: "Run ID is not a string",
    });
    return;
  }

  logger.info(`${LOG_PREFIX} Getting assistant run`, { threadId, runId });

  const run = await getRun(threadId, runId);

  logger.info(`${LOG_PREFIX} Recieved run`, { run });
  res.status(200).json(run);
}
