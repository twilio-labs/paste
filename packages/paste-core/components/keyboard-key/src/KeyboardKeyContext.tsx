import * as React from "react";

export interface KeyboardCombinationState {
  activeKeys?: string[];
  disabled?: boolean;
  enablePressStyles?: boolean;
  variant?: "default" | "inverse";
}

export const KeyboardKeyCombinationContext = React.createContext<KeyboardCombinationState>(
  {} as KeyboardCombinationState,
);
