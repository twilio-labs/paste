import * as React from 'react';
import type { TabPrimitiveState } from '@twilio-paste/tabs-primitive';

import type { Variants } from './types';

interface TabState extends Omit<TabPrimitiveState, 'orientation'> {
  variant?: Variants;
  orientation: 'horizontal' | 'vertical';
}

const TabsContext = React.createContext<TabState>({} as TabState);

export { TabsContext };
