import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import { Text } from "@twilio-paste/text";
import * as React from "react";
import { useInView } from "react-intersection-observer";

import { SectionContainer } from "./SectionContainer";

const AnimatedBox = animated(Box);

const ThinkingLine: React.FC<{ children: React.ReactNode; index: number }> = ({
  children,
  index,
}): React.ReactElement<HTMLElement> => {
  const [show, setShow] = React.useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
    delay: 100,
  });

  React.useEffect(() => {
    if (inView && !show) {
      setTimeout(() => {
        setShow(true);
      }, index * 50);
    }
  }, [inView, show, index]);

  const styles = useSpring({
    opacity: show ? 1 : 0.1,
    config: {
      duration: 500,
    },
  });

  return (
    <Box ref={ref}>
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
    </Box>
  );
};

const WeDoTheThinking: React.FC = (): React.ReactElement<HTMLElement> => {
  return (
    <SectionContainer>
      <Box element="WE_DO_THE_THINKING" maxWidth="size50" textAlign="center" marginX="auto">
        <Heading variant="heading20" as="h3">
          <Box as="span" display={["block", "inline"]}>
            We do the thinking{" "}
          </Box>
          <span>so you don&apos;t have to</span>
        </Heading>
        <Text as="p" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space90">
          Creating seamless and accessible user experiences can be a tough task. But we help you simplify the journey.
        </Text>
        <Text as="p" fontSize="fontSize40" lineHeight="lineHeight40">
          Paste handles the research, design, testing, and engineering of the core building blocks. This frees up your
          energy to tackle customer challenges instead of UI issues.
        </Text>
        <Box display="flex" justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            rowGap="space70"
            textAlign="left"
            maxWidth="size30"
            marginTop="space130"
          >
            <ThinkingLine index={0}>Accessibility standards</ThinkingLine>
            <ThinkingLine index={1}>User research</ThinkingLine>
            <ThinkingLine index={2}>Competitive analysis</ThinkingLine>
            <ThinkingLine index={3}>Product requirements</ThinkingLine>
            <ThinkingLine index={4}>Design & API review</ThinkingLine>
            <ThinkingLine index={5}>Usage guidelines</ThinkingLine>
            <ThinkingLine index={6}>Built-in constraints</ThinkingLine>
            <ThinkingLine index={7}>Dos and Dont&apos;s</ThinkingLine>
            <ThinkingLine index={8}>Performance</ThinkingLine>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export { WeDoTheThinking };
