import * as React from "react";
import { KeyboardCombinationState } from "./KeyboardKeyContext";

export interface useKeyCombinationProps {
  keys: string[];
  onCombinationPress: () => void;
  disabled?: boolean;
  enablePressStyles?: boolean;
}

export interface useKeyCombinationsProps {
  combinations: Omit<useKeyCombinationProps, "enablePressStyles">[];
  enablePressStyles?: boolean;
}

interface useKeyCombinationReturn extends Omit<KeyboardCombinationState, "activeKeys"> {
  activeKeys: string[];
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
    document.addEventListener("keydown", (e) => handleKeyDown(e));
    document.addEventListener("keyup", (e) => handleKeyUp(e));

    return () => {
      document.removeEventListener("keydown", (e) => handleKeyDown(e));
      document.removeEventListener("keyup", (e) => handleKeyUp(e));
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
      //   setActiveKeys([]);
      onCombinationPress();
    }
  }, [activeKeys]);

  return { activeKeys, disabled, enablePressStyles };
};

export const useKeyCombinations = ({
  combinations,
  enablePressStyles,
}: useKeyCombinationsProps): useKeyCombinationReturn => {
  const { activeKeys } = useKeyEvents();

  React.useEffect(() => {
    const combinationMatch = combinations.find(
      (combos) =>
        JSON.stringify(combos.keys.map((k) => k.toLowerCase()).sort()) ===
        JSON.stringify(activeKeys.map((k) => k.toLowerCase()).sort()),
    );

    if (combinationMatch && !combinationMatch.disabled) {
      //   setActiveKeys([]);
      combinationMatch.onCombinationPress();
    }
  }, [activeKeys, combinations]);

  return { activeKeys, enablePressStyles };
};
