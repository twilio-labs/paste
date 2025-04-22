import { ThemeContext } from "@twilio-paste/styling-library";
import { ThemeShape } from "@twilio-paste/theme";
import React from "react";

import { BaseChartOptions } from "../types";

export const handleBaseChartOptionsFormatting = ({
  title,
  subtitle,
  isXTimeAxis,
  showLegend = true,
  zoomingType,
  panningType,
  chart,
  type,
  pointFormatter: userPointFormatter,
  ...rest
}: BaseChartOptions): Highcharts.Options => {
  const context = React.useContext(ThemeContext) as ThemeShape;

  return {
    chart: {
      resetZoomButton: {
        theme: {
          style: {
            display: "block",
            fontFamily: context.fonts.fontFamilyText,
          },
        },
      },
      type,
      zoomType: zoomingType || undefined,
      panKey: "shift",
      panning: {
        enabled: Boolean(panningType),
        type: panningType,
      },
      ...chart,
    },
    title: {
      text: title?.text,
      style: {
        display: title?.visible ? "block" : "none",
      },
    },
    subtitle: {
      text: subtitle?.text,
      style: {
        display: title?.visible ? "block" : "none",
      },
    },
    xAxis: {
      type: isXTimeAxis ? "datetime" : undefined,
    },
    legend: {
      enabled: showLegend,
    },
    tooltip: {
      backgroundColor: context.backgroundColors.colorBackgroundBodyInverse,
      borderColor: context.borderColors.colorBorderInverse,
      borderWidth: context.borderWidths.borderWidth10,
      borderRadius: context.radii.borderRadius30.replace("px", ""),
      padding: 12,
      useHTML: Boolean(userPointFormatter),
      style: {
        fontFamily: context.fonts.fontFamilyText,
        color: context.textColors.colorTextInverse,
        fontSize: context.fontSizes.fontSize30,
      },
      pointFormatter: userPointFormatter
        ? function (this) {
            return userPointFormatter(this);
          }
        : undefined,
    },
    ...rest,
  };
};
