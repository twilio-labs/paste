import * as React from 'react';
import {useTheme} from '@twilio-paste/theme';
import {AspectRatio} from '@twilio-paste/aspect-ratio';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {DoodleArrow} from '../../assets/illustrations/DoodleArrow';
import {DoodleZigzag} from '../../assets/illustrations/DoodleZigzag';
import {DoodleCloud} from '../../assets/illustrations/DoodleCloud';
import {DoodleLoopLarge} from '../../assets/illustrations/DoodleLoopLarge';
import {SlantedBackgroundGradient} from '../SlantedBackgroundGradient';
import {SITE_CONTENT_MAX_WIDTH} from '../../constants';

interface ExperimentProps {
  showIframe: boolean;
}

const Experiment: React.FC<ExperimentProps> = ({showIframe}) => {
  const theme = useTheme();

  return (
    <Box paddingX={['space90', 'space180']} paddingY="space180" position="relative">
      <SlantedBackgroundGradient
        gradientAngle="-180deg"
        startColor="colorBackgroundBody"
        endColor="colorBackgroundBrandHighlightLightest"
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
            <Heading as="h3" variant="heading10">
              Experiment with your ideas
            </Heading>
            <Paragraph>Create and play with our React components in the Paste prototyping sandbox.</Paragraph>
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
              {showIframe ? (
                <iframe
                  frameBorder="0"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  src="https://codesandbox.io/embed/patterns-create-1jdki?fontsize=14&hidenavigation=1&theme=dark"
                  title="Patterns - Create"
                />
              ) : (
                <Box height="300px" width="100%" />
              )}
            </AspectRatio>
          </Box>
        </Box>
      </SlantedBackgroundGradient>
    </Box>
  );
};

export {Experiment};
