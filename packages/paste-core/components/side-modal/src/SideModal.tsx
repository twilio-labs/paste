import * as React from 'react';
import PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {useTransition, animated} from '@twilio-paste/animation-library';
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
    position="fixed"
    top="0 !important"
    left="auto !important"
    right="0 !important"
    bottom="0 !important"
    _focus={{
      outline: 'none',
    }}
  />
));
StyledSideModal.displayName = 'StyledSideModal';

const AnimatedStyledSideModal = animated(StyledSideModal);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAnimationStates = (): any => ({
  from: {opacity: 0, transform: `translateX(100%)`},
  enter: {opacity: 1, transform: `translateX(0%)`},
  leave: {opacity: 0, transform: `translateX(100%)`},
  // https://www.react-spring.io/docs/hooks/api
  config: {
    mass: 0.3,
    tension: 288,
    friction: 15,
  },
});

export interface SideModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  'aria-label': string;
  element?: BoxProps['element'];
}

export const SideModal = React.forwardRef<HTMLDivElement, SideModalProps>(
  ({children, element = 'SIDE_MODAL', ...props}, ref) => {
    const dialog = React.useContext(SideModalContext);
    const transitions = useTransition(dialog.visible, getAnimationStates());

    /*
     * The portal from Reakit closes/cleans up before the animation can handle the unmount.
     * To enable an unmount animation we need to hardcode `visible={true}` on NonModalDialogPrimitive
     * so that react-spring can manage cleanup. That said, I think it looks better to close instantly.
     */
    return transitions((styles, item) => {
      return (
        item && (
          <NonModalDialogPrimitive
            {...dialog}
            {...safelySpreadBoxProps(props)}
            as={AnimatedStyledSideModal}
            element={`${element}_CONTAINER`}
            ref={ref}
            preventBodyScroll={false}
            hideOnClickOutside={false}
            style={styles}
          >
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
        )
      );
    });
  }
);

SideModal.displayName = 'SideModal';

SideModal.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};
