import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface WidthProps {
  width?: keyof ThemeShape['widths'] | Array<keyof ThemeShape['widths']>;
}

export interface MinWidthProps {
  minWidth?: keyof ThemeShape['minWidths'] | Array<keyof ThemeShape['minWidths']>;
}

export interface MaxWidthProps {
  maxWidth?: keyof ThemeShape['maxWidths'] | Array<keyof ThemeShape['maxWidths']>;
}

export interface HeightProps {
  height?: keyof ThemeShape['heights'] | Array<keyof ThemeShape['heights']>;
}

export interface MinHeightProps {
  minHeight?: keyof ThemeShape['minHeights'] | Array<keyof ThemeShape['minHeights']>;
}

export interface MaxHeightProps {
  maxHeight?: keyof ThemeShape['maxHeights'] | Array<keyof ThemeShape['maxHeights']>;
}

export interface SizingProps
  extends WidthProps,
    MinWidthProps,
    MaxWidthProps,
    HeightProps,
    MinHeightProps,
    MaxHeightProps {}
