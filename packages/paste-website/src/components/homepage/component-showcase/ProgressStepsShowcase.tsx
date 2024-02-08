import {
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepIncomplete,
  ProgressStepSeparator,
  ProgressSteps,
} from "@twilio-paste/progress-steps";
import * as React from "react";

export const ProgressStepsShowcase: React.FC = () => {
  return (
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
  );
};
