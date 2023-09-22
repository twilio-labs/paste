import pick from "lodash/pick";

const SIZING_STYLE = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak",
] as const;

type SizingProps = Extract<typeof SIZING_STYLE[number], keyof CSSStyleDeclaration>;

type SizingStyle = Pick<CSSStyleDeclaration, SizingProps>;

export type SizingData = {
  sizingStyle: SizingStyle;
  paddingSize: number;
  borderSize: number;
};

const isIE = typeof document !== "undefined" ? Boolean((document.documentElement as any).currentStyle) : false;

export const getSizingData = (node: HTMLElement): SizingData | null => {
  const style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  const sizingStyle = pick(style, SIZING_STYLE);
  const {
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderTopWidth,
    boxSizing,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    width,
  } = sizingStyle;

  // probably node is detached from DOM, can't read computed dimensions
  if (boxSizing === "") {
    return null;
  }

  /*
   * IE (Edge has already correct behaviour) returns content width as computed width
   * so we need to add manually padding and border widths
   */
  if (isIE && boxSizing === "border-box") {
    const widthPxValue =
      Number.parseFloat(width) +
      Number.parseFloat(borderRightWidth) +
      Number.parseFloat(borderLeftWidth) +
      Number.parseFloat(paddingRight) +
      Number.parseFloat(paddingLeft);

    sizingStyle.width = `${widthPxValue}px`;
  }

  const paddingSize = Number.parseFloat(paddingBottom) + Number.parseFloat(paddingTop);
  const borderSize = Number.parseFloat(borderBottomWidth) + Number.parseFloat(borderTopWidth);

  return {
    sizingStyle,
    paddingSize,
    borderSize,
  };
};
