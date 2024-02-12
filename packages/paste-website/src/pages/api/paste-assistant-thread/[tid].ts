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

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const LOG_PREFIX = "[/api/paste-assistant-thread/:tid]:";

async function getThread(id: OpenAI.Beta.Thread["id"]): Promise<OpenAI.Beta.Threads.Thread> {
  return openai.beta.threads.retrieve(id);
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

/**
 * Simple endpoint for getting, deleting, and updating a thread via http methods for a given thread.
 *
 * /api/paste-assistant-thread/:tid
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
    return;
  }

  if (
    supabaseServiceKey === undefined ||
    supabaseUrl === undefined ||
    supabaseServiceKey === "" ||
    supabaseUrl === ""
  ) {
    logger.error(`${LOG_PREFIX} Supabase key or url is undefined`);
    rollbar.error(`${LOG_PREFIX} Supabase key or url is undefined`);
    res.status(500).json({
      error: "Supabase key or url is undefined",
    });
    return;
  }

  if (assistantID === undefined) {
    logger.error(`${LOG_PREFIX} OpenAI assistant ID is undefined`);
    rollbar.error(`${LOG_PREFIX} OpenAI assistant ID is undefined`);
    res.status(500).json({
      error: "OpenAI assistant ID is undefined",
    });
    return;
  }

  const { method } = req;

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

  switch (method) {
    case "GET": {
      logger.info(`${LOG_PREFIX} POST request`);
      try {
        const thread = await getThread(threadId);
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
        const thread = await deleteThread(threadId);
        logger.info(`${LOG_PREFIX} Deleted thread`, { thread });

        const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

        // delete thread from supabase
        const { data: deleteAssistantThreadData, error: deleteAssistantThreadError } = await supabaseClient
          .from("assistant_threads")
          .delete()
          .eq("openai_thread_id", threadId);

        if (deleteAssistantThreadError) {
          logger.info(`${LOG_PREFIX} Failed to delete thread from database but might still have deleted from OpenAI`, {
            queriesData: deleteAssistantThreadData,
          });
        }

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
        const requestData = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
        logger.info(`${LOG_PREFIX} Request data`, { requestData });

        const thread = await updateThread({ id: threadId, metadata: requestData.metadata });
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
