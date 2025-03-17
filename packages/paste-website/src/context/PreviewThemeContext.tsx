import * as React from "react";

type PreviewThemeContextValue = {
  theme?: string;
  selectTheme: (theme: string) => void;
};

export const PreviewThemeContext = React.createContext<PreviewThemeContextValue | null>(null);

export const usePreviewThemeContext = (): PreviewThemeContextValue => {
  const context = React.useContext(PreviewThemeContext);
  if (!context) {
    throw new Error("usePreviewThemeContext must be used with PreviewThemeContextProvider");
  }
  return context;
};
