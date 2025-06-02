import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Checkbox } from "@twilio-paste/checkbox";
import { CustomizationProvider } from "@twilio-paste/customization";
import { AgentIcon } from "@twilio-paste/icons/esm/AgentIcon";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { DocumentationIcon } from "@twilio-paste/icons/esm/DocumentationIcon";
import { DownloadIcon } from "@twilio-paste/icons/esm/DownloadIcon";
import { EmojiIcon } from "@twilio-paste/icons/esm/EmojiIcon";
import { HistoryIcon } from "@twilio-paste/icons/esm/HistoryIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { SendIcon } from "@twilio-paste/icons/esm/SendIcon";
import { Menu, MenuButton, MenuItem, MenuSeparator, useMenuState } from "@twilio-paste/menu";
import { useTheme } from "@twilio-paste/theme";
import { Tooltip, useTooltipState } from "@twilio-paste/tooltip";
import * as React from "react";

import type { ChatComposerProps } from "../src";
import {
  ChatComposer,
  ChatComposerActionGroup,
  ChatComposerActionRow,
  ChatComposerAttachmentCard,
  ChatComposerAttachmentDescription,
  ChatComposerAttachmentGroup,
  ChatComposerAttachmentLink,
  ChatComposerContainer,
} from "../src";


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

export const ContainedVariantActionRow: StoryFn = () => {
    const tooltip = useTooltipState();
    const menu = useMenuState();
    
  return (
    <ChatComposerContainer variant="contained">
      <ChatComposer config={defaultConfig} ariaLabel="Basic chat composer" placeholder="Type here..." />
      <ChatComposerActionGroup>
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send" />
        </Button>
      </ChatComposerActionGroup>
       <ChatComposerActionRow>
        <Button variant="secondary" size="circle_small">
          <Box borderWidth="borderWidth10" borderColor="colorBorderWeaker" borderRadius="borderRadiusCircle">
            <AttachIcon decorative={false} title="attach a file to your message" />
          </Box>
        </Button>
         <Tooltip
          state={tooltip}
          text="Chat history"
        >
          <Button variant="secondary" size="circle_small">
            <EmojiIcon decorative={false} title="Chat history"/>
          </Button>
        </Tooltip>

        <>
          <MenuButton {...menu} variant="secondary" size="circle_small">
             <MoreIcon decorative={false} title="More actions"/> 
          </MenuButton>
          <Menu {...menu} aria-label="Preferences">
            <MenuItem {...menu}>
              <Box display="flex" alignItems="center" columnGap="space20">
                <HistoryIcon decorative color="colorTextIcon" /> Chat history
              </Box>
            </MenuItem>
            <MenuItem {...menu}>
              <Box display="flex" alignItems="center" columnGap="space20">
                <AgentIcon decorative color="colorTextIcon" /> Contact an agent
              </Box>
            </MenuItem>
            <MenuItem {...menu}>
              <Box display="flex" alignItems="center" columnGap="space20">
                <DocumentationIcon decorative color="colorTextIcon" /> Quick Start Guide
              </Box>
            </MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem {...menu}>
              Privacy Policy
            </MenuItem>
            <MenuItem {...menu}>
              Terms of Service
            </MenuItem>
          </Menu>
        </>
      </ChatComposerActionRow>
    </ChatComposerContainer>
  );
};

ContainedVariantActionRow.storyName = "Contained Variant with Action Row";

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
