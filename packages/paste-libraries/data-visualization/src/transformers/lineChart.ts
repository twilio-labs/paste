import { LineChartConfig } from "../types";
import { handleBaseChartOptionsFormatting } from "./baseFormatter";

export const handleLineOptions = ({
  series,
  type,
  zoomingType,
  panningType,
  ...baseChartProps
}: LineChartConfig): Highcharts.Options => {
  return {
    series: series.map((s) => ({
      ...s,
      type,
    })),
    plotOptions: {
      series: {
        stickyTracking: false,
      },
    },
    ...handleBaseChartOptionsFormatting({
      ...baseChartProps,
      type,
      zoomingType,
      panningType,
    }),
  };
};
