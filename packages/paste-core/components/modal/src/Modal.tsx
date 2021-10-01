import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import {useTransition, animated} from '@twilio-paste/animation-library';
import {safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';
import {pasteBaseStyles} from '@twilio-paste/theme';
import {ModalDialogPrimitiveOverlay, ModalDialogPrimitiveContent} from '@twilio-paste/modal-dialog-primitive';
import {ModalContext} from './ModalContext';
import {addConsoleHeightPatch, removeConsoleHeightPatch} from './utils/consoleUtils';

export const ModalDialogOverlay = animated(
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
export const ModalDialogContent = animated(
  /* eslint-disable emotion/syntax-preference */
  styled(ModalDialogPrimitiveContent)<ModalDialogContentProps>(({size}) =>
    css({
      width: '100%',
      maxWidth: size === 'wide' ? 'size80' : 'size60',
      maxHeight: '90%',
      minHeight: '170px',
      backgroundColor: 'colorBackgroundBody',
      borderColor: 'colorBorderWeak',
      borderRadius: 'borderRadius20',
      borderStyle: 'solid',
      borderWidth: 'borderWidth10',
      boxShadow: 'shadow',
      display: 'flex',
      flexDirection: 'column',
    })
  )
  /* eslint-enable */
);

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  isOpen: boolean;
  onDismiss: () => void;
  allowPinchZoom?: boolean;
  size: Sizes;
  initialFocusRef?: React.RefObject<any>;
  ariaLabelledby: string;
  // Adds an 80px margin to the root elements on the Console application
  __console_patch?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAnimationStates = (isConsole: boolean): any => ({
  from: {opacity: 0, transform: `scale(0.675)`},
  enter: {opacity: 1, transform: `scale(1)`},
  // FIXME: We remove the animation on modal close in console because
  // react-spring v9 currently doesn't have a hook into animation destroyed
  // Ideally it should still animate and the hack should be applied after
  // the animation ends.
  leave: isConsole ? null : {opacity: 0, transform: `scale(0.675)`},
  // https://www.react-spring.io/docs/hooks/api
  config: {
    mass: 0.5,
    tension: 370,
    friction: 26,
  },
});

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      element = 'MODAL',
      isOpen,
      onDismiss,
      allowPinchZoom = true,
      initialFocusRef,
      ariaLabelledby,
      size,
      __console_patch = false,
      ...props
    },
    ref
  ) => {
    const transitions = useTransition(isOpen, getAnimationStates(__console_patch));

    React.useEffect(() => {
      if (__console_patch && isOpen) {
        addConsoleHeightPatch();
      }
      return () => {
        if (__console_patch) {
          removeConsoleHeightPatch();
        }
      };
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
                data-paste-element={`${element}_OVERLAY`}
              >
                <ModalDialogContent
                  aria-labelledby={ariaLabelledby}
                  {...safelySpreadBoxProps(props)}
                  data-paste-element={element}
                  ref={ref}
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
  }
);
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
