import * as React from 'react';
import type {TabPrimitiveState} from '@twilio-paste/tabs-primitive';
import type {Variants} from './types';

interface TabState extends TabPrimitiveState {
  variant?: Variants;
}

const TabsContext = React.createContext<Partial<TabState>>({});

export {TabsContext};
