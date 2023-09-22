import { css } from "@twilio-paste/styling-library";
import type { CSSObject } from "@twilio-paste/styling-library";
import { pasteBaseStyles } from "@twilio-paste/theme";
import type { GenericThemeShape } from "@twilio-paste/theme";

export const docSearchVariable = (theme: GenericThemeShape): CSSObject => {
  return {
    ":root": {
      "--docsearch-primary-color": theme.backgroundColors.colorBackgroundPrimaryStronger,
      "--docsearch-text-color": theme.textColors.colorText,
      "--docsearch-spacing": theme.space.space50,
      "--docsearch-icon-stroke-width": theme.borderWidths.borderWidth20,
      "--docsearch-highlight-color": theme.backgroundColors.colorBackgroundPrimaryStronger,
      "--docsearch-muted-color": theme.textColors.colorTextWeak,
      "--docsearch-container-background": theme.backgroundColors.colorBackgroundOverlay,
      "--docsearch-logo-color": theme.textColors.colorTextWeak,
      "--docsearch-modal-width": theme.sizes.size70,
      "--docsearch-modal-height": "600px",
      "--docsearch-modal-background": theme.backgroundColors.colorBackgroundBody,
      "--docsearch-modal-shadow": theme.shadows.shadowCard,
      "--docsearch-searchbox-height": "46px",
      "--docsearch-searchbox-background": theme.backgroundColors.colorBackgroundInverse,
      "--docsearch-searchbox-focus-background": theme.backgroundColors.colorBackgroundBody,
      "--docsearch-searchbox-shadow": theme.shadows.shadowFocus,
      "--docsearch-hit-height": "56px",
      "--docsearch-hit-color": theme.textColors.colorText,
      "--docsearch-hit-active-color": theme.textColors.colorTextWeakest,
      "--docsearch-hit-background": theme.backgroundColors.colorBackgroundBody,
      "--docsearch-hit-shadow": "none",
      "--docsearch-key-gradient": theme.backgroundColors.colorBackground,
      "--docsearch-key-shadow": "none",
      "--docsearch-footer-height": "44px",
      "--docsearch-footer-background": theme.backgroundColors.colorBackgroundBody,
      "--docsearch-footer-shadow": "none",
    },
  };
};
export const docSearchStyles = css({
  ".DocSearch-Button": {
    backgroundColor: "colorBackgroundBody",
    borderRadius: "borderRadius20",
    boxShadow: "shadowBorder",
    color: "colorTextWeak",
    paddingX: "space40",
    margin: "0",
    width: "100%",
    "&:hover": {
      boxShadow: "shadowBorderPrimary",
    },
    "&:active, &:focus": {
      boxShadow: "shadowFocusShadowBorder",
    },
    ".DocSearch-Search-Icon": {
      color: "colorTextIcon",
      size: "sizeIcon10",
    },
  },
  ".DocSearch-Button-Placeholder": {
    fontSize: "fontSize30",
    fontFamily: "fontFamilyText",
    fontWeight: "fontWeightMedium",
    fontStyle: "italic",
    paddingX: "space40",
  },
  ".DocSearch-Button-Key": {
    top: 0,
    paddingBottom: 0,
  },
  ".DocSearch-Container": {
    ...pasteBaseStyles(),
  },
  ".DocSearch-Dropdown": {
    a: {
      color: "colorTextLink",
      textDecoration: "underline",
      ":hover": {
        textDecoration: "none",
      },
    },
  },
  ".DocSearch-SearchBar": {
    paddingBottom: "space20",
  },
  ".DocSearch-Search-Icon": {
    color: "colorTextIcon",
  },
  ".DocSearch-Input": {
    paddingLeft: "space50",
  },
  ".DocSearch-LoadingIndicator svg, .DocSearch-MagnifierLabel svg": {
    size: "sizeIcon10",
  },
  ".DocSearch-Hits mark": {
    color: "colorTextLink",
  },
  ".DocSearch-Hit": {
    paddingBottom: "space30",
    a: {
      borderColor: "colorBorderWeaker",
      borderStyle: "solid",
      borderWidth: "borderWidth20",
      textDecoration: "none",
    },
    "&[aria-selected=true] a": {
      borderColor: "colorBorderPrimaryStronger",
    },
  },
  ".DocSearch-Hit-title": {
    fontSize: "fontSize30",
  },
  ".DocSearch-Hit-path": {
    fontSize: "fontSize20",
  },
  ".DocSearch-Hit-source": {
    color: "colorText",
    fontSize: "fontSize30",
    fontWeight: "fontWeightMedium",
  },
  ".DocSearch-Hit-icon": {
    display: "none",
  },
  ".DocSearch-Prefill": {
    color: "colorTextLink",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "none",
    },
  },
  ".DocSearch-Commands-Key": {
    paddingBottom: "0",
  },
});
