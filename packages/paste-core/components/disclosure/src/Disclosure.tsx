import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  useDisclosurePrimitiveState,
  DisclosurePrimitiveInitialState,
  DisclosurePrimitveStateReturn,
} from '@twilio-paste/disclosure-primitive';
import {Card} from '@twilio-paste/card';

export type Variants = 'contained' | 'default';

export interface DisclosureContextProps {
  disclosure: DisclosurePrimitveStateReturn;
  variant: Variants;
}

export const DisclosureContext = React.createContext<DisclosureContextProps>({} as any);

export interface DisclosureProps extends DisclosurePrimitiveInitialState {
  children: NonNullable<React.ReactNode>;
  variant?: Variants;
}
const Disclosure: React.FC<DisclosureProps> = ({children, variant = 'default', ...props}) => {
  const disclosure = useDisclosurePrimitiveState({...props});
  const disclosureContext = {
    disclosure,
    variant,
  };

  if (variant === 'contained') {
    return (
      <DisclosureContext.Provider value={disclosureContext}>
        <Card padding="space0">{children}</Card>
      </DisclosureContext.Provider>
    );
  }
  return <DisclosureContext.Provider value={disclosureContext}>{children}</DisclosureContext.Provider>;
};
Disclosure.displayName = 'Disclosure';

if (process.env.NODE_ENV === 'development') {
  Disclosure.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'contained']),
  };
}
export {Disclosure};
