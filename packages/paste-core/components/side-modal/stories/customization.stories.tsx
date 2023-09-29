import type { StoryFn } from "@storybook/react";
import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Paragraph } from "@twilio-paste/paragraph";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import {
  SideModal,
  SideModalBody,
  SideModalButton,
  SideModalContainer,
  SideModalFooter,
  SideModalFooterActions,
  SideModalHeader,
  SideModalHeading,
} from "../src";
// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Side Modal/Customization",
  component: SideModal,
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
        SIDE_MODAL_BUTTON: {
          backgroundColor: "colorBackgroundErrorWeakest",
          color: "colorTextErrorStronger",
        },
        SIDE_MODAL_CONTAINER: {
          width: "400px",
        },
        SIDE_MODAL: {
          boxShadow: "shadowFocus",
        },
        SIDE_MODAL_BODY: {
          backgroundColor: "colorBackgroundErrorWeakest",
          color: "colorTextErrorStronger",
        },
        SIDE_MODAL_HEADER: {
          padding: "space80",
          borderBottomWidth: "borderWidth30",
        },
        SIDE_MODAL_HEADING: {
          fontSize: "fontSize60",
          lineHeight: "lineHeight60",
        },
        SIDE_MODAL_HEADER_CLOSE_BUTTON: {
          borderStyle: "solid",
          borderWidth: "borderWidth10",
          borderColor: "colorBorderWeak",
        },
        SIDE_MODAL_HEADER_CLOSE_ICON: {
          width: "sizeIcon50",
        },
        SIDE_MODAL_FOOTER: {
          borderTopWidth: "borderWidth30",
          padding: "space10",
        },
        SIDE_MODAL_FOOTER_ACTIONS: {
          justifyContent: "flex-start",
        },
      }}
    >
      <SideModalContainer visible>
        <SideModalButton variant="primary">Button</SideModalButton>
        <SideModal aria-label="My custom dialog">
          <SideModalHeader>
            <SideModalHeading>My custom dialog</SideModalHeading>
          </SideModalHeader>
          <SideModalBody>
            <Paragraph>This is a dialog.</Paragraph>
          </SideModalBody>
          <SideModalFooter>
            <SideModalFooterActions>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save</Button>
            </SideModalFooterActions>
          </SideModalFooter>
        </SideModal>
      </SideModalContainer>
    </CustomizationProvider>
  );
};
