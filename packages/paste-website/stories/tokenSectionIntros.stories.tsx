import * as React from 'react';
import {sectionIntros} from '../src/components/tokens-list/sectionIntros';

export default {
  title: 'Website/Token Section Intros',
};

export const BackgroundColorsIntro = (): React.ReactNode => {
  return sectionIntros['background-colors'];
};

export const BorderColorsIntro = (): React.ReactNode => {
  return sectionIntros['border-colors'];
};

export const BorderWidthsIntro = (): React.ReactNode => {
  return sectionIntros['border-widths'];
};

export const BoxShadowsIntro = (): React.ReactNode => {
  return sectionIntros['box-shadows'];
};

export const ColorsIntro = (): React.ReactNode => {
  return sectionIntros.colors;
};

export const FontsIntro = (): React.ReactNode => {
  return sectionIntros.fonts;
};

export const FontSizesIntro = (): React.ReactNode => {
  return sectionIntros['font-sizes'];
};

export const FontWeightsIntro = (): React.ReactNode => {
  return sectionIntros['font-weights'];
};

export const LineHeightsIntro = (): React.ReactNode => {
  return sectionIntros['line-heights'];
};

export const RadiiIntro = (): React.ReactNode => {
  return sectionIntros.radii;
};

export const SizingsIntro = (): React.ReactNode => {
  return sectionIntros.sizings;
};

export const SpacingsIntro = (): React.ReactNode => {
  return sectionIntros.spacings;
};

export const TextColorsIntro = (): React.ReactNode => {
  return sectionIntros['text-colors'];
};

export const ZIndicesIntro = (): React.ReactNode => {
  return sectionIntros['z-indices'];
};
