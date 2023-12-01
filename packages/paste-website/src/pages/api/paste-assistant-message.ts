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

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const LOG_PREFIX = "[/api/paste-assistant-message]:";

async function createUserMessage({
  threadId,
  message,
}: { threadId: string; message: string }): Promise<OpenAI.Beta.Threads.Messages.ThreadMessage> {
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

  if (assistantID === undefined || assistantID === "") {
    logger.error(`${LOG_PREFIX} OpenAI assistant ID is undefined`);
    rollbar.error(`${LOG_PREFIX} OpenAI assistant ID is undefined`);
    res.status(500).json({
      error: "OpenAI assistant ID is undefined",
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

  /**
   * perform run on the assistant to process the newly added user message
   */
  let run = await openai.beta.threads.runs.create(threadId, { assistant_id: assistantID });

  /**
   * poll the run to see if it's completeor if the assistant need to call some "Functions" find it's status
   * keep polling while the status is ['queued', 'in_progress']
   */
  while (run.status === "queued" || run.status === "in_progress") {
    run = await openai.beta.threads.runs.retrieve(threadId, run.id);
  }

  /**
   * if the run status becomes `completed` we can respond to the user with the assistant's response
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
