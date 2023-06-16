import * as React from 'react';

import {
  ProgressSteps,
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepError,
  ProgressStepIncomplete,
  ProgressStepSeparator,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Progress Steps/Vertical',
  component: ProgressSteps,
};

export const Divs = (): React.ReactNode => {
  return (
    <ProgressSteps orientation="vertical">
      <ProgressStepComplete>Complete</ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError>Error</ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent>Current</ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete>Incomplete</ProgressStepIncomplete>
    </ProgressSteps>
  );
};

export const Buttons = (): React.ReactNode => {
  return (
    <ProgressSteps orientation="vertical">
      <ProgressStepComplete as="button" onClick={() => {}}>
        Sign up
      </ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="button" onClick={() => {}}>
        Validate Email
      </ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="button" onClick={() => {}}>
        Complete Profile
      </ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="button" onClick={() => {}}>
        Add friends
      </ProgressStepIncomplete>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="button" onClick={() => {}} disabled>
        Start event
      </ProgressStepIncomplete>
    </ProgressSteps>
  );
};

export const Anchors = (): React.ReactNode => {
  return (
    <ProgressSteps orientation="vertical">
      <ProgressStepComplete as="a" href="#">
        Sign up
      </ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="a" href="#">
        Validate Email
      </ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="a" href="#">
        Complete Profile
      </ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="a" href="#">
        Add friends
      </ProgressStepIncomplete>
    </ProgressSteps>
  );
};
