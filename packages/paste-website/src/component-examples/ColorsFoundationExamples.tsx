import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {ColorSwatch, ColorSwatchText} from '../components/color-swatch/ColorSwatch';

const backgroundTokens = [
  'colorBackground',
  'colorBackgroundStrong',
  'colorBackgroundPrimary',
  'colorBackgroundStrongest',
  'colorBackgroundSuccess',
  'colorBackgroundWarning',
  'colorBackgroundError',
  'colorBackgroundNew',
];

const textTokens = [
  'colorText',
  'colorTextWeak',
  'colorTextWeaker',
  'colorTextWeakest',
  'colorTextLink',
  'colorTextLinkDestructive',
  'colorTextIcon',
  'colorTextIconInverse',
];

const borderTokens = [
  'colorBorder',
  'colorBorderWeak',
  'colorBorderWeaker',
  'colorBorderPrimary',
  'colorBorderDestructive',
  'colorBorderWarning',
  'colorBorderSuccess',
  'colorBorderInverse',
];

const standardPairingTokens = [
  {textToken: 'colorText', backgroundToken: 'colorBackground'},
  {textToken: 'colorTextWeak', backgroundToken: 'colorBackground'},
  {textToken: 'colorTextIcon', backgroundToken: 'colorBackground'},
  {textToken: 'colorText', backgroundToken: 'colorBackgroundBody'},
  {textToken: 'colorTextWeak', backgroundToken: 'colorBackgroundBody'},
  {textToken: 'colorTextIcon', backgroundToken: 'colorBackgroundBody'},
];

const statusPairingTokens = [
  {textToken: 'colorTextSuccess', backgroundToken: 'colorBackground'},
  {textToken: 'colorTextWarning', backgroundToken: 'colorBackground'},
  {textToken: 'colorTextError', backgroundToken: 'colorBackground'},
  {textToken: 'colorTextSuccess', backgroundToken: 'colorBackgroundBody'},
  {textToken: 'colorTextWarning', backgroundToken: 'colorBackgroundBody'},
  {textToken: 'colorTextError', backgroundToken: 'colorBackgroundBody'},
  {textToken: 'colorTextSuccess', backgroundToken: 'colorBackgroundSuccessWeakest'},
  {textToken: 'colorTextWarning', backgroundToken: 'colorBackgroundWarningWeakest'},
  {textToken: 'colorTextError', backgroundToken: 'colorBackgroundErrorWeakest'},
];

const inversePairingTokens = [
  {textToken: 'colorTextInverse', backgroundToken: 'colorBackgroundInverse'},
  {textToken: 'colorTextInverseWeak', backgroundToken: 'colorBackgroundInverse'},
  {textToken: 'colorTextIconInverse', backgroundToken: 'colorBackgroundInverse'},
  {textToken: 'colorTextInverse', backgroundToken: 'colorBackgroundBodyInverse'},
  {textToken: 'colorTextInverseWeak', backgroundToken: 'colorBackgroundBodyInverse'},
  {textToken: 'colorTextIconInverse', backgroundToken: 'colorBackgroundBodyInverse'},
];

const SwatchContainer: React.FC = ({children}) => {
  return (
    <Box display="flex" rowGap="space100" columnGap="space70" flexWrap="wrap" marginBottom="space100">
      {children}
    </Box>
  );
};

export const BackgroundColorSwatches: React.FC = () => {
  return (
    <SwatchContainer>
      {backgroundTokens.map((token) => (
        <Box width="size20">
          <ColorSwatch backgroundColor={token} />
          <ColorSwatchText>{token}</ColorSwatchText>
        </Box>
      ))}
    </SwatchContainer>
  );
};

