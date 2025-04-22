import * as Highcharts from "highcharts";

type SupportedCharts = "line" | "column" | "pie" | "donut" | "arc" | "donut-arc" | "area";

export type LineSeries = Pick<
  Highcharts.SeriesLineOptions,
  "data" | "color" | "accessibility" | "dashStyle" | "lineWidth" | "marker" | "name"
>;

export type AreaSeries = Pick<Highcharts.SeriesAreaOptions, "data" | "color" | "accessibility" | "name">;

export type ColumnSeries = Pick<
  Highcharts.SeriesColumnOptions,
  "data" | "color" | "accessibility" | "events" | "name" | "stacking"
>;

export type PieSeries = Pick<Highcharts.SeriesPieOptions, "data" | "name">;

export interface ChartConfig extends Pick<Highcharts.ChartOptions, "animation" | "height" | "width"> {
  type?: "line";
}

export type ChartAccessibilityConfig = Pick<Highcharts.AccessibilityOptions, "description" | "point">;

interface TitleConfig extends Pick<Highcharts.TitleOptions, "text"> {
  visible?: boolean;
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
}

export interface LineChartConfig extends BaseChartOptions {
  series: LineSeries[];
  type: "line";
}

export interface ColumnChartConfig extends BaseChartOptions {
  series: ColumnSeries[];
  type: "column";
  stackingType?: "normal" | "percent";
  xAxisCategories?: Highcharts.XAxisOptions["categories"];
  showStackedLabels?: boolean;
  showDataLabels?: boolean;
}

export interface PieChartConfig extends BaseChartOptions {
  series: PieSeries[];
  showDataLabels?: boolean;
  type: "pie" | "donut" | "arc" | "donut-arc";
}

export interface AreaChartConfig extends BaseChartOptions {
  series: AreaSeries[];
  type: "area";
}

export type ChartTypeOptions = LineChartConfig | ColumnChartConfig;
