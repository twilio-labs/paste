import Highcharts from "highcharts";

import { ColumnChartConfig } from "../types";
import { handleBaseChartOptionsFormatting } from "./baseFormatter";

export const handleColumnOptions = ({
  chart,
  series,
  type,
  stackingType,
  showDataLabels,
  ...baseChartProps
}: ColumnChartConfig): Highcharts.Options => {
  const { yAxis, ...rest } = handleBaseChartOptionsFormatting({
    ...baseChartProps,
    type,
  });

  return {
    series: series.map((s) => ({ ...s, type })),
    plotOptions: {
      column: {
        stacking: stackingType,
        dataLabels: {
          enabled: showDataLabels,
        },
      },
    },
    yAxis: Highcharts.merge(
      {
        stackLabels: {
          enabled: showDataLabels,
        },
      },
      yAxis,
    ),
    ...rest,
  };
};
