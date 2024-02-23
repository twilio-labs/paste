import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";
import * as React from "react";
import VisibilitySensor from "react-visibility-sensor";

import { SectionContainer } from "./SectionContainer";

const AnimatedBox = animated(Box);

const ThinkingLine: React.FC<{ children: React.ReactNode }> = ({ children }): React.ReactElement => {
  const [show, setShow] = React.useState(false);

  function handleVisibilityChange(isVisible: boolean): void {
    if (!show) {
      setShow(isVisible);
    }
  }

  const styles = useSpring({
    opacity: show ? 1 : 0.1,
  });

  return (
    <VisibilitySensor onChange={handleVisibilityChange} offset={{ bottom: 160 }}>
      <Box display="flex" columnGap="space50" alignItems="center">
        <AnimatedBox
          borderRadius="borderRadiusCircle"
          backgroundColor="colorBackgroundSuccess"
          height="min-content"
          width="min-content"
          display="flex"
          padding="space10"
          style={styles}
        >
          <CheckboxCheckIcon decorative size="sizeIcon10" color="colorTextInverse" />
        </AnimatedBox>
        <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" fontWeight="fontWeightMedium">
          {children}
        </Text>
      </Box>
    </VisibilitySensor>
  );
};

const WeDoTheThinking: React.FC = (): React.ReactElement => {
  return (
    <SectionContainer>
      <Box element="WE_DO_THE_THINKING" maxWidth="size50" textAlign="center" marginX="auto">
        <Heading variant="heading20" as="h3">
          <Box as="span" display={["block", "inline"]}>
            We do the thinking{" "}
          </Box>
          <span>so you don&apos;t have to</span>
        </Heading>
        <Paragraph>
          Creating seamless and accessible user experiences can be a tough task. But we help you simplify the journey.
        </Paragraph>
        <Paragraph marginBottom="space0">
          Paste handles the research, design, testing, and engineering of the core building blocks. This frees up your
          energy to tackle customer challenges instead of UI issues.
        </Paragraph>
        <Box display="flex" justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            rowGap="space70"
            textAlign="left"
            maxWidth="size30"
            marginTop="space130"
          >
            <ThinkingLine>Accessibility standards</ThinkingLine>
            <ThinkingLine>User research</ThinkingLine>
            <ThinkingLine>Competitive analysis</ThinkingLine>
            <ThinkingLine>Product requirements</ThinkingLine>
            <ThinkingLine>Design & API review</ThinkingLine>
            <ThinkingLine>Usage guidelines</ThinkingLine>
            <ThinkingLine>Built-in constraints</ThinkingLine>
            <ThinkingLine>Dos and Dont&apos;s</ThinkingLine>
            <ThinkingLine>Performance</ThinkingLine>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export { WeDoTheThinking };
