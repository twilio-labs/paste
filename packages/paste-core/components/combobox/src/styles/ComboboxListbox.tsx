import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

export interface ComboboxListboxProps {
  children: NonNullable<React.ReactNode>;
}

const ComboboxListbox = React.forwardRef<HTMLUListElement, ComboboxListboxProps>(({children, ...props}, ref) => {
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
});

ComboboxListbox.displayName = 'ComboboxListbox';

if (process.env.NODE_ENV === 'development') {
  ComboboxListbox.propTypes = {
    children: PropTypes.node.isRequired,
  };
}

export {ComboboxListbox};
