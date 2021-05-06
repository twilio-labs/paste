import {createContext, useContext} from 'react';

export interface NavigationQuery {
  pathname: string;
  allSitePages: {
    edges: [
      {
        node: {
          path: string;
          componentChunkName: string;
          componentPath: string;
          id: string;
          component: string;
          internalComponentName: string;
          isCreatedByStatefulCreatePages: boolean;
          pluginCreatorId: string;
        };
      }
    ];
  };
  allPasteComponent: {
    edges: [
      {
        node: {
          name: string;
          version: string;
          status: string;
        };
      }
    ];
  };
  allPastePrimitive: {
    edges: [
      {
        node: {
          name: string;
          version: string;
          status: string;
        };
      }
    ];
  };
  allPasteLayout: {
    edges: [
      {
        node: {
          name: string;
          version: string;
          status: string;
        };
      }
    ];
  };
}

export const NavigationContext = createContext<NavigationQuery | null>(null);

export const useNavigationContext = (): NavigationQuery => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used with NavigationContextProvider');
  }
  return context;
};
