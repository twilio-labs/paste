import {css, styled} from '@twilio-paste/styling-library';
import {ModalDialogContent} from '@twilio-paste/modal';

const AlertDialogContent = styled(ModalDialogContent)(() =>
  css({
    maxWidth: 'size40',
  })
);

AlertDialogContent.displayName = 'AlertDialogContent';

export {AlertDialogContent};
