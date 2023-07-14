import * as React from 'react';
import {HiddenRadio, type HiddenRadioState} from '@twilio-paste/radio-group';
import {Box} from '@twilio-paste/box';
import {useUID} from '@twilio-paste/uid-library';
import {BaseRadioCheckboxControl, BaseRadioCheckboxLabel} from '@twilio-paste/base-radio-checkbox';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {useMergeRefs} from '@twilio-paste/utils';
import {type BorderColor} from '@twilio-paste/style-props';

import {VisualPickerRadioContext} from './VisualPickerContext';
import {type VisualPickerRadioProps} from './types';

export const VisualPickerRadio = React.forwardRef<HTMLInputElement, VisualPickerRadioProps>(
  (
    {id, name, element = 'VISUAL_PICKER_RADIO', value, disabled, hasError, onChange, children, labelText, ...props},
    ref
  ) => {
    const [isHovering, setIsHovering] = React.useState(false);

    const visualPickerRadioGroupContext = React.useContext(VisualPickerRadioContext);
    const helpTextId = useUID();
    const radioId = id ? id : useUID();
    const labelId = useUID();

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange != null) {
          onChange(event);
        } else {
          visualPickerRadioGroupContext.onChange(event);
        }
      },
      [onChange, visualPickerRadioGroupContext.onChange]
    );

    const state: HiddenRadioState = {
      name: name != null ? name : visualPickerRadioGroupContext.name,
      disabled: disabled != null ? disabled : visualPickerRadioGroupContext.groupIsDisabled,
      hasError: hasError != null ? hasError : visualPickerRadioGroupContext.groupHasError,
      checked: visualPickerRadioGroupContext.value === value,
    };

    const {groupHasError, groupIsDisabled} = visualPickerRadioGroupContext;

    const internalRef = React.useRef<HTMLInputElement>();
    const mergedRef = useMergeRefs(internalRef, ref) as React.Ref<HTMLInputElement>;

    let pickerBorderColor = 'colorBorderWeak' as BorderColor;
    if (disabled || groupIsDisabled) pickerBorderColor = 'colorBorderWeak';
    else if (hasError || groupHasError) pickerBorderColor = 'colorBorderError' as BorderColor;
    else if (state.checked === true) pickerBorderColor = 'colorBorderPrimary' as BorderColor;

    return (
      <Box
        element={element}
        position="relative"
        display="inline-flex"
        alignItems={visualPickerRadioGroupContext.orientation === 'vertical' ? 'center' : 'flex-start'}
        flexDirection="row"
        backgroundColor={disabled || groupIsDisabled ? 'colorBackgroundWeak' : undefined}
        borderStyle="solid"
        borderColor={pickerBorderColor}
        borderWidth="borderWidth10"
        borderRadius="borderRadius30"
        padding="space50"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => internalRef.current?.click()}
        _hover={
          disabled || groupIsDisabled
            ? {cursor: 'not-allowed'}
            : {
                cursor: 'pointer',
                borderColor: hasError || groupHasError ? 'colorBorderErrorStronger' : 'colorBorderPrimaryStrong',
              }
        }
      >
        <HiddenRadio
          {...props}
          {...state}
          value={value}
          aria-describedby={helpTextId}
          aria-invalid={state.hasError}
          aria-labelledby={labelId}
          onChange={handleChange}
          id={radioId}
          ref={mergedRef}
        />
        <BaseRadioCheckboxLabel disabled={state.disabled} htmlFor={radioId} id={labelId}>
          <ScreenReaderOnly>{labelText}</ScreenReaderOnly>
          <BaseRadioCheckboxControl
            element={`${element}_CONTROL`}
            borderRadius="borderRadiusCircle"
            disabled={state.disabled}
            type="radio"
            applyHoverStyles={isHovering}
            _checkedAndDisabledSibling={{
              color: 'colorTextWeaker',
            }}
          >
            <Box
              as="span"
              element={`${element}_CONTROL_CIRCLE`}
              lineHeight="lineHeight0"
              display={state.checked ? 'block' : 'none'}
              color="inherit"
              size="sizeIcon10"
            >
              <svg role="img" aria-hidden width="100%" height="100%" viewBox="0 0 16 16" fill="none">
                <circle fill="currentColor" cx={8} cy={8} r={3} />
              </svg>
            </Box>
          </BaseRadioCheckboxControl>
        </BaseRadioCheckboxLabel>
        <Box
          element={`${element}_CONTENT`}
          id={helpTextId}
          display="flex"
          justifyContent="space-between"
          width="100%"
          paddingLeft="space50"
          alignItems="center"
        >
          {children}
        </Box>
      </Box>
    );
  }
);
VisualPickerRadio.displayName = 'VisualPickerRadio';
