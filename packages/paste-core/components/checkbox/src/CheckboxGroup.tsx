import * as React from 'react';
import * as PropTypes from 'prop-types';
import {InlineControlGroup, InlineControlGroupProps} from '@twilio-paste/inline-control-group';
import {CheckboxContext} from './CheckboxContext';

export interface CheckboxGroupProps extends InlineControlGroupProps {
  isSelectAll?: boolean;
  name: string;
  onChange?: (checked: boolean) => void;
}

const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    {
      children,
      disabled = false,
      errorText,
      isSelectAll = false,
      name,
      onChange,
      orientation = 'vertical',
      value,
      ...props
    },
    ref
  ) => {
    const onChangeHandler = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange != null) {
          onChange(event.target.checked);
        }
      },
      [onChange]
    );

    const contextValue = React.useMemo(() => {
      return {
        disabled,
        name,
        onChange: onChangeHandler,
        hasError: errorText ? true : undefined,
      };
    }, [disabled, name, onChangeHandler]);

    return (
      <CheckboxContext.Provider value={contextValue}>
        <InlineControlGroup
          {...props}
          disabled={disabled}
          errorText={errorText}
          name={name}
          orientation={orientation}
          ref={ref}
        >
          {React.Children.map(children, (child, index) => {
            return React.isValidElement(child)
              ? React.cloneElement(child, {
                  isSelectAll: isSelectAll && index === 0,
                  isSelectAllChild: isSelectAll && orientation === 'vertical' && index !== 0,
                })
              : child;
          })}
        </InlineControlGroup>
      </CheckboxContext.Provider>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

if (process.env.NODE_ENV === 'development') {
  CheckboxGroup.propTypes = {
    isSelectAll: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    errorText: PropTypes.string,
    helpText: PropTypes.string,
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    value: PropTypes.string,
  };
}

export {CheckboxGroup};
