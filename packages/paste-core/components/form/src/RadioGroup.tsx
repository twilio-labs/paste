import * as React from 'react';
import * as PropTypes from 'prop-types';
import {InlineControlGroup, InlineControlGroupProps} from './shared/InlineControlGroup';
import {RadioContext} from './RadioContext';

export interface RadioGroupProps extends InlineControlGroupProps {
  name: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  onChange,
  disabled = false,
  errorText,
  children,
  ...props
}) => {
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
      <InlineControlGroup {...props} disabled={disabled} errorText={errorText} name={name}>
        {children}
      </InlineControlGroup>
    </RadioContext.Provider>
  );
};

RadioGroup.displayName = 'RadioGroup';

if (process.env.NODE_ENV === 'development') {
  RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
}

export {RadioGroup};
