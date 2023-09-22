import { Button } from '@twilio-paste/core/button';
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from '@twilio-paste/core/modal';
import type { ModalProps } from '@twilio-paste/core/modal';
import { Paragraph } from '@twilio-paste/core/paragraph';
import { TextArea } from '@twilio-paste/core/textarea';
import { generateThemeFromTokens } from '@twilio-paste/core/theme';
import { useUID } from '@twilio-paste/core/uid-library';
import * as React from 'react';

import { TokenContext } from '../../../context/TokenContext';

type ExportModalProps = {
  isOpen: ModalProps['isOpen'];
  onDismiss: ModalProps['onDismiss'];
};
const ExportModal: React.FC<React.PropsWithChildren<ExportModalProps>> = ({ isOpen, onDismiss }) => {
  const { tokens } = React.useContext(TokenContext);
  const modalHeadingID = useUID();
  const modalTextareaID = useUID();

  // Builds the new tokens JSON from the custom theme build from various inputs

  // @ts-expect-error tokens from context are based on GenericTokenShape which states that sizing keys are as optional as the rest, but generateThemeFromTokens expects sizing keys to be required
  const customTheme = generateThemeFromTokens(tokens);

  const themeJson = JSON.stringify(customTheme, null, '  ');
  const themeDownload = `data:application/json;charset=utf-8, ${encodeURIComponent(themeJson)}`;

  return (
    <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={onDismiss} size="default">
      <ModalHeader>
        <ModalHeading as="h3" id={modalHeadingID}>
          Export this theme for your app
        </ModalHeading>
      </ModalHeader>
      <ModalBody>
        <Paragraph>
          Download this JSON to use in your app, or deploy with one click for your favorite application.
        </Paragraph>
        <TextArea
          id={modalTextareaID}
          onChange={() => {
            return false;
          }}
          readOnly
        >
          {themeJson}
        </TextArea>
      </ModalBody>
      <ModalFooter>
        <ModalFooterActions>
          <Button variant="primary" disabled>
            Deploy
          </Button>
          {/* @ts-expect-error download is not exposed in the Button props */}
          <Button as="a" href={themeDownload} variant="primary" download="customTheme.json">
            Download
          </Button>
        </ModalFooterActions>
      </ModalFooter>
    </Modal>
  );
};

export { ExportModal };
