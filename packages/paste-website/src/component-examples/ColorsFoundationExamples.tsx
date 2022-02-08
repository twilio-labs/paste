import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {TextColorOptions, BackgroundColorOptions, BorderColorOptions} from '@twilio-paste/style-props';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {ColorSwatch, ColorSwatchText} from '../components/color-swatch/ColorSwatch';

const backgroundTokens: BackgroundColorOptions[] = [
  'colorBackground',
  'colorBackgroundStrong',
  'colorBackgroundPrimary',
  'colorBackgroundStrongest',
  'colorBackgroundSuccess',
  'colorBackgroundWarning',
  'colorBackgroundError',
  'colorBackgroundNew',
];

const textTokens: TextColorOptions[] = [
  'colorText',
  'colorTextWeak',
  'colorTextWeaker',
  'colorTextWeakest',
  'colorTextLink',
  'colorTextLinkDestructive',
  'colorTextIcon',
  'colorTextIconInverse',
];

const borderTokens: BorderColorOptions[] = [
  'colorBorder',
  'colorBorderWeak',
  'colorBorderWeaker',
  'colorBorderPrimary',
  'colorBorderDestructive',
  'colorBorderWarning',
  'colorBorderSuccess',
  'colorBorderInverse',
];

interface TokenPair {
  textToken: TextColorOptions;
  backgroundToken: BackgroundColorOptions;
}

const standardPairingTokens: TokenPair[] = [
  {textToken: 'colorText', backgroundToken: 'colorBackground'},
  {textToken: 'colorTextWeak', backgroundToken: 'colorBackground'},
  {textToken: 'colorTextIcon', backgroundToken: 'colorBackground'},
  {textToken: 'colorText', backgroundToken: 'colorBackgroundBody'},
  {textToken: 'colorTextWeak', backgroundToken: 'colorBackgroundBody'},
  {textToken: 'colorTextIcon', backgroundToken: 'colorBackgroundBody'},
];

const statusPairingTokens: TokenPair[] = [
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

const inversePairingTokens: TokenPair[] = [
  {textToken: 'colorTextInverse', backgroundToken: 'colorBackgroundInverse'},
  {textToken: 'colorTextInverseWeak', backgroundToken: 'colorBackgroundInverse'},
  {textToken: 'colorTextIconInverse', backgroundToken: 'colorBackgroundInverse'},
  {textToken: 'colorTextInverse', backgroundToken: 'colorBackgroundBodyInverse'},
  {textToken: 'colorTextInverseWeak', backgroundToken: 'colorBackgroundBodyInverse'},
  {textToken: 'colorTextIconInverse', backgroundToken: 'colorBackgroundBodyInverse'},
];

const StyledSwatchGrid = styled.div<{numberColumns: number}>`
  display: grid;
  column-gap: ${themeGet('space.space70')};
  row-gap: ${themeGet('space.space100')};
  margin-bottom: ${themeGet('space.space70')};
  grid-template-columns: ${(props) => `repeat(${props.numberColumns}, 1fr)`};
  grid-template-rows: repeat(2, auto);
`;

export const BackgroundColorSwatches: React.FC = () => {
  return (
    <StyledSwatchGrid numberColumns={4}>
      {backgroundTokens.map((token) => (
        <Box>
          <ColorSwatch backgroundColor={token} />
          <ColorSwatchText>{token}</ColorSwatchText>
        </Box>
      ))}
    </StyledSwatchGrid>
  );
};

export const TextColorSwatches: React.FC = () => {
  return (
    <StyledSwatchGrid numberColumns={4}>
      {textTokens.map((token) => {
        const isInverseText = token === 'colorTextWeakest' || token === 'colorTextIconInverse';
        return (
          <Box>
            <ColorSwatch
              color={token}
              backgroundColor={isInverseText ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody'}
            />
            <ColorSwatchText>{token}</ColorSwatchText>
          </Box>
        );
      })}
    </StyledSwatchGrid>
  );
};

export const BorderColorSwatches: React.FC = () => {
  return (
    <StyledSwatchGrid numberColumns={4}>
      {borderTokens.map((token) => {
        const isInverseBorder = token === 'colorBorderInverse';

        return (
          <Box>
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
    </StyledSwatchGrid>
  );
};

export const StandardPairingSwatches: React.FC = () => {
  return (
    <StyledSwatchGrid numberColumns={3}>
      {standardPairingTokens.map(({textToken, backgroundToken}) => {
        const hasBorder = backgroundToken === 'colorBackgroundBody';
        return (
          <Box>
            <ColorSwatch backgroundColor={backgroundToken} borderColor={hasBorder ? 'colorBorderWeaker' : undefined}>
              <ColorSwatchText color={textToken}>{textToken}</ColorSwatchText>
            </ColorSwatch>
            <ColorSwatchText>{backgroundToken}</ColorSwatchText>
          </Box>
        );
      })}
    </StyledSwatchGrid>
  );
};

export const StatusPairingSwatches: React.FC = () => {
  return (
    <StyledSwatchGrid numberColumns={3}>
      {statusPairingTokens.map(({textToken, backgroundToken}) => {
        const hasBorder = backgroundToken === 'colorBackgroundBody';
        return (
          <Box>
            <ColorSwatch backgroundColor={backgroundToken} borderColor={hasBorder ? 'colorBorderWeaker' : undefined}>
              <ColorSwatchText color={textToken}>{textToken}</ColorSwatchText>
            </ColorSwatch>
            <ColorSwatchText>{backgroundToken}</ColorSwatchText>
          </Box>
        );
      })}
    </StyledSwatchGrid>
  );
};

export const InversePairingSwatches: React.FC = () => {
  return (
    <StyledSwatchGrid numberColumns={3}>
      {inversePairingTokens.map(({textToken, backgroundToken}) => {
        return (
          <Box>
            <ColorSwatch backgroundColor={backgroundToken}>
              <ColorSwatchText color={textToken}>{textToken}</ColorSwatchText>
            </ColorSwatch>
            <ColorSwatchText>{backgroundToken}</ColorSwatchText>
          </Box>
        );
      })}
    </StyledSwatchGrid>
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
