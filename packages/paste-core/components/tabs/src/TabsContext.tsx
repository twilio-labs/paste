import * as React from 'react';
import {TabPrimitiveState} from '@twilio-paste/tabs-primitive';

const TabsContext = React.createContext<Partial<TabPrimitiveState>>({});

export {TabsContext};
