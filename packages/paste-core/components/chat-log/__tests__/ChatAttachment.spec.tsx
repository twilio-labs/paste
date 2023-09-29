import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import type { PasteCustomCSS } from "@twilio-paste/customization";
import { DownloadIcon } from "@twilio-paste/icons/esm/DownloadIcon";
import { Spinner } from "@twilio-paste/spinner";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import { ChatAttachment, ChatAttachmentDescription, ChatAttachmentLink, ComposerAttachmentCard } from "../src";

const customizedElements: { [key: string]: PasteCustomCSS } = {
  COMPOSER_ATTACHMENT_CARD: {
    padding: "space100",
  },
  COMPOSER_ATTACHMENT_CARD_REMOVE_BUTTON: {
    color: "colorTextIconNeutral",
  },
  CHAT_ATTACHMENT: {
    marginLeft: "space50",
  },
  CHAT_ATTACHMENT_ICON: {
    color: "colorTextBrandHighlight",
  },
  CHAT_ATTACHMENT_BODY: {
    padding: "space20",
  },
  CHAT_ATTACHMENT_LINK: {
    fontSize: "fontSize50",
  },
  CHAT_ATTACHMENT_DESCRIPTION: {
    color: "colorText",
  },
};

const customizedMyElements: { [key: string]: PasteCustomCSS } = {
  MY_COMPOSER_ATTACHMENT_CARD: {
    padding: "space100",
  },
  MY_COMPOSER_ATTACHMENT_CARD_REMOVE_BUTTON: {
    color: "colorTextIconNeutral",
  },
  MY_CHAT_ATTACHMENT: {
    marginLeft: "space50",
  },
  MY_CHAT_ATTACHMENT_ICON: {
    color: "colorTextBrandHighlight",
  },
  MY_CHAT_ATTACHMENT_BODY: {
    padding: "space20",
  },
  MY_CHAT_ATTACHMENT_LINK: {
    fontSize: "fontSize50",
  },
  MY_CHAT_ATTACHMENT_DESCRIPTION: {
    color: "colorText",
  },
};

const CustomizationWrapper: React.FC<React.PropsWithChildren<{ elements?: { [key: string]: PasteCustomCSS } }>> = ({
  children,
  elements,
}) => (
  <CustomizationProvider baseTheme="default" theme={TestTheme} elements={elements || customizedElements}>
    {children}
  </CustomizationProvider>
);

const CustomizationMyWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationWrapper elements={customizedMyElements}>{children}</CustomizationWrapper>
);

describe("ChatAttachment", () => {
  it("should render an icon, anchor, and text", () => {
    const { container } = render(
      <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
        <ChatAttachmentLink href="www.google.com">document</ChatAttachmentLink>
        <ChatAttachmentDescription>description</ChatAttachmentDescription>
      </ChatAttachment>,
    );
    expect(container.querySelector('[data-paste-element="ICON"]')).toBeDefined();
    expect(screen.getByRole("link")).toBeDefined();
    expect(screen.getByText("description")).toBeDefined();
  });
});

describe("ComposerAttachmentCard", () => {
  it("should render a dismiss button if there is an onDismiss prop", () => {
    render(
      <Theme.Provider theme="default">
        <ComposerAttachmentCard onDismiss={() => {}}>
          <ChatAttachment attachmentIcon={<Spinner decorative={false} title="loading..." />}>
            <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
            <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
          </ChatAttachment>
        </ComposerAttachmentCard>
      </Theme.Provider>,
    );
    expect(screen.getByRole("button")).toBeDefined();
  });
  it("should not render a dismiss button if there is no onDismiss prop", () => {
    render(
      <Theme.Provider theme="default">
        <ComposerAttachmentCard>
          <ChatAttachment attachmentIcon={<DownloadIcon decorative />}>
            <ChatAttachmentLink href="www.google.com">Document-FINAL.doc</ChatAttachmentLink>
            <ChatAttachmentDescription>123 MB</ChatAttachmentDescription>
          </ChatAttachment>
        </ComposerAttachmentCard>
      </Theme.Provider>,
    );
    expect(screen.queryByRole("button")).toBeNull();
  });
});

