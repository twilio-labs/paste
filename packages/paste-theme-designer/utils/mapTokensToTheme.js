export const mapTokensToTheme = ({
  boxShadows,
  sizings,
  spacings,
  backgroundColors,
  borderColors,
  textColors,
  colors,
  ...tokens
}) => {
  const breakpoints = [sizings.size40, sizings.size100, sizings.size120];
  return {
    ...tokens,
    breakpoints, // TODO fixme
    shadows: boxShadows,
    colors: {
      ...backgroundColors,
      ...borderColors,
      ...textColors,
      ...colors,
    },
    widths: sizings,
    maxWidths: sizings,
    minWidths: sizings,
    heights: sizings,
    maxHeights: sizings,
    minHeights: sizings,
    sizes: sizings,
    iconSizes: {
      sizeIcon10: sizings.sizeIcon10,
      sizeIcon20: sizings.sizeIcon20,
      sizeIcon30: sizings.sizeIcon30,
      sizeIcon40: sizings.sizeIcon40,
      sizeIcon50: sizings.sizeIcon50,
      sizeIcon60: sizings.sizeIcon60,
      sizeIcon70: sizings.sizeIcon70,
      sizeIcon80: sizings.sizeIcon80,
      sizeIcon90: sizings.sizeIcon90,
      sizeIcon100: sizings.sizeIcon100,
      sizeIcon110: sizings.sizeIcon110,
    },
    space: spacings,
  };
};
