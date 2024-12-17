import * as React from "react";


export interface AIChatLogContextProps {
  isAnimating: boolean;
  setIsAnimating: (animating: boolean) => void;
}
export const AIChatLogContext = React.createContext<AIChatLogContextProps>({} as any);
