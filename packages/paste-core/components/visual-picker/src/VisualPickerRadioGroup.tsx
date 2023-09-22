import { InlineControlGroup } from '@twilio-paste/inline-control-group';
import * as React from 'react';

import { VisualPickerRadioContext } from './VisualPickerContext';
import { type VisualPickerRadioGroupProps } from './types';

export const VisualPickerRadioGroup = React.forwardRef<HTMLFieldSetElement, VisualPickerRadioGroupProps>(
  (
    {
      orientation = 'vertical',
      children,
      disabled = false,
      legend,
      onChange,
      name,
      errorText,
      value,
      element = 'VISUAL_PICKER_RADIO_GROUP',
      i18nRequiredLabel = '(required)',
      ...props
    },
    ref,
  ) => {
    const onChangeHandler = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.value);
      },
      [onChange],
    );

    const contextValue = React.useMemo(() => {
      return {
        name,
        value: value || '',
        groupIsDisabled: disabled,
        groupHasError: errorText != null,
        onChange: onChangeHandler,
        orientation,
      };
    }, [name, value, disabled, errorText, onChangeHandler, orientation]);

    return (
      <VisualPickerRadioContext.Provider value={contextValue}>
        <InlineControlGroup
          {...props}
          legend={legend}
          ref={ref}
          name={name}
          element={element}
          errorText={errorText}
          orientation={orientation}
          disabled={disabled}
          i18nRequiredLabel={i18nRequiredLabel}
          fieldStyleProps={{
            marginTop: orientation === 'horizontal' ? 'space40' : 'space30',
            marginRight: orientation === 'horizontal' ? 'space30' : undefined,
          }}
        >
          {children}
        </InlineControlGroup>
      </VisualPickerRadioContext.Provider>
    );
  },
);

VisualPickerRadioGroup.displayName = 'VisualPickerRadioGroup';
