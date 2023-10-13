import type { GenericThemeShape } from "@twilio-paste/theme";

import type { PasteCustomCSS } from "./PasteCSS";

export interface CreateCustomTheme {
  baseTheme: Partial<GenericThemeShape>;
  customBreakpoints?: string[];
  elements?: { [key: string]: PasteCustomCSS };
  overrides: Partial<GenericThemeShape>;
}
