import {DefaultTheme} from '@twilio-paste/theme';
import {propValidator} from './utils/propValidator';

// Tokens
const WidthOptions = ['100%', '100vw', 'auto', ...Object.keys(DefaultTheme.widths)];
const MinWidthOptions = ['100%', '100vw', 'auto', ...Object.keys(DefaultTheme.minWidths)];
const MaxWidthOptions = ['100%', '100vw', 'auto', ...Object.keys(DefaultTheme.maxWidths)];
const HeightOptions = ['100%', '100vh', 'auto', ...Object.keys(DefaultTheme.heights)];
const MinHeightOptions = ['100%', '100vh', 'auto', ...Object.keys(DefaultTheme.minHeights)];
const MaxHeightOptions = ['100%', '100vh', 'auto', ...Object.keys(DefaultTheme.maxHeights)];
const IconSizeOptions = Object.keys(DefaultTheme.iconSizes);

export const isWidthTokenProp = propValidator(WidthOptions);
export const isMinWidthTokenProp = propValidator(MinWidthOptions);
export const isMaxWidthTokenProp = propValidator(MaxWidthOptions);
export const isHeightTokenProp = propValidator(HeightOptions);
export const isMinHeightTokenProp = propValidator(MinHeightOptions);
export const isMaxHeightTokenProp = propValidator(MaxHeightOptions);
export const isIconSizeTokenProp = propValidator(IconSizeOptions);
