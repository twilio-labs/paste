import {BoxStyleProps} from '@twilio-paste/box';
import {ButtonStates, ButtonSizes} from './types';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('lodash.merge');

const ResetStyles: BoxStyleProps = {
  appearance: 'none',
  background: 'none',
  borderWidth: 'borderWidth20',
  borderStyle: 'solid',
  borderColor: 'transparent',
  display: 'inline-block',
  outline: 'none',
  transition: 'background-color 100ms ease-in, border-color 100ms ease-in',
  fontFamily: 'fontFamilyText',
  fontWeight: 'fontWeightSemibold',
  textDecoration: 'none',
  position: 'relative',
  /*
   * defensively resetting from over zealous legacy global
   * styles "a {...}" when button is set as an anchor
   */
  _hover: {textDecoration: 'none'},
  _focus: {textDecoration: 'none', boxShadow: 'shadowFocus'},
  _active: {textDecoration: 'none'},
};

export const BaseStyles: {[key in ButtonStates]: BoxStyleProps} = {
  default: merge({}, ResetStyles, {
    cursor: 'pointer',
    _active: {
      boxShadow: 'shadowFocus',
    },
  }),
  disabled: merge({}, ResetStyles, {
    cursor: 'not-allowed',
  }),
  loading: merge({}, ResetStyles, {
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
    paddingTop: 'space10',
    paddingBottom: 'space10',
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
  reset: {
    paddingTop: 'space0',
    paddingRight: 'space0',
    paddingBottom: 'space0',
    paddingLeft: 'space0',
    borderWidth: 'borderWidth0',
  },
};
