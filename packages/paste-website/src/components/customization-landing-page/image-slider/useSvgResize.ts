import * as React from "react";

// Ratio of default image width to SVG width (width for which SVG was designed)
const widthRatio = 640 / (35 * 1.3);
// Ratio of default image height to SVG height (height for which SVG was designed)
const heightRatio = 583 / (578 * 1.3);

// this hook uses the measured container height to calculate dimensions for the SVG thumb indicator.
export const useSvgResize = (
  containerHeight: number | undefined,
  containerWidth: number | undefined,
): { svgOffset: number; svgHeight: number | undefined; svgWidth: number | undefined } => {
  const [svgHeight, setSvgHeight] = React.useState<number>(0);
  const [svgWidth, setSvgWidth] = React.useState<number>(0);

  React.useEffect(() => {
    if (typeof containerHeight === "number" && !Number.isNaN(containerHeight)) {
      setSvgHeight(containerHeight / heightRatio);
    }
  }, [containerHeight]);
  React.useEffect(() => {
    if (typeof containerWidth === "number" && !Number.isNaN(containerWidth)) {
      setSvgWidth(containerWidth / widthRatio);
    }
  }, [containerWidth]);

  // SVG offset defines the offset from the top position of the SVG that is required to center it against the images.
  const svgOffset = containerHeight ? (-1 * Math.abs(svgHeight - containerHeight)) / 2 : 0;

  return { svgOffset, svgHeight, svgWidth };
};
