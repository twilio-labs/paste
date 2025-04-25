import Highcharts from "highcharts";

import { ColumnChartConfig } from "../types";
import { handleBaseChartOptionsFormatting } from "./baseFormatter";

export const handleColumnOptions = ({
  chart,
  series,
  type,
  stackingType,
  xAxisCategories,
  showDataLabels,
  showStackedLabels,
  ...baseChartProps
}: ColumnChartConfig): Highcharts.Options => {
  const { xAxis, yAxis, ...rest } = handleBaseChartOptionsFormatting({
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
          enabled: showStackedLabels,
        },
      },
      yAxis,
    ),
    ...rest,
  };
};
