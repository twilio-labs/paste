import type { StoryFn } from '@storybook/react';
import * as React from 'react';

import { SidebarBetaBadge } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar',
};

export const BetaBadge: StoryFn = () => {
  return <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>;
};
