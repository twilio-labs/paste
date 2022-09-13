import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text} from '@twilio-paste/text';
import {useUID} from '@twilio-paste/uid-library';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {safelySpreadBoxProps} from '@twilio-paste/box';

export interface FilePickerProps extends React.HTMLAttributes<HTMLInputElement>, Pick<BoxProps, 'element'> {
  accept?: string;
  children: React.ReactElement;
  disabled?: boolean;
  i18nNoSelectionText?: string;
  required?: boolean;
}

const FilePicker = React.forwardRef<HTMLInputElement, FilePickerProps>(
  (
    {
      element = 'FILEPICKER',
      accept,
      id = useUID(),
      children,
      disabled = false,
      i18nNoSelectionText = 'No files selected',
      required = false,
      ...props
    },
    ref
  ) => {
    const [fileDescription, setFileDescription] = React.useState(i18nNoSelectionText);

    const textId = useUID();

    const handleChange = (evt: any): void => {
      const file = evt.target.files[0].name;
      setFileDescription(file);
    };

    return (
      <>
        <label htmlFor={id}>
          <Stack element={element} orientation="horizontal" spacing="space30">
            {React.cloneElement(children, {disabled: disabled, element: `${element}_BUTTON`})}
            <Text
              id={textId}
              as="span"
              color={disabled ? 'colorTextWeaker' : 'currentColor'}
              fontWeight="fontWeightMedium"
              element={`${element}_TEXT`}
            >
              {fileDescription}
            </Text>
          </Stack>
        </label>
        <Box
          // The actual <input type="file"/> is hidden but still appears in the DOM
          {...safelySpreadBoxProps(props)}
          id={id}
          ref={ref}
          as="input"
          type="file"
          // @ts-expect-error
          accept={accept}
          aria-disabled={disabled}
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
      </>
    );
  }
);

FilePicker.displayName = 'FilePicker';

FilePicker.propTypes = {
  accept: PropTypes.string,
  children: PropTypes.element.isRequired,
  element: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

export {FilePicker};
