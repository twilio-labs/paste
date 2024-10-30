import * as React from 'react';

import {KeyboardKey} from '../src';


// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/KeyboardKey',
  component: KeyboardKey,
};

export const Default = (): React.ReactNode => {
  return (
    <KeyboardKey>
      Initial story
    </KeyboardKey>
  );
};
