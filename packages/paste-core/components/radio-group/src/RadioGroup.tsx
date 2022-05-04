import * as React from 'react';
import * as PropTypes from 'prop-types';
import {InlineControlGroup} from '@twilio-paste/inline-control-group';
import type {InlineControlGroupProps} from '@twilio-paste/inline-control-group';
import {RadioContext} from './RadioContext';

export interface RadioGroupProps extends InlineControlGroupProps {
  name: string;
  onChange?: (value: string) => void;
  value?: string;
  i18nRequiredLabel?: string;
}

const RadioGroup = React.forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      name,
      element = 'RADIO_GROUP',
      value,
      onChange,
      disabled = false,
      errorText,
      children,
      i18nRequiredLabel = '(required)',
      ...props
    },
    ref
  ) => {
    const onChangeHandler = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange != null) {
          onChange(event.target.value);
        }
      },
      [onChange]
    );

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
        <InlineControlGroup
          element={element}
          {...props}
          disabled={disabled}
          errorText={errorText}
          name={name}
          ref={ref}
          i18nRequiredLabel={i18nRequiredLabel}
        >
          {children}
        </InlineControlGroup>
      </RadioContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  element: PropTypes.string,
  i18nRequiredLabel: PropTypes.string,
};

export {RadioGroup};
