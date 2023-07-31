import * as React from 'react';
import type {StoryFn} from '@storybook/react';

import {Console as ConsoleComposition} from './components/Console';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/FullCompositions',
};

export const Console: StoryFn = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return <ConsoleComposition collapsed={pushSidebarCollapsed} setCollapsed={setPushSidebarCollapsed} />;
};
Console.parameters = {
  padding: false,
};

export const ConsoleCollapsed: StoryFn = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);

  return <ConsoleComposition collapsed={pushSidebarCollapsed} setCollapsed={setPushSidebarCollapsed} />;
};
ConsoleCollapsed.parameters = {
  padding: false,
};
