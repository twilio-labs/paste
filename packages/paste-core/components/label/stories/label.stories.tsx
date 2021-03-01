import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Label} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Label',
  component: Label,
};

export const Default = (): React.ReactNode => {
  return (
    <>
      <Label htmlFor="label">Label</Label>
      <Label htmlFor="label" required>
        Required Label
      </Label>
    </>
  );
};

export const Disabled = (): React.ReactNode => {
  return (
    <>
      <Label htmlFor="label" disabled>
        Label
      </Label>
      <Label htmlFor="label" required disabled>
        Required Label
      </Label>
    </>
  );
};

export const Inverse = (): React.ReactNode => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor="label" variant="inverse">
        Label
      </Label>
      <Label htmlFor="label" required variant="inverse">
        Required Label
      </Label>
    </Box>
  );
};
