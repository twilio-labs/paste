import type { UseToasterReturnedProps } from "@twilio-paste/toast";
import * as React from "react";

type AssistantToasterContextValue = {
  push: UseToasterReturnedProps["push"];
  pop: UseToasterReturnedProps["pop"];
};

export const AssistantToasterContext = React.createContext<AssistantToasterContextValue | undefined>(undefined);

export const useAssistantToaster = (): AssistantToasterContextValue => {
  const context = React.useContext(AssistantToasterContext);
  if (!context) {
    throw new Error("useDarkModeContext must be used with DarkModeContextProvider");
  }
  return context;
};
