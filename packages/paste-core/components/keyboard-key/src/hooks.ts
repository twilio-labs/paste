import * as React from "react";
import { KeyboardCombinationState } from "./KeyboardKeyContext";

export interface useKeyCombinationProps {
  keys: string[];
  onCombinationPress: () => void;
  disabled?: boolean;
  enablePressStyles?: boolean;
}

interface useKeyCombinationReturn extends Omit<KeyboardCombinationState, "activeKeys"> {
  activeKeys: string[];
}

export interface useKeyCombinationsProps {
  combinations: Omit<useKeyCombinationProps, "enablePressStyles">[];
}

const useKeyEvents = (): { activeKeys: string[] } => {
  const [activeKeys, setActiveKeys] = React.useState<string[]>([]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!e.repeat) {
      setActiveKeys((prev) => {
        return Array.from(new Set([...prev, e.key]));
      });
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    setActiveKeys((prev) => [...prev].filter((k) => k !== e.key));
  };

  React.useEffect(() => {
    window.addEventListener("keydown", (e) => handleKeyDown(e));
    window.addEventListener("keyup", (e) => handleKeyUp(e));

    return () => {
      window.removeEventListener("keydown", (e) => handleKeyDown(e));
      window.removeEventListener("keyup", (e) => handleKeyUp(e));
    };
  }, []);

  return { activeKeys };
};
export const useKeyCombination = ({
  keys,
  onCombinationPress,
  disabled,
  enablePressStyles,
}: useKeyCombinationProps): useKeyCombinationReturn => {
  const { activeKeys } = useKeyEvents();

  React.useEffect(() => {
    const combinationMatch =
      JSON.stringify(keys.map((k) => k.toLowerCase()).sort()) ===
      JSON.stringify(activeKeys.map((k) => k.toLowerCase()).sort());

    if (combinationMatch && !disabled) {
      onCombinationPress();
    }
  }, [activeKeys]);

  return { activeKeys, disabled, enablePressStyles };
};

export const useKeyCombinations = ({
  combinations,
}: useKeyCombinationsProps): Omit<useKeyCombinationReturn, "enablePressStyles"> => {
  const { activeKeys } = useKeyEvents();
  React.useEffect(() => {
    const combinationMatch = combinations.find(
      (combos) =>
        JSON.stringify(combos.keys.map((k) => k.toLowerCase()).sort()) ===
        JSON.stringify(activeKeys.map((k) => k.toLowerCase()).sort()),
    );

    if (combinationMatch && !combinationMatch.disabled) {
      combinationMatch.onCombinationPress();
    }
  }, [activeKeys, combinations]);

  return { activeKeys };
};
