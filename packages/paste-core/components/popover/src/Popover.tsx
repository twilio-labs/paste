import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {StyledBase} from '@twilio-paste/theme';
import {NonModalDialogPrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import {PopoverArrow} from './PopoverArrow';
import {PopoverContext} from './PopoverContext';

export interface PopoverProps {
  'aria-label': string;
  children: React.ReactNode;
}

const StyledPopover = React.forwardRef<HTMLDivElement, BoxProps>(({style, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor="colorBackgroundBody"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderColor="colorBorderWeaker"
      borderRadius="borderRadius20"
      boxShadow="shadowCard"
      maxWidth="size30"
      zIndex="zIndex80"
      _focus={{outline: 'none'}}
      style={style}
      ref={ref}
    />
  );
});

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(({children, ...props}, ref) => {
  const popover = React.useContext(PopoverContext);
  return (
    <NonModalDialogPrimitive {...(popover as any)} {...props} as={StyledPopover} ref={ref} preventBodyScroll={false}>
      {/* import Paste Theme Based Styles due to portal positioning. */}
      <StyledBase>
        <PopoverArrow {...(popover as any)} />
        <Box padding="space50" paddingLeft="space70" paddingRight="space70">
          {children}
          <Box position="absolute" right={8} top={8}>
            <Button
              variant="reset"
              size="reset"
              // @ts-ignore
              // Property 'hide' does not exist on type 'Partial<PopoverState>'
              // But reakit docs suggest using it
              // https://reakit.io/docs/popover/#initial-focus
              onClick={popover.hide}
            >
              <CloseIcon decorative={false} color="colorTextWeak" size="sizeIcon30" title="Close popover" />
            </Button>
          </Box>
        </Box>
      </StyledBase>
    </NonModalDialogPrimitive>
  );
});

if (process.env.NODE_ENV === 'development') {
  Popover.propTypes = {
    'aria-label': PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
}

Popover.displayName = 'Popover';
export {Popover};
