import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {pasteBaseStyles} from '@twilio-paste/theme';
import {ModalDialogPrimitiveOverlay, ModalDialogPrimitiveContent} from '@twilio-paste/modal-dialog-primitive';
import {ModalContext} from './ModalContext';

const ModalDialogOverlay = styled(ModalDialogPrimitiveOverlay)(
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
  }),
  // import Paste Theme Based Styles due to portal positioning.
  // reach portal is a sibling to the main app, so you are now
  // no longer a child of the theme provider. We need to re-set
  // some of the base styles that we rely on inheriting from
  // such as font-family and line-height so that compositions
  // of paste components in the modal are styled correctly
  pasteBaseStyles
);

type Sizes = 'default' | 'wide';

interface ModalDialogContainerProps {
  size?: Sizes;
}
const ModalDialogContainer = styled(ModalDialogPrimitiveContent)<ModalDialogContainerProps>(({size}) =>
  css({
    width: '100%',
    maxWidth: size === 'wide' ? 'size80' : 'size60',
    maxHeight: '90%',
    backgroundColor: 'colorBackgroundBody',
    borderRadius: 'borderRadius20',
    boxShadow: 'shadowCard',
    display: 'flex',
    flexDirection: 'column',
  })
);

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  isOpen: boolean;
  onDismiss: () => void;
  allowPinchZoom?: boolean;
  size: Sizes;
  initialFocusRef?: React.RefObject<any>;
  ariaLabelledby: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onDismiss,
  allowPinchZoom = true,
  initialFocusRef,
  ariaLabelledby,
  size,
  ...props
}) => {
  return (
    <ModalDialogOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
      allowPinchZoom={allowPinchZoom}
      initialFocusRef={initialFocusRef}
    >
      <ModalContext.Provider value={{onDismiss}}>
        <ModalDialogContainer aria-labelledby={ariaLabelledby} {...props} className={null} style={null} size={size}>
          {children}
        </ModalDialogContainer>
      </ModalContext.Provider>
    </ModalDialogOverlay>
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
