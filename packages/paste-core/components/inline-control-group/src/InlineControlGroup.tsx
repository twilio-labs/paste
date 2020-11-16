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
  const rowSpacing = 'space40';
  const childrenCount = React.Children.count(children);

  return (
    <Box {...safelySpreadBoxProps(props)} as="fieldset" margin="space0" padding="space0" borderWidth="borderWidth0">
      <Label as="legend" htmlFor={undefined} required={required} marginBottom="space0" disabled={disabled}>
        {legend}
      </Label>
      {helpText && <HelpText marginTop="space0">{helpText}</HelpText>}
      <Box marginLeft="space20" marginRight="space20" marginTop="space40">
        {React.Children.map(children, (child, index) => {
          return (
            <Box
              display={orientation === 'horizontal' ? 'inline-block' : 'block'}
              marginBottom={index === childrenCount - 1 ? 'space0' : rowSpacing}
              marginRight={orientation === 'horizontal' ? 'space70' : null}
            >
              {child}k
            </Box>
          );
        })}
        {errorText && (
          <Box marginTop={rowSpacing}>
            <HelpText marginTop="space0" variant="error">
              {errorText}
            </HelpText>
          </Box>
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
