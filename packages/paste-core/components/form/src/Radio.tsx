import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from 'react-uid';
import {styled, css} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
import {
  BaseRadioCheckboxControl,
  BaseRadioCheckboxLabel,
  BaseRadioCheckboxLabelText,
  BaseRadioCheckboxHelpText,
} from './shared/BaseRadioCheckbox';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: NonNullable<React.ReactNode>;
  hasError?: boolean;
  helpText?: string | React.ReactNode;
  id: string;
  value: string;
}
/* eslint-disable emotion/syntax-preference */
const HiddenRadio = styled.input(
  css({
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    width: '1px',
  })
);
/* eslint-enable */

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({id, disabled, checked, hasError, children, helpText, ...props}, ref) => {
    const helpTextId = useUID();
    return (
      <Box alignItems="flex-start" display="inline-flex" flexDirection="column" verticalAlign="top">
        <HiddenRadio
          {...props}
          aria-describedby={helpTextId}
          aria-invalid={hasError}
          checked={checked}
          disabled={disabled}
          id={id}
          ref={ref}
          type="radio"
        />
        <BaseRadioCheckboxLabel disabled={disabled} htmlFor={id}>
          <BaseRadioCheckboxControl borderRadius="borderRadiusCircle" disabled={disabled} type="radio">
            <Box
              as="span"
              backgroundColor={disabled && checked ? 'colorBackgroundDarkest' : 'colorBackgroundBody'}
              borderRadius="borderRadiusCircle"
              height="sizeSquare25"
              width="sizeSquare25"
            />
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText>{children}</BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        {helpText && <BaseRadioCheckboxHelpText helpTextId={helpTextId}>{helpText}</BaseRadioCheckboxHelpText>}
      </Box>
    );
  }
);

Radio.displayName = 'Radio';

if (process.env.NODE_ENV === 'development') {
  Radio.propTypes = {
    children: PropTypes.node.isRequired,
    hasError: PropTypes.bool,
    helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };
}

export {Radio};
