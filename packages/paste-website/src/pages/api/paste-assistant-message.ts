import { type ChatPostMessageResponse } from "@slack/web-api";
import { createClient } from "@supabase/supabase-js";
/* eslint-disable camelcase */
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
const assistantID = process.env.OPENAI_ASSISTANT_ID;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY;
const slackChannelID = process.env.SLACK_CHANNEL_TMP_PASTE_ASSISTANT;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const LOG_PREFIX = "[/api/paste-assistant-message]:";

async function createUserMessage({
  threadId,
  message,
}: { threadId: string; message: string }): Promise<OpenAI.Beta.Threads.Messages.Message> {
  return openai.beta.threads.messages.create(threadId, { role: "user", content: message });
}

async function getRelevantDocs(functionArguments: string): Promise<any> {
  return fetch("https://paste.twilio.design/api/docs-search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: functionArguments,
  });
}

/**
 * End point for the paste assistant to call to send a message to an OpenAI assistant thread, wait for a response,
 * process if the assistant response is asking for a "Function" to be called, call the function and return the output
 * to the assistant for it to process a chat response and add it to the thread.
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @return {*}  {(Promise<void | Response>)}
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void | Response> {
  logger.info(`${LOG_PREFIX} Incoming request`);
  const { host } = req.headers;
  const protocol = host?.includes("localhost") ? "http" : "https";

  if (openAiKey === undefined || openAiSecret === undefined) {
    logger.error(`${LOG_PREFIX} OpenAI API key or secret is undefined`);
    rollbar.error(`${LOG_PREFIX} OpenAI API key or secret is undefined`);
    res.status(500).json({
      error: "OpenAI API key or secret is undefined",
    });
    return;
  }

  if (assistantID === undefined || assistantID === "") {
    logger.error(`${LOG_PREFIX} OpenAI assistant ID is undefined`);
    rollbar.error(`${LOG_PREFIX} OpenAI assistant ID is undefined`);
    res.status(500).json({
      error: "OpenAI assistant ID is undefined",
    });
    return;
  }

  if (supabaseServiceKey === undefined || supabaseServiceKey === "") {
    logger.error(`${LOG_PREFIX} Supabase Service key is undefined`);
    rollbar.error(`${LOG_PREFIX} Supabase Service key is undefined`);
    res.status(500).json({
      error: "Supabase Service key is undefined",
    });
    return;
  }

  if (supabaseUrl === undefined || supabaseUrl === "") {
    logger.error(`${LOG_PREFIX} Supabase url is undefined`);
    rollbar.error(`${LOG_PREFIX} Supabase url is undefined`);
    res.status(500).json({
      error: "Supabase url is undefined",
    });
    return;
  }

  if (slackChannelID === undefined || slackChannelID === "") {
    logger.error(`${LOG_PREFIX} Slack channel ID is undefined`);
    rollbar.error(`${LOG_PREFIX} Slack channel ID is undefined`);
    res.status(500).json({
      error: "Slack channel ID is undefined",
    });
    return;
  }

  const requestData = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  logger.info(`${LOG_PREFIX} Request data`, { requestData });

  const { threadId, message } = requestData;

  if (threadId === undefined || threadId === "") {
    logger.error(`${LOG_PREFIX} Thread ID is undefined`);
    rollbar.error(`${LOG_PREFIX} Thread ID is undefined`);
    res.status(500).json({
      error: "Thread ID is undefined",
    });
    return;
  }

  if (message === undefined || message === "") {
    logger.error(`${LOG_PREFIX} Message is undefined`);
    rollbar.error(`${LOG_PREFIX} Message is undefined`);
    res.status(500).json({
      error: "Message is undefined",
    });
    return;
  }

  logger.info(`${LOG_PREFIX} Creating user message`, { threadId, message });

  try {
    // Add a new message to the assistant thread
    const userMessage = await createUserMessage({ threadId, message });
    logger.info(`${LOG_PREFIX} Created user message`, { userMessage });
  } catch (error) {
    logger.error(`${LOG_PREFIX} Error creating user message`, { error });
    rollbar.error(`${LOG_PREFIX} Error creating user message`, { error });
    res.status(500).json({
      error: "Error creating user message",
    });
  }

  // get the slack thread ID for the message thread being updated so that we can post the new message to the correct slack thread
  const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);
  const { data: slackThreadID, error: slackThreadIDError } = await supabaseClient
    .from("assistant_threads")
    .select("slack_thread_ts")
    .eq("openai_thread_id", threadId);

  if (slackThreadIDError || slackThreadID == null) {
    logger.error(`${LOG_PREFIX} Error getting slack thread ID for the message thread being updated`, {
      slackThreadIDError,
    });
  } else {
    try {
      // Post that new message to the correct slack thread for this assistant thread
      const postToSlackResponse = await fetch(`${protocol}://${host}/api/post-to-slack`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `New message was added to the thread: \n\n --- \n\n${message}`,
          channelID: slackChannelID,
          threadID: slackThreadID,
        }),
      });
      const slackResponseJSON = await postToSlackResponse.json();
      const slackResult = slackResponseJSON.result as ChatPostMessageResponse;

      logger.info(`${LOG_PREFIX} Posted to slack`, {
        slackMessageCreated: slackResult.ts,
        message: slackResult.message?.text,
      });
    } catch (error) {
      logger.error(`${LOG_PREFIX} Error sending slack message for thread being updated`, {
        error,
      });
    }
  }

  /**
   * perform run on the assistant to process the newly added user message
   */
  let run = await openai.beta.threads.runs.create(threadId, { assistant_id: assistantID });

  /**
   * poll the run to see if it's complete or if the assistant need to call some "Functions" find it's status
   * keep polling while the status is ['queued', 'in_progress']
   */
  while (run.status === "queued" || run.status === "in_progress") {
    run = await openai.beta.threads.runs.retrieve(threadId, run.id);
  }

  /**
   * if the run status becomes `completed` we can respond to the user with the assistant's run response
   */
  if (run.status === "completed") {
    logger.info(`${LOG_PREFIX} Assistant run response`, { run });
    res.status(200).json({ run });
  }

  /**
   * if the run `requires_action` we need the `required_action` field to know what to do next for the assistant to finish responding to the new user message
   * When a run has the status: "requires_action" and required_action.type is submit_tool_outputs
   * submit the outputs from the tool calls once they're all completed.
   * Tools are "Functions" that can be called from the assistant. The fact OpenAi calls them tools in the API is confusing.
   *
   * const run = await openai.beta.threads.runs.submitToolOutputs(
   *   "thread_abc123",
   *   "run_abc123",
   *   {
   *     tool_outputs: [
   *       {
   *         tool_call_id: "call_abc123",
   *         output: "28C",
   *       },
   *     ],
   *   }
   * );
   */
  if (run.status === "requires_action") {
    logger.info(`${LOG_PREFIX} Assistant run requires action ${run.required_action?.type}`);

    // this should never happen if the status is "requires_action", satisfy typescript
    if (run.required_action == null) {
      return;
    }

    // create an array of actions that need to be completed before we can get an ai response by iterating through the tool_calls from the submit_tool_outputs object
    const actions = run.required_action.submit_tool_outputs.tool_calls.map((call) => {
      return {
        id: call.id,
        functionName: call.function.name,
        functionArguments: call.function.arguments,
      };
    });
    logger.info(`${LOG_PREFIX} Assistant run requires`, { actions });

    // For each actions, call each functionName with the functionArguments and create a tool_outputs array with the tool_call_id and output of each function call
    const tool_outputs = [];
    for (const action of actions) {
      const { functionName, functionArguments } = action;

      if (functionName === "get_relevant_docs") {
        const output = await getRelevantDocs(functionArguments);
        const json = await output.json();
        tool_outputs.push({ tool_call_id: action.id, output: JSON.stringify(json) });
      }
    }

    logger.info(`${LOG_PREFIX} Assistant run tool outputs`, { tool_outputs });

    // submit the tool_outputs to the assistant
    run = await openai.beta.threads.runs.submitToolOutputs(threadId, run.id, { tool_outputs });

    res.status(200).json({ run });
  }
}
/* eslint-enable camelcase */
