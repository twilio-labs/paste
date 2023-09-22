import type { StoryFn } from '@storybook/react';
import * as React from 'react';

import { HamburgerToggle } from '../src/components/site-wrapper/site-header/HamburgerToggle';

export default {
  title: 'Website/HamburgerToggle',
};

export const ToggledHamburger: StoryFn = () => <HamburgerToggle toggled color="colorTextIcon" />;
export const NotToggledHamburger: StoryFn = () => <HamburgerToggle toggled={false} color="colorTextIcon" />;
