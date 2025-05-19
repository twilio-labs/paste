import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { transformToHighchartsOptions } from "@twilio-paste/data-visualization-library";
import type { ChartTypeOptions } from "@twilio-paste/data-visualization-library";
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
  options?: never;
}

interface ChartOptions extends BaseChartProviderProps {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default null
   * @type {BoxProps['element']}
   * @memberof ChartProviderProps
   */
  highchartsOptions?: never;
  options: ChartTypeOptions;
}

export type ChartProviderProps = HighchartsOptions | ChartOptions;

const ChartProvider = React.forwardRef<HTMLDivElement, ChartProviderProps>(
  ({ element = "CHART_PROVIDER", children, highchartsOptions, options, ...props }, ref) => {
    const [chart, setChart] = React.useState<Highcharts.Chart>();
    const [chartRef, setChartRef] = React.useState<HTMLElement>();

    if (highchartsOptions && !options) {
      return (
        <Box {...safelySpreadBoxProps(props)} ref={ref} element={element} position="relative">
          <ChartContext.Provider
            value={{
              chart,
              setChart,
              chartRef,
              setChartRef,
              options: highchartsOptions,
            }}
          >
            {children}
          </ChartContext.Provider>
        </Box>
      );
    }

    const transformedOptions = transformToHighchartsOptions(options);

    return (
      <Box {...safelySpreadBoxProps(props)} ref={ref} element={element} position="relative">
        <ChartContext.Provider
          value={{
            chart,
            setChart,
            chartRef,
            setChartRef,
            options: transformedOptions,
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
