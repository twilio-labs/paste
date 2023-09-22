import * as React from "react";

import type { Feature } from "../utils/api";

export type NavigationQuery = Feature[];

export const NavigationContext = React.createContext<NavigationQuery | null>(null);

export const useNavigationContext = (): NavigationQuery => {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigationContext must be used with NavigationContextProvider");
  }
  return context;
};
