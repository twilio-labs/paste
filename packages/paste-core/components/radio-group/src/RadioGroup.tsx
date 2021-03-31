import * as React from 'react';
import * as PropTypes from 'prop-types';
import {InlineControlGroup} from '@twilio-paste/inline-control-group';
import type {InlineControlGroupProps} from '@twilio-paste/inline-control-group';
import {RadioContext} from './RadioContext';

export interface RadioGroupProps extends InlineControlGroupProps {
  name: string;
  onChange: (value: string) => void;
  value?: string;
}

const RadioGroup = React.forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({name, value, onChange, disabled = false, errorText, children, ...props}, ref) => {
    const onChangeHandler = React.useMemo(() => {
      return (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange != null) {
          onChange(event.target.value);
        }
      };
    }, [onChange]);

    const contextValue = React.useMemo(() => {
      return {
        name,
        value: value || '',
        disabled,
        hasError: errorText != null,
        onChange: onChangeHandler,
      };
    }, [name, value, disabled, errorText, onChangeHandler]);

    return (
      <RadioContext.Provider value={contextValue}>
        <InlineControlGroup {...props} disabled={disabled} errorText={errorText} name={name} ref={ref}>
          {children}
        </InlineControlGroup>
      </RadioContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

if (process.env.NODE_ENV === 'development') {
  RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  };
}

export {RadioGroup};
