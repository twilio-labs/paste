import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  useDisclosurePrimitiveState,
  DisclosurePrimitiveInitialState,
  DisclosurePrimitveStateReturn,
} from '@twilio-paste/disclosure-primitive';
import {Box} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';

export type Variants = 'contained' | 'default';

export interface DisclosureContextProps {
  disclosure: DisclosurePrimitveStateReturn;
  variant: Variants;
}

export const DisclosureContext = React.createContext<DisclosureContextProps>({} as any);

export interface DisclosureStateReturn extends DisclosurePrimitveStateReturn {
  [key: string]: any;
}

export interface DisclosureProps extends DisclosurePrimitiveInitialState {
  children: NonNullable<React.ReactNode>;
  state?: DisclosureStateReturn;
  variant?: Variants;
}

const Disclosure = React.forwardRef<HTMLDivElement, DisclosureProps>(
  ({children, variant = 'default', state, ...props}, ref) => {
    const disclosure = state || useDisclosurePrimitiveState({...props});
    const disclosureContext = {
      disclosure,
      variant,
    };

    if (variant === 'contained') {
      return (
        <DisclosureContext.Provider value={disclosureContext}>
          <Card padding="space0" ref={ref}>
            {children}
          </Card>
        </DisclosureContext.Provider>
      );
    }

    return (
      <DisclosureContext.Provider value={disclosureContext}>
        <Box ref={ref}>{children}</Box>
      </DisclosureContext.Provider>
    );
  }
);
Disclosure.displayName = 'Disclosure';

if (process.env.NODE_ENV === 'development') {
  Disclosure.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'contained']),
  };
}
export {Disclosure};

export {useDisclosurePrimitiveState as useDisclosureState};
