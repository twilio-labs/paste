import type {
  DisclosurePrimitiveInitialState,
  DisclosurePrimitveStateReturn,
} from '@twilio-paste/disclosure-primitive';

export type DisclosureVariants = 'contained' | 'default';

export interface DisclosureStateReturn extends DisclosurePrimitveStateReturn {
  [key: string]: any;
}

export type { DisclosurePrimitiveInitialState as DisclosureInitialState };
