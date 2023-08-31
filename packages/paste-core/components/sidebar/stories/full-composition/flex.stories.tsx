import * as React from 'react';
import type {StoryFn} from '@storybook/react';

import {Flex as FlexComposition} from './components/Flex';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/FullCompositions',
};

export const Flex: StoryFn = () => {
  const [collapsed, setCollapsed] = React.useState(true);

  return <FlexComposition collapsed={collapsed} setCollapsed={setCollapsed} />;
};
Flex.parameters = {
  padding: false,
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const FlexExpanded: StoryFn = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return <FlexComposition collapsed={collapsed} setCollapsed={setCollapsed} />;
};
FlexExpanded.parameters = {
  padding: false,
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
