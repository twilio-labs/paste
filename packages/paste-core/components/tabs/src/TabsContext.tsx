import * as React from 'react';
import {TabPrimitiveState} from '@twilio-paste/tabs-primitive';
import {Variants} from './types';

interface TabState extends TabPrimitiveState {
  variant?: Variants;
}

const TabsContext = React.createContext<Partial<TabState>>({});

export {TabsContext};
