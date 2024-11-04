import * as React from "react";

import { KeyboardKeyVariants } from "./KeyboardKeyGroup";

export interface KeyboardCombinationState {
  activeKeys?: string[];
  disabled?: boolean;
  enablePressStyles?: boolean;
  variant?: KeyboardKeyVariants;
}

export const KeyboardKeyCombinationContext = React.createContext<KeyboardCombinationState>(
  {} as KeyboardCombinationState,
);
