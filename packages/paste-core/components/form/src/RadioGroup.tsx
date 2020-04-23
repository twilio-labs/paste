import * as React from 'react';
import * as PropTypes from 'prop-types';
import {InlineControlGroup, InlineControlGroupProps} from './shared/InlineControlGroup';

export interface RadioGroupProps extends InlineControlGroupProps {
  name?: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({onChange, children, errorText, name, value, disabled, ...props}) => {
  return (
    <InlineControlGroup {...props} disabled={disabled} errorText={errorText} name={name}>
      {React.Children.map(children, child => {
        return React.isValidElement(child)
          ? React.cloneElement(child, {
              checked: child.props.value === value,
              disabled,
              hasError: errorText != null,
              name,
              onChange: (event: React.ChangeEvent<HTMLInputElement>): void => {
                if (onChange != null) {
                  onChange(event.target.value);
                }
              },
            })
          : child;
      })}
    </InlineControlGroup>
  );
};

RadioGroup.displayName = 'RadioGroup';

if (process.env.NODE_ENV === 'development') {
  RadioGroup.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };
}

export {RadioGroup};
