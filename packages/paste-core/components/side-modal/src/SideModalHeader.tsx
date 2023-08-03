import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

import {SideModalContext} from './SideModalContext';

export interface SideModalHeaderProps extends HTMLPasteProps<'div'> {
  children?: React.ReactNode;
  i18nDismissLabel?: string;
  element?: BoxProps['element'];
}

const SideModalHeader = React.forwardRef<HTMLDivElement, SideModalHeaderProps>(
  ({children, element = 'SIDE_MODAL_HEADER', i18nDismissLabel = 'close', ...props}, ref) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Property 'hide' does not exist on type 'Partial<PopoverState>', but reakit docs suggest using it (https://reakit.io/docs/popover/#initial-focus)
    const {hide} = React.useContext(SideModalContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        paddingRight="space90"
        paddingLeft="space90"
        paddingTop="space90"
        element={element}
        display="flex"
        flexDirection="row"
      >
        <Box display="flex" flexGrow={1} marginRight="space70" alignItems="center">
          {children}
        </Box>
        <Button element={`${element}_CLOSE_BUTTON`} variant="secondary_icon" size="reset" onClick={hide}>
          <CloseIcon element={`${element}_CLOSE_ICON`} decorative size="sizeIcon20" />
          <ScreenReaderOnly>{i18nDismissLabel}</ScreenReaderOnly>
        </Button>
      </Box>
    );
  }
);

SideModalHeader.displayName = 'SideModalHeader';

SideModalHeader.propTypes = {
  children: PropTypes.node,
  i18nDismissLabel: PropTypes.string,
  element: PropTypes.string,
};

export {SideModalHeader};
