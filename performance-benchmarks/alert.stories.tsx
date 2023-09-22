import * as React from 'react';
import type { Story } from '@storybook/react';
import { Alert } from '@twilio-paste/alert';
import { Alert as EgAlert } from 'evergreen-ui';

export default {
  title: 'Performance/Alert',
  component: Alert,
};

export const PasteAlert: Story = () => {
  return (
    <Alert variant="error">
      <div>
        <strong>We weren’t able to save your changes</strong>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </Alert>
  );
};
PasteAlert.parameters = {
  a11y: {
    // no need to a11y check perf benchmarks
    disable: true,
  },
};
export const EvergreenAlert: Story = () => {
  return (
    <EgAlert intent="danger" title="We weren’t able to save your changes">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </EgAlert>
  );
};
EvergreenAlert.parameters = {
  a11y: {
    // no need to a11y check perf benchmarks
    disable: true,
  },
};
