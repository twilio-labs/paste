import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";
import * as React from "react";

const ThinkingLine: React.FC<{ children: React.ReactNode }> = ({ children }): React.ReactElement => {
  return (
    <Box display="flex" columnGap="space50">
      <Box
        borderRadius="borderRadiusCircle"
        backgroundColor="colorBackgroundSuccess"
        height="min-content"
        width="min-content"
        display="flex"
      >
        <CheckboxCheckIcon decorative size="sizeIcon20" color="colorTextInverse" />
      </Box>
      <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" fontWeight="fontWeightMedium">
        {children}
      </Text>
    </Box>
  );
};

const WeDoTheThinking: React.FC = (): React.ReactElement => {
  return (
    <Box display="flex" marginY="space200" justifyContent="center" textAlign="center" width="100%">
      <Box element="THEMEABLE" display="flex" flexDirection="column" width="100%" maxWidth="size50" alignItems="center">
        <Heading variant="heading20" as="h3">
          We do the thinking so you don&apos;t have to
        </Heading>
        <Paragraph>
          Creating seamless and accessible user experiences can be a tough task. But we help you simplify the journey.
        </Paragraph>
        <Paragraph marginBottom="space0">
          Paste handles the research, design, testing, and engineering of the core building blocks. This frees up your
          energy to tackle customer challenges instead of UI issues.
        </Paragraph>
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
  );
};

export { WeDoTheThinking };
