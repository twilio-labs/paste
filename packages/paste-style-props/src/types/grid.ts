import type { ResponsiveValue } from "@twilio-paste/styling-library";
// https://styled-system.com/api/#grid-layout
/*
 * NOTE:
 * `gridGap`, `gridColumnGap`, `gridRowGap` are excluded as
 * `rowGap` and `columnGap` are already defined elsewhere and used
 * in our system
 */
import type { Properties } from "csstype";

// CSS native
export type GridRowOptions = Properties["gridRow"];
export type GridColumnOptions = Properties["gridColumn"];
export type GridAutoFlowOptions = Properties["gridAutoFlow"];
export type GridAutoColumnsOptions = Properties["gridAutoColumns"];
export type GridAutoRowsOptions = Properties["gridAutoRows"];
export type GridTemplateColumnsOptions = Properties["gridTemplateColumns"];
export type GridTemplateRowsOptions = Properties["gridTemplateRows"];
export type GridTemplateAreasOptions = Properties["gridTemplateAreas"];
export type GridAreaOptions = Properties["gridArea"];

export type GridRow = ResponsiveValue<GridRowOptions>;
export type GridColumn = ResponsiveValue<GridColumnOptions>;
export type GridAutoFlow = ResponsiveValue<GridAutoFlowOptions>;
export type GridAutoColumns = ResponsiveValue<GridAutoColumnsOptions>;
export type GridAutoRows = ResponsiveValue<GridAutoRowsOptions>;
export type GridTemplateColumns = ResponsiveValue<GridTemplateColumnsOptions>;
export type GridTemplateRows = ResponsiveValue<GridTemplateRowsOptions>;
export type GridTemplateAreas = ResponsiveValue<GridTemplateAreasOptions>;
export type GridArea = ResponsiveValue<GridAreaOptions>;

export interface GridProps {
  /**
   * Responsive prop for the CSS `gridRow` property
   *
   * @type {GridRow}
   * @memberof GridProps
   */
  gridRow?: GridRow;
  /**
   * Responsive prop for the CSS `gridColumn` property
   *
   * @type {GridColumn}
   * @memberof GridProps
   */
  gridColumn?: GridColumn;
  /**
   * Responsive prop for the CSS `gridAutoFlow` property
   *
   * @type {GridAutoFlow}
   * @memberof GridProps
   */
  gridAutoFlow?: GridAutoFlow;
  /**
   * Responsive prop for the CSS `gridAutoColumns` property
   *
   * @type {GridAutoColumns}
   * @memberof GridProps
   */
  gridAutoColumns?: GridAutoColumns;
  /**
   * Responsive prop for the CSS `gridAutoRows` property
   *
   * @type {GridAutoRows}
   * @memberof GridProps
   */
  gridAutoRows?: GridAutoRows;
  /**
   * Responsive prop for the CSS `gridTemplateColumns` property
   *
   * @type {GridTemplateColumns}
   * @memberof GridProps
   */
  gridTemplateColumns?: GridTemplateColumns;
  /**
   * Responsive prop for the CSS `gridTemplateRows` property
   *
   * @type {GridTemplateRows}
   * @memberof GridProps
   */
  gridTemplateRows?: GridTemplateRows;
  /**
   * Responsive prop for the CSS `gridTemplateAreas` property
   *
   * @type {GridTemplateAreas}
   * @memberof GridProps
   */
  gridTemplateAreas?: GridTemplateAreas;
  /**
   * Responsive prop for the CSS `gridArea` property
   *
   * @type {GridArea}
   * @memberof GridProps
   */
  gridArea?: GridArea;
}
