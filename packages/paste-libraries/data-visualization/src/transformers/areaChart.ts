import { AreaChartConfig } from "../types";
import { handleBaseChartOptionsFormatting } from "./baseFormatter";

export const handleAreaOptions = ({
  series,
  type,
  zoomingType,
  panningType,
  ...baseChartProps
}: AreaChartConfig): Highcharts.Options => {
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
