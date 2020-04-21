import * as React from 'react';
import * as PropTypes from 'prop-types';
import {safelySpreadFormControlProps} from '../shared/Utils';

export interface OptionGroupProps extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  label: string;
  children: React.ReactNode;
}

const OptionGroup = React.forwardRef<HTMLOptGroupElement, OptionGroupProps>(({label, children, ...props}, ref) => (
  <optgroup ref={ref} label={label} {...safelySpreadFormControlProps(props)}>
    {children}
  </optgroup>
));

OptionGroup.displayName = 'OptionGroup';

if (process.env.NODE_ENV === 'development') {
  OptionGroup.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
}

export {OptionGroup};
