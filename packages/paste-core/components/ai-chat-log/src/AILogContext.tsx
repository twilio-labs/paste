import * as React from "react";

export type AILogSizes = "default" | "fullScreen";

export interface AILogContextProps {
  size?: AILogSizes;
}
export const AILogContext = React.createContext<AILogContextProps>({} as any);
