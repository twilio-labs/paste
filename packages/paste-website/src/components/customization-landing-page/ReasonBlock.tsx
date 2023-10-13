import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";
import * as React from "react";

export type ReasonBlockProps = {
  icon: React.ReactNode;
  headingText: string;
  subHeadingText: string;
  description: React.ReactNode;
  href: string;
  linkText: string;
};
export const ReasonBlock: React.FC<React.PropsWithChildren<ReasonBlockProps>> = ({
  icon,
  headingText,
  subHeadingText,
  description,
  href,
  linkText,
}) => {
  return (
    <Box marginBottom={["space0", "space160"]}>
      <Box marginBottom="space30">{icon}</Box>
      <Heading as="h3" marginBottom="space0" variant="heading40">
        {headingText}
      </Heading>
      <Text as="p" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space40">
        {subHeadingText}
      </Text>
      <Paragraph>{description}</Paragraph>
      <Anchor href={href}>{linkText}</Anchor>
    </Box>
  );
};
