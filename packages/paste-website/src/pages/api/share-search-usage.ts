import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";
import Rollbar from "rollbar";
import { z } from "zod";

import { logger } from "../../functions-utils/logger";

const queryCountSchema = z.object({
  // eslint-disable-next-line camelcase
  query_string: z.string(),
  count: z.number(),
});

const latestQueriesDataSchema = z.array(queryCountSchema);

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY;
const slackChannelID = process.env.SLACK_CHANNEL_HELP_DESIGN_SYSTEM;

const LOG_PREFIX = "[/api/share-search-usage]:";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void | Response> {
  logger.info(`${LOG_PREFIX} Incoming request`);

  // if this doesn't get called from a vercel cron job, then it's unauthorized
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    res.status(401).end("Unauthorized");
    return;
  }

  if (supabaseUrl === undefined) {
    logger.error(`${LOG_PREFIX} Supabase URL is undefined`);
    rollbar.error(`${LOG_PREFIX} Supabase URL is undefined`);
    res.status(500).json({
      error: "Supabase URL is undefined",
    });
    return;
  }

  if (supabaseServiceKey === undefined) {
    logger.error(`${LOG_PREFIX} Supabase service key is undefined`);
    rollbar.error(`${LOG_PREFIX} Supabase service key is undefined`);
    res.status(500).json({
      error: "Supabase service key is undefined",
    });
    return;
  }

  if (slackChannelID === undefined) {
    logger.error(`${LOG_PREFIX} Slack channel ID is undefined`);
    rollbar.error(`${LOG_PREFIX} Slack channel ID is undefined`);
    res.status(500).json({
      error: "Slack channel ID is undefined",
    });
    return;
  }

  const { host } = req.headers;
  const protocol = host?.includes("localhost") ? "http" : "https";

  const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

  const latestSearchQueriesResponse = await supabaseClient.rpc("match_weekly_search_usage");

  if (latestSearchQueriesResponse.error) {
    logger.error(`${LOG_PREFIX} Error fetching latest search queries`, {
      latestSearchQueries: latestSearchQueriesResponse,
    });
    rollbar.error(`${LOG_PREFIX} Error fetching latest search queries`, {
      latestSearchQueries: latestSearchQueriesResponse,
    });
    res.status(500).json({
      error: latestSearchQueriesResponse.error,
    });
    return;
  }

  const latestSearchQueries = latestQueriesDataSchema.safeParse(latestSearchQueriesResponse.data);

  logger.info(`${LOG_PREFIX} Latest search queries`, { latestSearchQueriesData: latestSearchQueries });

  if (!latestSearchQueries.success) {
    logger.error(
      `${LOG_PREFIX} Invalid db query response structure: ${JSON.stringify(latestSearchQueriesResponse.data)}`,
    );
    rollbar.error(
      `${LOG_PREFIX} Invalid db query response structure: ${JSON.stringify(latestSearchQueriesResponse.data)}`,
    );
    res.status(400).json({ error: "Invalid db query response structure", details: latestSearchQueries.error });
    return;
  }

  /**
   * Take this structured data and turn it into a markdown table
   *   [
   *     {
   *       "query_string": "button",
   *       "count": 2
   *     }
   *   ]
   */

  const queries = latestSearchQueries.data.map((query) => query.query_string);
  const counts = latestSearchQueries.data.map((query) => query.count.toString());

  const maxQueryLength = Math.max(...queries.map((query) => query.length), "Query".length);
  const maxCountLength = Math.max(...counts.map((count) => count.length), "Count".length);

  let markdownTable = `| ${"Search Term".padEnd(maxQueryLength)} | ${"Count".padEnd(maxCountLength)} |\n| ${"-".repeat(
    maxQueryLength,
  )} | ${"-".repeat(maxCountLength)} |\n`;

  for (const query of latestSearchQueries.data) {
    markdownTable += `| ${query.query_string.padEnd(maxQueryLength)} | ${query.count
      .toString()
      .padEnd(maxCountLength)} |\n`;
  }

  logger.info(`${LOG_PREFIX} Markdown table`, { markdownTable });

  const slackMessage =
    `:mag: *Top Search Queries of the Past Week on Paste Docsite* :mag:\n\nThe search feature on the PasteDoc site is a great resource when you're stuck. Check out what your Paste Mates have been searching for most over the past 7 days.\n\n\`\`\`\n${markdownTable}`.concat(
      "\n```",
    );

  try {
    const postToSlackResponse = await fetch(`${protocol}://${host}/api/post-to-slack`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: slackMessage,
        channelID: slackChannelID,
      }),
    });

    logger.info(`${LOG_PREFIX} Posted to Slack`, { postToSlackResponse });
    // return the data to the client
    res.status(200).json({
      latestSearchQueriesData: latestSearchQueries,
    });
  } catch (error) {
    logger.error(`${LOG_PREFIX} Error posting to Slack`, { error });
    rollbar.error(`${LOG_PREFIX} Error posting to Slack`, { error });
    res.status(500).json({
      error: "Error posting to Slack",
      details: error,
    });
  }
}
