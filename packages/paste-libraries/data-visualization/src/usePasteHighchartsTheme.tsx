import { ThemeContext } from "@twilio-paste/styling-library";
import type { ThemeShape } from "@twilio-paste/theme";
import merge from "deepmerge";
import type Highcharts from "highcharts";
import * as React from "react";

/**
 * A hook to apply the Paste theme to Highcharts options.
 *
 * @param {Highcharts.Options} options - options to be provided into Highcharts for rendering.
 * @returns {Highcharts.Options} optionsWithPasteTheme - Passed options with deepmerged Paste Theme
 */
export const usePasteHighchartsTheme = (options: Highcharts.Options): Highcharts.Options => {
  if (options == null) {
    throw new Error(
      `[usePasteHighchartsTheme]: Must provide highcharts options into this function. Options are deepmerged against the theme and returned for usage.`,
    );
  }

  const context = React.useContext(ThemeContext) as ThemeShape;
  if (!context) {
    throw new Error(
      "[usePasteHighchartsTheme]: must be used within the @twilio-paste/theme provider. https://paste.twilio.design/introduction/for-engineers/manual-installation#setting-up-the-theme-provider",
    );
  }

  /*
   * context.dataVisualization returns the keys sorted alphabetically, which is a problem because:
   * -1 comes before -10 comes before -2.  We want -1, -2, ... -10 (numerical sorting).
   * For this reason we need to sort the keys numerically before retrieving their values.
   */
  const colors: string[] = React.useMemo(() => {
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
    const tokenNames = Object.keys(context.dataVisualization) as Array<keyof ThemeShape["dataVisualization"]>;
    const sortedTokenNames = tokenNames.sort((a, b) => collator.compare(a, b));

    // Now we can get the color array in the correct order
    return sortedTokenNames.map((name) => context.dataVisualization[name]);
  }, [context]);

  return merge(options, {
    colors,
    chart: {
      backgroundColor: context.backgroundColors.colorBackgroundBody,
      style: {
        fontFamily: context.fonts.fontFamilyText,
      },
    },
    title: {
      style: {
        color: context.textColors.colorText,
        font: `${context.fontWeights.fontWeightBold} ${context.fontSizes.fontSize40} ${context.fonts.fontFamilyText}`,
      },
    },
    subtitle: {
      style: {
        color: context.textColors.colorTextWeak,
        font: `${context.fontSizes.fontSize20} ${context.fonts.fontFamilyText}`,
      },
    },
    legend: {
      itemStyle: {
        font: `${context.fontSizes.fontSize10} ${context.fonts.fontFamilyText}`,
        color: context.textColors.colorText,
      },
      itemHoverStyle: {
        color: context.textColors.colorTextWeak,
      },
      title: {
        style: {
          color: context.textColors.colorText,
        },
      },
    },
    xAxis: {
      lineColor: context.textColors.colorText,
      tickColor: context.textColors.colorText,
      labels: {
        style: {
          color: context.textColors.colorText,
          font: `${context.fontWeights.fontWeightMedium} ${context.fontSizes.fontSize10} ${context.fonts.fontFamilyText}`,
        },
      },
      title: {
        style: {
          color: context.textColors.colorText,
          font: `${context.fontWeights.fontWeightSemibold} ${context.fontSizes.fontSize30} ${context.fonts.fontFamilyText}`,
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: context.textColors.colorText,
          font: `${context.fontWeights.fontWeightMedium} ${context.fontSizes.fontSize10} ${context.fonts.fontFamilyText}`,
        },
      },
      title: {
        style: {
          color: context.textColors.colorText,
          font: `${context.fontWeights.fontWeightSemibold} ${context.fontSizes.fontSize30} ${context.fonts.fontFamilyText}`,
        },
      },
    },
    labels: {
      style: {
        color: context.textColors.colorText,
      },
    },
    tooltip: {
      
      backgroundColor: context.backgroundColors.colorBackgroundBody,
      borderColor: context.borderColors.colorBorderWeaker,
      borderWidth: context.borderWidths.borderWidth10,
      borderRadius: context.radii.borderRadius30.replace("px", ""),
      padding: 12,
      style: {
        color: context.textColors.colorText,
      },
    },
    credits: {
      style: {
        color: context.textColors.colorTextWeaker,
      },
    },
    plotOptions: {
      series: {
        borderColor: "transparent",
      },
    },
  });
};
