/* eslint-disable max-classes-per-file */

import { type ChatPostMessageResponse } from "@slack/web-api";
import { createClient } from "@supabase/supabase-js";
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
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY;
const slackChannelID = process.env.SLACK_CHANNEL_TMP_PASTE_ASSISTANT;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

class ApplicationError extends Error {
  // eslint-disable-next-line @typescript-eslint/no-parameter-properties
  constructor(
    message: string,
    public data: Record<string, any> = {},
  ) {
    super(message);
  }
}
class UserError extends ApplicationError {}

const LOG_PREFIX = "[/api/paste-assistant-thread]:";

/**
 * Create a new assistant thread with the OpenAI API.
 *
 * @return {*}  {Promise<OpenAI.Beta.Threads.ThreadCreateParams>}
 */
async function createThread(): Promise<OpenAI.Beta.Thread> {
  return openai.beta.threads.create({ metadata: { threadTitle: "New thread" } });
}

/**
 * Simple endpoint for creating a thread via a POST.
 *
 * @export
 * @param {NextApiResponse} res
 * @return {*}  {(Promise<void | Response>)}
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void | Response> {
  logger.info(`${LOG_PREFIX} Incoming request`);
  const { host } = req.headers;
  const protocol = host?.includes("localhost") ? "http" : "https";

  try {
    if (openAiKey === undefined || openAiSecret === undefined) {
      throw new ApplicationError("OpenAI API key or secret is undefined");
    }

    if (assistantID === undefined) {
      throw new ApplicationError("OpenAI API key or secret is undefined");
    }

    if (!supabaseUrl) {
      throw new ApplicationError("Missing environment variable SUPABASE_URL");
    }

    if (!supabaseServiceKey) {
      throw new ApplicationError("Missing environment variable SUPABASE_KEY");
    }

    if (!slackChannelID) {
      throw new ApplicationError("Missing environment variable SLACK_CHANNEL_TMP_PASTE_ASSISTANT");
    }

    const newThread = await createThread();
    logger.info(`${LOG_PREFIX} Created thread`, { newThread });

    // post to slack
    const postToSlackResponse = await fetch(`${protocol}://${host}/api/post-to-slack`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `New Paste Assistant thread created: ${newThread.id}`,
        channelID: slackChannelID,
      }),
    });

    const slackResponseJSON = await postToSlackResponse.json();
    const slackResult = slackResponseJSON.result as ChatPostMessageResponse;

    logger.info(`${LOG_PREFIX} Posted to slack`, {
      slackMessageCreated: slackResult.ts,
      message: slackResult.message?.text,
    });

    // save to supabase
    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);
    const { data: newAssistantThreadData, error: newAssistantThreadError } = await supabaseClient
      .from("assistant_threads")
      // eslint-disable-next-line camelcase
      .insert([{ openai_thread_id: newThread.id, slack_thread_ts: slackResult.ts }]);

    if (newAssistantThreadError) {
      throw new ApplicationError("Failed to store new thread", newAssistantThreadError);
    }

    logger.info(`${LOG_PREFIX} Inserted new thread into database`, { queriesData: newAssistantThreadData });

    res.status(200).json(newThread);
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

    res.status(500).json({ error: "There was an error creating thread" });
  }
}
/* eslint-enable max-classes-per-file */
