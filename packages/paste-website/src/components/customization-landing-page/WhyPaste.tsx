import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Column, Grid} from '@twilio-paste/grid';

import {LandingPageSection, LandingPageSectionContent} from './LandingPageLayoutUtils';
import {ReasonBlock} from './ReasonBlock';
import {A11yIcon} from '../icons/A11yIcon';
import {CustomizableIcon} from '../icons/CustomizableIcon';
import {ThemableIcon} from '../icons/ThemableIcon';
import WhyPasteSVG from '../../assets/illustrations/customization_why_paste.svg';
import WhyPasteSVGSmall from '../../assets/illustrations/customization_why_paste_small.svg';

export const WhyPaste: React.FC = () => {
  return (
    <LandingPageSection backgroundColor="colorBackgroundPrimaryWeakest">
      <LandingPageSectionContent variant="narrow">
        <Box maxWidth="size60" marginBottom="space130">
          <Heading as="h2" variant="heading40">
            Why Paste
          </Heading>
          <Heading as="h3" variant="heading10">
            A fully extensible and accessible customization platform
          </Heading>
        </Box>
        <Grid gutter={['space60', 'space120', 'space200']} vertical={[true, false, false]}>
          <Column span={6}>
            <ReasonBlock
              icon={<ThemableIcon decorative />}
              headingText="Themeable"
              subHeadingText="To meet your brand needs"
              description="Change a single color or customize your full palette—with our theming system, your UIs come out looking exactly the way you want them."
              href="/customization/creating-a-custom-theme"
              linkText="Learn about theming"
            />
          </Column>
          <Column span={6}>
            <ReasonBlock
              icon={<CustomizableIcon decorative />}
              headingText="Customizable"
              subHeadingText="To meet your application needs"
              description="Fully customize all components of the same type across an application, or extend Paste components to create your own custom components."
              href="/customization/customizing-component-elements"
              linkText="Learn about customizing components"
            />
          </Column>
          <Column span={6}>
            <ReasonBlock
              icon={<A11yIcon decorative />}
              headingText="Accessible"
              subHeadingText="To meet your customers’ needs"
              description="Do the right thing for all your customers' needs with accessible UIs built out of the box that support high contrast, screen reader support, and much more."
              href="/inclusive-design"
              linkText="Read our Inclusive Design Checklist"
            />
          </Column>
        </Grid>
        <Box display={['none', 'block']} position="absolute" bottom="-150px" right="0" width="60%" maxWidth="100%">
          <WhyPasteSVG width="100%" height="100%" />
        </Box>
        <Box display={['block', 'none']} width="100%" maxWidth="400px" marginX="auto">
          <WhyPasteSVGSmall width="100%" height="100%" />
        </Box>
      </LandingPageSectionContent>
    </LandingPageSection>
  );
};
