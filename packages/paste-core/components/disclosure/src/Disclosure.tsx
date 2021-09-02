import * as React from 'react';
import {useDisclosurePrimitiveState} from '@twilio-paste/disclosure-primitive';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {DisclosureContext} from './DisclosureContext';
import type {DisclosureProps} from './types';
import {DisclosurePropTypes} from './PropTypes';

const Disclosure = React.forwardRef<HTMLDivElement, DisclosureProps>(
  ({children, element = 'DISCLOSURE', variant = 'default', state, ...props}, ref) => {
    const disclosure = state || useDisclosurePrimitiveState({animated: true, ...props});
    const disclosureContext = {
      disclosure,
      variant,
    };

    if (variant === 'contained') {
      return (
        <DisclosureContext.Provider value={disclosureContext}>
          <Card {...props} variant={variant} element={element} padding="space0" ref={ref}>
            {children}
          </Card>
        </DisclosureContext.Provider>
      );
    }

    return (
      <DisclosureContext.Provider value={disclosureContext}>
        <Box {...safelySpreadBoxProps(props)} variant={variant} element={element} ref={ref}>
          {children}
        </Box>
      </DisclosureContext.Provider>
    );
  }
);
Disclosure.displayName = 'Disclosure';

if (process.env.NODE_ENV === 'development') {
  Disclosure.propTypes = DisclosurePropTypes;
}
export {Disclosure};

export {useDisclosurePrimitiveState as useDisclosureState};
