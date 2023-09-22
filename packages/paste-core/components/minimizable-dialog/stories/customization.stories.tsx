import type { StoryFn } from "@storybook/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Paragraph } from "@twilio-paste/paragraph";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import {
  MinimizableDialog,
  MinimizableDialogButton,
  MinimizableDialogContainer,
  MinimizableDialogContent,
  MinimizableDialogHeader,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Minimizable Dialog/Customization",
  component: MinimizableDialog,
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};

export const CustomizedDialog: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();

  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        MINIMIZABLE_DIALOG_BUTTON: {
          backgroundColor: "colorBackgroundErrorWeakest",
          color: "colorTextErrorStronger",
        },
        MINIMIZABLE_DIALOG: {
          backgroundColor: "colorBackgroundErrorWeakest",
        },
        MINIMIZABLE_DIALOG_CONTENT: {
          color: "colorTextErrorStronger",
          padding: "space70",
        },
        MINIMIZABLE_DIALOG_HEADER: {
          padding: "space80",
        },
        MINIMIZABLE_DIALOG_HEADER_HEADING: {
          fontSize: "fontSize50",
          lineHeight: "lineHeight50",
        },
        MINIMIZABLE_DIALOG_HEADER_CLOSE_BUTTON: {
          borderStyle: "solid",
          borderWidth: "borderWidth10",
          borderColor: "colorBorderWeak",
        },
        MINIMIZABLE_DIALOG_HEADER_CLOSE_ICON: {
          width: "sizeIcon50",
        },
        MINIMIZABLE_DIALOG_HEADER_MINIMIZE_BUTTON: {
          borderStyle: "solid",
          borderWidth: "borderWidth10",
          borderColor: "colorBorderWeak",
        },
        MINIMIZABLE_DIALOG_HEADER_MINIMIZE_ICON: {
          width: "sizeIcon50",
        },
      }}
    >
      <MinimizableDialogContainer visible>
        <MinimizableDialogButton variant="primary">Button</MinimizableDialogButton>
        <MinimizableDialog aria-label="My custom dialog">
          <MinimizableDialogHeader>My custom dialog</MinimizableDialogHeader>
          <MinimizableDialogContent>
            <Paragraph>This is a dialog.</Paragraph>
          </MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>
    </CustomizationProvider>
  );
};
