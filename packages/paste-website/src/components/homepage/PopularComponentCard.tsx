import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';
import {useSpring, animated} from '@twilio-paste/animation-library';

const ComponentCardHeader: React.FC = ({children}) => {
  return (
    <Heading as="h4" variant="heading40">
      {children}
    </Heading>
  );
};

const ComponentCardIllustration: React.FC = ({children}) => {
  return (
    <Box marginLeft="auto" marginRight="auto" maxWidth="size20">
      {children}
    </Box>
  );
};

const ComponentCardFooter: React.FC = ({children}) => {
  return (
    <Text as="span" display="inline-block" fontWeight="fontWeightSemibold" marginTop="space30">
      {children}
    </Text>
  );
};

const AnimatedCard = animated(Card);

interface ComponentCardProps {
  show: boolean;
}
const ComponentCard: React.FC<ComponentCardProps> = ({show, children}) => {
  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0px)' : 'translateY(25px)',
    config: {duration: 1000},
  });

  return (
    <Box marginBottom="space60">
      {/* @ts-ignore this is technically fine, but the typings are incorrect. */}
      <AnimatedCard style={props} opacity={0} padding="space70">
        <Text as="div" textAlign="center">
          {children}
        </Text>
      </AnimatedCard>
    </Box>
  );
};

export {ComponentCard, ComponentCardHeader, ComponentCardIllustration, ComponentCardFooter};
