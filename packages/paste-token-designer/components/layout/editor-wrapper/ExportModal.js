import {Button} from '@twilio-paste/core/button';
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
  const customTheme = generateThemeFromTokens(
    tokens.backgroundColors,
    tokens.borderColors,
    tokens.borderWidths,
    tokens.radii,
    tokens.colors,
    tokens.fonts,
    tokens.fontSizes,
    tokens.fontWeights,
    tokens.lineHeights,
    tokens.boxShadows,
    tokens.sizings,
    tokens.spacings,
    tokens.textColors,
    tokens.zIndices
  );

  const themeJson = JSON.stringify(customTheme, null, '  ');
  const themeDownload = 'data:application/json;charset=utf-8,' + encodeURIComponent(themeJson);

  return (
    <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={onDismiss} size="default">
      <ModalHeader>
        <ModalHeading as="h3" id={modalHeadingID}>
          Copy Theme JSON
        </ModalHeading>
      </ModalHeader>
      <ModalBody>
        <TextArea id={modalTextareaID} onChange={() => {}} readOnly>
          {themeJson}
        </TextArea>
      </ModalBody>
      <ModalFooter>
        <ModalFooterActions>
          <Button as="a" href={themeDownload} variant="primary" download="customTheme.json">
            Download
          </Button>
        </ModalFooterActions>
      </ModalFooter>
    </Modal>
  );
};

export {ExportModal};
