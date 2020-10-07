import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

export interface OptionGroupProps extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  label: string;
  children: NonNullable<React.ReactNode>;
}

const OptionGroup = React.forwardRef<HTMLOptGroupElement, OptionGroupProps>(({label, children, ...props}, ref) => (
  <Box
    ref={ref}
    label={label}
    {...safelySpreadBoxProps(props)}
    as="optgroup"
    background="none"
    color="inherit"
    fontFamily="fontFamilyText"
    fontWeight="fontWeightMedium"
    fontStyle="normal"
    margin="space20"
  >
    {children}
  </Box>
));

OptionGroup.displayName = 'OptionGroup';

if (process.env.NODE_ENV === 'development') {
  OptionGroup.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
}

export {OptionGroup};
