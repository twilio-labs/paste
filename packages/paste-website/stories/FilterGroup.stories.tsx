import * as React from 'react';

import {DefaultFilterGroup} from '../src/component-examples/filter-group/components/DefaultFilterGroup';
import {CustomDateFilterGroup} from '../src/component-examples/filter-group/components/CustomDateFilterGroup';
import {STATIC_TABLE_DATA} from '../src/component-examples/filter-group/constants';

export default {
  title: 'Website/FilterGroupExamples',
};

export const DefaultFilterGroupExample: React.FC = () => <DefaultFilterGroup data={STATIC_TABLE_DATA} />;

export const EmptyStateFilterGroupExample: React.FC = () => (
  <DefaultFilterGroup data={STATIC_TABLE_DATA} defaultRoomType="Peer to Peer" defaultDateRange="day" />
);

export const CustomDateFilterGroupExample: React.FC = () => <CustomDateFilterGroup data={STATIC_TABLE_DATA} />;
