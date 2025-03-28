import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from "@twilio-paste/modal";
import { Paragraph } from "@twilio-paste/paragraph";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import { KeyboardKey, KeyboardKeyGroup, useKeyCombination } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/KeyboardKey",
  component: KeyboardKey,
};

export const Default = (): React.ReactElement<HTMLElement> => {
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
        <Box>
          <Text as="p" marginBottom="space30">
            Default/pressed
          </Text>
          <KeyboardKeyGroup {...state}>
            <KeyboardKey keyEvent="Control">Control</KeyboardKey>
            <KeyboardKey keyEvent="b">B</KeyboardKey>
          </KeyboardKeyGroup>
        </Box>
        <Box>
          <Text as="p" marginBottom="space30">
            Disabled
          </Text>
          <KeyboardKeyGroup {...state} disabled>
            <KeyboardKey keyEvent="Control">Control</KeyboardKey>
            <KeyboardKey keyEvent="b">B</KeyboardKey>
          </KeyboardKeyGroup>
        </Box>
      </Stack>
    </Theme.Provider>
  );
};

export const Inverse = (): React.ReactElement<HTMLElement> => {
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
        <Box>
          <Text as="p" marginBottom="space30">
            Default/pressed
          </Text>
          <KeyboardKeyGroup {...state} variant="inverse">
            <KeyboardKey keyEvent="Control">Control</KeyboardKey>
            <KeyboardKey keyEvent="b">B</KeyboardKey>
          </KeyboardKeyGroup>
        </Box>
        <Box>
          <Text as="p" marginBottom="space30">
            Disabled
          </Text>
          <KeyboardKeyGroup {...state} disabled variant="inverse">
            <KeyboardKey keyEvent="Control">Control</KeyboardKey>
            <KeyboardKey keyEvent="b">B</KeyboardKey>
          </KeyboardKeyGroup>
        </Box>
      </Stack>
    </Theme.Provider>
  );
};

export const ForcePressed = (): React.ReactElement<HTMLElement> => {
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
          <KeyboardKey keyEvent="Control">Control</KeyboardKey>
          <KeyboardKey keyEvent="b">B</KeyboardKey>
        </KeyboardKeyGroup>
        <KeyboardKeyGroup {...state} activeKeys={["Control", "b"]} variant="inverse">
          <KeyboardKey keyEvent="Control">Control</KeyboardKey>
          <KeyboardKey keyEvent="b">B</KeyboardKey>
        </KeyboardKeyGroup>
      </Stack>
    </Theme.Provider>
  );
};

export const MultipleCombinations = (): React.ReactElement<HTMLElement> => {
  const [textToDisplay, setTextToDisplay] = React.useState<string>("");

  const stateCtrB = useKeyCombination({
    keys: ["Control", "b"],
    onCombinationPress: (): void => {
      setTextToDisplay("Control + B pressed");
    },
    enablePressStyles: true,
  });
  const stateCtrK = useKeyCombination({
    keys: ["Control", "k"],
    onCombinationPress: (): void => {
      setTextToDisplay("Control + K pressed");
    },
    enablePressStyles: true,
  });
  const stateCmdB = useKeyCombination({
    keys: ["Meta", "b"],
    onCombinationPress: (): void => {
      setTextToDisplay("Cmd + B pressed");
    },
    enablePressStyles: true,
  });
  const stateCmdK = useKeyCombination({
    keys: ["Meta", "k"],
    onCombinationPress: (): void => {
      setTextToDisplay("Cmd + K pressed");
    },
    enablePressStyles: true,
  });
  const stateCmdShiftB = useKeyCombination({
    keys: ["Meta", "Shift", "p"],
    onCombinationPress: (): void => {
      setTextToDisplay("Cmd + Shift + P pressed");
    },
    enablePressStyles: true,
  });

  return (
    <Theme.Provider theme="twilio">
      <Stack orientation="vertical" spacing="space40">
        <KeyboardKeyGroup {...stateCtrB}>
          <KeyboardKey keyEvent="Control">Control</KeyboardKey>
          <KeyboardKey keyEvent="b">B</KeyboardKey>
        </KeyboardKeyGroup>
        <KeyboardKeyGroup {...stateCtrK}>
          <KeyboardKey keyEvent="Control">Control</KeyboardKey>
          <KeyboardKey keyEvent="k">K</KeyboardKey>
        </KeyboardKeyGroup>
        <KeyboardKeyGroup {...stateCmdB}>
          <KeyboardKey keyEvent="Meta">Cmd</KeyboardKey>
          <KeyboardKey keyEvent="b">B</KeyboardKey>
        </KeyboardKeyGroup>
        <KeyboardKeyGroup {...stateCmdK}>
          <KeyboardKey keyEvent="meta">Cmd</KeyboardKey>
          <KeyboardKey keyEvent="k">K</KeyboardKey>
        </KeyboardKeyGroup>
        <KeyboardKeyGroup {...stateCmdShiftB}>
          <KeyboardKey keyEvent="meta">Cmd</KeyboardKey>
          <KeyboardKey keyEvent="Shift">Shift</KeyboardKey>
          <KeyboardKey keyEvent="p">P</KeyboardKey>
        </KeyboardKeyGroup>
      </Stack>
      <br />
      <Paragraph>Combination pressed: {textToDisplay}</Paragraph>
    </Theme.Provider>
  );
};

export const TriggerModal = (): React.ReactElement<HTMLElement> => {
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
        <KeyboardKey keyEvent="Control">Control</KeyboardKey>
        <KeyboardKey keyEvent="k">K</KeyboardKey>
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

export const Customization = (): React.ReactElement<HTMLElement> => {
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
          <KeyboardKey keyEvent="Control">Control</KeyboardKey>
          <KeyboardKey keyEvent="b">B</KeyboardKey>
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
