import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Paragraph} from '@twilio-paste/paragraph';
import {Callout, CalloutTitle, CalloutText} from '../callout';
import {SiteLink} from '../SiteLink';

const ColorGuidelinesLink: React.FC = () => <SiteLink to="/foundations/colors">Read the color guidelines.</SiteLink>;

const BackgroundColorsIntro: React.FC = () => (
  <Paragraph>
    Background color tokens define the background color of a container. <ColorGuidelinesLink />
  </Paragraph>
);

const BorderColorsIntro: React.FC = () => (
  <Paragraph>
    Border color tokens define the border color of a container. <ColorGuidelinesLink />
  </Paragraph>
);

const BorderWidthsIntro: React.FC = () => (
  <Paragraph>Border widths define the thickness of a border around a container.</Paragraph>
);

const BoxShadowsIntro: React.FC = () => (
  <Box marginBottom="space80">
    <Paragraph>
      Box shadows are used in a number of ways: some are true shadows that are used to create depth and demonstrate the
      hierarchy of layered elements; other box shadow tokens are duplicates of border tokens and are used to visually
      add a border without affecting the height of the component; box shadow tokens are also used for focus states on
      components.
    </Paragraph>
    <Callout variant="info">
      <CalloutTitle as="h3">
        <strong>Did you know?</strong>
      </CalloutTitle>
      <CalloutText>
        Borders add height to an element, but box shadows do not. It&apos;s why we need to use box shadows on some
        components and not others.
      </CalloutText>
    </Callout>
  </Box>
);

const ColorsIntro: React.FC = () => (
  <Paragraph>
    Colors are tokens that do not have a defined usage in the system and can be used in custom compositions.{' '}
    <ColorGuidelinesLink />
  </Paragraph>
);

const FontsIntro: React.FC = () => (
  <Paragraph>
    Fonts define the different font families.
    {/* Read the typography guidelines (TBA) */}
  </Paragraph>
);

const FontSizesIntro: React.FC = () => (
  <Paragraph>
    Font sizes define the size of text. 1 rem unit = 16 pixels in Paste.
    {/* Read the typography guidelines (TBA) */}
  </Paragraph>
);

const FontWeightsIntro: React.FC = () => (
  <Paragraph>Font sizes define the weight of text. Read the typography guidelines (TBA)</Paragraph>
);

const LineHeightsIntro: React.FC = () => (
  <Paragraph>
    Line heights define the height of a line of text. 1 rem unit = 16 pixels in Paste.
    {/* Read the typography guidelines (TBA) */}
  </Paragraph>
);

const RadiiIntro: React.FC = () => <Paragraph>Radii define the border radius of a container.</Paragraph>;

const SizingsIntro: React.FC = () => (
  <Paragraph>
    Sizings define the size of UI elements.
    {/* Read the spacing and layout guidelines (TBA)*/}
  </Paragraph>
);

const SpacingsIntro: React.FC = () => <Paragraph>Spacings define the spacing between UI elements.</Paragraph>;

const TextColorsIntro: React.FC = () => (
  <Paragraph>
    Text colors define text and icon colors. We specifically have `color-text-*` and `color-text-icon-*` tokens, since
    icons have lower contrast requirements than text. This means that text color tokens can be used for icons, but icon
    color tokens cannot be used for text. <ColorGuidelinesLink />
  </Paragraph>
);

const ZIndicesIntro: React.FC = () => (
  <Paragraph>Z indices define the vertical stacking order of UI elements that overlap.</Paragraph>
);

export const sectionIntros = {
  'background-colors': <BackgroundColorsIntro />,
  'border-colors': <BorderColorsIntro />,
  'border-widths': <BorderWidthsIntro />,
  'box-shadows': <BoxShadowsIntro />,
  colors: <ColorsIntro />,
  fonts: <FontsIntro />,
  'font-sizes': <FontSizesIntro />,
  'font-weights': <FontWeightsIntro />,
  'line-heights': <LineHeightsIntro />,
  radii: <RadiiIntro />,
  sizings: <SizingsIntro />,
  spacings: <SpacingsIntro />,
  'text-colors': <TextColorsIntro />,
  'z-indices': <ZIndicesIntro />,
};
