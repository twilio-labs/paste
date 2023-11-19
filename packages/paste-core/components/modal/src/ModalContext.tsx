import * as React from "react";

interface ModalContextInterface {
  onDismiss: () => void;
}
export const ModalContext = React.createContext<ModalContextInterface | null>(null);

export const useModalContext = (): ModalContextInterface => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used with ModalContextProvider");
  }
  return context;
};
