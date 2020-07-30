import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import {Box, BoxProps, BoxStyleProps} from '@twilio-paste/box';

export interface SiblingBoxProps extends BoxProps {
  _activeSibling?: BoxStyleProps;
  _boxChild?: BoxStyleProps;
  _checkedAndActiveSibling?: BoxStyleProps;
  _checkedAndDisabledSibling?: BoxStyleProps;
  _checkedAndFocusSibling?: BoxStyleProps;
  _checkedAndHoverSibling?: BoxStyleProps;
  _checkedAndInvalidSibling?: BoxStyleProps;
  _checkedAndInvalidAndHoverSibling?: BoxStyleProps;
  _checkedSibling?: BoxStyleProps;
  _checkedSiblingAndBoxChild?: BoxStyleProps;
  _disabledSibling?: BoxStyleProps;
  _focusSibling?: BoxStyleProps;
  _hoverSibling?: BoxStyleProps;
  _invalidSibling?: BoxStyleProps;
  _invalidAndHoverSibling?: BoxStyleProps;
  type?: 'checkbox' | 'radio';
}

/* eslint-disable emotion/syntax-preference */
const SiblingBox = styled(Box)<SiblingBoxProps>(
  ({
    _activeSibling,
    _boxChild,
    _checkedAndActiveSibling,
    _checkedAndDisabledSibling,
    _checkedAndFocusSibling,
    _checkedAndHoverSibling,
    _checkedAndInvalidSibling,
    _checkedAndInvalidAndHoverSibling,
    _checkedSibling,
    _checkedSiblingAndBoxChild,
    _disabledSibling,
    _focusSibling,
    _hoverSibling,
    _invalidSibling,
    _invalidAndHoverSibling,
    type = 'checkbox',
  }) => {
    const active = `input[type=${type}]:active + label &`;
    const checked = `input[type=${type}]:checked + label &, input[type=${type}][aria-checked=mixed] + label &`;
    const checkedAndActive = `input[type=${type}]:checked:active + label &, input[type=${type}][aria-checked=mixed]:active + label &`;
    const checkedAndChild = `input[type=${type}]:checked + label & > *, input[type=${type}][aria-checked=mixed] + label & > *`;
    const checkedAndDisabled = `input[type=${type}]:checked:disabled + label &, input[type=${type}][aria-checked=mixed]:disabled + label &`;
    const checkedAndFocus = `input[type=${type}]:checked:focus + label &, input[type=${type}][aria-checked=mixed]:focus + label &`;
    const checkedAndHover = `input[type=${type}]:checked:hover:not(:disabled) + label &, input[type=${type}][aria-checked=mixed]:hover:not(:disabled) + label &`;
    const checkedAndInvalid = `input[type=${type}][aria-invalid=true]:checked + label &`;
    const checkedAndInvalidAndHover = `input[type=${type}][aria-invalid=true]:checked:hover:not(:disabled) + label &`;
    const child = `input[type=${type}] + label & > *`;
    const disabled = `input[type=${type}]:disabled + label &`;
    const focus = `input[type=${type}]:focus + label &`;
    const hover = `input[type=${type}]:hover:not(:disabled):not(:checked) + label &`;
    const invalid = `input[type=${type}][aria-invalid=true] + label &`;
    const invalidAndHover = `input[type=${type}][aria-invalid=true]:hover:not(:disabled) + label &`;
    return css({
      [active]: _activeSibling,
      [checked]: _checkedSibling,
      [checkedAndActive]: _checkedAndActiveSibling,
      [checkedAndChild]: _checkedSiblingAndBoxChild,
      [checkedAndDisabled]: _checkedAndDisabledSibling,
      [checkedAndFocus]: _checkedAndFocusSibling,
      [checkedAndHover]: _checkedAndHoverSibling,
      [checkedAndInvalid]: _checkedAndInvalidSibling,
      [checkedAndInvalidAndHover]: _checkedAndInvalidAndHoverSibling,
      [child]: _boxChild,
      [disabled]: _disabledSibling,
      [focus]: _focusSibling,
      [hover]: _hoverSibling,
      [invalid]: _invalidSibling,
      [invalidAndHover]: _invalidAndHoverSibling,
    });
  }
);
/* eslint-enable */

SiblingBox.displayName = 'SiblingBox';

SiblingBox.defaultProps = {
  alignItems: 'center',
  'aria-hidden': 'true',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  transition: 'all 120ms',
};

if (process.env.NODE_ENV === 'development') {
  SiblingBox.propTypes = {
    type: PropTypes.oneOf(['checkbox', 'radio']),
  };
}

export {SiblingBox};
