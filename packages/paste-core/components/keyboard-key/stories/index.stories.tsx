import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from "@twilio-paste/modal";
import { Paragraph } from "@twilio-paste/paragraph";
import { Stack } from "@twilio-paste/stack";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import { KeyboardKey, KeyboardKeyGroup, useKeyCombination } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/KeyboardKey",
  component: KeyboardKey,
};

export const Default = (): React.ReactElement => {
  const state = useKeyCombination({
    keys: ["Control", "b"],
    onCombinationPress: (): void => {
      // eslint-disable-next-line no-console
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

export const Inverse = (): React.ReactElement => {
  const state = useKeyCombination({
    keys: ["Control", "b"],
    onCombinationPress: (): void => {
      // eslint-disable-next-line no-console
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

export const ForcePressed = (): React.ReactElement => {
  const state = useKeyCombination({
    keys: ["Control", "b"],
    onCombinationPress: (): void => {
      // eslint-disable-next-line no-console
      console.log("Control + B pressed");
    },
    enablePressStyles: true,
  });

  return (
    <Theme.Provider theme="twilio">
      <Stack orientation="horizontal" spacing="space40">
        <KeyboardKeyGroup {...state} activeKeys={["Control", "b"]}>
          <KeyboardKey keyText="Control">Control</KeyboardKey>
          <KeyboardKey keyText="b">B</KeyboardKey>
        </KeyboardKeyGroup>
        <KeyboardKeyGroup {...state} activeKeys={["Control", "b"]} variant="inverse">
          <KeyboardKey keyText="Control">Control</KeyboardKey>
          <KeyboardKey keyText="b">B</KeyboardKey>
        </KeyboardKeyGroup>
      </Stack>
    </Theme.Provider>
  );
};

export const TriggerModal = (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  const state = useKeyCombination({
    keys: ["Control", "k"],
    onCombinationPress: (): void => {
      setIsOpen(true);
    },
    enablePressStyles: true,
  });

  return (
    <Theme.Provider theme="twilio">
      <Paragraph>Use the following shortcut to open a modal:</Paragraph>
      <KeyboardKeyGroup {...state}>
        <KeyboardKey keyText="Control">Control</KeyboardKey>
        <KeyboardKey keyText="k">K</KeyboardKey>
      </KeyboardKeyGroup>

      <Modal ariaLabelledby="Close demo modal" isOpen={isOpen} onDismiss={() => setIsOpen(false)} size="default">
        <ModalHeader>
          <ModalHeading as="h3">Choose an author</ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>
            “If there’s a book that you want to read, but it hasn’t been written yet, then you must write it.” — Toni
            Morrison
          </Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button
              variant="secondary"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </Theme.Provider>
  );
};

export const Customization = (): React.ReactElement => {
  const state = useKeyCombination({
    keys: ["Control", "b"],
    onCombinationPress: (): void => {
      // eslint-disable-next-line no-console
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
