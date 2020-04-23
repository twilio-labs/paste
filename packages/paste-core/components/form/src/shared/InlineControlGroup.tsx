import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {FormLabel} from '../FormLabel';
import {FormHelpText} from '../FormHelpText';

export interface InlineControlGroupProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  children: React.ReactNode;
  disabled?: boolean;
  errorText?: string | React.ReactNode;
  helpText?: string | React.ReactNode;
  legend: string | NonNullable<React.ReactNode>;
  orientation?: 'vertical' | 'horizontal';
  required?: boolean;
  value?: string;
}

const InlineControlGroup: React.FC<InlineControlGroupProps> = ({
  children,
  disabled,
  errorText,
  helpText,
  legend,
  orientation,
  required,
  value,
  ...props
}) => {
  return (
    <Box {...safelySpreadBoxProps(props)} as="fieldset" margin="space0" padding="space0" borderWidth="borderWidth0">
      <FormLabel as="legend" htmlFor={undefined} required={required} marginBottom="space0" disabled={disabled}>
        {legend}
      </FormLabel>
      {helpText && <FormHelpText marginTop="space0">{helpText}</FormHelpText>}
      <Box marginLeft="space20" marginRight="space20" marginTop="space30">
        {React.Children.map(children, child => {
          return (
            <Box
              display={orientation === 'horizontal' ? 'inline-block' : 'block'}
              marginBottom="space30"
              marginRight={orientation === 'horizontal' ? 'space70' : null}
            >
              {child}
            </Box>
          );
        })}
        {errorText && (
          <FormHelpText marginTop="space0" variant="error">
            {errorText}
          </FormHelpText>
        )}
      </Box>
    </Box>
  );
};

InlineControlGroup.displayName = 'InlineControlGroup';

InlineControlGroup.defaultProps = {
  orientation: 'vertical',
};

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
    value: PropTypes.string,
  };
}

export {InlineControlGroup};
