import * as Highcharts from "highcharts";
import * as React from "react";

export interface ChartContextProps {
  /**
   * The function that will be called by the HighchartsReact callback to set the chart object in the context.
   *
   * @param {Function} chart - the chart object returned from the HighchartsReact callback
   * @memberof ChartContextProps
   */
  setChart: (chart: Highcharts.Chart) => void;
  /**
   * Used to the set the reference to the chart element once it is populated
   *
   * @param {HTMLElement} ref - React.MutableRefObject.current of base chart component
   * @memberof ChartContextProps
   */
  setChartRef: (ref: HTMLElement) => void;
  /**
   * The options that will be passed to the ReactHighcharts component. It will be enriched with tracking events that wil be used by
   * other Paste components if using the ChartProvider.
   *
   * @type {Highcharts.Options}
   * @memberof ChartContextProps
   */
  options: Highcharts.Options;
  /**
   * The rendered chart returned from the HighchartsReact callback. Use this object to get the rendered properties of
   * series and points when calculating poitioning of custom elements. It can also be used to interact
   * with the chart in ways such as setting zoom levels and using chart.update to trigger changes.
   *
   * @type {Highcharts.Chart}
   * @memberof ChartContextProps
   */
  chart?: Highcharts.Chart;

  /**
   * The current reference to the base chart component. Needed for positioning custom elements relative to points.
   *
   * @type {string}
   * @memberof ChartContextProps
   */
  chartRef?: HTMLElement;
  /**
   * The current chart type. Used to trigger rerenders of other components inside ChartProvider.
   *
   * @type {string}
   * @memberof ChartContextProps
   */
  chartType?: string;
}

/**
 * Setting the default values to log errors is an alternative to throwing runtime errors that still allow engineers
 *  to debug any potential issues.
 */

export const ChartContext = React.createContext<ChartContextProps>({
  options: {},
  setChart: () => {
    // eslint-disable-next-line no-console
    console.error("setChart not implemented. Is this component wrapped in the ChartProvider component?");
  },
  setChartRef: () => {
    // eslint-disable-next-line no-console
    console.error("setChartRef not implemented. Is this component wrapped in the ChartProvider component?");
  },
});
