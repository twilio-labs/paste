import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {TextColorOptions, BackgroundColorOptions, BorderColorOptions} from '@twilio-paste/style-props';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {useUID} from '@twilio-paste/uid-library';
import {ColorSwatch, ColorSwatchText} from '../components/color-swatch/ColorSwatch';
import {ImageCaption} from '../components/ImageCaption';

const backgroundTokens: BackgroundColorOptions[] = [
  'colorBackgroundBody',
  'colorBackground',
  'colorBackgroundStrong',
  'colorBackgroundPrimary',
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
  'colorTextInverse',
  'colorTextIcon',
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

export const StyledSwatchGrid = styled.div<{numberColumns: number}>`
  display: grid;
  column-gap: ${themeGet('space.space70')};
  row-gap: ${themeGet('space.space100')};
  grid-template-columns: ${(props) => `repeat(${props.numberColumns}, 1fr)`};
  grid-template-rows: repeat(2, auto);
`;

export const BackgroundColorSwatches: React.FC = () => {
  return (
    <Box as="ul" margin="space0" padding="space0" marginBottom="space70">
      <StyledSwatchGrid numberColumns={4}>
        {backgroundTokens.map((token) => (
          <Box as="li" listStyleType="none" key={useUID()}>
            <ColorSwatch
              backgroundColor={token}
              borderColor={token === 'colorBackgroundBody' ? 'colorBorderWeaker' : undefined}
            />
            <ColorSwatchText>{token}</ColorSwatchText>
          </Box>
        ))}
      </StyledSwatchGrid>
    </Box>
  );
};

type BackgroundColorMap = Partial<Record<TextColorOptions, BackgroundColorOptions>>;

export const TextColorSwatches: React.FC = () => {
  const backgroundColorMap: BackgroundColorMap = {
    colorTextWeakest: 'colorBackgroundStrongest',
    colorTextInverse: 'colorBackgroundBodyInverse',
  };

  return (
    <Box as="ul" margin="space0" padding="space0" marginBottom="space70">
      <StyledSwatchGrid numberColumns={4}>
        {textTokens.map((token) => {
          return (
            <Box as="li" listStyleType="none" key={useUID()}>
              <ColorSwatch color={token} backgroundColor={backgroundColorMap[token]}>
                {token === 'colorTextIcon' && <InformationIcon decorative size="sizeIcon40" color="colorTextIcon" />}
              </ColorSwatch>
              <ColorSwatchText>{token}</ColorSwatchText>
            </Box>
          );
        })}
      </StyledSwatchGrid>
    </Box>
  );
};

export const BorderColorSwatches: React.FC = () => {
  return (
    <Box as="ul" margin="space0" padding="space0" marginBottom="space70">
      <StyledSwatchGrid numberColumns={4}>
        {borderTokens.map((token) => {
          const isInverseBorder = token === 'colorBorderInverse';

          return (
            <Box as="li" listStyleType="none" key={useUID()}>
              <ColorSwatch
                borderColor={!isInverseBorder ? token : undefined}
                backgroundColor={isInverseBorder ? 'colorBackgroundStrongest' : 'colorBackgroundBody'}
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
    </Box>
  );
};

export const StandardPairingSwatches: React.FC = () => {
  return (
    <Box marginBottom="space130">
      <StyledSwatchGrid numberColumns={3}>
        {standardPairingTokens.map(({textToken, backgroundToken}) => {
          const hasBorder = backgroundToken === 'colorBackgroundBody';
          return (
            <Box aria-hidden="true" key={useUID()}>
              <ColorSwatch backgroundColor={backgroundToken} borderColor={hasBorder ? 'colorBorderWeaker' : undefined}>
                <ColorSwatchText color={textToken}>{textToken}</ColorSwatchText>
              </ColorSwatch>
              <ColorSwatchText>{backgroundToken}</ColorSwatchText>
            </Box>
          );
        })}
      </StyledSwatchGrid>
    </Box>
  );
};

export const StatusPairingSwatches: React.FC = () => {
  return (
    <Box marginBottom="space130">
      <StyledSwatchGrid numberColumns={3}>
        {statusPairingTokens.map(({textToken, backgroundToken}) => {
          const hasBorder = backgroundToken === 'colorBackgroundBody';
          return (
            <Box aria-hidden="true" key={useUID()}>
              <ColorSwatch backgroundColor={backgroundToken} borderColor={hasBorder ? 'colorBorderWeaker' : undefined}>
                <ColorSwatchText color={textToken}>{textToken}</ColorSwatchText>
              </ColorSwatch>
              <ColorSwatchText>{backgroundToken}</ColorSwatchText>
            </Box>
          );
        })}
      </StyledSwatchGrid>
    </Box>
  );
};

export const InversePairingSwatches: React.FC = () => {
  return (
    <Box marginBottom="space130">
      <StyledSwatchGrid numberColumns={3}>
        {inversePairingTokens.map(({textToken, backgroundToken}) => {
          return (
            <Box aria-hidden="true" key={useUID()}>
              <ColorSwatch backgroundColor={backgroundToken}>
                <ColorSwatchText color={textToken}>{textToken}</ColorSwatchText>
              </ColorSwatch>
              <ColorSwatchText>{backgroundToken}</ColorSwatchText>
            </Box>
          );
        })}
      </StyledSwatchGrid>
    </Box>
  );
};

export const TokensDiagramImgCaption: React.FC = () => (
  <ImageCaption>
    Aliases in Paste contain the hard-coded values that are the primitive form of the colors in our palette. All design
    tokens reference an alias. In this example, the $color-background-primary and $color-text-link tokens reference the
    $color-palette-blue-60 alias to define the color of the token. However, each token is applied to a specific need for
    different components, such as the background color of a primary button or the color of the anchor.
  </ImageCaption>
);

export const InteractingStatesImgCaption: React.FC = () => (
  <ImageCaption>
    In this example, we are using a combination of color and shadow to help users identify the primary button while in
    its different states.
  </ImageCaption>
);

export const UseOfColorImgCaption: React.FC = () => (
  <ImageCaption>
    In this example, a success toast uses multiple distinguishing visual elements—the thick left border and the
    icon—along with green colors to further convey to a user that an action they just took was successful.
  </ImageCaption>
);

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
