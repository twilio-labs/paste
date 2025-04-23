import type { Meta, StoryFn } from "@storybook/react";
import { ChartProvider } from "@twilio-paste/chart-provider";
import { Stack } from "@twilio-paste/stack";
import * as React from "react";

import { ColumnChartConfig } from "../src";
import { BaseChart } from "./components/BaseChart";
import { usdEurData } from "./data/usdEurData";
import { columnChartData } from "./supported-data/column";
import { lineSeries } from "./supported-data/line";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Libraries/data-visualization/supported-charts",
  parameters: {
    chromatic: { disableSnapshot: true },
    a11y: {
      // no need to a11y check composition of a11y checked components
      disable: true,
    },
  },
} as Meta;

export const Line: StoryFn = () => {
  return (
    <Stack orientation="vertical" spacing="space100">
      <ChartProvider
        options={{
          type: "line",
          series: lineSeries,
          title: {
            text: "Solar Employment Growth by Sector, 2010-2016",
          },
        }}
      >
        <BaseChart />
      </ChartProvider>
    </Stack>
  );
};

export const Column: StoryFn = () => {
  return (
    <Stack orientation="vertical" spacing="space100">
      <ChartProvider
        options={{
          type: "column",
          series: columnChartData,
          title: {
            text: "Fruit popularity",
          },
        }}
      >
        <BaseChart />
      </ChartProvider>
    </Stack>
  );
};

export const ColumnDefinedXAxisCategories: StoryFn = () => {
  return (
    <Stack orientation="vertical" spacing="space100">
      <ChartProvider
        options={{
          type: "column",
          series: columnChartData,
          title: {
            text: "Fruit popularity",
          },
          xAxisCategories: ["2020", "2021", "2022", "2023", "2024", "2025"],
        }}
      >
        <BaseChart />
      </ChartProvider>
    </Stack>
  );
};

export const LineZoomPanningTimeSeries: StoryFn = () => {
  return (
    <Stack orientation="vertical" spacing="space100">
      <ChartProvider
        options={{
          type: "line",
          series: [{ data: usdEurData, name: "USD to EUR" }],
          title: {
            text: "USD to EUR exchange rate",
          },
          subtitle: {
            text: "Zooming and panning enabled - use drag to zoom and shift+drag to pan",
          },
          isXTimeAxis: true,
          zoomingType: "xy",
          panningType: "xy",
          xAxisTitle: {
            text: "Date",
          },
          yAxisTitle: {
            text: "Exchange rate",
          },
        }}
      >
        <BaseChart />
      </ChartProvider>
    </Stack>
  );
};

export const StackedColumn: StoryFn = () => {
  return (
    <Stack orientation="vertical" spacing="space100">
      <ChartProvider
        options={{
          type: "column",
          series: columnChartData,
          title: {
            text: "Fruit popularity - percent",
          },
          stackingType: "percent",
        }}
      >
        <BaseChart />
      </ChartProvider>
      <ChartProvider
        options={{
          type: "column",
          series: columnChartData,
          title: {
            text: "Fruit popularity - normal",
          },
          stackingType: "normal",
        }}
      >
        <BaseChart />
      </ChartProvider>
    </Stack>
  );
};

export const StackedColumnSwitchType: StoryFn = () => {
  const [stackingType, setStackingType] = React.useState<ColumnChartConfig["stackingType"]>("normal");

  return (
    <Stack orientation="vertical" spacing="space100">
      <button
        type="button"
        onClick={() => {
          setStackingType((prev) => (prev === "normal" ? "percent" : "normal"));
        }}
      >
        Switch stacking type
      </button>
      <ChartProvider
        options={{
          type: "column",
          series: columnChartData,
          title: {
            text: "Fruit popularity",
          },
          stackingType,
        }}
      >
        <BaseChart />
      </ChartProvider>
    </Stack>
  );
};

export const Area: StoryFn = () => {
  return (
    <Stack orientation="vertical" spacing="space100">
      <ChartProvider
        options={{
          type: "area",
          series: lineSeries,
          title: {
            text: "Solar Employment Growth by Sector, 2010-2016",
          },
        }}
      >
        <BaseChart />
      </ChartProvider>
    </Stack>
  );
};
