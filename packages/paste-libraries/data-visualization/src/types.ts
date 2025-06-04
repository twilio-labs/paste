import * as Highcharts from "highcharts";

type SupportedCharts = "line" | "column" | "area";

/**
 * The object structure required for use as a `series` prop in a chart with the type `line`.
 */
export type LineSeries = Pick<
  Highcharts.SeriesLineOptions,
  "data" | "color" | "accessibility" | "dashStyle" | "lineWidth" | "marker" | "name"
>;

/**
 * The object structure required for use as a `series` prop in a chart with the type `area`.
 */
export type AreaSeries = Pick<Highcharts.SeriesAreaOptions, "data" | "color" | "accessibility" | "name">;

/**
 * The object structure required for use as a `series` prop in a chart with the type `column`.
 */
export type ColumnSeries = Pick<Highcharts.SeriesColumnOptions, "data" | "color" | "accessibility" | "events" | "name">;

export type ChartConfig = Pick<Highcharts.ChartOptions, "animation" | "height" | "width">;

type ChartAccessibilityConfig = Pick<
  Highcharts.AccessibilityOptions,
  "description" | "point" | "linkedDescription" | "series"
>;

interface TitleConfig extends Pick<Highcharts.TitleOptions, "text"> {
  hide?: boolean;
}

export interface BaseChartOptions {
  /**
   * Sets metadata for the chart such as whether it is animated, the height and width of the chart, and other chart options.
   */
  chart?: ChartConfig;
  /**
   * Sets global accessiblity options such as formatting the point and series text that is read to users when they focus on elements.
   */
  accessibility?: ChartAccessibilityConfig;
  /**
   * Configure the title of the chart. Optionall hide the title too. The purpose of setting text but hiding the title allows the
   * title to still be included in any chart descritions read by screen readers.
   */
  title?: TitleConfig;
  /**
   * Configure the sub title of the chart. Optionall hide the sub title too. The purpose of setting text but hiding the sub title allows the
   * sub title to still be included in any chart descritions read by screen readers.
   */
  subtitle?: TitleConfig;
  /**
   * The type of chart to render. This will determine what other chart specfic options are available.
   */
  type: SupportedCharts;
  /**
   * Render the X axis as a datetime.
   */
  isXTimeAxis?: boolean;
  /**
   * Whether to show the native legend provided by Highcharts.
   */
  showLegend?: boolean;
  /**
   * The type of zooming to enable on the chart. This will determine whether users can zoom in the x, y or both axis.
   */
  zoomingType?: Highcharts.ChartOptions["zoomType"];
  /**
   * The type of panning to enable on the chart allowing users to move the region currently zoomed in on.
   * This will determine whether users can pan in the x, y or both axis.
   */
  panningType?: Highcharts.ChartOptions["zoomType"];
  /**
   * A function that formats the point text for Highcharts native tooltips.
   */
  pointFormatter?: (point: Highcharts.Point) => string;
  /**
   * Configure the y axis of the chart. Optionall hide the y axis too. The purpose of setting text but hiding the y axis allows the
   * y axis to still be included in any chart descritions read by screen readers.
   */
  yAxisTitle?: TitleConfig;
  /**
   * Configure the x axis of the chart. Optionall hide the x axis too. The purpose of setting text but hiding the x axis allows the
   * x axis to still be included in any chart descritions read by screen readers.
   */
  xAxisTitle?: TitleConfig;
  /**
   * Controls the display of teh watermark in the bottom right of the chart accrediting Highcharts. Not needed for projects with a license and disbaled by default.
   *
   * @default false
   */
  enableCredits?: boolean;
  /**
   * Controls whether the chart is animated.
   *
   * @default true
   */
  isAnimated?: boolean;
  /**
   * The data to be displayed on the x axis labels. This is useful when you do not have the x plot data in your series but need to set the tick labels on teh x axis.
   */
  xAxisCategories?: Highcharts.XAxisOptions["categories"];
}

export interface LineChartConfig extends BaseChartOptions {
  /**
   * The series data for a line chart.
   */
  series: LineSeries[];
  /**
   * Specifies that this is a line chart.
   */
  type: "line";
}

export interface ColumnChartConfig extends BaseChartOptions {
  /**
   * The series data for a column chart.
   */
  series: ColumnSeries[];
  /**
   * Specifies that this is a column chart.
   */
  type: "column";
  /**
   * The type of stacking to use for the column chart, whether to show percentage stacked or normal.
   */
  stackingType?: "normal" | "percent";
  /**
   * Show the number value for the column on top of the section. Works for regular and stacked variants.
   */
  showDataLabels?: boolean;
}

export interface AreaChartConfig extends BaseChartOptions {
  /**
   * The series data for an area chart.
   */
  series: AreaSeries[];
  /**
   * Specifies that this is an area chart.
   */
  type: "area";
}

export type ChartTypeOptions = LineChartConfig | ColumnChartConfig | AreaChartConfig;
