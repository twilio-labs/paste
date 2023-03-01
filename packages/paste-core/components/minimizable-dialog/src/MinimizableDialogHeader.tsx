import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {ChevronUpIcon} from '@twilio-paste/icons/esm/ChevronUpIcon';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import type {BoxProps} from '@twilio-paste/box';
import {MinusIcon} from '@twilio-paste/icons/esm/MinusIcon';

import {MinimizableDialogContext} from './MinimizableDialogContext';

export interface MinimizableDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  i18nDismissLabel?: string;
  i18nMinimizeLabel?: string;
  element?: BoxProps['element'];
}

const MinimizableDialogHeader = React.forwardRef<HTMLDivElement, MinimizableDialogHeaderProps>(
  (
    {
      children,
      element = 'MINIMIZABLE_DIALOG_HEADER',
      i18nDismissLabel = 'close',
      i18nMinimizeLabel = 'minimize',
      ...props
    },
    ref
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Property 'hide' does not exist on type 'Partial<PopoverState>', but reakit docs suggest using it (https://reakit.io/docs/popover/#initial-focus)
    const {hide, minimized, minimize, expand} = React.useContext(MinimizableDialogContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        display="grid"
        gridTemplateColumns="1fr auto auto"
        columnGap="space30"
        backgroundColor="colorBackground"
        paddingX="space70"
        paddingY="space40"
        color="colorTextWeak"
        overflow="hidden"
        borderBottomWidth="borderWidth10"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderWeaker"
        borderTopRightRadius="borderRadius20"
        borderTopLeftRadius="borderRadius20"
        element={element}
      >
        <Box
          as="h2"
          element={`${element}_HEADING`}
          fontWeight="fontWeightBold"
          fontSize="fontSize30"
          lineHeight="lineHeight30"
          margin="space0"
        >
          {children}
        </Box>
        <Button
          element={`${element}_MINIMIZE_BUTTON`}
          variant="reset"
          size="reset"
          onClick={minimized ? expand : minimize}
          aria-pressed={minimized === undefined ? false : minimized}
        >
          {minimized ? (
            <ChevronUpIcon element={`${element}_MINIMIZE_ICON`} decorative size="sizeIcon20" />
          ) : (
            <MinusIcon element={`${element}_MINIMIZE_ICON`} decorative size="sizeIcon20" />
          )}
          <ScreenReaderOnly>{i18nMinimizeLabel}</ScreenReaderOnly>
        </Button>
        <Button element={`${element}_CLOSE_BUTTON`} variant="reset" size="reset" onClick={hide}>
          <CloseIcon element={`${element}_CLOSE_ICON`} decorative size="sizeIcon20" />
          <ScreenReaderOnly>{i18nDismissLabel}</ScreenReaderOnly>
        </Button>
      </Box>
    );
  }
);

MinimizableDialogHeader.displayName = 'MinimizableDialogHeader';

MinimizableDialogHeader.propTypes = {
  children: PropTypes.node,
  i18nDismissLabel: PropTypes.string,
  i18nMinimizeLabel: PropTypes.string,
  element: PropTypes.string,
};

export {MinimizableDialogHeader};
