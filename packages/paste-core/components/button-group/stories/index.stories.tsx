import * as React from 'react';
import type {Story} from '@storybook/react';
import {Button} from '@twilio-paste/core/button';
import {ButtonGroup} from '../src';
import type {ButtonGroupProps} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
};

export const Unattached: Story = (props: Partial<ButtonGroupProps>) => (
  <ButtonGroup aria-label="A decisive group of buttons" {...props}>
    <Button variant="secondary">Yes</Button>
    <Button variant="secondary">No</Button>
    <Button variant="secondary">Maybe</Button>
  </ButtonGroup>
);

export const Attached: Story = (props: Partial<ButtonGroupProps>) => (
  <ButtonGroup attached aria-label="A decisive group of buttons" {...props}>
    <Button variant="secondary">Yes</Button>
    <Button variant="secondary">No</Button>
    <Button variant="secondary">Maybe</Button>
  </ButtonGroup>
);
