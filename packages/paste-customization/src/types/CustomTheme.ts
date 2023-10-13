import type { GenericThemeShape } from "@twilio-paste/theme";

import type { PasteCustomCSS } from "./PasteCSS";

export type CustomTheme = Partial<GenericThemeShape> & {
  elements?: {
    [key: string]: PasteCustomCSS;
  };
};
