import * as React from 'react';

import {DisplayHeading} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Display Heading',
  component: DisplayHeading,
};

export const AllVariants = (): React.ReactNode => {
  return (
    <>
      <DisplayHeading variant="displayHeading10" as="h1">
        DisplayHeading10
      </DisplayHeading>
      <DisplayHeading variant="displayHeading20" as="h1">
        DisplayHeading20
      </DisplayHeading>
      <DisplayHeading variant="displayHeading30" as="h1">
        DisplayHeading30
      </DisplayHeading>
    </>
  );
};

export const DisplayHeading10 = (): React.ReactNode => {
  return (
    <DisplayHeading variant="displayHeading10" as="h1">
      Display Heading 10
    </DisplayHeading>
  );
};

export const DisplayHeading20 = (): React.ReactNode => {
  return (
    <DisplayHeading variant="displayHeading20" as="h2">
      Display Heading 20
    </DisplayHeading>
  );
};

export const DisplayHeading30 = (): React.ReactNode => {
  return (
    <DisplayHeading variant="displayHeading30" as="h3">
      Display Heading 30
    </DisplayHeading>
  );
};
