import * as React from 'react';

import {SidePanel} from '../src';


// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Side Panel',
  component: SidePanel,
};

export const Default = (): React.ReactNode => {
  return (
    <SidePanel>
      Initial story
    </SidePanel>
  );
};
