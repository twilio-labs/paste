import { Anchor } from "@twilio-paste/anchor";
import { Badge } from "@twilio-paste/badge";
import * as React from "react";

export const TrialBadge: React.FC = () => {
  return (
    <Badge as="span" variant="decorative30">
      Trial: $15.99 <Anchor href="#">Upgrade</Anchor>
    </Badge>
  );
};
