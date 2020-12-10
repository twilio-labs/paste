import {Box} from '@twilio-paste/core/box';
import {Button} from '@twilio-paste/core/button';
import {useUID} from '@twilio-paste/uid-library';
import {TextArea} from '@twilio-paste/core/textarea';
import {generateThemeFromTokens} from '@twilio-paste/core/theme';
import {Modal, ModalHeading, ModalHeader, ModalBody, ModalFooter, ModalFooterActions} from '@twilio-paste/core/modal';
import {TokenSelector} from './TokenSelector';
import {TokenContext} from '../../../context/TokenContext';
import {TopBar} from '../../topbar';
import {Preview} from '../../preview';
import {SITE_MASTHEAD_HEIGHT} from '../../../constants';

const EditorWrapper = props => {
  const {tokens} = React.useContext(TokenContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();
  const modalTextareaID = useUID();

  const customTheme = React.useMemo(
    () =>
      generateThemeFromTokens(
        tokens.backgroundColors,
        tokens.borderColors,
        tokens.borderWidths,
        tokens.radii,
        tokens.fonts,
        tokens.fontSizes,
        tokens.fontWeights,
        tokens.lineHeights,
        tokens.boxShadows,
        tokens.sizings,
        tokens.spacings,
        tokens.textColors,
        tokens.zIndices
      ),
    [tokens]
  );

  const themeJson = JSON.stringify(customTheme, null, '  ');
  const themeDownload = 'data:application/json;charset=utf-8,' + encodeURIComponent(themeJson);

  return (
    <>
      <TopBar />
      <Box display="flex" height={`calc(100vh - ${SITE_MASTHEAD_HEIGHT}px)`} overflow="hidden">
        <Box maxWidth="size40" width="100%" display="flex" flexDirection="column">
          <TokenSelector />
          <Box padding="space60" flexGrow={1} overflow="scroll">
            {props.children}
          </Box>
          <Box backgroundColor="colorBackground" padding="space60">
            <Button variant="primary" onClick={handleOpen} fullWidth>
              Export
            </Button>
            <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
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
          </Box>
        </Box>
        <Preview />
      </Box>
    </>
  );
};

export {EditorWrapper};
