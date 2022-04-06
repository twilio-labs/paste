import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {StaticImage} from 'gatsby-plugin-image';
import {useTheme} from '@twilio-paste/theme';
import {AspectRatio} from '@twilio-paste/aspect-ratio';
import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {DoodleArrow} from '../../assets/illustrations/DoodleArrow';
import {DoodleZigzag} from '../../assets/illustrations/DoodleZigzag';
import {DoodleCloud} from '../../assets/illustrations/DoodleCloud';
import {DoodleLoopLarge} from '../../assets/illustrations/DoodleLoopLarge';
import {SlantedBackgroundGradient} from '../SlantedBackgroundGradient';
import {ExperimentMobileButton} from './ExperimentMobileButton';
import {SITE_CONTENT_MAX_WIDTH} from '../../constants';
import {useWindowSize} from '../../hooks/useWindowSize';

interface ExperimentProps {
  showIframe: boolean;
}

const ExperimentEmbed: React.FC = () => {
  const {breakpointIndex} = useWindowSize();

  if (breakpointIndex !== undefined && breakpointIndex === 0) {
    return (
      <>
        <StaticImage
          src="../../assets/images/home/codesandbox-mobile.png"
          alt=""
          placeholder="blurred"
          layout="fullWidth"
        />
        <ExperimentMobileButton />
      </>
    );
  }

  return (
    <iframe
      frameBorder="0"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      src="https://codesandbox.io/embed/pizza-toppings-d8u21?fontsize=14&hidenavigation=1&theme=dark"
      title="Pizza Demo App"
    />
  );
};

const Experiment: React.FC<ExperimentProps> = ({showIframe}) => {
  const theme = useTheme();

  return (
    <Box paddingX={['space90', 'space180']} paddingY="space180" position="relative">
      <SlantedBackgroundGradient
        gradientAngle="-180deg"
        startColor="colorBackgroundBody"
        endColor="colorBackgroundBrandHighlightWeakest"
        styles={{bottom: theme.space.space30}}
      >
        <Box
          maxWidth={SITE_CONTENT_MAX_WIDTH}
          marginLeft="auto"
          marginRight="auto"
          position="relative"
          zIndex="zIndex10"
        >
          <Box textAlign="center">
            <Heading as="h2" variant="heading10">
              Experiment with your ideas
            </Heading>
            <Paragraph>
              Create and play with our React components in the{' '}
              <Anchor
                href="https://codesandbox.io/s/paste-starter-kit-rj7yy"
                onClick={() =>
                  trackCustomEvent({
                    category: 'Experiment Sandbox',
                    action: 'click-sandbox',
                    label: 'Open sandbox',
                  })
                }
              >
                Paste prototyping sandbox
              </Anchor>
              .
            </Paragraph>
          </Box>
          <Box boxShadow="shadowHigh" maxWidth="size90" position="relative" marginLeft="auto" marginRight="auto">
            <Box position="absolute" display={['none', 'none', 'block']} top={-105} right={-20}>
              <DoodleCloud />
            </Box>
            <Box position="absolute" display={['none', 'block', 'block']} top={-55} left={-70}>
              <DoodleZigzag />
            </Box>
            <Box position="absolute" display={['none', 'block', 'block']} bottom={80} right={[0, -70, -95]}>
              <DoodleLoopLarge />
            </Box>
            <Box position="absolute" display={['none', 'none', 'block']} bottom={-50} left={-100}>
              <DoodleArrow />
            </Box>
            <AspectRatio ratio="16:9">
              {showIframe ? <ExperimentEmbed /> : <Box height="300px" width="100%" />}
            </AspectRatio>
          </Box>
        </Box>
      </SlantedBackgroundGradient>
    </Box>
  );
};

export {Experiment};
