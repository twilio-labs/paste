import * as React from "react";

export interface SidePanelContextProps {
  sidePanelId: string;
  collapsed: boolean;
}

export const SidePanelContext = React.createContext<SidePanelContextProps>({} as any);
