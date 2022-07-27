import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Paragraph} from '@twilio-paste/paragraph';
import {Callout, CalloutTitle, CalloutText} from '../callout';
import {SiteLink} from '../SiteLink';
import {InlineCode} from '../Typography';
import type {Token} from './types';

const ColorGuidelinesLink: React.FC = () => <SiteLink to="/foundations/colors">Read the color guidelines</SiteLink>;

const BackgroundColorsIntro: React.FC = () => (
  <Paragraph>
    <ColorGuidelinesLink /> to learn more about using background color tokens in Paste.
  </Paragraph>
);

const BorderColorsIntro: React.FC = () => (
  <Paragraph>
    <ColorGuidelinesLink /> to learn more about using border color tokens in Paste.
  </Paragraph>
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

const DataVisualizationsIntro: React.FC = () => (
  <Paragraph>
    Data visualization colors are for usage within charts.{' '}
    <SiteLink to="/foundations/data-visualization">Read the data visualization guidelines</SiteLink> to learn more about
    building charts with Paste.
  </Paragraph>
);

const FontSizesIntro: React.FC = () => (
  <>
    <Paragraph>
      Font size tokens use rem values, and 1 rem unit is equal to 16 pixels in Paste. Unlike em values which are
      relative to their parent element, rem values are relative to the html element.
    </Paragraph>
    <Callout>
      <CalloutTitle as="h3">
        <strong>Heads up about font sizes in Paste</strong>
      </CalloutTitle>
      <CalloutText>
        If you aren&apos;t using the Theme.Provider component, you must set font-size: 100%; on your page&apos;s html
        tag for the font-sizes to be sized correctly as 1rem=16px.
      </CalloutText>
    </Callout>
  </>
);

const TextColorsIntro: React.FC = () => (
  <Paragraph>
    Text color tokens define both text and icon colors. We specifically have <InlineCode>color-text-*</InlineCode> and
    <InlineCode>color-text-icon-*</InlineCode> tokens, since icons have lower contrast requirements than text. This
    means that text color tokens can be used for icons, but icon color tokens cannot be used for text.{' '}
    <ColorGuidelinesLink /> to learn more about using text color tokens in Paste.
  </Paragraph>
);

const ZIndicesIntro: React.FC = () => (
  <Paragraph>Z indices define the vertical stacking order of UI elements that overlap.</Paragraph>
);

interface SectionIntros {
  [key: Token['category']]: JSX.Element;
}

export const sectionIntros: SectionIntros = {
  'background-colors': <BackgroundColorsIntro />,
  'border-colors': <BorderColorsIntro />,
  'box-shadows': <BoxShadowsIntro />,
  'data-visualization': <DataVisualizationsIntro />,
  'font-sizes': <FontSizesIntro />,
  'text-colors': <TextColorsIntro />,
  'z-indices': <ZIndicesIntro />,
};
