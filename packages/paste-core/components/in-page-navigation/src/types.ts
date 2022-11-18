import type * as React from 'react';
import type {BoxProps} from '@twilio-paste/box';

export interface InPageNavigationProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children: React.ReactNode;
  element?: BoxProps['element'];
  'aria-label': string;
  variant?: 'fullWidth' | 'default';
}
