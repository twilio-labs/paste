import * as React from 'react';
import type { DisclosurePrimitveStateReturn } from '@twilio-paste/disclosure-primitive';

import type { DisclosureVariants } from './types';

export interface DisclosureContextProps {
  disclosure: DisclosurePrimitveStateReturn;
  variant: DisclosureVariants;
  isDisabled: boolean;
  isHeadingHovered: boolean;
  setIsDisabled: (value: boolean) => void;
  setIsHeadingHovered: (value: boolean) => void;
}

const DisclosureContext = React.createContext<DisclosureContextProps>({} as any);

export { DisclosureContext };
