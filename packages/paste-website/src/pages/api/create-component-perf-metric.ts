/* eslint-disable camelcase */
import { createClient } from "@supabase/supabase-js";
import dogapi from "dogapi";
import type { NextApiRequest, NextApiResponse } from "next";
import Rollbar from "rollbar";

import { logger } from "../../functions-utils/logger";
import { type PerfMetric, perfMetricSchema } from "../../schema/perf-metric";

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

dogapi.initialize({
  api_key: process.env.DATADOG_API_KEY || "",
  app_key: process.env.DATADOG_APP_KEY || "",
});

const { SUPABASE_URL, SUPABASE_KEY } = process.env;
const DEPLOYMENT_ENV_TAG = process.env.ENVIRONMENT_CONTEXT !== "production" ? "env: dev" : "env: prod";
const DEFAULT_DATADOG_TAGS = [DEPLOYMENT_ENV_TAG];

const LOG_PREFIX = "[/api/create-component-perf-metric]:";

type SendMetricToDataDogShape = Partial<PerfMetric> & {
  /**
   * Name of the metric you are storing in Datadog
   *
   * @type {string}
   */
  metric: string;
  /**
   * Data point you want to store. Each point is an array of [timestamp, value]
   *
   * @type {[number, number]}
   */
  point: [number, number];
};

/**
 * Send a gauge type metric to Datadog
 *
 * @param {SendMetricToDataDogShape} {
 *   metric,
 *   point,
 *   coreVersionNumber,
 *   id,
 *   kind,
 *   phase
 * }
 */
const sendMetricToDataDog = ({ metric, point, coreVersionNumber, id, kind, phase }: SendMetricToDataDogShape): void => {
  dogapi.metric.send(
    metric,
    // @ts-expect-error typings seem to be wrong, docs clearly say to do this for timestamped points https://brettlangdon.github.io/node-dogapi/#metric-send
    [point],
    {
      metric_type: "gauge",
      tags: [
        ...DEFAULT_DATADOG_TAGS,
        `paste_core_version:${coreVersionNumber}`,
        `story_id: ${id}`,
        `story_name: ${kind}`,
        `phase: ${phase}`,
      ],
    },
    (error, result) => {
      if (error != null) {
        logger.error("datadog error:", { error });
      }
      logger.info("datadog result:", { result });
    },
  );
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void | Response> {
  logger.info(`${LOG_PREFIX} Incoming request`);

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    logger.error(`${LOG_PREFIX} Missing SUPABASE_URL or SUPABASE_KEY environment variable`);
    rollbar.error(`${LOG_PREFIX} Missing SUPABASE_URL or SUPABASE_KEY environment variable`);
    res.status(500).json({ error: "Missing SUPABASE_URL or SUPABASE_KEY environment variable" });
    return;
  }

  const requestBody = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

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

  logger.info(`${LOG_PREFIX} Valid request body: ${JSON.stringify(perfMetric.data)}`);

  logger.info(`${LOG_PREFIX} Save metric to Supabase`);

  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
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

  logger.info(`${LOG_PREFIX} Saved metric to Supabase`);

  logger.info(`${LOG_PREFIX} Save metric to Datadog`);

  try {
    // eslint-disable-next-line unicorn/prefer-date-now
    const timeStamp = parseInt(`${new Date().getTime() / 1000}`, 10);
    sendMetricToDataDog({
      metric: "ux.design_systems.paste.story_render.base_duration",
      point: [timeStamp, perfMetric.data.baseDuration],
      coreVersionNumber: perfMetric.data.coreVersionNumber,
      id: perfMetric.data.id,
      kind: perfMetric.data.kind,
      phase: perfMetric.data.phase,
    });

    sendMetricToDataDog({
      metric: "ux.design_systems.paste.story_render.actual_duration",
      point: [timeStamp, perfMetric.data.actualDuration],
      coreVersionNumber: perfMetric.data.coreVersionNumber,
      id: perfMetric.data.id,
      kind: perfMetric.data.kind,
      phase: perfMetric.data.phase,
    });

    logger.info("Saved metric to Datadog", { savedMetric: perfMetric.data });
  } catch (error_) {
    logger.error("error sending metric to datadog", { err: error_ });
    rollbar.error("error sending metric to datadog", { err: error_ });
    res.status(500).json({ error: "Error sending metric to datadog", details: error_ });
  }

  res.status(200).json({ success: true, perfMetric: perfMetric.data });
}
/* eslint-enable camelcase */
