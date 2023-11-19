import {
  darkThemeTokens,
  defaultThemeTokens,
  evergreenThemeTokens,
  sendGridThemeTokens,
  twilioDarkThemeTokens,
  twilioThemeTokens,
} from "../tokens";
import { Theme, TokenMap } from "../types";

export const getThemeTokens = (theme?: Theme): TokenMap => {
  switch (theme) {
    case "Dark":
      return darkThemeTokens as TokenMap;
    case "Evergreen":
      return evergreenThemeTokens as TokenMap;
    case "SendGrid":
      return sendGridThemeTokens as TokenMap;
    case "Twilio":
      return twilioThemeTokens as TokenMap;
    case "Twilio Dark":
      return twilioDarkThemeTokens as TokenMap;
    case "Default":
    default:
      return defaultThemeTokens as TokenMap;
  }
};
