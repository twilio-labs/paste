import * as React from 'react';

interface InPageNavigationContextValue {
  variant?: 'fullWidth';
}

const InPageNavigationContext = React.createContext<InPageNavigationContextValue>({
  variant: undefined,
});

export {InPageNavigationContext};
