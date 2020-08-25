import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useTransition, animated} from '@twilio-paste/animation-library';
import {StyledBase} from '@twilio-paste/theme';
import {ModalDialogPrimitiveOverlay, ModalDialogPrimitiveContent} from '@twilio-paste/modal-dialog-primitive';
import {Box, BoxProps} from '@twilio-paste/box';
import {ModalContext} from './ModalContext';
import {addConsoleHeightPatch, removeConsoleHeightPatch} from './utils/consoleUtils';

type PasteModalOverlay = Pick<BoxProps, 'element'>;
export const PasteModalOverlay: React.FC<PasteModalOverlay> = ({element = 'MODAL_OVERLAY', ...props}) => {
  return (
    <Box
      as={ModalDialogPrimitiveOverlay}
      element={element}
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      left={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      backgroundColor="colorBackgroundOverlay"
      // Console navigation has a high zIndex value, so we need a
      // higher one to make sure the overlay is on top of the
      // navigation. The current zIndex tokens only go up to 90.
      // @ts-ignore
      zIndex="2000"
      {...props}
    />
  );
};

const ModalDialogOverlay = animated<any>(PasteModalOverlay);

type Sizes = 'default' | 'wide';

interface ModalDialogContentProps extends Pick<BoxProps, 'element'> {
  size?: Sizes;
}
export const PasteModalDialogContent: React.FC<ModalDialogContentProps> = ({size, ...props}) => {
  return (
    <Box
      as={ModalDialogPrimitiveContent}
      width="100%"
      maxWidth={size === 'wide' ? 'size80' : 'size60'}
      // @ts-ignore
      maxHeight="90%"
      // @ts-ignore
      minHeight="170px"
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius20"
      boxShadow="shadowCard"
      display="flex"
      flexDirection="column"
      {...props}
    />
  );
};
const ModalDialogContent = animated<any>(PasteModalDialogContent);

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  isOpen: boolean;
  onDismiss: () => void;
  allowPinchZoom?: boolean;
  size: Sizes;
  initialFocusRef?: React.RefObject<any>;
  ariaLabelledby: string;
  // Adds an 80px margin to the root elements on the Console application
  __console_patch?: boolean;
}

const AnimationStates = {
  from: {opacity: 0, transform: `scale(0.675)`},
  enter: {opacity: 1, transform: `scale(1)`},
  leave: {opacity: 0, transform: `scale(0.675)`},
  // https://www.react-spring.io/docs/hooks/api
  config: {
    mass: 0.5,
    tension: 370,
    friction: 26,
  },
};

const Modal: React.FC<ModalProps> = ({
  children,
  element = 'MODAL',
  isOpen,
  onDismiss,
  allowPinchZoom = true,
  initialFocusRef,
  ariaLabelledby,
  size,
  // eslint-disable-next-line @typescript-eslint/camelcase
  __console_patch = false,
  ...props
}) => {
  const transitions = useTransition(isOpen, AnimationStates);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    if (__console_patch) {
      if (isOpen) {
        addConsoleHeightPatch();
      } else {
        removeConsoleHeightPatch();
      }
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
  }, [isOpen, __console_patch]);

  return (
    <ModalContext.Provider value={{onDismiss}}>
      {transitions(
        (styles, item) =>
          item && (
            <ModalDialogOverlay
              element={`${element}_OVERLAY`}
              onDismiss={onDismiss}
              allowPinchZoom={allowPinchZoom}
              initialFocusRef={initialFocusRef}
              style={{opacity: styles.opacity}}
            >
              <ModalDialogContent aria-labelledby={ariaLabelledby} element={element} {...props} size={size}>
                <StyledBase>{children}</StyledBase>
              </ModalDialogContent>
            </ModalDialogOverlay>
          )
      )}
    </ModalContext.Provider>
  );
};
Modal.displayName = 'Modal';

if (process.env.NODE_ENV === 'development') {
  Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onDismiss: PropTypes.func.isRequired,
    allowPinchZoom: PropTypes.bool,
    size: PropTypes.oneOf(['default', 'wide'] as Sizes[]).isRequired,
    initialFocusRef: PropTypes.object as any,
    ariaLabelledby: PropTypes.string.isRequired,
  };
}

export {Modal};