export const TextColorSwatches: React.FC = () => {
  return (
    <SwatchContainer>
      {textTokens.map((token) => {
        const isInverseText = token === 'colorTextWeakest' || token === 'colorTextIconInverse';
        return (
          <Box width="size20">
            <ColorSwatch
              color={token}
              backgroundColor={isInverseText ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody'}
            />
            <ColorSwatchText>{token}</ColorSwatchText>
          </Box>
        );
      })}
    </SwatchContainer>
  );
};

export const BorderColorSwatches: React.FC = () => {
  return (
    <SwatchContainer>
      {borderTokens.map((token) => {
        const isInverseBorder = token === 'colorBorderInverse';

        return (
          <Box width="size20">
            <ColorSwatch
              borderColor={!isInverseBorder ? token : undefined}
              backgroundColor={isInverseBorder ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody'}
            >
              {isInverseBorder ? (
                <Box
                  position="absolute"
                  top="space20"
                  bottom="space20"
                  left="space20"
                  right="space20"
                  borderWidth="borderWidth20"
                  borderStyle="solid"
                  borderColor={token}
                  borderRadius="borderRadius20"
                />
              ) : null}
            </ColorSwatch>
            <ColorSwatchText>{token}</ColorSwatchText>
          </Box>
        );
      })}
    </SwatchContainer>
  );
};

export const StandardPairingSwatches: React.FC = () => {
  return (
    <SwatchContainer>
      {standardPairingTokens.map(({textToken, backgroundToken}) => {
        const hasBorder = backgroundToken === 'colorBackgroundBody';
        return (
          <Box width="size20">
            <ColorSwatch backgroundColor={backgroundToken} borderColor={hasBorder ? 'colorBorderWeaker' : undefined}>
              <ColorSwatchText color={textToken}>{textToken}</ColorSwatchText>
            </ColorSwatch>
            <ColorSwatchText>{backgroundToken}</ColorSwatchText>
          </Box>
        );
      })}
    </SwatchContainer>
  );
};

export const StatusPairingSwatches: React.FC = () => {
  return (
    <SwatchContainer>
      {statusPairingTokens.map(({textToken, backgroundToken}) => {
        const hasBorder = backgroundToken === 'colorBackgroundBody';
        return (
          <Box width="size20">
            <ColorSwatch backgroundColor={backgroundToken} borderColor={hasBorder ? 'colorBorderWeaker' : undefined}>
              <ColorSwatchText color={textToken}>{textToken}</ColorSwatchText>
            </ColorSwatch>
            <ColorSwatchText>{backgroundToken}</ColorSwatchText>
          </Box>
        );
      })}
    </SwatchContainer>
  );
};

export const InversePairingSwatches: React.FC = () => {
  return (
    <SwatchContainer>
      {inversePairingTokens.map(({textToken, backgroundToken}) => {
        return (
          <Box width="size20">
            <ColorSwatch backgroundColor={backgroundToken}>
              <ColorSwatchText color={textToken}>{textToken}</ColorSwatchText>
            </ColorSwatch>
            <ColorSwatchText>{backgroundToken}</ColorSwatchText>
          </Box>
        );
      })}
    </SwatchContainer>
  );
};

export const PrimaryColorExample = `
<Stack orientation='horizontal' spacing='space70'>
  <Button variant='primary'>Save</Button>
  <Button variant='secondary'>Save</Button>
  <Button variant='primary' size='small'>Save</Button>
  <Button variant='secondary' size='small'>Save</Button>
  <Button variant='link'>Save</Button>
  <Anchor href="https://twilio.com/" showExternal>Open in a new tab</Anchor>
</Stack>
`.trim();

export const DestructiveColorExample = `
<Stack orientation='horizontal' spacing='space70'>
  <Button variant='destructive'>Delete</Button>
  <Button variant='destructive_secondary'>Delete</Button>
  <Button variant='destructive' size='small'>Delete</Button>
  <Button variant='destructive_secondary' size='small'>Delete</Button>
  <Button variant='destructive_link'>Delete</Button>
  <Button variant='destructive' size='icon'>
    <DeleteIcon decorative={false} title="Delete"/>
  </Button>
  <Button variant='destructive_secondary' size='icon'>
    <DeleteIcon decorative={false} title="Delete"/>
  </Button>
  <Button variant='destructive' size='icon_small'>
    <DeleteIcon decorative={false} title="Delete"/>
  </Button>
  <Button variant='destructive_secondary' size='icon_small'>
    <DeleteIcon decorative={false} title="Delete"/>
  </Button>
</Stack>
`.trim();
