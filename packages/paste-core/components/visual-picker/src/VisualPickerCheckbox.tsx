import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {BaseRadioCheckboxControl, BaseRadioCheckboxLabel} from '@twilio-paste/base-radio-checkbox';
import {HiddenCheckbox, CheckboxIcon} from '@twilio-paste/checkbox';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {useMergeRefs} from '@twilio-paste/utils';
import {type BorderColor} from '@twilio-paste/style-props';

import {VisualPickerCheckboxContext} from './VisualPickerContext';
import {type VisualPickerCheckboxProps} from './types';

export const VisualPickerCheckbox = React.forwardRef<HTMLInputElement, VisualPickerCheckboxProps>(
  ({checked, element = 'VISUAL_PICKER_CHECKBOX', children, id, indeterminate, labelText, onChange, ...props}, ref) => {
    const [isHovering, setIsHovering] = React.useState(false);

    const visualPickerCheckboxGroupContext = React.useContext(VisualPickerCheckboxContext);
    const helpTextId = useUID();
    const labelId = useUID();
    const checkboxId = id ? id : useUID();

    // Prioritizing direct props values over whatever visualPickerCheckboxGroupContext passes down
    const disabled = props.disabled != null ? props.disabled : visualPickerCheckboxGroupContext.groupIsDisabled;
    const name = props.name != null ? props.name : visualPickerCheckboxGroupContext.name;
    const hasError = props.hasError != null ? props.hasError : visualPickerCheckboxGroupContext.groupHasError;

    const {groupHasError, groupIsDisabled} = visualPickerCheckboxGroupContext;

    const internalRef = React.useRef<HTMLInputElement>();
    const mergedRef = useMergeRefs(internalRef, ref) as React.Ref<HTMLInputElement>;

    let pickerBorderColor = 'colorBorderWeak' as BorderColor;
    if (disabled || groupIsDisabled) pickerBorderColor = 'colorBorderWeak';
    else if (hasError || groupHasError) pickerBorderColor = 'colorBorderError' as BorderColor;
    else if (checked) pickerBorderColor = 'colorBorderPrimary' as BorderColor;

    return (
      <Box
        element={element}
        position="relative"
        display="inline-flex"
        alignItems={visualPickerCheckboxGroupContext.orientation === 'vertical' ? 'center' : 'flex-start'}
        flexDirection="row"
        height="100%"
        backgroundColor={disabled || groupIsDisabled ? 'colorBackgroundWeak' : undefined}
        borderStyle="solid"
        borderColor={pickerBorderColor}
        borderWidth="borderWidth10"
        borderRadius="borderRadius30"
        padding="space50"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={(e) => {
          internalRef.current?.click();
          internalRef.current?.focus();
          e.stopPropagation();
        }}
        _hover={
          disabled || groupIsDisabled
            ? {cursor: 'not-allowed'}
            : {
                cursor: 'pointer',
                borderColor: hasError || groupHasError ? 'colorBorderErrorStronger' : 'colorBorderPrimaryStrong',
              }
        }
      >
        <HiddenCheckbox
          {...safelySpreadBoxProps(props)}
          checked={checked}
          disabled={disabled}
          name={name}
          onChange={(e) => {
            onChange(e);
          }}
          aria-describedby={helpTextId}
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-labelledby={labelId}
          aria-invalid={hasError}
          id={checkboxId}
          ref={mergedRef}
        />
        <BaseRadioCheckboxLabel disabled={disabled} htmlFor={checkboxId} id={labelId}>
          <ScreenReaderOnly>{labelText}</ScreenReaderOnly>
          <BaseRadioCheckboxControl
            onClick={(e) => e.stopPropagation()}
            borderRadius="borderRadius20"
            element={`${element}_CONTROL`}
            disabled={disabled}
            position="relative"
            type="checkbox"
            applyHoverStyles={isHovering}
          >
            <CheckboxIcon element={`${element}_ICON`} checked={checked} indeterminate={indeterminate} />
          </BaseRadioCheckboxControl>
        </BaseRadioCheckboxLabel>

        <Box
          element={`${element}_CONTENT`}
          id={helpTextId}
          paddingLeft="space50"
          opacity={disabled || groupIsDisabled ? '70%' : '100%'}
        >
          {children}
        </Box>
      </Box>
    );
  }
);
VisualPickerCheckbox.displayName = 'VisualPickerCheckbox';
