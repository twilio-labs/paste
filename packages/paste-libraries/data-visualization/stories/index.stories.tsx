import type { Meta, StoryFn } from "@storybook/react";
import { Stack } from "@twilio-paste/stack";
/* eslint-disable import/no-extraneous-dependencies */
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsAccessibilityModule from "highcharts/modules/accessibility";
import * as React from "react";
/* eslint-enable */

import { applyPasteHighchartsModules, usePasteHighchartsTheme } from "../src";
import { basicAreaChartOptions } from "./options/basicAreaChartOptions";
import { columnChartOptions } from "./options/columnChartOptions";
import { lineChartOptions } from "./options/lineChartOptions";
import { lineChartWithAnnotationsOptions } from "./options/lineChartWithAnnotationsOptions";
import { pieChartOptions } from "./options/pieChartOptions";
import { timeSeriesOptions } from "./options/timeSeriesOptions";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Libraries/data-visualization",
  parameters: {
    chromatic: { disableSnapshot: true },
    a11y: {
      // no need to a11y check composition of a11y checked components
      disable: true,
    },
  },
} as Meta;

export const LineChart: StoryFn = () => {
  const themedLineChartOptions = usePasteHighchartsTheme(lineChartOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedLineChartOptions} key="chart1" />
      <HighchartsReact highcharts={Highcharts} options={lineChartOptions} key="chart2" />
    </Stack>
  );
};

export const LineChartWithAccessibility: StoryFn = () => {
  applyPasteHighchartsModules(Highcharts, HighchartsAccessibilityModule);
  const themedLineChartOptions = usePasteHighchartsTheme(lineChartOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedLineChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={lineChartOptions} />
    </Stack>
  );
};

export const LineChartWithAnnotations: StoryFn = () => {
  const themedLineChartWithAnnotationsOptions = usePasteHighchartsTheme(lineChartWithAnnotationsOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedLineChartWithAnnotationsOptions} />
      <HighchartsReact highcharts={Highcharts} options={lineChartWithAnnotationsOptions} />
    </Stack>
  );
};

export const TimeSeries: StoryFn = () => {
  const themedTimeSeriesChartOptions = usePasteHighchartsTheme(timeSeriesOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedTimeSeriesChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={timeSeriesOptions} />
    </Stack>
  );
};

export const ColumnChart: StoryFn = () => {
  const themedColumnChartOptions = usePasteHighchartsTheme(columnChartOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedColumnChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={columnChartOptions} />
    </Stack>
  );
};

export const BasicAreaChart: StoryFn = () => {
  const themedBasicAreaChartOptions = usePasteHighchartsTheme(basicAreaChartOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedBasicAreaChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={basicAreaChartOptions} />
    </Stack>
  );
};

export const PieChart: StoryFn = () => {
  const themedPieChartOptions = usePasteHighchartsTheme(pieChartOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedPieChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
    </Stack>
  );
};
