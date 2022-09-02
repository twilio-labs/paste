import * as React from 'react';
import type {TabPrimitiveState} from '@twilio-paste/tabs-primitive';

type CodeBlockTabState = Omit<TabPrimitiveState, 'orientation'>;

const CodeBlockTabsContext = React.createContext<CodeBlockTabState>({} as CodeBlockTabState);

export {CodeBlockTabsContext};
