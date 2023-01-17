import * as React from 'react';

export interface NavigationQuery {
  allPasteComponent: [
    {
      name: string;
      version: string;
      status: string;
    }
  ];
  allPastePrimitive: [
    {
      name: string;
      version: string;
      status: string;
    }
  ];
  allPasteLayout: [
    {
      name: string;
      version: string;
      status: string;
    }
  ];
  allPastePattern: [
    {
      Feature: string;
      status: string;
    }
  ];
}

export const NavigationContext = React.createContext<NavigationQuery | null>(null);

export const useNavigationContext = (): NavigationQuery => {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used with NavigationContextProvider');
  }
  return context;
};
