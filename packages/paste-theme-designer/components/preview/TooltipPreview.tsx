import { Button } from "@twilio-paste/core/button";
import { Tooltip } from "@twilio-paste/core/tooltip";
import * as React from "react";
import type { JSX } from "react";

const TooltipPreview = (): JSX.Element => {
  return (
    <Tooltip text="Welcome to Paste!" placement="right">
      <Button variant="primary">Open tooltip</Button>
    </Tooltip>
  );
};

export { TooltipPreview };
