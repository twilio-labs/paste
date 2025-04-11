import type { Meta, StoryFn } from "@storybook/react";
import { Stack } from "@twilio-paste/stack";
import * as React from "react";
/* eslint-enable */

import { ChartProvider } from "@twilio-paste/chart-provider";
import { BaseChart } from "./components/BaseChart";
import { lineChartOptions } from "./options/lineChartOptions";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Libraries/data-visualization/base-chart",
  parameters: {
    chromatic: { disableSnapshot: true },
    a11y: {
      // no need to a11y check composition of a11y checked components
      disable: true,
    },
  },
} as Meta;

export const HighchartsOptions: StoryFn = () => {
  return (
    <Stack orientation="vertical" spacing="space100">
      <ChartProvider highchartsOptions={{ chart: { type: "line" }, series: lineChartOptions.series }}>
        <BaseChart />
      </ChartProvider>
    </Stack>
  );
};
