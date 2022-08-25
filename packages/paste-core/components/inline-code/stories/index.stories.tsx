import * as React from 'react';
import {InlineCode} from '../src';
import type {Story} from '@storybook/react';
import {Text} from '@twilio-paste/text';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Inline Code',
  component: InlineCode,
};

// make sure it wraps
export const Default: Story = () => {
  return <InlineCode>0000001111111122234444444</InlineCode>;
};

export const InlineWithText: Story = () => {
  return (
    <Text as="span">
      If the composite has a single row or column (one-dimensional), the <InlineCode>orientation</InlineCode> value
      determines which arrow keys can be used to move focus:
    </Text>
  );
};
