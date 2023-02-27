import * as React from 'react';
import PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {StyledBase} from '@twilio-paste/theme';
import {NonModalDialogPrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import type {ResponsiveValue} from '@twilio-paste/styling-library';

import {PopoverArrow} from './PopoverArrow';
import {PopoverContext} from './PopoverContext';

const StyledPopover = React.forwardRef<HTMLDivElement, BoxProps>(({style, width, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      width={width}
      backgroundColor="colorBackgroundBody"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderColor="colorBorderWeaker"
      borderRadius="borderRadius30"
      boxShadow="shadowLow"
      maxWidth="size50"
      zIndex="zIndex80"
      _focus={{outline: 'none'}}
      style={style}
      ref={ref}
    />
  );
});

StyledPopover.displayName = 'StyledPopover';

type WidthOptions = 'size10' | 'size20' | 'size30' | 'size40' | 'size50';

export interface PopoverProps extends Pick<BoxProps, 'element'> {
  'aria-label': string;
  children: React.ReactNode;
  i18nDismissLabel?: string;
  width?: ResponsiveValue<WidthOptions>;
  initialFocusRef?: React.RefObject<any>;
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({children, element = 'POPOVER', i18nDismissLabel = 'Close popover', initialFocusRef, ...props}, ref) => {
    const popover = React.useContext(PopoverContext);

    React.useEffect(() => {
      if (popover.visible && initialFocusRef) {
        initialFocusRef.current?.focus();
      }
    }, [popover.visible, initialFocusRef]);

    return (
      <NonModalDialogPrimitive {...(popover as any)} {...props} as={StyledPopover} ref={ref} preventBodyScroll={false}>
        {/* import Paste Theme Based Styles due to portal positioning. */}
        <StyledBase>
          <PopoverArrow {...(popover as any)} />
          <Box element={element} padding="space90">
            <Box position="absolute" right={16} top={16}>
              <Button
                element={`${element}_CLOSE_BUTTON`}
                variant="secondary_icon"
                size="reset"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore Property 'hide' does not exist on type 'Partial<PopoverState>', but reakit docs suggest using it (https://reakit.io/docs/popover/#initial-focus)
                onClick={popover.hide}
              >
                <CloseIcon element={`${element}_CLOSE_ICON`} decorative size="sizeIcon10" />
                <ScreenReaderOnly>{i18nDismissLabel}</ScreenReaderOnly>
              </Button>
            </Box>
            {children}
          </Box>
        </StyledBase>
      </NonModalDialogPrimitive>
    );
  }
);

Popover.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  i18nDismissLabel: PropTypes.string,
  initialFocusRef: PropTypes.object as any,
  width: PropTypes.oneOf(['size10', 'size20', 'size30', 'size40', 'size50'] as WidthOptions[]),
};

Popover.displayName = 'Popover';
export {Popover};
