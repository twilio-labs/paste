import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { LinkExternalIcon } from "@twilio-paste/icons/esm/LinkExternalIcon";
import * as React from "react";

interface WhatsNewProps {
  children: React.ReactNode;
  showExternal?: boolean;
  href: string;
}

const WhatsNew: React.FC<WhatsNewProps> = ({ showExternal, href, children }) => {
  return (
    <Box
      borderStyle="solid"
      borderColor="colorBorderWeaker"
      borderWidth="borderWidth10"
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius30"
      boxShadow="shadowLow"
      // width="size40"
      zIndex="zIndex20"
      paddingY="space40"
      paddingX="space60"
      textAlign="left"
      display="flex"
      alignItems="center"
      columnGap="space30"
      justifyContent="space-between"
      element="WHATS_NEW"
    >
      <Heading as="h4" variant="heading40" marginBottom="space0">
        {children}
      </Heading>
      <Button as="a" href={href} size="circle_small" variant="secondary">
        {showExternal ? (
          <LinkExternalIcon decorative={false} title="external link" />
        ) : (
          <ArrowForwardIcon decorative={false} title="internal link" />
        )}
      </Button>
    </Box>
  );
};

export { WhatsNew };
