import * as React from 'react';
import type {BoxProps} from '@twilio-paste/box';
import {Box} from '@twilio-paste/box';
import {InputElement} from '@twilio-paste/input';

interface GrowingInputProps {
  initialValue?: string;
  element?: BoxProps['element'];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  value?: HTMLInputElement['value'];
}

export const GrowingInput = React.forwardRef<HTMLInputElement, GrowingInputProps>(
  ({element = 'GROWING_INPUT', onChange, initialValue = '', value, ...props}, ref) => {
    const [text, setText] = React.useState(value || initialValue);

    /*
     * The trick is to make the input 100% width of the wrapper
     * and the wrapper is sized based on the content of the _after
     * which is also given 0 height to not break the flow of the page
     * and whiteSpace nowrap is the trick to make `min-content` not
     * fall apart on whitespace characters. We also make sure to replace multiple
     * space characters with a single space for the same reason.
     */
    // Note if updating Input designs we may need to update these props.
    return (
      <Box
        element={`${element}_CONTAINER`}
        display="inline-grid"
        gridTemplateColumns="min-content"
        maxWidth="100%"
        overflow="hidden"
        /*
         * FIX: Mostly works, hack fix to get the height just
         * right between no pills selected and some pills selected
         */
        height="28px"
        alignContent="center"
        _after={{
          content: `"${text}"`,
          fontFamily: 'inherit',
          fontSize: 'fontSize30',
          fontWeight: 'fontWeightMedium',
          paddingX: 'space40',
          visibility: 'hidden',
          height: 'size0',
          whiteSpace: 'nowrap',
        }}
      >
        <InputElement
          {...props}
          ref={ref}
          element={element}
          type="text"
          value={value != null ? value.replace(/  +/g, ' ') : text}
          padding="space0"
          onChange={(event) => {
            event.preventDefault();
            // Used to set the width of the growing input
            setText(event.currentTarget.value.replace(/  +/g, ' '));

            if (onChange != null) {
              onChange(event);
            }
          }}
        />
      </Box>
    );
  }
);
GrowingInput.displayName = 'GrowingInput';
