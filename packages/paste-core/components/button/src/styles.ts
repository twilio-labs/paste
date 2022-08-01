import type {BoxStyleProps} from '@twilio-paste/box';
import type {ButtonStates, ButtonSizes} from './types';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('deepmerge');

const ResetStyles: BoxStyleProps = {
  appearance: 'none',
  background: 'none',
  display: 'inline-block',
  border: 'none',
  outline: 'none',
  transition: 'background-color 100ms ease-in, box-shadow 100ms ease-in, color 100ms ease-in',
  fontFamily: 'inherit',
  fontWeight: 'fontWeightSemibold',
  textDecoration: 'none',
  position: 'relative',
  margin: 'space0',
  /*
   * defensively resetting from over zealous legacy global
   * styles "a {...}" when button is set as an anchor
   */
  _hover: {textDecoration: 'none'},
  _focus: {textDecoration: 'none', boxShadow: 'shadowFocus'},
  _active: {textDecoration: 'none'},
};

export const BaseStyles: {[key in ButtonStates]: BoxStyleProps} = {
  default: merge(ResetStyles, {
    cursor: 'pointer',
    _active: {boxShadow: 'none'},
  }),
  disabled: merge(ResetStyles, {
    cursor: 'not-allowed',
  }),
  loading: merge(ResetStyles, {
    cursor: 'wait',
  }),
};

export const SizeStyles: {[key in ButtonSizes]: BoxStyleProps} = {
  default: {
    paddingTop: 'space30',
    paddingBottom: 'space30',
    paddingLeft: 'space40',
    paddingRight: 'space40',
    borderRadius: 'borderRadius20',
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight20',
  },
  small: {
    paddingTop: 'space20',
    paddingBottom: 'space20',
    paddingLeft: 'space30',
    paddingRight: 'space30',
    borderRadius: 'borderRadius10',
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight20',
  },
  icon: {
    padding: 'space30',
    borderRadius: 'borderRadius20',
  },
  icon_small: {
    padding: 'space20',
    borderRadius: 'borderRadius20',
  },
  reset: {
    paddingTop: 'space0',
    paddingRight: 'space0',
    paddingBottom: 'space0',
    paddingLeft: 'space0',
    borderWidth: 'borderWidth0',
    fontSize: 'inherit',
  },
  rounded_small: {
    borderRadius: 'borderRadiusPill',
    paddingTop: 'space20',
    paddingBottom: 'space20',
    paddingLeft: 'space30',
    paddingRight: 'space30',
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight20',
  },
  circle: {
    padding: 'space30',
    borderRadius: 'borderRadiusCircle',
  },
  circle_small: {
    padding: 'space20',
    borderRadius: 'borderRadiusCircle',
  },
};

export const ToggleButtonStyles: BoxStyleProps = {
  transition: 'background-color 150ms ease-in, box-shadow 150ms ease-in, color 150ms ease-in',
  _pressed: {
    backgroundColor: 'colorBackgroundPrimaryStronger',
    color: 'colorTextWeakest',
    boxShadow: 'none',
  },
  _pressed_hover: {
    backgroundColor: 'colorBackgroundPrimary',
    boxShadow: 'none',
    color: 'colorTextInverse',
  },
  _pressed_focus: {
    boxShadow: 'shadowFocus',
  },
};

export const ToggleIconButtonStyles: BoxStyleProps = {
  transition:
    'background-color 150ms ease-in, box-shadow 150ms ease-in, color 150ms ease-in, border-color 150ms ease-in',
  borderWidth: 'borderWidth10',
  borderStyle: 'solid',
  borderColor: 'transparent',

  _hover: {
    borderColor: 'colorBorderPrimaryStronger',
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    color: 'colorTextLinkStronger',
  },
  _focus: {
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    boxShadow: 'shadowFocus',
  },
  _focus_hover: {
    borderColor: 'transparent',
  },
  _pressed: {
    backgroundColor: 'colorBackgroundPrimaryStronger',
    color: 'colorTextWeakest',
    boxShadow: 'none',
  },
  _pressed_hover: {
    backgroundColor: 'colorBackgroundPrimary',
    boxShadow: 'none',
    borderColor: 'transparent',
    color: 'colorTextInverse',
  },
  _pressed_focus: {
    boxShadow: 'shadowFocus',
  },
};
