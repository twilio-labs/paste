import * as React from 'react';
import {Button} from '@twilio-paste/core/button';
import {useUID} from '@twilio-paste/uid-library';
import {TextArea} from '@twilio-paste/core/textarea';
import {useToaster, Toaster} from '@twilio-paste/core/toast';
import {generateTokensFromTheme} from '@twilio-paste/core/theme';
import {Modal, ModalHeading, ModalHeader, ModalBody, ModalFooter, ModalFooterActions} from '@twilio-paste/core/modal';
import type {ModalProps} from '@twilio-paste/core/modal';
import {TokenContext} from '../../../context/TokenContext';

type ImportModalProps = {
  isOpen: ModalProps['isOpen'];
  onDismiss: ModalProps['onDismiss'];
};
const ImportModal: React.FC<ImportModalProps> = ({isOpen, onDismiss}) => {
  const toaster = useToaster();
  const {loadTokens} = React.useContext(TokenContext);
  const importModalHeadingID = useUID();
  const importModalTextareaID = useUID();
  const [importValue, setImportValue] = React.useState('');

  const handleLoadTokens = (): void => {
    // TODO sanitize? meh for tweek
    let hasError = false;
    let theme;

    try {
      JSON.parse(importValue);
    } catch (error) {
      hasError = true;
      console.error(error);
    }

    if (hasError) {
      toaster.push({
        message: `Please make sure the theme is in the correct JSON format.`,
        variant: 'error',
        dismissAfter: 4000,
      });
    } else {
      theme = JSON.parse(importValue);

      // Builds the new custom theme using the tokens JSON from the textarea
      const newTokens = generateTokensFromTheme(theme);

      if (loadTokens != null) {
        loadTokens(newTokens);
      }
      toaster.push({
        message: `🎉 Look at that new theme. That's nice!`,
        variant: 'success',
        dismissAfter: 4000,
      });
      onDismiss();
    }
  };

  return (
    <>
      <Modal ariaLabelledby={importModalHeadingID} isOpen={isOpen} onDismiss={onDismiss} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={importModalHeadingID}>
            Import Theme JSON
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <TextArea
            id={importModalTextareaID}
            value={importValue}
            onChange={(event) => {
              setImportValue(event.target.value);
            }}
          />
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="primary" onClick={handleLoadTokens}>
              Save theme
            </Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
      <Toaster {...toaster} />
    </>
  );
};

export {ImportModal};
