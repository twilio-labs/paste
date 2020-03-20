import {DefaultTheme} from '@twilio-paste/theme';
import {propValidator} from './utils/propValidator';

// Tokens
const Widths = [DefaultTheme.widths, '100%'];
const WidthOptions = Object.keys(Widths);
const MinWidthOptions = Object.keys(DefaultTheme.minWidths);
const MaxWidthOptions = Object.keys(DefaultTheme.maxWidths);
const HeightOptions = Object.keys(DefaultTheme.heights);
const MinHeightOptions = Object.keys(DefaultTheme.minHeights);
const MaxHeightOptions = Object.keys(DefaultTheme.maxHeights);
const IconSizeOptions = Object.keys(DefaultTheme.iconSizes);

export const isWidthTokenProp = propValidator(WidthOptions);
export const isMinWidthTokenProp = propValidator(MinWidthOptions);
export const isMaxWidthTokenProp = propValidator(MaxWidthOptions);
export const isHeightTokenProp = propValidator(HeightOptions);
export const isMinHeightTokenProp = propValidator(MinHeightOptions);
export const isMaxHeightTokenProp = propValidator(MaxHeightOptions);
export const isIconSizeTokenProp = propValidator(IconSizeOptions);
