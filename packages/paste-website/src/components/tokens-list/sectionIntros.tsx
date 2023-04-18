import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Paragraph} from '@twilio-paste/paragraph';
import {Callout, CalloutHeading, CalloutText} from '@twilio-paste/callout';
import {InlineCode} from '@twilio-paste/inline-code';

import {SiteLink} from '../SiteLink';
import type {Token} from './types';

const ColorGuidelinesLink: React.FC = () => <SiteLink href="/foundations/colors">Read the color guidelines</SiteLink>;

const BackgroundColorsIntro = (): JSX.Element => (
  <Paragraph>
    <ColorGuidelinesLink /> to learn more about using background color tokens in Paste.
  </Paragraph>
);

const BorderColorsIntro = (): JSX.Element => (
  <Paragraph>
    <ColorGuidelinesLink /> to learn more about using border color tokens in Paste.
  </Paragraph>
);

const BoxShadowsIntro = (): JSX.Element => (
  <Box marginBottom="space80">
    <Paragraph>
      Box shadows are used in a number of ways: some are true shadows that are used to create depth and demonstrate the
      hierarchy of layered elements; other box shadow tokens are duplicates of border tokens and are used to visually
      add a border without affecting the height of the component; box shadow tokens are also used for focus states on
      components.
    </Paragraph>
    <Callout variant="neutral" marginY="space70">
      <CalloutHeading as="h3">
        <strong>Did you know?</strong>
      </CalloutHeading>
      <CalloutText>
        Borders add height to an element, but box shadows do not. It&apos;s why we need to use box shadows on some
        components and not others.
      </CalloutText>
    </Callout>
  </Box>
);

const DataVisualizationIntro = (): JSX.Element => (
  <Paragraph>
    Data visualization colors are for usage within charts.{' '}
    <SiteLink href="/foundations/data-visualization">Read the data visualization guidelines</SiteLink> to learn more
    about building charts with Paste.
  </Paragraph>
);

const FontSizesIntro = (): JSX.Element => (
  <>
    <Paragraph>
      Font size tokens use rem values, and 1 rem unit is equal to 16 pixels in Paste. Unlike em values which are
      relative to their parent element, rem values are relative to the html element.
    </Paragraph>
    <Callout variant="neutral" marginY="space70">
      <CalloutHeading as="h3">
        <strong>Heads up about font sizes in Paste</strong>
      </CalloutHeading>
      <CalloutText>
        If you aren&apos;t using the Theme.Provider component, you must set font-size: 100%; on your page&apos;s html
        tag for the font-sizes to be sized correctly as 1rem=16px.
      </CalloutText>
    </Callout>
  </>
);

const TextColorsIntro = (): JSX.Element => (
  <Paragraph>
    Text color tokens define both text and icon colors. We specifically have <InlineCode>color-text-*</InlineCode> and
    <InlineCode>color-text-icon-*</InlineCode> tokens, since icons have lower contrast requirements than text. This
    means that text color tokens can be used for icons, but icon color tokens cannot be used for text.{' '}
    <ColorGuidelinesLink /> to learn more about using text color tokens in Paste.
  </Paragraph>
);

const ZIndicesIntro = (): JSX.Element => (
  <Paragraph>Z indices define the vertical stacking order of UI elements that overlap.</Paragraph>
);

export const sectionIntros: {[key: Token['category']]: JSX.Element} = {
  'background-colors': <BackgroundColorsIntro />,
  'border-colors': <BorderColorsIntro />,
  'box-shadows': <BoxShadowsIntro />,
  'data-visualization': <DataVisualizationIntro />,
  'font-sizes': <FontSizesIntro />,
  'text-colors': <TextColorsIntro />,
  'z-indices': <ZIndicesIntro />,
};
