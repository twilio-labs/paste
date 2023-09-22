// https://styled-system.com/api/#grid-layout
/*
 * NOTE:
 * `gridGap`, `gridColumnGap`, `gridRowGap` are excluded as
 * `rowGap` and `columnGap` are already defined elsewhere and used
 * in our system
 */
import type { Properties } from 'csstype';
import type { ResponsiveValue } from '@twilio-paste/styling-library';

// CSS native
export type GridRowOptions = Properties['gridRow'];
export type GridColumnOptions = Properties['gridColumn'];
export type GridAutoFlowOptions = Properties['gridAutoFlow'];
export type GridAutoColumnsOptions = Properties['gridAutoColumns'];
export type GridAutoRowsOptions = Properties['gridAutoRows'];
export type GridTemplateColumnsOptions = Properties['gridTemplateColumns'];
export type GridTemplateRowsOptions = Properties['gridTemplateRows'];
export type GridTemplateAreasOptions = Properties['gridTemplateAreas'];
export type GridAreaOptions = Properties['gridArea'];

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
  gridRow?: GridRow;
  gridColumn?: GridColumn;
  gridAutoFlow?: GridAutoFlow;
  gridAutoColumns?: GridAutoColumns;
  gridAutoRows?: GridAutoRows;
  gridTemplateColumns?: GridTemplateColumns;
  gridTemplateRows?: GridTemplateRows;
  gridTemplateAreas?: GridTemplateAreas;
  gridArea?: GridArea;
}
