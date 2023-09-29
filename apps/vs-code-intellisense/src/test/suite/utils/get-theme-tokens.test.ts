import assert from "assert";

import {
  darkThemeTokens,
  defaultThemeTokens,
  evergreenThemeTokens,
  sendGridThemeTokens,
  twilioDarkThemeTokens,
  twilioThemeTokens,
} from "../../../tokens";
import { Theme } from "../../../types";
import { getThemeTokens } from "../../../utils";

suite("getThemeTokens", () => {
  ["Default", "default", undefined, null, "foo"].forEach((theme) => {
    test(`when theme is '${theme}', returns defaultThemeTokens`, () => {
      const result = getThemeTokens(theme as Theme | undefined);

      assert.strictEqual(result, defaultThemeTokens);
    });
  });

  test(`when theme is 'Dark', returns darkThemeTokens`, () => {
    const result = getThemeTokens("Dark");

    assert.strictEqual(result, darkThemeTokens);
  });

  test(`when theme is 'Evergreen', returns evergreenThemeTokens`, () => {
    const result = getThemeTokens("Evergreen");

    assert.strictEqual(result, evergreenThemeTokens);
  });

  test(`when theme is 'SendGrid', returns sendGridThemeTokens`, () => {
    const result = getThemeTokens("SendGrid");

    assert.strictEqual(result, sendGridThemeTokens);
  });

  test(`when theme is 'Twilio', returns twilioThemeTokens`, () => {
    const result = getThemeTokens("Twilio");

    assert.strictEqual(result, twilioThemeTokens);
  });

  test(`when theme is 'Twilio Dark', returns twilioDarkThemeTokens`, () => {
    const result = getThemeTokens("Twilio Dark");

    assert.strictEqual(result, twilioDarkThemeTokens);
  });
});
