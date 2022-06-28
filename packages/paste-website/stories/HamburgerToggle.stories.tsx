import * as React from 'react';
import type {Story} from '@storybook/react';
import {HamburgerToggle} from '../src/components/site-wrapper/site-header/HamburgerToggle';

export default {
  title: 'Website/HamburgerToggle',
};

export const ToggledHamburger: Story = () => <HamburgerToggle toggled color="colorTextIcon" />;
export const NotToggledHamburger: Story = () => <HamburgerToggle toggled={false} color="colorTextIcon" />;
