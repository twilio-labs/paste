import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box } from "@twilio-paste/box";
import { Card } from "@twilio-paste/card";
import { Heading } from "@twilio-paste/heading";
import { Text } from "@twilio-paste/text";
import * as React from "react";
import VisibilitySensor from "react-visibility-sensor";

const ComponentCardHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Heading as="h3" variant="heading40">
      {children}
    </Heading>
  );
};

const ComponentCardIllustration: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box marginLeft="auto" marginRight="auto" maxWidth="size20">
      {children}
    </Box>
  );
};

const ComponentCardFooter: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text as="span" display="inline-block" fontWeight="fontWeightSemibold" marginTop="space30">
      {children}
    </Text>
  );
};

const AnimatedCard = animated(Card);

const ComponentCard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [show, setShow] = React.useState(false);

  const handleVisibilityChange = (isVisible: boolean): void => {
    if (!show) {
      setShow(isVisible);
    }
  };

  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0px)" : "translateY(25px)",
    config: { mass: 1, tension: 280, friction: 80 },
  });

  // Destructuring this to bypass TS warning that is incorrect
  const cardProps = { opacity: 0 };

  return (
    <Box marginBottom="space60">
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility minTopValue={100}>
        <AnimatedCard style={props} {...cardProps} padding="space70">
          <Text as="div" textAlign="center">
            {children}
          </Text>
        </AnimatedCard>
      </VisibilitySensor>
    </Box>
  );
};

export { ComponentCard, ComponentCardHeader, ComponentCardIllustration, ComponentCardFooter };
