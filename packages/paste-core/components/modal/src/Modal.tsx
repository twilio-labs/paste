import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import {useTransition, animated} from '@twilio-paste/animation-library';
import {pasteBaseStyles} from '@twilio-paste/theme';
import {ModalDialogPrimitiveOverlay, ModalDialogPrimitiveContent} from '@twilio-paste/modal-dialog-primitive';
import {ModalContext} from './ModalContext';
import {addConsoleHeightPatch, removeConsoleHeightPatch} from './utils/consoleUtils';

const ModalDialogOverlay = animated(
  /* eslint-disable emotion/syntax-preference */
  styled(ModalDialogPrimitiveOverlay)(
    css({
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'colorBackgroundOverlay',
      zIndex: 'zIndex80',
    }),
    // import Paste Theme Based Styles due to portal positioning.
    // reach portal is a sibling to the main app, so you are now
    // no longer a child of the theme provider. We need to re-set
    // some of the base styles that we rely on inheriting from
    // such as font-family and line-height so that compositions
    // of paste components in the modal are styled correctly
    pasteBaseStyles
  )
  /* eslint-enable */
);

type Sizes = 'default' | 'wide';

interface ModalDialogContentProps {
  size?: Sizes;
}
const ModalDialogContent = animated(
  /* eslint-disable emotion/syntax-preference */
  styled(ModalDialogPrimitiveContent)<ModalDialogContentProps>(({size}) =>
    css({
      width: '100%',
      maxWidth: size === 'wide' ? 'size80' : 'size60',
      maxHeight: '90%',
      minHeight: '170px',
      backgroundColor: 'colorBackgroundBody',
      borderRadius: 'borderRadius20',
      boxShadow: 'shadowCard',
      display: 'flex',
      flexDirection: 'column',
    })
  )
  /* eslint-enable */
);

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
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
              onDismiss={onDismiss}
              allowPinchZoom={allowPinchZoom}
              initialFocusRef={initialFocusRef}
              style={{opacity: styles.opacity}}
            >
              <ModalDialogContent
                aria-labelledby={ariaLabelledby}
                {...props}
                className={null}
                style={styles}
                size={size}
              >
                {children}
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
