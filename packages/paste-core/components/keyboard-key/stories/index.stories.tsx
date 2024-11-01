import * as React from "react";

import { Box } from "@twilio-paste/box";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Stack } from "@twilio-paste/stack";
import { Theme } from "@twilio-paste/theme";
import { KeyboardKey, KeyboardKeyGroup, useKeyCombination } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/KeyboardKey",
  component: KeyboardKey,
};

export const Default = () => {
  const state = useKeyCombination({
    keys: ["Control", "b"],
    onCombinationPress: () => {
      console.log("Control + B pressed");
    },
    enablePressStyles: true,
  });

  return (
    <Theme.Provider theme="twilio">
      <Stack orientation="horizontal" spacing="space40">
        <KeyboardKeyGroup {...state}>
          <KeyboardKey keyText="Control">Control</KeyboardKey>
          <KeyboardKey keyText="b">B</KeyboardKey>
        </KeyboardKeyGroup>
        <KeyboardKeyGroup {...state} disabled>
          <KeyboardKey keyText="Control">Control</KeyboardKey>
          <KeyboardKey keyText="b">B</KeyboardKey>
        </KeyboardKeyGroup>
      </Stack>
    </Theme.Provider>
  );
};

export const Inverse = () => {
  const state = useKeyCombination({
    keys: ["Control", "b"],
    onCombinationPress: () => {
      console.log("Control + B pressed");
    },
    enablePressStyles: true,
  });

  return (
    <Theme.Provider theme="twilio">
      <Stack orientation="horizontal" spacing="space40">
        <KeyboardKeyGroup {...state} variant="inverse">
          <KeyboardKey keyText="Control">Control</KeyboardKey>
          <KeyboardKey keyText="b">B</KeyboardKey>
        </KeyboardKeyGroup>
        <KeyboardKeyGroup {...state} variant="inverse" disabled>
          <KeyboardKey keyText="Control">Control</KeyboardKey>
          <KeyboardKey keyText="b">B</KeyboardKey>
        </KeyboardKeyGroup>
      </Stack>
    </Theme.Provider>
  );
};

export const Customization = () => {
  const state = useKeyCombination({
    keys: ["Control", "b"],
    onCombinationPress: () => {
      console.log("Control + B pressed");
    },
    enablePressStyles: true,
  });

  return (
    <Theme.Provider theme="twilio">
      <CustomizationProvider
        elements={{
          KEYBOARD_KEY_GROUP: {
            columnGap: "space40",
          },
          KEYBOARD_KEY: {
            fontFamily: "fontFamilyCode",
            borderRadius: "borderRadius30",
            padding: "space30",
          },
        }}
      >
        <KeyboardKeyGroup {...state}>
          <KeyboardKey keyText="Control">Control</KeyboardKey>
          <KeyboardKey keyText="b">B</KeyboardKey>
        </KeyboardKeyGroup>
      </CustomizationProvider>
    </Theme.Provider>
  );
};

Customization.paramters = {
  a11y: {
    // no need to a11y check customization
    disabled: true,
  },
};
