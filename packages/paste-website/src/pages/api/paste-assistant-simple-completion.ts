import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import Rollbar from "rollbar";

import { logger } from "../../functions-utils/logger";

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const openAiKey = process.env.OPENAI_API_KEY;
const openAiSecret = process.env.OPENAI_API_SECRET;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const LOG_PREFIX = "[/api/paste-assistant-simple-completion]:";

async function getCompletion(prompt: OpenAI.Chat.ChatCompletionMessageParam): Promise<OpenAI.Chat.ChatCompletion> {
  return openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [prompt],
    // eslint-disable-next-line camelcase
    max_tokens: 2000,
    temperature: 0,
  });
}

/**
 * Super simple OpenAI completion endpoint for the paste assistant to call.
 * Provide a prompt and any context you would like to provide and get a completion back from OpenAI.
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @return {*}  {(Promise<void | Response>)}
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void | Response> {
  logger.info(`${LOG_PREFIX} Incoming request`);

  if (openAiKey === undefined || openAiSecret === undefined) {
    logger.error(`${LOG_PREFIX} OpenAI API key or secret is undefined`);
    rollbar.error(`${LOG_PREFIX} OpenAI API key or secret is undefined`);
    res.status(500).json({
      error: "OpenAI API key or secret is undefined",
    });
  }

  const requestData = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  logger.info(`${LOG_PREFIX} Request data`, { requestData });

  const { prompt, context } = requestData;

  if (prompt === undefined || prompt === "") {
    logger.error(`${LOG_PREFIX} prompt is undefined`);
    rollbar.error(`${LOG_PREFIX} prompt is undefined`);
    res.status(500).json({
      error: "Prompt is undefined",
    });
    return;
  }

  logger.info(`${LOG_PREFIX} Getting assistant completion`, { prompt, context });

  const combinedPrompt = `${prompt}\n${context}`;

  const chatMessage: OpenAI.Chat.ChatCompletionMessageParam = {
    role: "user",
    content: combinedPrompt,
  };

  try {
    const completion = await getCompletion(chatMessage);
    logger.info(`${LOG_PREFIX} Recieved completion`, { completion });
    res.status(200).json(completion);
  } catch (error) {
    logger.error(`${LOG_PREFIX} Error getting assistant completion`, { error });
    rollbar.error(`${LOG_PREFIX} Error getting assistant completion`, { error });
    res.status(500).json({
      error: "Error getting assistant completion",
    });
  }
}
