import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';

export interface WidthProps {
  width?: ResponsiveValue<keyof ThemeShape['widths']>;
}

export interface MinWidthProps {
  minWidth?: ResponsiveValue<keyof ThemeShape['minWidths']>;
}

export interface MaxWidthProps {
  maxWidth?: ResponsiveValue<keyof ThemeShape['maxWidths']>;
}

export interface HeightProps {
  height?: ResponsiveValue<keyof ThemeShape['heights']>;
}

export interface MinHeightProps {
  minHeight?: ResponsiveValue<keyof ThemeShape['minHeights']>;
}

export interface MaxHeightProps {
  maxHeight?: ResponsiveValue<keyof ThemeShape['maxHeights']>;
}

export interface SizingProps
  extends WidthProps,
    MinWidthProps,
    MaxWidthProps,
    HeightProps,
    MinHeightProps,
    MaxHeightProps {}
