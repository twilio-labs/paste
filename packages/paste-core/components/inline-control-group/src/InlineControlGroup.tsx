import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';

export interface InlineControlGroupProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  children: React.ReactNode;
  disabled?: boolean;
  errorText?: string | React.ReactNode;
  helpText?: string | React.ReactNode;
  legend: string | NonNullable<React.ReactNode>;
  orientation?: 'vertical' | 'horizontal';
  ref?: any;
  required?: boolean;
}

const InlineControlGroup = React.forwardRef<HTMLFieldSetElement, InlineControlGroupProps>(
  ({children, disabled, errorText, helpText, legend, orientation = 'vertical', required, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="fieldset"
        margin="space0"
        padding="space0"
        minWidth="0px"
        borderWidth="borderWidth0"
        ref={ref}
      >
        <Label as="legend" htmlFor={undefined} required={required} marginBottom="space0" disabled={disabled}>
          {legend}
        </Label>
        {helpText && <HelpText marginTop="space0">{helpText}</HelpText>}
        <Box marginLeft="space20" marginRight="space20">
          {React.Children.map(children, (child) => {
            return (
              <Box
                display={orientation === 'horizontal' ? 'inline-block' : 'block'}
                marginTop="space40"
                marginRight={orientation === 'horizontal' ? 'space70' : null}
              >
                {child}
              </Box>
            );
          })}
          {errorText && (
            <Box marginTop="space40">
              <HelpText variant="error">{errorText}</HelpText>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
);

InlineControlGroup.displayName = 'InlineControlGroup';

if (process.env.NODE_ENV === 'development') {
  InlineControlGroup.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    legend: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    name: PropTypes.string.isRequired,
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    required: PropTypes.bool,
  };
}

export {InlineControlGroup};