describe("Customization", () => {
  it("should set a default element data attribute", () => {
    render(
      <ComposerAttachmentCard data-testid="composer-attachment-card" onDismiss={() => {}}>
        <ChatAttachment data-testid="chat-attachment" attachmentIcon={<DownloadIcon decorative />}>
          <ChatAttachmentLink data-testid="chat-attachment-link" href="www.google.com">
            Document-FINAL.doc
          </ChatAttachmentLink>
          <ChatAttachmentDescription data-testid="chat-attachment-description">123 MB</ChatAttachmentDescription>
        </ChatAttachment>
      </ComposerAttachmentCard>,
      { wrapper: CustomizationWrapper },
    );

    const composerAttachmentCard = screen.getByTestId("composer-attachment-card");
    const composerAttachmentCardRemoveButton = screen.getByRole("button");
    const chatAttachment = screen.getByTestId("chat-attachment");
    const chatAttachmentIcon = chatAttachment.firstChild?.firstChild as HTMLElement;
    const chatAttachmentBody = chatAttachment.lastChild as HTMLElement;
    const chatAttachmentLink = screen.getByTestId("chat-attachment-link");
    const chatAttachmentDescription = screen.getByTestId("chat-attachment-description");

    expect(composerAttachmentCard.getAttribute("data-paste-element")).toEqual("COMPOSER_ATTACHMENT_CARD");
    expect(composerAttachmentCardRemoveButton.getAttribute("data-paste-element")).toEqual(
      "COMPOSER_ATTACHMENT_CARD_REMOVE_BUTTON",
    );
    expect(chatAttachment.getAttribute("data-paste-element")).toEqual("CHAT_ATTACHMENT");
    expect(chatAttachmentIcon.getAttribute("data-paste-element")).toEqual("CHAT_ATTACHMENT_ICON");
    expect(chatAttachmentBody.getAttribute("data-paste-element")).toEqual("CHAT_ATTACHMENT_BODY");
    expect(chatAttachmentLink.getAttribute("data-paste-element")).toEqual("CHAT_ATTACHMENT_LINK");
    expect(chatAttachmentDescription.getAttribute("data-paste-element")).toEqual("CHAT_ATTACHMENT_DESCRIPTION");
  });

  it("should set a custom element data attribute", () => {
    render(
      <ComposerAttachmentCard
        element="MY_COMPOSER_ATTACHMENT_CARD"
        data-testid="composer-attachment-card"
        onDismiss={() => {}}
      >
        <ChatAttachment
          element="MY_CHAT_ATTACHMENT"
          data-testid="chat-attachment"
          attachmentIcon={<DownloadIcon decorative />}
        >
          <ChatAttachmentLink
            element="MY_CHAT_ATTACHMENT_LINK"
            data-testid="chat-attachment-link"
            href="www.google.com"
          >
            Document-FINAL.doc
          </ChatAttachmentLink>
          <ChatAttachmentDescription element="MY_CHAT_ATTACHMENT_DESCRIPTION" data-testid="chat-attachment-description">
            123 MB
          </ChatAttachmentDescription>
        </ChatAttachment>
      </ComposerAttachmentCard>,
      { wrapper: CustomizationWrapper },
    );

    const composerAttachmentCard = screen.getByTestId("composer-attachment-card");
    const composerAttachmentCardRemoveButton = screen.getByRole("button");
    const chatAttachment = screen.getByTestId("chat-attachment");
    const chatAttachmentIcon = chatAttachment.firstChild?.firstChild as HTMLElement;
    const chatAttachmentLink = screen.getByTestId("chat-attachment-link");
    const chatAttachmentDescription = screen.getByTestId("chat-attachment-description");
    const chatAttachmentBody = chatAttachment.lastChild as HTMLElement;

    expect(composerAttachmentCard.getAttribute("data-paste-element")).toEqual("MY_COMPOSER_ATTACHMENT_CARD");
    expect(composerAttachmentCardRemoveButton.getAttribute("data-paste-element")).toEqual(
      "MY_COMPOSER_ATTACHMENT_CARD_REMOVE_BUTTON",
    );
    expect(chatAttachment.getAttribute("data-paste-element")).toEqual("MY_CHAT_ATTACHMENT");
    expect(chatAttachmentIcon.getAttribute("data-paste-element")).toEqual("MY_CHAT_ATTACHMENT_ICON");
    expect(chatAttachmentBody.getAttribute("data-paste-element")).toEqual("MY_CHAT_ATTACHMENT_BODY");
    expect(chatAttachmentLink.getAttribute("data-paste-element")).toEqual("MY_CHAT_ATTACHMENT_LINK");
    expect(chatAttachmentDescription.getAttribute("data-paste-element")).toEqual("MY_CHAT_ATTACHMENT_DESCRIPTION");
  });

  it("should add custom styles to the component", () => {
    render(
      <ComposerAttachmentCard data-testid="composer-attachment-card" onDismiss={() => {}}>
        <ChatAttachment data-testid="chat-attachment" attachmentIcon={<DownloadIcon decorative />}>
          <ChatAttachmentLink data-testid="chat-attachment-link" href="www.google.com">
            Document-FINAL.doc
          </ChatAttachmentLink>
          <ChatAttachmentDescription data-testid="chat-attachment-description">123 MB</ChatAttachmentDescription>
        </ChatAttachment>
      </ComposerAttachmentCard>,
      { wrapper: CustomizationWrapper },
    );

    const composerAttachmentCard = screen.getByTestId("composer-attachment-card");
    const composerAttachmentCardRemoveButton = screen.getByRole("button");
    const chatAttachment = screen.getByTestId("chat-attachment");
    const chatAttachmentIcon = chatAttachment.firstChild?.firstChild as HTMLElement;
    const chatAttachmentBody = chatAttachment.lastChild as HTMLElement;
    const chatAttachmentLink = screen.getByTestId("chat-attachment-link");
    const chatAttachmentDescription = screen.getByTestId("chat-attachment-description");

    expect(composerAttachmentCard).toHaveStyleRule("padding", "2.25rem");
    expect(composerAttachmentCardRemoveButton).toHaveStyleRule("color", "rgb(0, 20, 137)");
    expect(chatAttachmentBody).toHaveStyleRule("padding", "0.25rem");
    expect(chatAttachment).toHaveStyleRule("margin-left", "1rem");
    expect(chatAttachmentIcon).toHaveStyleRule("color", "rgb(242, 47, 70)");
    expect(chatAttachmentLink).toHaveStyleRule("font-size", "1.125rem");
    expect(chatAttachmentDescription).toHaveStyleRule("color", "rgb(18, 28, 45)");
  });

  it("should add custom styles to the a custom element named component", () => {
    render(
      <ComposerAttachmentCard
        element="MY_COMPOSER_ATTACHMENT_CARD"
        data-testid="composer-attachment-card"
        onDismiss={() => {}}
      >
        <ChatAttachment
          element="MY_CHAT_ATTACHMENT"
          data-testid="chat-attachment"
          attachmentIcon={<DownloadIcon decorative />}
        >
          <ChatAttachmentLink
            element="MY_CHAT_ATTACHMENT_LINK"
            data-testid="chat-attachment-link"
            href="www.google.com"
          >
            Document-FINAL.doc
          </ChatAttachmentLink>
          <ChatAttachmentDescription element="MY_CHAT_ATTACHMENT_DESCRIPTION" data-testid="chat-attachment-description">
            123 MB
          </ChatAttachmentDescription>
        </ChatAttachment>
      </ComposerAttachmentCard>,
      { wrapper: CustomizationMyWrapper },
    );

    const composerAttachmentCard = screen.getByTestId("composer-attachment-card");
    const composerAttachmentCardRemoveButton = screen.getByRole("button");
    const chatAttachment = screen.getByTestId("chat-attachment");
    const chatAttachmentIcon = chatAttachment.firstChild?.firstChild as HTMLElement;
    const chatAttachmentBody = chatAttachment.lastChild as HTMLElement;
    const chatAttachmentLink = screen.getByTestId("chat-attachment-link");
    const chatAttachmentDescription = screen.getByTestId("chat-attachment-description");

    expect(composerAttachmentCard).toHaveStyleRule("padding", "2.25rem");
    expect(composerAttachmentCardRemoveButton).toHaveStyleRule("color", "rgb(0, 20, 137)");
    expect(chatAttachment).toHaveStyleRule("margin-left", "1rem");
    expect(chatAttachmentIcon).toHaveStyleRule("color", "rgb(242, 47, 70)");
    expect(chatAttachmentBody).toHaveStyleRule("padding", "0.25rem");
    expect(chatAttachmentLink).toHaveStyleRule("font-size", "1.125rem");
    expect(chatAttachmentDescription).toHaveStyleRule("color", "rgb(18, 28, 45)");
  });
});
