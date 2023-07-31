import * as React from 'react';
import type {StoryFn} from '@storybook/react';

import {Segment as SegmentComposition} from './components/Segment';
// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/FullCompositions',
};

export const Segment: StoryFn = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return <SegmentComposition collapsed={pushSidebarCollapsed} setCollapsed={setPushSidebarCollapsed} />;
};
Segment.parameters = {
  padding: false,
};
export const SegmentCollapsed: StoryFn = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);

  return <SegmentComposition collapsed={pushSidebarCollapsed} setCollapsed={setPushSidebarCollapsed} />;
};
SegmentCollapsed.parameters = {
  padding: false,
};
