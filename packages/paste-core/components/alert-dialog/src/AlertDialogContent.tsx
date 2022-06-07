import {css, styled} from '@twilio-paste/styling-library';
import {ModalDialogContent} from '@twilio-paste/modal';
import type {ModalDialogContentProps} from '@twilio-paste/modal';

export type AlertDialogContentProps = ModalDialogContentProps;

const AlertDialogContent = styled(ModalDialogContent)<AlertDialogContentProps>(() =>
  css({
    maxWidth: 'size40',
  })
);

AlertDialogContent.displayName = 'AlertDialogContent';

export {AlertDialogContent};
