import * as React from "react";

export type KeyboardKeyVariants = "default" | "inverse";

export interface KeyboardCombinationState {
  /**
   * The aray of currently active keys
   * @default []
   * @type { string[] }
   * @memberof KeyboardCombinationState
   */
  activeKeys?: string[];
  /**
   * Whether the keys should show the disbled state
   * @default false
   * @type { boolean }
   * @memberof KeyboardCombinationState
   */
  disabled?: boolean;
  /**
   * Whether the keys should show pressed state when active keys contains the keyEvent mapped to KeyboardKey
   * @default false
   * @type { boolean }
   * @memberof KeyboardCombinationState
   */
  enablePressStyles?: boolean;
  /**
   * The variant of the keys to display
   * @default 'default'
   * @type { KeyboardKeyVariants }
   * @memberof KeyboardCombinationState
   */
  variant?: KeyboardKeyVariants;
}

export const KeyboardKeyCombinationContext = React.createContext<KeyboardCombinationState>(
  {} as KeyboardCombinationState,
);
