import {Button} from '@twilio-paste/core/button';
import {Paragraph} from '@twilio-paste/core/paragraph';
import {useUID} from '@twilio-paste/uid-library';
import {TextArea} from '@twilio-paste/core/textarea';
import {generateThemeFromTokens} from '@twilio-paste/core/theme';
import {Modal, ModalHeading, ModalHeader, ModalBody, ModalFooter, ModalFooterActions} from '@twilio-paste/core/modal';
import {TokenContext} from '../../../context/TokenContext';

const ExportModal = ({isOpen, onDismiss}) => {
  const {tokens} = React.useContext(TokenContext);
  const modalHeadingID = useUID();
  const modalTextareaID = useUID();

  // Builds the new tokens JSON from the custom theme build from various inputs
  const customTheme = generateThemeFromTokens(tokens);

  const themeJson = JSON.stringify(customTheme, null, '  ');
  const themeDownload = 'data:application/json;charset=utf-8,' + encodeURIComponent(themeJson);

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
        <TextArea id={modalTextareaID} onChange={() => {}} readOnly>
          {themeJson}
        </TextArea>
      </ModalBody>
      <ModalFooter>
        <ModalFooterActions>
          <Button variant="primary" disabled>
            Deploy
          </Button>
          <Button as="a" href={themeDownload} variant="primary" download="customTheme.json">
            Download
          </Button>
        </ModalFooterActions>
      </ModalFooter>
    </Modal>
  );
};

export {ExportModal};
