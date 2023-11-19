import { css } from "@twilio-paste/styling-library";
import type { CSSObject } from "@twilio-paste/styling-library";
import { useTheme } from "@twilio-paste/theme";

export const getPasteSyntaxTheme = (maxLines?: number): CSSObject => {
  const theme = useTheme();

  return css({
    'code[class*="language-"]': {
      color: "#d6deeb",
      fontFamily: "fontFamilyCode",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      wordWrap: "normal",
      lineHeight: "1.5",
      fontSize: "1em",
      MozTabSize: "4",
      OTabSize: "4",
      tabSize: "4",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
    },
    'pre[class*="language-"]': {
      color: "white",
      fontFamily: "fontFamilyCode",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      wordWrap: "normal",
      lineHeight: "1.5",
      fontSize: "1em",
      MozTabSize: "4",
      OTabSize: "4",
      tabSize: "4",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      margin: "0",
      overflow: "auto",
      background: "inherit",
      display: "-webkit-box",
      WebkitLineClamp: `${maxLines}`,
      WebkitBoxOrient: "vertical",
      width: "100%",
    },
    'pre[class*="language-"]::-moz-selection': {
      textShadow: "none",
      background: "inherit",
    },
    'pre[class*="language-"] ::-moz-selection': {
      textShadow: "none",
      background: "inherit",
    },
    'code[class*="language-"]::-moz-selection': {
      textShadow: "none",
      background: "inherit",
    },
    'code[class*="language-"] ::-moz-selection': {
      textShadow: "none",
      background: "inherit",
    },
    'pre[class*="language-"]::selection': {
      textShadow: "none",
      background: "inherit",
    },
    'pre[class*="language-"] ::selection': {
      textShadow: "none",
      background: "inherit",
    },
    'code[class*="language-"]::selection': {
      textShadow: "none",
      background: "inherit",
    },
    'code[class*="language-"] ::selection': {
      textShadow: "none",
      background: "inherit",
    },
    ':not(pre) > code[class*="language-"]': {
      color: "white",
      background: "#011627",
      padding: "0.1em",
      borderRadius: "0.3em",
      whiteSpace: "normal",
    },
    comment: {
      color: "rgb(136, 145, 170)",
      fontStyle: "italic",
    },
    linenumber: {
      color: "colorTextInverseWeak",
      fontStyle: "none",
    },
    prolog: {
      color: "rgb(99, 119, 119)",
      fontStyle: "italic",
    },
    cdata: {
      color: "rgb(99, 119, 119)",
      fontStyle: "italic",
    },
    punctuation: {
      color: "rgb(199, 146, 234)",
    },
    ".namespace": {
      color: "rgb(178, 204, 214)",
    },
    deleted: {
      color: "rgba(239, 83, 80, 0.56)",
      fontStyle: "italic",
    },
    symbol: {
      color: "rgb(128, 203, 196)",
    },
    property: {
      color: "rgb(128, 203, 196)",
    },
    tag: {
      color: "rgb(127, 219, 202)",
    },
    operator: {
      color: "rgb(127, 219, 202)",
    },
    keyword: {
      color: "rgb(127, 219, 202)",
    },
    boolean: {
      color: "rgb(255, 88, 116)",
    },
    number: {
      color: "rgb(247, 140, 108)",
    },
    constant: {
      color: "rgb(130, 170, 255)",
    },
    function: {
      color: "rgb(130, 170, 255)",
    },
    builtin: {
      color: "rgb(130, 170, 255)",
    },
    char: {
      color: "rgb(130, 170, 255)",
    },
    selector: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic",
    },
    doctype: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic",
    },
    "attr-name": {
      color: "rgb(173, 219, 103)",
      fontStyle: "italic",
    },
    inserted: {
      color: "rgb(173, 219, 103)",
      fontStyle: "italic",
    },
    string: {
      color: "rgb(173, 219, 103)",
    },
    url: {
      color: "rgb(173, 219, 103)",
    },
    entity: {
      color: "rgb(173, 219, 103)",
    },
    ".language-css .token.string": {
      color: "rgb(173, 219, 103)",
    },
    ".style .token.string": {
      color: "rgb(173, 219, 103)",
    },
    "class-name": {
      color: "rgb(255, 203, 139)",
    },
    atrule: {
      color: "rgb(255, 203, 139)",
    },
    "attr-value": {
      color: "rgb(255, 203, 139)",
    },
    regex: {
      color: "rgb(214, 222, 235)",
    },
    important: {
      color: "rgb(214, 222, 235)",
      fontWeight: "bold",
    },
    variable: {
      color: "rgb(214, 222, 235)",
    },
    bold: {
      fontWeight: "bold",
    },
    italic: {
      fontStyle: "italic",
    },
  })(theme);
};
