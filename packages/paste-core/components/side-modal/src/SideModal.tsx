import * as React from 'react';
import PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {StyledBase} from '@twilio-paste/theme';
import {NonModalDialogPrimitive} from '@twilio-paste/non-modal-dialog-primitive';

import {SideModalContext} from './SideModalContext';

const StyledSideModal = React.forwardRef<HTMLDivElement, BoxProps>(({style, ...props}, ref) => (
  <Box
    {...safelySpreadBoxProps(props)}
    ref={ref}
    style={style}
    boxShadow="shadow"
    width="size80"
    zIndex="zIndex80"
    transform="none!important"
    inset="0rem 0rem 0rem auto!important"
    _focus={{
      outline: 'none',
    }}
  />
));

StyledSideModal.displayName = 'StyledSideModal';

export interface SideModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  'aria-label': string;
  element?: BoxProps['element'];
}

export const SideModal = React.forwardRef<HTMLDivElement, SideModalProps>(
  ({children, element = 'SIDE_MODAL', ...props}, ref) => {
    const dialog = React.useContext(SideModalContext);

    return (
      <NonModalDialogPrimitive
        {...dialog}
        {...safelySpreadBoxProps(props)}
        as={StyledSideModal}
        element={`${element}_CONTAINER`}
        ref={ref}
        preventBodyScroll={false}
        hideOnClickOutside={false}
      >
        {/* import Paste Theme Based Styles due to portal positioning. */}
        <StyledBase>
          <Box
            element={element}
            display="grid"
            gridTemplateRows="auto 1fr auto"
            height="100vh"
            backgroundColor="colorBackgroundBody"
          >
            {children}
          </Box>
        </StyledBase>
      </NonModalDialogPrimitive>
    );
  }
);

SideModal.displayName = 'SideModal';

SideModal.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};
