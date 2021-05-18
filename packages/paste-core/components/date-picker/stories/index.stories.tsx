import * as React from 'react';
import {DatePicker} from '../src';

// Write date picker stories and export to use in test file
// Stories: default, one using onChange with formatter function (copy combobox controlled using state story) and render value, replicate input stories

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Date Picker',
  component: DatePicker,
  excludeStories: [],
};

export const Default = (): React.ReactNode => {
  return <DatePicker />;
};
