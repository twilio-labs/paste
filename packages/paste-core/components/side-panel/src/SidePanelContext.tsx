import * as React from "react";

interface SidePanelState {
  // collapsed: boolean;
  size: "default" | "wide";
}

export const SidePanelContext = React.createContext<SidePanelState>({} as SidePanelState);
