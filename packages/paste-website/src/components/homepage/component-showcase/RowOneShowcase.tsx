import { Box } from "@twilio-paste/box";
import {
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepIncomplete,
  ProgressStepSeparator,
  ProgressSteps,
} from "@twilio-paste/progress-steps";
import * as React from "react";

export const RowOneShowcase: React.FC = () => {
  return (
    <Box
      backgroundColor="colorBackgroundBody"
      padding="space70"
      width="100%"
      borderRadius="borderRadius30"
      gridArea="top"
      overflow="hidden"
      element="TOP_ROW"
    >
      <ProgressSteps>
        <ProgressStepComplete as="button" onClick={() => null}>
          Account type
        </ProgressStepComplete>
        <ProgressStepSeparator />
        <ProgressStepCurrent as="button" onClick={() => null}>
          General information
        </ProgressStepCurrent>
        <ProgressStepSeparator />
        <ProgressStepIncomplete as="button" onClick={() => null} disabled>
          Sender types
        </ProgressStepIncomplete>
        <ProgressStepSeparator />
        <ProgressStepIncomplete as="button" onClick={() => null} disabled>
          Connectivity requirements
        </ProgressStepIncomplete>
      </ProgressSteps>
    </Box>
  );
};
