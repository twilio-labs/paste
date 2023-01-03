import * as React from 'react';
import {Listbox} from '../src';


// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Listbox',
  component: Listbox,
};

export const Default = (): React.ReactNode => {
  return (
    <Listbox>
      Initial story
    </Listbox>
  );
};
