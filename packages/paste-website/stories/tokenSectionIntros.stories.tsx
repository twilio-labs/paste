import type * as React from "react";

import { sectionIntros } from "../src/components/tokens-list/sectionIntros";

export default {
  title: "Website/Token Section Intros",
};

export const BackgroundColorsIntro = (): React.ReactNode => {
  return sectionIntros["background-colors"];
};

export const BorderColorsIntro = (): React.ReactNode => {
  return sectionIntros["border-colors"];
};

export const BoxShadowsIntro = (): React.ReactNode => {
  return sectionIntros["box-shadows"];
};

export const DataVisualizationIntro = (): React.ReactNode => {
  return sectionIntros["data-visualization"];
};

export const FontSizesIntro = (): React.ReactNode => {
  return sectionIntros["font-sizes"];
};

export const TextColorsIntro = (): React.ReactNode => {
  return sectionIntros["text-colors"];
};

export const ZIndicesIntro = (): React.ReactNode => {
  return sectionIntros["z-indices"];
};
