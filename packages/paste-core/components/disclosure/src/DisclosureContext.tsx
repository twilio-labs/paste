import * as React from 'react';
import type {DisclosureContextProps} from './types';

const DisclosureContext = React.createContext<DisclosureContextProps>({} as any);

export {DisclosureContext};
