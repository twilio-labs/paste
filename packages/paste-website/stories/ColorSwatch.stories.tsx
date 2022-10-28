import * as React from 'react';

import {ColorSwatch, ColorSwatchText} from '../src/components/color-swatch/ColorSwatch';
import {ColorGradient, ColorGradientRainbow} from '../src/components/color-swatch/ColorGradient';
import {DarkModeContext} from '../src/context/DarkModeContext';

export const BasicBackgroundColorSwatch = (): React.ReactNode => (
  <ColorSwatch backgroundColor="colorBackgroundSuccessWeakest" />
);

export const BasicBorderColorSwatch = (): React.ReactNode => <ColorSwatch borderColor="colorBorder" />;
export const BasicTextColorSwatch = (): React.ReactNode => <ColorSwatch color="colorText" />;

export const SwatchWithText = (): React.ReactNode => (
  <ColorSwatch backgroundColor="colorBackgroundSuccessWeakest">
    <ColorSwatchText color="colorText">colorText</ColorSwatchText>
  </ColorSwatch>
);

export const GrayColorGradient = (): React.ReactNode => (
  <DarkModeContext.Provider value={{theme: 'default'}}>
    <ColorGradient aliasPrefix="palette-gray" />
  </DarkModeContext.Provider>
);

export const FullColorGradient = (): React.ReactNode => (
  <DarkModeContext.Provider value={{theme: 'default'}}>
    <ColorGradientRainbow />
  </DarkModeContext.Provider>
);

export default {
  title: 'Website/ColorSwatch',
};
