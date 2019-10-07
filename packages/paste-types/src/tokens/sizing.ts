import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface WidthProps {
  width?: keyof ThemeShape['widths'];
}

export interface MinWidthProps {
  minWidth?: keyof ThemeShape['minWidths'];
}

export interface MaxWidthProps {
  maxWidth?: keyof ThemeShape['maxWidths'];
}

export interface HeightProps {
  height?: keyof ThemeShape['heights'];
}

export interface MinHeightProps {
  minHeight?: keyof ThemeShape['heights'];
}

export interface MaxHeightProps {
  maxHeight?: keyof ThemeShape['heights'];
}

export interface SizingProps
  extends WidthProps,
    MinWidthProps,
    MaxWidthProps,
    HeightProps,
    MinHeightProps,
    MaxHeightProps {}
