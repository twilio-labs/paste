import { z } from "zod";

export const perfMetricSchema = z.object({
  id: z.string(),
  kind: z.string(),
  view: z.string(),
  phase: z.string(),
  actualDuration: z.number(),
  baseDuration: z.number(),
  commitSha: z.string(),
  coreVersionNumber: z.string(),
});

export type PerfMetric = z.infer<typeof perfMetricSchema>;
