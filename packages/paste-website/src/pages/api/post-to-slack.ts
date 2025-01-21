import { WebClient } from "@slack/web-api";
import type { NextApiRequest, NextApiResponse } from "next";
import Rollbar from "rollbar";

import { logger } from "../../functions-utils/logger";

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const slackToken = process.env.SLACK_BOT_USER_OAUTH_ACCESS_TOKEN;

const client = new WebClient(slackToken);

const LOG_PREFIX = "[/api/post-to-slack]:";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void | Response> {
  logger.info(`${LOG_PREFIX} Incoming request`);

  if (slackToken === undefined) {
    logger.error(`${LOG_PREFIX} Slack token is undefined`);
    rollbar.error(`${LOG_PREFIX} Slack token is undefined`);
    res.status(500).json({
      error: "Slack token is undefined",
    });
    return;
  }

  const requestData = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  logger.info(`${LOG_PREFIX} Request data`, { requestData });

  if (!requestData) {
    res.status(500).json({
      error: "No request data",
    });
  }

  // thread is optional if you want to reply to a Slack thread
  const { message, channelID, threadID } = requestData;
  logger.info(`${LOG_PREFIX} User query`, { message, channelID, threadID, slackToken });

  if (message === undefined || message === "") {
    logger.error(`${LOG_PREFIX} Message is undefined`);
    rollbar.error(`${LOG_PREFIX} Message is undefined`);
    res.status(500).json({
      error: "Message is undefined",
    });
    return;
  }

  if (channelID === undefined || channelID === "") {
    logger.error(`${LOG_PREFIX} Channel is undefined`);
    rollbar.error(`${LOG_PREFIX} Channel is undefined`);
    res.status(500).json({
      error: "Channel is undefined",
    });
    return;
  }

  try {
    const result = await client.chat.postMessage({
      channel: channelID,
      text: message,
      username: "Paste Bot",
      // eslint-disable-next-line camelcase
      thread_ts: threadID,
      mrkdwn: true,
    });

    logger.info(`${LOG_PREFIX} Request data`, { result });
    res.status(200).json({ result });
  } catch (error) {
    logger.error(`${LOG_PREFIX} Error posting to Slack`, { error });
    rollbar.error(`${LOG_PREFIX} Error posting to Slack`, { error });
    res.status(500).json({
      error,
    });
  }
}
