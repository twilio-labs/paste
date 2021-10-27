import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {pasteBaseStyles} from '@twilio-paste/theme';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {styled, css} from '@twilio-paste/styling-library';
import {ModalDialogPrimitiveOverlay, ModalDialogPrimitiveContent} from '@twilio-paste/modal-dialog-primitive';
import {SiteHeaderSearch} from './SiteHeaderSearch';

const StyledModalDialogOverlay = styled(ModalDialogPrimitiveOverlay)(
  css({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: 'space30',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'colorBackgroundOverlay',
    zIndex: 'zIndex80',
    overflow: 'scroll',
  }),
  // import Paste Theme Based Styles due to portal positioning.
  // reach portal is a sibling to the main app, so you are now
  // no longer a child of the theme provider. We need to re-set
  // some of the base styles that we rely on inheriting from
  // such as font-family and line-height so that compositions
  // of paste components in the modal are styled correctly
  pasteBaseStyles
);

const StyledModalDialogContent = styled(ModalDialogPrimitiveContent)(
  css({
    position: 'absolute',
    top: 10,
    width: 'calc(100% - 20px)',
    maxWidth: '500px',
    height: '270px',
    paddingY: 'space70',
    paddingX: 'space60',
    backgroundColor: 'colorBackgroundBody',
    borderRadius: 'borderRadius20',
  })
);

interface MobileSearchProps {
  isOpen: boolean;
  onClose: () => void;
  value: string;
  onChange: (newValue: string) => void;
}

const CoolLinks = [
  '/principles',
  '/inclusive-design',
  '/customization/composing-custom-components-with-design-tokens',
  '/patterns',
  '/content/voice-and-tone',
  '/primitives/box',
  '/components/screen-reader-only',
  '/components/alert',
  '/components/button',
  '/components/toast',
  '/components/popover',
  '/illustrations',
  '/tokens',
];

const getRandomCoolLink = (): string => {
  return CoolLinks[Math.floor(Math.random() * CoolLinks.length)];
};

const MobileSearch: React.FC<MobileSearchProps> = ({isOpen, onClose, value, onChange}) => {
  const [coolLink] = React.useState(getRandomCoolLink());
  if (!isOpen) return null;

  return (
    <StyledModalDialogOverlay onDismiss={onClose} allowPinchZoom>
      <Box height="600px" width="100vw" overflow="scroll" display="flex" justifyContent="center">
        <StyledModalDialogContent aria-label="Website navigation">
          <Box position="absolute" top="24px" right="24px" zIndex="zIndex10">
            <Button variant="reset" size="reset" onClick={onClose}>
              <CloseIcon decorative={false} color="colorTextWeak" size="sizeIcon60" title="Close Search" />
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" position="relative">
            <Heading as="label" variant="heading30">
              Search
            </Heading>
            <SiteHeaderSearch value={value} onChange={onChange} />
            <Box maxWidth="240px" marginX="auto" marginTop="space80" marginBottom="space50">
              <Text as="span">Not sure? Try a randomized search and discover something new!</Text>
            </Box>
            <Button as="a" href={coolLink} variant="primary">
              Show me something cool
            </Button>
          </Box>
        </StyledModalDialogContent>
      </Box>
    </StyledModalDialogOverlay>
  );
};
export {MobileSearch};
