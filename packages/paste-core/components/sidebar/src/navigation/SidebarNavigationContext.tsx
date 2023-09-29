import * as React from "react";

interface SidebarNavigationState {
  hideItemsOnCollapse: boolean;
  hierarchical: boolean;
}

export const SidebarNavigationContext = React.createContext<SidebarNavigationState>({} as SidebarNavigationState);
