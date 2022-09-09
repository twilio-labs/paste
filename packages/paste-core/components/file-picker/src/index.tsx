import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Label, RequiredDot} from '@twilio-paste/label';
import {Text} from '@twilio-paste/text';
import {useUID} from '@twilio-paste/uid-library';
import {Button} from '@twilio-paste/button';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/media-object';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface FilePickerProps extends React.HTMLAttributes<HTMLInputElement>, Pick<BoxProps, 'element'> {
  disabled?: boolean;
  required?: boolean;
}

const FilePicker = React.forwardRef<HTMLInputElement, FilePickerProps>(
  ({element = 'FILEPICKER_CONTAINER', disabled = false, required = false, ...props}, ref) => {
    const [fileName, setFileName] = React.useState('No files selected');

    const id = useUID();

    const handleChange = (evt: any): void => {
      const file = evt.target.value;
      setFileName(file);
      console.log('the event', evt);
      console.log('file name', fileName);
    };

    return (
      <MediaObject {...props}>
        <MediaFigure spacing="space30">
          <Label htmlFor={id} element={element}>
            <Box
              // The actual <input type="file"/> is hidden but still appears in the DOM
              id={id}
              ref={ref}
              as="input"
              type="file"
              aria-disabled={disabled}
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
            {required ? <RequiredDot /> : <></>}
            <Button variant="secondary" as="span" size="small" disabled={disabled}>
              Choose a file
            </Button>
          </Label>
        </MediaFigure>
        <Box height="100%" display="flex" verticalAlign="center">
          <MediaBody as="div">
            {/* vertically center text */}
            <Text as="span" color={disabled ? 'colorTextWeaker' : 'currentColor'} fontWeight="fontWeightMedium">
              {fileName}
            </Text>
          </MediaBody>
        </Box>
      </MediaObject>
    );
  }
);

FilePicker.displayName = 'FilePicker';

FilePicker.propTypes = {
  element: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

export {FilePicker};
