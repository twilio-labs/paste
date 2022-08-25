import * as React from 'react';
import {InlineCode} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Inline Code',
  component: InlineCode,
};

export const Default = (): React.ReactNode => {
  return <InlineCode>Initial story</InlineCode>;
};
