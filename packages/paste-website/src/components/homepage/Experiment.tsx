import * as React from 'react';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {AspectRatio} from '@twilio-paste/aspect-ratio';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {SlantedBackgroundGradient} from '../SlantedBackgroundGradient';
import {SITE_CONTENT_MAX_WIDTH} from '../../constants';

const StyledBrandGradient = styled(Box)`
  background: linear-gradient(
    -180deg,
    ${themeGet('backgroundColors.colorBackgroundBody')} 0%,
    ${themeGet('backgroundColors.colorBackgroundBrandHighlightLightest')} 100%
  );
`;

const Experiment: React.FC = () => {
  return (
    <Box paddingX={['space90', 'space180']} paddingY="space180" position="relative">
      <SlantedBackgroundGradient
        angle="-180deg"
        startColor="colorBackgroundBody"
        endColor="colorBackgroundBrandHighlightLightest"
      >
        <Box maxWidth={SITE_CONTENT_MAX_WIDTH} marginLeft="auto" marginRight="auto">
          <Box textAlign="center">
            <Heading as="h3" variant="heading10">
              Experiment with your ideas
            </Heading>
            <Paragraph>Create and play with our React components in the Paste prototyping sandbox.</Paragraph>
          </Box>
          <Box boxShadow="shadowHigh" maxWidth="size90" marginLeft="auto" marginRight="auto">
            <AspectRatio ratio="16:9">
              <iframe
                frameBorder="0"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                src="https://codesandbox.io/embed/patterns-create-1jdki?fontsize=14&hidenavigation=1&theme=dark"
                title="Patterns - Create"
              />
            </AspectRatio>
          </Box>
        </Box>
      </SlantedBackgroundGradient>
    </Box>
  );
};

export {Experiment};
