import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as Highcharts from "highcharts";
import * as React from "react";

import { ChartContext } from "./ChartContext";

interface BaseChartProviderProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'CHART_PROVIDER'
   * @type {BoxProps['element']}
   * @memberof ChartProviderProps
   */
  element?: BoxProps["element"];
}

interface HighchartsOptions extends BaseChartProviderProps {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default null
   * @type {BoxProps['element']}
   * @memberof ChartProviderProps
   */
  highchartsOptions: Highcharts.Options;
  pasteOptions?: never;
}

export type ChartProviderProps = HighchartsOptions;

const ChartProvider = React.forwardRef<HTMLDivElement, ChartProviderProps>(
  ({ element = "CHART_PROVIDER", children, highchartsOptions, ...props }, ref) => {
    const [chart, setChart] = React.useState<Highcharts.Chart>();
    const [chartRef, setChartRef] = React.useState<HTMLElement>();
    const [chartType, setChartType] = React.useState<string>("");

    const modifiedOptions: Highcharts.Options = Highcharts.merge(highchartsOptions, {
      chart: {
        events: {
          /**
           * Any events we want to fire on changes to charts should be handled here
           *
           * Keeping track of chart type is a good way to trigger rerenders of other components inside ChartProvider
           * There is an issue with useEffects on the chart object change only because React only does shallow
           * comparisons and considers them the same object. Picking a value that is garuanteed to change
           * between renders/types will overcome this.
           */

          // eslint-disable-next-line object-shorthand
          redraw: function (this) {
            // eslint-disable-next-line react/no-this-in-sfc
            setChartType(this.options?.chart?.type || "");
          },
        },
      },
    } as Highcharts.Options);

    return (
      <Box {...safelySpreadBoxProps(props)} ref={ref} element={element} position="relative">
        <ChartContext.Provider
          value={{
            chart,
            setChart,
            chartRef,
            setChartRef,
            chartType,
            options: modifiedOptions,
          }}
        >
          {children}
        </ChartContext.Provider>
      </Box>
    );
  },
);

ChartProvider.displayName = "ChartProvider";

export { ChartProvider };
