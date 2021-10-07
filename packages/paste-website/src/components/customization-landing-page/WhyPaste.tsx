import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Column, Grid} from '@twilio-paste/grid';

import {LandingPageSection, LandingPageSectionContent} from './LandingPageLayoutUtils';
import {ReasonBlock} from './ReasonBlock';
import {A11yIcon} from '../icons/A11yIcon';
import {CustomizableIcon} from '../icons/CustomizableIcon';
import {ThemableIcon} from '../icons/ThemableIcon';
import {useSlantedSkew} from '../SlantedBackgroundGradient';
import {DoodleLoopArrowLarge} from '../../assets/illustrations/DoodleLoopArrowLarge';
import {useDarkModeContext} from '../../context/DarkModeContext';

const imageQuery = graphql`
  query {
    whyPaste: file(sourceInstanceName: {eq: "assets"}, relativePath: {eq: "images/customization/why-paste.png"}) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    whyPasteSmall: file(
      sourceInstanceName: {eq: "assets"}
      relativePath: {eq: "images/customization/why-paste-mobile.png"}
    ) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const WhyPasteTopAngle: React.FC = () => {
  const [skewOffset] = useSlantedSkew();
  const {theme} = useDarkModeContext();

  return (
    <Box
      // @ts-expect-error combat semi opaque dark mode token value
      backgroundColor={theme === 'dark' ? '#2a3342' : 'colorBackgroundPrimaryWeakest'}
      height="95%"
      position="absolute"
      top={skewOffset}
      right={0}
      left={0}
      transform="skewY(10deg)"
      transformOrigin="100% 0"
      zIndex="zIndex0"
    />
  );
};

const WhyPasteBottomAngle: React.FC = () => {
  const [skewOffset] = useSlantedSkew(-0.35);
  const {theme} = useDarkModeContext();

  return (
    <Box
      // @ts-expect-error combat semi opaque dark mode token value
      backgroundColor={theme === 'dark' ? '#2a3342' : 'colorBackgroundPrimaryWeakest'}
      height="100%"
      position="absolute"
      bottom={skewOffset}
      right={0}
      left={0}
      transform="skewY(10deg)"
      transformOrigin="100% 0"
      zIndex="zIndex0"
    />
  );
};

export const WhyPaste: React.FC = () => {
  const imageData = useStaticQuery(imageQuery);

  return (
    <LandingPageSection backgroundColor="colorBackgroundPrimaryWeakest" paddingTop={['space0', 'space0', 'space0']}>
      <WhyPasteTopAngle />
      <WhyPasteBottomAngle />
      <LandingPageSectionContent variant="narrow" zIndex="zIndex10">
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
              description="Change a single color or customize your full palette with our theming system, your UIs come out looking exactly the way you want them."
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
          <Img fluid={imageData.whyPaste.childImageSharp.fluid} />
        </Box>
        <Box display={['block', 'none']} width="100%" maxWidth="400px" marginX="auto" marginTop="space70">
          <Img fluid={imageData.whyPasteSmall.childImageSharp.fluid} />
        </Box>
        <Box as="span" position="absolute" display={['none', 'none', 'block']} bottom={-200} left={0}>
          <DoodleLoopArrowLarge />
        </Box>
      </LandingPageSectionContent>
    </LandingPageSection>
  );
};
