import * as React from "react";

export type AIMessageVariants = "bot" | "user" | "agent";

export interface AIMessageContextProps {
  variant: AIMessageVariants;
  id: string;
}
export const AIMessageContext = React.createContext<AIMessageContextProps>({} as any);
