import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import {restrictedProps} from '../shared/restricted-attributes';

export interface OptionGroupProps extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  label: string;
  children: NonNullable<React.ReactNode>;
}

const OptionGroupElement = styled.optgroup(
  css({
    background: 'transparent',
    color: 'inherit',
    fontFamily: 'fontFamilyText',
    fontWeight: 'fontWeightMedium',
    fontStyle: 'normal',
    margin: 'space20',
  })
);

const OptionGroup = React.forwardRef<HTMLOptGroupElement, OptionGroupProps>(({label, children, ...props}, ref) => (
  <OptionGroupElement ref={ref} label={label} {...props} {...restrictedProps}>
    {children}
  </OptionGroupElement>
));

OptionGroup.displayName = 'OptionGroup';

if (process.env.NODE_ENV === 'development') {
  OptionGroup.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
}

export {OptionGroup};
