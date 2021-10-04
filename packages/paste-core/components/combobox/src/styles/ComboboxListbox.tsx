import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface ComboboxListboxProps extends Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
}

const ComboboxListbox = React.forwardRef<HTMLUListElement, ComboboxListboxProps>(
  ({children, element = 'COMBOBOX', ...props}, ref) => {
    // TODO:
    // Right now the listbox is absolutely positioned. This will
    // fail if a combobox is placed at the bottom of a screen
    // so we need upgrade the positioning using popperjs in the future.
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        backgroundColor="colorBackgroundBody"
        borderRadius="borderRadius20"
        borderColor="colorBorderWeak"
        borderWidth="borderWidth10"
        borderStyle="solid"
        boxShadow="shadow"
        element={`${element}_LISTBOX`}
        listStyleType="none"
        margin="space0"
        overflowY="auto"
        padding="space0"
        paddingY="space30"
        position="absolute"
        width="100%"
        maxHeight="size30"
        zIndex="zIndex20"
        marginTop="space20"
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

ComboboxListbox.displayName = 'ComboboxListbox';

ComboboxListbox.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export {ComboboxListbox};
