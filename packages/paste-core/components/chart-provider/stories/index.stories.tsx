import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Paragraph } from "@twilio-paste/paragraph";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import { ChartContext, ChartProvider } from "../src";
import { BaseChart } from "./BaseChart";

const lineSeries: Highcharts.SeriesLineOptions[] = [
  {
    name: "Installation",
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    type: "line",
  },
  {
    name: "Manufacturing",
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    type: "line",
  },
  {
    name: "Sales & Distribution",
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    type: "line",
  },
  {
    name: "Project Development",
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    type: "line",
  },
  {
    name: "Other",
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    type: "line",
  },
];

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/ChartProvider",
};

export const Default: StoryFn = () => {
  return (
    <ChartProvider highchartsOptions={{ chart: { type: "line" }, series: lineSeries }}>
      <BaseChart />
    </ChartProvider>
  );
};
