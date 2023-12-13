/* eslint-disable camelcase */
import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";
import Rollbar from "rollbar";

import { logger } from "../../functions-utils/logger";
import { perfMetricSchema } from "../../schema/perf-metric";

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY;

const LOG_PREFIX = "[/api/create-component-perf-metric]:";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void | Response> {
  logger.info(`${LOG_PREFIX} Incoming request`);

  if (!supabaseUrl || !supabaseServiceKey) {
    logger.error(`${LOG_PREFIX} Missing SUPABASE_URL or SUPABASE_KEY environment variable`);
    rollbar.error(`${LOG_PREFIX} Missing SUPABASE_URL or SUPABASE_KEY environment variable`);
    res.status(500).json({ error: "Missing SUPABASE_URL or SUPABASE_KEY environment variable" });
    return;
  }

  const requestBody = JSON.parse(req.body);

  if (!requestBody) {
    logger.error(`${LOG_PREFIX} Missing request body`);
    rollbar.error(`${LOG_PREFIX} Missing request body`);
    res.status(400).json({ error: "Missing request body" });
    return;
  }

  logger.info(`${LOG_PREFIX} Request body: ${JSON.stringify(requestBody)}`);

  const perfMetric = perfMetricSchema.safeParse(requestBody);

  if (!perfMetric.success) {
    logger.error(`${LOG_PREFIX} Invalid request body: ${JSON.stringify(requestBody)}`);
    rollbar.error(`${LOG_PREFIX} Invalid request body: ${JSON.stringify(requestBody)}`);
    res.status(400).json({ error: "Invalid request body", details: perfMetric.error });
    return;
  }

  const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);
  const { error } = await supabaseClient.rpc("upsert_story_and_create_story_render", {
    _storybook_id: perfMetric.data.id,
    _story_name: perfMetric.data.kind,
    _actual_duration: perfMetric.data.actualDuration,
    _base_duration: perfMetric.data.baseDuration,
    _commit_sha: perfMetric.data.commitSha,
    _core_version: perfMetric.data.coreVersionNumber,
    _phase: perfMetric.data.phase,
  });

  if (error) {
    logger.error(`${LOG_PREFIX} Error upserting story and creating story render`, { error });
    rollbar.error(`${LOG_PREFIX} Error upserting story and creating story render`, { error });
    res.status(500).json({ error: "Error upserting story and creating story render", details: error });
    return;
  }

  res.status(200).json({ success: true, perfMetric: perfMetric.data });
}
/* eslint-enable camelcase */
