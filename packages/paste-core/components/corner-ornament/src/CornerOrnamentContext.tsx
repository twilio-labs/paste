import React from "react";

import { CornerOrnamentContextInterface } from "./types";

export const CornerOrnamentContext = React.createContext<CornerOrnamentContextInterface | null>(null);

export const useCornerOrnamentContext = (): CornerOrnamentContextInterface => {
  const context = React.useContext(CornerOrnamentContext);
  if (!context) {
    throw new Error("useCornerOrnamentContext must be used with CornerOrnamentContextProvider");
  }
  return context;
};
