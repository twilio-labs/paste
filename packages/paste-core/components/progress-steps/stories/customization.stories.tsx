import type { StoryFn } from '@storybook/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import { useTheme } from '@twilio-paste/theme';
import * as React from 'react';

import {
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepError,
  ProgressStepIncomplete,
  ProgressStepSeparator,
  ProgressSteps,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Progress Steps/Customization',
  component: ProgressSteps,
};

export const DefaultElementNames: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        PROGRESS_STEPS: {
          padding: 'space50',
        },
        PROGRESS_STEP_SEPARATOR: {
          borderBottomWidth: 'borderWidth40',
          borderRadius: 'borderRadiusCircle',
        },
        PROGRESS_STEP_COMPLETE: {
          borderWidth: 'borderWidth10',
          borderStyle: 'solid',
          borderColor: 'colorBorderPrimary',
        },
        PROGRESS_STEP_CURRENT: {
          borderWidth: 'borderWidth10',
          borderStyle: 'solid',
          borderColor: 'colorBorderPrimary',
        },
        PROGRESS_STEP_ERROR: {
          borderWidth: 'borderWidth10',
          borderStyle: 'solid',
          borderColor: 'colorBorderPrimary',
        },
        PROGRESS_STEP_INCOMPLETE: {
          borderWidth: 'borderWidth10',
          borderStyle: 'solid',
          borderColor: 'colorBorderPrimary',
        },
      }}
    >
      <ProgressSteps orientation="vertical">
        <ProgressStepComplete as="button" onClick={() => {}}>
          Complete
        </ProgressStepComplete>
        <ProgressStepSeparator />
        <ProgressStepError as="a" href="#">
          Error
        </ProgressStepError>
        <ProgressStepSeparator />
        <ProgressStepCurrent as="div">Current</ProgressStepCurrent>
        <ProgressStepSeparator />
        <ProgressStepIncomplete as="div">Incomplete</ProgressStepIncomplete>
      </ProgressSteps>
    </CustomizationProvider>
  );
};

export const CustomElementNames: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        STEPS: {
          padding: 'space50',
        },
        STEP_SEPARATOR: {
          borderBottomWidth: 'borderWidth40',
          borderRadius: 'borderRadiusCircle',
        },
        STEP_COMPLETE: {
          borderWidth: 'borderWidth10',
          borderStyle: 'solid',
          borderColor: 'colorBorderPrimary',
        },
        STEP_CURRENT: {
          borderWidth: 'borderWidth10',
          borderStyle: 'solid',
          borderColor: 'colorBorderPrimary',
        },
        STEP_ERROR: {
          borderWidth: 'borderWidth10',
          borderStyle: 'solid',
          borderColor: 'colorBorderPrimary',
        },
        STEP_INCOMPLETE: {
          borderWidth: 'borderWidth10',
          borderStyle: 'solid',
          borderColor: 'colorBorderPrimary',
        },
      }}
    >
      <ProgressSteps element="STEPS">
        <ProgressStepComplete element="STEP_COMPLETE" as="a" href="#">
          Sign up
        </ProgressStepComplete>
        <ProgressStepSeparator element="STEP_SEPARATOR" />
        <ProgressStepError element="STEP_ERROR" as="button" onClick={() => {}}>
          Validate email
        </ProgressStepError>
        <ProgressStepSeparator element="STEP_SEPARATOR" />
        <ProgressStepCurrent element="STEP_CURRENT" as="button" onClick={() => {}}>
          Complete profile
        </ProgressStepCurrent>
        <ProgressStepSeparator element="STEP_SEPARATOR" />
        <ProgressStepIncomplete element="STEP_INCOMPLETE" as="button" onClick={() => {}}>
          Add friends
        </ProgressStepIncomplete>
        <ProgressStepSeparator element="STEP_SEPARATOR" />
        <ProgressStepIncomplete element="STEP_INCOMPLETE" as="button" onClick={() => {}} disabled>
          Start event
        </ProgressStepIncomplete>
      </ProgressSteps>
    </CustomizationProvider>
  );
};
