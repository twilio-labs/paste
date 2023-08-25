import * as React from 'react';

import {Text} from '@twilio-paste/text';
import {useUID} from '@twilio-paste/uid-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {SiblingBox} from '@twilio-paste/sibling-box';
import type {TextColor} from '@twilio-paste/style-props';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface FilePickerProps extends HTMLPasteProps<'input'>, Pick<BoxProps, 'element'> {
  accept?: string;
  children: React.ReactElement;
  disabled?: boolean;
  i18nNoSelectionText?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const getTextColor = (disabled: boolean, fileDescription: string, i18nNoSelectionText: string): TextColor => {
  const noFileUploaded = fileDescription === i18nNoSelectionText;
  if (disabled) return 'colorTextWeaker';
  if (noFileUploaded) return 'colorTextWeak';
  return 'colorText';
};

const FilePicker = React.forwardRef<HTMLInputElement, FilePickerProps>(
  (
    {
      element = 'FILEPICKER',
      accept,
      id = useUID(),
      children,
      disabled = false,
      i18nNoSelectionText = 'No file uploaded',
      required = false,
      onChange,
      ...props
    },
    ref
  ) => {
    const [fileDescription, setFileDescription] = React.useState(i18nNoSelectionText);

    const textId = useUID();

    const handleChange = (evt: any): void => {
      if (onChange) onChange(evt);
      if (evt.currentTarget.files && evt.currentTarget.files.length > 0) {
        const file = evt.currentTarget.files[0].name;
        setFileDescription(file);
      } else {
        setFileDescription(i18nNoSelectionText);
      }
    };

    return (
      <>
        <Box
          // The actual <input type="file"/> is hidden but still appears in the DOM
          {...safelySpreadBoxProps(props)}
          id={id}
          ref={ref}
          as="input"
          type="file"
          accept={accept}
          aria-disabled={disabled}
          disabled={disabled}
          aria-required={required}
          aria-describedby={textId}
          size="size0"
          border="none"
          overflow="hidden"
          padding="space0"
          margin="space0"
          whiteSpace="nowrap"
          textTransform="none"
          position="absolute"
          clip="rect(0 0 0 0)"
          onChange={handleChange}
        />
        <label htmlFor={id}>
          <SiblingBox
            element={element}
            width="100%"
            display="flex"
            justifyContent="start"
            as="span"
            type="file"
            borderRadius="borderRadius30"
            padding="space20"
            boxShadow="shadowBorder"
            backgroundColor="colorBackgroundBody"
            _focusSibling={{
              borderRadius: 'borderRadius30',
              padding: 'space20',
              boxShadow: 'shadowFocus',
              backgroundColor: 'colorBackgroundBody',
            }}
            _disabledSibling={{
              backgroundColor: 'colorBackground',
              boxShadow: 'shadowBorderWeaker',
            }}
          >
            {React.cloneElement(children, {disabled, element: `${element}_BUTTON`})}
            <Text
              id={textId}
              as="span"
              paddingX="space30"
              color={getTextColor(disabled, fileDescription, i18nNoSelectionText)}
              fontWeight={fileDescription === i18nNoSelectionText ? 'fontWeightNormal' : 'fontWeightMedium'}
              fontStyle={fileDescription === i18nNoSelectionText ? 'italic' : 'none'}
              element={`${element}_TEXT`}
            >
              {fileDescription}
            </Text>
          </SiblingBox>
        </label>
      </>
    );
  }
);

FilePicker.displayName = 'FilePicker';

export {FilePicker};
