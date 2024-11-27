import * as React from "react";

export interface BlockquoteContextProps {
  url?: string;
}
export const BlockquoteContext = React.createContext<BlockquoteContextProps>({} as any);
