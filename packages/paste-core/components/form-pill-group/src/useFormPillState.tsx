import { useCompositeState } from "@twilio-paste/reakit-library";
import type { CompositeInitialState, CompositeStateReturn } from "@twilio-paste/reakit-library";
import type { FontSize } from "@twilio-paste/style-props";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";

export type FormPillStateReturn = CompositeStateReturn & {
  fontSize?: FontSize;
  /** Set the font size of the pills. */
  setPillFontSize: Dispatch<SetStateAction<FontSize | undefined>>;
};
export type FormPillInitialState = Omit<CompositeInitialState, "orientation" | "loop">;

export const useFormPillState = (config: FormPillInitialState = {}): FormPillStateReturn => {
  const [fontSize, setPillFontSize] = useState<FontSize>();
  return {
    fontSize,
    setPillFontSize,
    ...useCompositeState({
      ...config,
      orientation: "horizontal", // <- -> arrow keys
      loop: true, // loops when reaches end of pill list
    }),
  };
};
