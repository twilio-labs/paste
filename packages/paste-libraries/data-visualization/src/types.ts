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
export type ColumnSeries = Pick<
  Highcharts.SeriesColumnOptions,
  "data" | "color" | "accessibility" | "events" | "name" | "stacking"
>;

type ChartConfig = Pick<Highcharts.ChartOptions, "animation" | "height" | "width">;

type ChartAccessibilityConfig = Pick<Highcharts.AccessibilityOptions, "description" | "point" | "linkedDescription" | "series">;

interface TitleConfig extends Pick<Highcharts.TitleOptions, "text"> {
  hide?: boolean;
}


export interface BaseChartOptions {
  chart?: ChartConfig;
  accessibility?: ChartAccessibilityConfig;
  title?: TitleConfig;
  subtitle?: TitleConfig;
  type: SupportedCharts;
  isXTimeAxis?: boolean;
  showLegend?: boolean;
  zoomingType?: Highcharts.ChartOptions["zoomType"];
  panningType?: Highcharts.ChartOptions["zoomType"];
  pointFormatter?: (point: Highcharts.Point) => string;
  yAxisTitle?: TitleConfig;
  xAxisTitle?: TitleConfig;
  enableCredits?: boolean;
  isAnimated?: boolean;
  xAxisCategories?: Highcharts.XAxisOptions["categories"];
}

export interface LineChartConfig extends BaseChartOptions {
  series: LineSeries[];
  type: "line";
}

export interface ColumnChartConfig extends BaseChartOptions {
  series: ColumnSeries[];
  type: "column";
  stackingType?: "normal" | "percent";
  showStackedLabels?: boolean;
  showDataLabels?: boolean;
}

export interface AreaChartConfig extends BaseChartOptions {
  series: AreaSeries[];
  type: "area";
}

export type ChartTypeOptions = LineChartConfig | ColumnChartConfig | AreaChartConfig;
