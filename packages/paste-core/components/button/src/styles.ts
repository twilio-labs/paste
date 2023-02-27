import type {BoxStyleProps} from '@twilio-paste/box';
import merge from 'deepmerge';

import type {ButtonStates, ButtonSizes} from './types';

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

export const ToggleStyles: BoxStyleProps = {
  transition: 'background-color 150ms ease-in, box-shadow 150ms ease-in, color 150ms ease-in',
  color: 'colorText',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorderWeak',
  _disabled: {
    boxShadow: 'shadowBorderWeaker',
    backgroundColor: 'colorBackgroundBody',
    color: 'colorTextWeaker',
  },
  _hover: {
    color: 'colorTextPrimary',
    boxShadow: 'shadowBorderPrimary',
    backgroundColor: 'colorBackgroundBody',
  },
  _active: {
    color: 'colorTextPrimaryStrongest',
    boxShadow: 'shadowBorderPrimaryStrongest',
    backgroundColor: 'colorBackgroundBody',
  },
  _pressed: {
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    color: 'colorTextPrimary',
    boxShadow: 'shadowBorderPrimary',
  },
  _pressed_hover: {
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    boxShadow: 'shadowBorderPrimaryStronger',
    color: 'colorTextPrimaryStronger',
  },
  _pressed_focus: {
    boxShadow: 'shadowFocusShadowBorder',
    backgroundColor: 'colorBackgroundPrimaryStronger',
    color: 'colorTextWeakest',
  },
  _pressed_disabled: {
    backgroundColor: 'colorBackgroundStrong',
    boxShadow: 'shadowBorderWeaker',
    color: 'colorTextWeakest',
  },
};

export const ToggleIconButtonStyles: BoxStyleProps = {
  transition: 'background-color 150ms ease-in, box-shadow 150ms ease-in, color 150ms ease-in',
  color: 'colorTextIcon',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorderWeak',
  _hover: {
    color: 'colorTextPrimaryStronger',
    boxShadow: 'shadowBorderPrimary',
    backgroundColor: 'colorBackgroundBody',
  },
  _active: {
    color: 'colorTextPrimaryStrongest',
    boxShadow: 'shadowBorderPrimaryStrongest',
    backgroundColor: 'colorBackgroundBody',
  },
  _disabled: {
    color: 'colorTextWeaker',
    boxShadow: 'shadowBorderWeaker',
    backgroundColor: 'colorBackgroundBody',
  },
  _pressed: {
    backgroundColor: 'colorBackgroundPrimaryStronger',
    color: 'colorTextWeakest',
    boxShadow: 'shadowBorderPrimaryStronger',
  },
  _pressed_hover: {
    backgroundColor: 'colorBackgroundPrimary',
    boxShadow: 'shadowBorderPrimary',
    color: 'colorTextInverse',
  },
  _pressed_focus: {
    boxShadow: 'shadowFocus',
    backgroundColor: 'colorBackgroundPrimaryStronger',
    color: 'colorTextWeakest',
  },
  _pressed_disabled: {
    backgroundColor: 'colorBackgroundStrong',
    boxShadow: 'shadowBorderWeaker',
    color: 'colorTextWeakest',
  },
};
