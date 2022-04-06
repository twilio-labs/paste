import * as React from 'react';
import type {MessageVariants} from './types';

export const MessageVariantContext = React.createContext<MessageVariants>('inbound');
