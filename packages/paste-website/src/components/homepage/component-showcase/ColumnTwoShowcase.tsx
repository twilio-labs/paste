import { Box } from "@twilio-paste/box";
import { Callout, CalloutHeading, CalloutText } from "@twilio-paste/callout";
import * as React from "react";

export const ColumnTwoShowcase: React.FC = () => {
  return (
    <Box element="COLUMN_2" display="flex" flexDirection="column" rowGap="space70">
      <Callout variant="neutral">
        <CalloutHeading as="h2">Auto recharge disabled</CalloutHeading>
        <CalloutText>We recommend enabling auto recharge to keep your account active.</CalloutText>
      </Callout>
      <Box backgroundColor="colorBackgroundBody" padding="space70" borderRadius="borderRadius30">
        box
      </Box>
    </Box>
  );
};
