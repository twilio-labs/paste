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

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (!e.repeat) {
      setActiveKeys((prev) => {
        return Array.from(new Set([...prev, e.key]));
      });
    }
  };

  const handleKeyUp = (e: KeyboardEvent): void => {
    setActiveKeys((prev) => [...prev].filter((k) => k !== e.key));
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return { activeKeys };
};

const stringArrayMatches = (arr1: string[], arr2: string[]): boolean =>
  JSON.stringify(arr1.sort((a, b) => a.localeCompare(b))) === JSON.stringify(arr2.sort((a, b) => a.localeCompare(b)));

export const useKeyCombination = ({
  keys,
  onCombinationPress,
  disabled,
  enablePressStyles,
}: useKeyCombinationProps): useKeyCombinationReturn => {
  const { activeKeys } = useKeyEvents();

  React.useEffect(() => {
    const combinationMatch = stringArrayMatches(keys, activeKeys);

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
    const combinationMatch = combinations.find((combos) => stringArrayMatches(combos.keys, activeKeys));

    if (combinationMatch && !combinationMatch.disabled) {
      combinationMatch.onCombinationPress();
    }
  }, [activeKeys, combinations]);

  return { activeKeys };
};
