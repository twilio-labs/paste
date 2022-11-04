import * as React from 'react';

import {DisplayHeading} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Display Heading',
  component: DisplayHeading,
};

export const Default = (): React.ReactNode => {
  return (
    <DisplayHeading variant="displayHeading10" as="h1">
      Initial story
    </DisplayHeading>
  );
};
