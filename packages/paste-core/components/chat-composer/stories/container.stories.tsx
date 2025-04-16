import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Checkbox } from "@twilio-paste/checkbox";
import { CustomizationProvider } from "@twilio-paste/customization";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { DownloadIcon } from "@twilio-paste/icons/esm/DownloadIcon";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import {
  ChatComposer,
  ChatComposerActionGroup,
  ChatComposerAttachmentCard,
  ChatComposerAttachmentDescription,
  ChatComposerAttachmentGroup,
  ChatComposerAttachmentLink,
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
          <AttachIcon decorative={false} title="attach a file to your message" />
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
      <ChatComposer config={defaultConfig} ariaLabel="Basic chat composer" placeholder="Type here..." />
      <ChatComposerActionGroup>
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="attach a file to your message" />
        </Button>
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
    </ChatComposerContainer>
  );
};

ContainedVariant.storyName = "Contained Variant";

export const ContainedVariantWithAttachments: StoryFn = () => {
  return (
    <ChatComposerContainer variant="contained">
      <ChatComposer config={defaultConfig} ariaLabel="Basic chat composer" placeholder="Type here..." />
      <ChatComposerActionGroup>
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="attach a file to your message" />
        </Button>
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
      <ChatComposerAttachmentGroup>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
      </ChatComposerAttachmentGroup>
    </ChatComposerContainer>
  );
};

export const ContainedVariantWithAttachmentsNoIcons: StoryFn = () => {
  return (
    <ChatComposerContainer variant="contained">
      <ChatComposer config={defaultConfig} ariaLabel="Basic chat composer" placeholder="Type here..." />
      <ChatComposerActionGroup>
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="attach a file to your message" />
        </Button>
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
      <ChatComposerAttachmentGroup>
        <ChatComposerAttachmentCard onDismiss={() => {}}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
      </ChatComposerAttachmentGroup>
    </ChatComposerContainer>
  );
};

ContainedVariantWithAttachments.storyName = "Contained Variant with Attachments";

export const ResponsiveContainedVariantWithAttachments: StoryFn = () => {
  return (
    <ChatComposerContainer variant="contained">
      <ChatComposer config={defaultConfig} ariaLabel="Basic chat composer" placeholder="Type here..." />
      <ChatComposerActionGroup>
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="attach a file to your message" />
        </Button>
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
      <ChatComposerAttachmentGroup columns={[1, 2, 3, 4]}>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
        <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
          <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
          <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
        </ChatComposerAttachmentCard>
      </ChatComposerAttachmentGroup>
    </ChatComposerContainer>
  );
};

ResponsiveContainedVariantWithAttachments.storyName = "Responsive Contained Variant with Attachments";

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
            <AttachIcon decorative={false} title="attach a file to your message" />
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

export const CustomizationContainedVariantWithAttachments: StoryFn = () => {
  const theme = useTheme();

  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        CHAT_COMPOSER: { color: "colorTextBrandHighlight" },
        CHAT_COMPOSER_PLACEHOLDER_WRAPPER: { color: "colorTextBrandHighlight" },
        CHAT_COMPOSER_ACTION_GROUP: { columnGap: "space90" },
        CHAT_COMPOSER_ATTACHMENT_CARD_ICON: { color: "colorTextDestructive" },
        CHAT_COMPOSER_ATTACHMENT_CARD_BODY: { fontFamily: "fontFamilyCode" },
        CHAT_COMPOSER_ATTACHMENT_CARD: { backgroundColor: "colorBackgroundDecorative10Weakest" },
        CHAT_COMPOSER_ATTACHMENT_CARD_REMOVE_BUTTON: { color: "colorTextIconBrandHighlight" },
        CHAT_COMPOSER_ATTACHMENT_DESCRIPTION: {
          backgroundColor: "colorBackgroundPrimaryStrong",
        },
        CHAT_COMPOSER_ATTACHMENT_GROUP: {
          borderWidth: "borderWidth10",
          borderColor: "colorBorderWeaker",
          borderRadius: "borderRadius30",
          boxShadow: "shadowLow",
        },
        CHAT_COMPOSER_ATTACHMENT_LINK: { color: "colorTextLinkDestructiveWeak" },
        CHAT_COMPOSER_CONTAINER: {
          borderWidth: "borderWidth10",
          borderColor: "colorBorderWeaker",
          borderRadius: "borderRadius80",
          boxShadow: "shadowBorder",
        },
      }}
    >
      <ChatComposerContainer variant="contained">
        <ChatComposer config={defaultConfig} ariaLabel="Basic chat composer" placeholder="Type here..." />
        <ChatComposerActionGroup>
          <Button variant="secondary_icon" size="reset">
            <AttachIcon decorative={false} title="attach a file to your message" />
          </Button>
          <Button variant="primary_icon" size="reset">
            <SendIcon decorative={false} title="Send" />
          </Button>
        </ChatComposerActionGroup>
        <ChatComposerAttachmentGroup>
          <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
            <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
            <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
          </ChatComposerAttachmentCard>
          <ChatComposerAttachmentCard onDismiss={() => {}} attachmentIcon={<DownloadIcon decorative />}>
            <ChatComposerAttachmentLink href="www.google.com">Document-FINAL.doc</ChatComposerAttachmentLink>
            <ChatComposerAttachmentDescription>123 MB</ChatComposerAttachmentDescription>
          </ChatComposerAttachmentCard>
        </ChatComposerAttachmentGroup>
      </ChatComposerContainer>
    </CustomizationProvider>
  );
};

CustomizationContainedVariantWithAttachments.storyName = "Customization Contained Variant with Attachments";
CustomizationContainedVariantWithAttachments.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
