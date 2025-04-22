import { ChartTypeOptions, ColumnChartConfig, LineChartConfig } from "../types";
import { handleBaseChartOptionsFormatting } from "./baseFormatter";
import { handleColumnOptions } from "./columnChart";
import { handleLineOptions } from "./lineChart";

const handleDefaultOptions = ({ chart, series, type, ...baseChartProps }: ChartTypeOptions): Highcharts.Options => {
  return {
    // @ts-ignore mentions incompatible types but is correct
    series: series.map((s) => ({ ...s, type })),
    ...handleBaseChartOptionsFormatting({ ...baseChartProps, type }),
  };
};

export const transformToHighchartsOptions = (options: ChartTypeOptions): Highcharts.Options => {
  switch (options.type) {
    case "line":
      return handleLineOptions(options as LineChartConfig);
    //   case "area":
    //     return handleAreaOptions(options as AreaChartConfig);
    case "column":
      return handleColumnOptions(options as ColumnChartConfig);
    default: {
      return handleDefaultOptions(options);
    }
  }
};
