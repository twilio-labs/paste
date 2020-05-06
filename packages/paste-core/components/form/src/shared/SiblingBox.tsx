import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {Box, BoxProps, BaseBoxProps} from '@twilio-paste/box';

export interface SiblingBoxProps extends BoxProps {
  _activeSibling?: BaseBoxProps;
  _boxChild?: BaseBoxProps;
  _checkedAndActiveSibling?: BaseBoxProps;
  _checkedAndDisabledSibling?: BaseBoxProps;
  _checkedAndFocusSibling?: BaseBoxProps;
  _checkedAndHoverSibling?: BaseBoxProps;
  _checkedAndInvalidSibling?: BaseBoxProps;
  _checkedAndInvalidAndHoverSibling?: BaseBoxProps;
  _checkedSibling?: BaseBoxProps;
  _checkedSiblingAndBoxChild?: BaseBoxProps;
  _disabledSibling?: BaseBoxProps;
  _focusSibling?: BaseBoxProps;
  _hoverSibling?: BaseBoxProps;
  _invalidSibling?: BaseBoxProps;
  _invalidAndHoverSibling?: BaseBoxProps;
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
