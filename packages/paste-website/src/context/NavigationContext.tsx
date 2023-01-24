import * as React from 'react';

import type {Package} from '../utils/api';

export interface NavigationQuery {
  allPasteComponent: Package[];
  allPastePrimitive: Package[];
  allPasteLayout: Package[];
  allPastePattern: {
    Feature: string;
    status: string;
  }[];
}

export const NavigationContext = React.createContext<NavigationQuery | null>(null);

export const useNavigationContext = (): NavigationQuery => {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used with NavigationContextProvider');
  }
  return context;
};
