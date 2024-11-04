import { render } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import { KeyboardKey, KeyboardKeyGroup } from "../src";
import { Default } from "../stories/index.stories";

describe("KeyboardKey", () => {
  it("should render", async () => {
    const { getAllByText } = render(<Default />);

    const controlKey = getAllByText("Control")[0];
    const bKey = getAllByText("B")[0];
    expect(controlKey).toBeDefined();
    expect(controlKey).toBeDefined();
    expect(controlKey).toHaveAttribute("data-paste-element", "KEYBOARD_KEY");
    expect(bKey).toHaveAttribute("data-paste-element", "KEYBOARD_KEY");
    expect(controlKey.parentElement).toHaveAttribute("data-paste-element", "KEYBOARD_KEY_GROUP");
  });

  describe("Customization", () => {
    it("should accept custom element names", async () => {
      const { getAllByText } = render(
        <Theme.Provider theme="default">
          <KeyboardKeyGroup element="MY_CUSTOM_KEY_GROUP">
            <KeyboardKey element="MY_CUSTOM_KEY_ONE">Control</KeyboardKey>
            <KeyboardKey element="MY_CUSTOM_KEY_TWO">B</KeyboardKey>
          </KeyboardKeyGroup>
        </Theme.Provider>,
      );

      const controlKey = getAllByText("Control")[0];
      const bKey = getAllByText("B")[0];
      expect(controlKey).toHaveAttribute("data-paste-element", "MY_CUSTOM_KEY_ONE");
      expect(bKey).toHaveAttribute("data-paste-element", "MY_CUSTOM_KEY_TWO");
      expect(controlKey.parentElement).toHaveAttribute("data-paste-element", "MY_CUSTOM_KEY_GROUP");
    });

    it("should customize styling", async () => {
      const { getAllByText } = render(
        <Theme.Provider theme="default">
          <CustomizationProvider
            elements={{
              KEYBOARD_KEY_GROUP: {
                columnGap: "space40",
                backgroundColor: "colorBackgroundPrimary",
              },
              KEYBOARD_KEY: {
                fontFamily: "fontFamilyCode",
                borderRadius: "borderRadius30",
                padding: "space30",
              },
            }}
          >
            <KeyboardKeyGroup>
              <KeyboardKey>Control</KeyboardKey>
              <KeyboardKey>B</KeyboardKey>
            </KeyboardKeyGroup>
          </CustomizationProvider>
        </Theme.Provider>,
      );

      const controlKey = getAllByText("Control")[0];
      const bKey = getAllByText("B")[0];
      expect(controlKey).toHaveStyleRule("font-family", "'TwilioSansMono',Courier,monospace");
      expect(bKey).toHaveStyleRule("padding", "0.5rem");
      expect(controlKey.parentElement).toHaveStyleRule("background-color", "rgb(2, 99, 224)");
    });
  });
});
