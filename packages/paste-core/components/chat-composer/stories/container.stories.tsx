import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Checkbox } from "@twilio-paste/checkbox";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { DownloadIcon } from "@twilio-paste/icons/esm/DownloadIcon";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import * as React from "react";

import {
  ChatComposer,
  ChatComposerActionGroup,
  ChatComposerAttachment,
  ChatComposerAttachmentCard,
  ChatComposerAttachmentDescription,
  ChatComposerAttachmentLink,
  ChatComposerAttachmentGroup,
  ChatComposerContainer,
} from "../src";
import type { ChatComposerProps } from "../src";

export default {
  title: "Components/Chat Composer/Container",
  component: ChatComposer,
};

const defaultConfig: ChatComposerProps["config"] = {
  namespace: "foo",
  onError: (error: Error) => {
    throw error;
  },
};

export const Default: StoryFn = () => {
  return (
    <ChatComposerContainer>
      <ChatComposer config={defaultConfig} ariaLabel="Basic chat composer" placeholder="Type here..." />
      <ChatComposerActionGroup>
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="Attach" />
        </Button>
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
    </ChatComposerContainer>
  );
};

Default.storyName = "Default";

export const ContainedVariant: StoryFn = () => {
  return (
    <ChatComposerContainer variant="contained">
      <ChatComposer
        config={defaultConfig}
        ariaLabel="Basic chat composer"
        placeholder="Type here..."
      />
      <ChatComposerActionGroup>
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="Attach" />
        </Button>
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
    </ChatComposerContainer>
  );
};

ContainedVariant.storyName = "Contained Variant";

export const ContainedVariantWithAttatchments: StoryFn = () => {
  return (
    <ChatComposerContainer variant="contained">
      <ChatComposer
        config={defaultConfig}
        ariaLabel="Basic chat composer"
        placeholder="Type here..."
      />
      <ChatComposerActionGroup>
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="Attach" />
        </Button>
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
      <ChatComposerAttachmentGroup>
        <Box maxWidth="size20">
          <ChatComposerAttachmentCard onDismiss={() => {}}>
            <ChatComposerAttachment attachmentIcon={<DownloadIcon color="colorTextIcon" decorative />}>
              <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
              <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
            </ChatComposerAttachment>
          </ChatComposerAttachmentCard>
        </Box>
        <Box maxWidth="size20">
          <ChatComposerAttachmentCard onDismiss={() => {}}>
            <ChatComposerAttachment attachmentIcon={<DownloadIcon color="colorTextIcon" decorative />}>
              <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
              <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
            </ChatComposerAttachment>
          </ChatComposerAttachmentCard>
        </Box>
      </ChatComposerAttachmentGroup>
    </ChatComposerContainer>
  );
};

ContainedVariantWithAttatchments.storyName = "Contained Variant with Attatchments";

export const ContainedDisabledVariant: StoryFn = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  return (
    <>
      <Box marginBottom="space50">
        <Checkbox checked={isDisabled} onClick={() => setIsDisabled((disabled) => !disabled)}>
          Disable Input
        </Checkbox>
      </Box>
      <ChatComposerContainer variant="contained">
        <ChatComposer
          config={defaultConfig}
          disabled={isDisabled}
          ariaLabel="Basic chat composer"
          placeholder="Type here..."
        />
        <ChatComposerActionGroup>
          <Button variant="secondary_icon" size="reset" aria-disabled={isDisabled} disabled={isDisabled}>
            <AttachIcon decorative={false} title="Attach" />
          </Button>
          <Button variant="primary_icon" size="reset" aria-disabled={isDisabled} disabled={isDisabled}>
            <SendIcon decorative={false} title="Send" />
          </Button>
        </ChatComposerActionGroup>
      </ChatComposerContainer>
    </>
  );
};

ContainedDisabledVariant.storyName = "Contained Disabled Variant";
