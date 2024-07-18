import { useCompositeState } from "@twilio-paste/reakit-library";
import type { CompositeInitialState, CompositeStateReturn } from "@twilio-paste/reakit-library";
import { createContext } from "react";

import type { FormPillGroupSizeVariant } from "./types";

export type FormPillInitialState = Omit<CompositeInitialState, "orientation" | "loop">;

export const useFormPillState = (config: FormPillInitialState = {}): CompositeStateReturn => {
  return {
    ...useCompositeState({
      ...config,
      orientation: "horizontal", // <- -> arrow keys
      loop: true, // loops when reaches end of pill list
    }),
  };
};

export interface FormPillGroupContextState {
  size: FormPillGroupSizeVariant;
}

export const FormPillGroupContext = createContext<FormPillGroupContextState>({
  size: "default"
})
