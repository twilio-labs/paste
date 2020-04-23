import * as React from 'react';
import * as PropTypes from 'prop-types';
import {InlineControlGroup, InlineControlGroupProps} from './shared/InlineControlGroup';

export interface CheckboxGroupProps extends InlineControlGroupProps {
  isSelectAll?: boolean;
  name?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  disabled,
  errorText,
  isSelectAll,
  name,
  orientation = 'vertical',
  ...props
}) => {
  return (
    <InlineControlGroup {...props} errorText={errorText} name={name} disabled={disabled} orientation={orientation}>
      {React.Children.map(children, (child, index) => {
        return React.isValidElement(child)
          ? React.cloneElement(child, {
              disabled,
              hasError: errorText ? true : undefined,
              isSelectAll: isSelectAll && index === 0,
              isSelectAllChild: isSelectAll && orientation === 'vertical' && index !== 0,
              name,
            })
          : child;
      })}
    </InlineControlGroup>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

if (process.env.NODE_ENV === 'development') {
  CheckboxGroup.propTypes = {
    isSelectAll: PropTypes.bool,
    name: PropTypes.string,
  };
}

export {CheckboxGroup};
