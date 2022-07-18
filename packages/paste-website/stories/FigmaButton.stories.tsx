import React from 'react';
import type {Story} from '@storybook/react';
import {FigmaButton} from '../src/components/site-wrapper/site-header/FigmaButton';

export default {
  title: 'Website/FigmaButton',
  component: FigmaButton,
};

export const FigmaButtonStory: Story = () => <FigmaButton />;
