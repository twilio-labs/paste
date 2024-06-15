import type { BoxStyleProps } from "@twilio-paste/box";
import merge from "deepmerge";

import type { ButtonSizes, ButtonStates } from "./types";

const ResetStyles: BoxStyleProps = {
  appearance: "none",
  background: "none",
  display: "inline-block",
  border: "none",
  outline: "none",
  transition: "background-color 100ms ease-in, box-shadow 100ms ease-in, color 100ms ease-in",
  fontFamily: "inherit",
  fontWeight: "fontWeightSemibold",
  textDecoration: "none",
  position: "relative",
  margin: "space0",
  borderRadius: "borderRadius20",
  /*
   * defensively resetting from over zealous legacy global
   * styles "a {...}" when button is set as an anchor
   */
  _hover: { textDecoration: "none" },
  _focus: { textDecoration: "none", boxShadow: "shadowFocus" },
  _active: { textDecoration: "none" },
};

export const BaseStyles: { [key in ButtonStates]: BoxStyleProps } = {
  default: merge(ResetStyles, {
    cursor: "pointer",
    _active: { boxShadow: "none" },
  }),
  disabled: merge(ResetStyles, {
    cursor: "not-allowed",
  }),
  loading: merge(ResetStyles, {
    cursor: "wait",
  }),
};

export const SizeStyles: { [key in ButtonSizes]: BoxStyleProps } = {
  default: {
    paddingTop: "space30",
    paddingBottom: "space30",
    paddingLeft: "space40",
    paddingRight: "space40",
    borderRadius: "borderRadius20",
    fontSize: "fontSize30",
    lineHeight: "lineHeight20",
  },
  small: {
    paddingTop: "space20",
    paddingBottom: "space20",
    paddingLeft: "space30",
    paddingRight: "space30",
    borderRadius: "borderRadius10",
    fontSize: "fontSize30",
    lineHeight: "lineHeight20",
  },
  icon: {
    padding: "space30",
    borderRadius: "borderRadius20",
  },
  icon_small: {
    padding: "space20",
    borderRadius: "borderRadius20",
  },
  reset: {
    paddingTop: "space0",
    paddingRight: "space0",
    paddingBottom: "space0",
    paddingLeft: "space0",
    borderWidth: "borderWidth0",
    fontSize: "inherit",
  },
  rounded_small: {
    borderRadius: "borderRadiusPill",
    paddingTop: "space20",
    paddingBottom: "space20",
    paddingLeft: "space30",
    paddingRight: "space30",
    fontSize: "fontSize30",
    lineHeight: "lineHeight20",
  },
  circle: {
    padding: "space30",
    borderRadius: "borderRadiusCircle",
  },
  circle_small: {
    padding: "space20",
    borderRadius: "borderRadiusCircle",
  },
};

export const ToggleStyles: BoxStyleProps = {
  transition: "background-color 150ms ease-in, box-shadow 150ms ease-in, color 150ms ease-in",
  color: "colorText",
  backgroundColor: "colorBackgroundBody",
  _disabled: {
    backgroundColor: "colorBackgroundBody",
    boxShadow: "shadowBorderWeaker",
    color: "colorTextWeaker",
  },
  _hover: {
    backgroundColor: "colorBackgroundBody",
    boxShadow: "shadowBorderPrimary",
    color: "colorTextPrimary",
  },
  _active: {
    backgroundColor: "colorBackgroundBody",
    boxShadow: "shadowBorderPrimaryStrongest",
    color: "colorTextPrimaryStrongest",
  },
  _pressed: {
    backgroundColor: "colorBackgroundPrimaryWeakest",
    boxShadow: "shadowBorderPrimary",
    color: "colorTextPrimary",
  },
  _pressed_hover: {
    backgroundColor: "colorBackgroundPrimaryWeakest",
    boxShadow: "shadowBorderPrimaryStronger",
    color: "colorTextPrimaryStronger",
  },
  _pressed_active: {
    backgroundColor: "colorBackgroundPrimaryWeakest",
    boxShadow: "shadowBorderPrimaryStrongest",
    color: "colorTextPrimaryStrongest",
  },
  _pressed_focus: {
    backgroundColor: "colorBackgroundPrimaryWeakest",
    boxShadow: "shadowFocusShadowBorder",
    color: "colorTextPrimary",
  },
  _pressed_disabled: {
    backgroundColor: "colorBackgroundStrong",
    boxShadow: "shadowBorderWeaker",
    color: "colorTextWeakest",
  },
};

export const DestructiveSecondaryToggleStyles: BoxStyleProps = {
  transition: "background-color 150ms ease-in, box-shadow 150ms ease-in, color 150ms ease-in",
  color: "colorTextError",
  backgroundColor: "colorBackgroundBody",
  _disabled: {
    backgroundColor: "colorBackgroundBody",
    boxShadow: "shadowBorderWeaker",
    color: "colorTextWeaker",
  },
  _hover: {
    backgroundColor: "colorBackgroundBody",
    boxShadow: "shadowBorderError",
    color: "colorTextError",
  },
  _active: {
    backgroundColor: "colorBackgroundBody",
    boxShadow: "shadowBorderErrorStrongest",
    color: "colorTextErrorStrongest",
  },
  _pressed: {
    backgroundColor: "colorBackgroundErrorWeakest",
    boxShadow: "shadowBorderError",
    color: "colorTextError",
  },
  _pressed_hover: {
    backgroundColor: "colorBackgroundErrorWeakest",
    boxShadow: "shadowBorderErrorStronger",
    color: "colorTextErrorStronger",
  },
  _pressed_active: {
    backgroundColor: "colorBackgroundErrorWeakest",
    boxShadow: "shadowBorderError",
    color: "colorTextError",
  },
  _pressed_focus: {
    backgroundColor: "colorBackgroundErrorWeakest",
    boxShadow: "shadowFocusShadowBorder",
    color: "colorTextError",
  },
  _pressed_disabled: {
    backgroundColor: "colorBackgroundStrong",
    boxShadow: "shadowBorderWeaker",
    color: "colorTextWeakest",
  },
};

export const ToggleIconButtonStyles: BoxStyleProps = {
  transition: "background-color 150ms ease-in, box-shadow 150ms ease-in, color 150ms ease-in",
  color: "colorTextIcon",
  backgroundColor: "colorBackgroundBody",
  _hover: {
    backgroundColor: "colorBackgroundBody",
    boxShadow: "shadowBorderPrimary",
    color: "colorTextPrimaryStronger",
  },
  _active: {
    backgroundColor: "colorBackgroundBody",
    boxShadow: "shadowBorderPrimaryStrongest",
    color: "colorTextPrimaryStrongest",
  },
  _disabled: {
    backgroundColor: "colorBackgroundBody",
    color: "colorTextWeaker",
  },
  _pressed: {
    backgroundColor: "colorBackgroundPrimaryWeakest",
    boxShadow: "shadowBorderPrimary",
    color: "colorTextPrimary",
  },
  _pressed_hover: {
    backgroundColor: "colorBackgroundPrimaryWeakest",
    boxShadow: "shadowBorderPrimaryStronger",
    color: "colorTextPrimaryStronger",
  },
  _pressed_focus: {
    backgroundColor: "colorBackgroundPrimaryWeakest",
    boxShadow: "shadowFocusShadowBorder",
    color: "colorTextPrimary",
  },
  _pressed_disabled: {
    backgroundColor: "colorBackgroundStrong",
    boxShadow: "shadowBorderWeaker",
    color: "colorTextWeakest",
  },
};
