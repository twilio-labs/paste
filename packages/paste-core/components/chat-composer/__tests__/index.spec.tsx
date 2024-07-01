import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@twilio-paste/button";
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
  ChatComposerAttachmentGroup,
  ChatComposerAttachmentLink,
  ChatComposerContainer,
} from "../src";

const baseConfig = {
  namespace: "foo",
  onError: (error: Error) => {
    throw error;
  },
};

const attachments = [
  {
    name: "Document-FINAL.doc",
    size: "123 MB",
    href: "www.google.com",
  },
  {
    name: "Document-PEDNING.doc",
    size: "1328 MB",
    href: "www.linux.com",
  },
];

const ExampleChatComposerContained: React.FC<{ attatchmentCloseSpy?: jest.Mock }> = ({
  attatchmentCloseSpy = jest.fn(),
}) => (
  <ChatComposerContainer variant="contained" data-testid="chat-composer-container">
    <ChatComposer
      config={baseConfig}
      data-testid="my-composer"
      ariaLabel="Basic chat composer"
      placeholder="Type here..."
    />
    <ChatComposerActionGroup data-testid="chat-composer-action-group">
      <Button variant="secondary_icon" size="reset" data-testid="attach-button">
        <AttachIcon decorative={false} title="Attach" />
      </Button>
      <Button variant="primary_icon" size="reset" data-testid="send-button">
        <SendIcon decorative={false} title="Send" />
      </Button>
    </ChatComposerActionGroup>
    <ChatComposerAttachmentGroup data-testid="chat-composer-attachement-group">
      {attachments.map((attatchment, index) => (
        <ChatComposerAttachmentCard
          onDismiss={() => {
            attatchmentCloseSpy(attatchment.name);
          }}
          key={`attachment=${index}`}
          data-testid={`chat-composer-attachment-card-${index}`}
        >
          <ChatComposerAttachment
            attachmentIcon={<DownloadIcon decorative />}
            data-testid={`chat-composer-attachment-${index}`}
          >
            <ChatComposerAttachmentLink href={attatchment.href} data-testid={`chat-composer-attachment-link-${index}`}>
              {attatchment.name}
            </ChatComposerAttachmentLink>
            <ChatComposerAttachmentDescription data-testid={`chat-composer-attachment-description-${index}`}>
              {attatchment.size}
            </ChatComposerAttachmentDescription>
          </ChatComposerAttachment>
        </ChatComposerAttachmentCard>
      ))}
    </ChatComposerAttachmentGroup>
  </ChatComposerContainer>
);

const CustomizedExampleChatComposerContained: React.FC<{ attatchmentCloseSpy?: jest.Mock }> = ({
  attatchmentCloseSpy = jest.fn(),
}) => (
  <ChatComposerContainer
    variant="contained"
    data-testid="chat-composer-container"
    element="CUSTOM_CHAT_COMPOSER_CONTAINER"
  >
    <ChatComposer
      config={baseConfig}
      data-testid="my-composer"
      ariaLabel="Basic chat composer"
      placeholder="Type here..."
      element="CUSTOM_CHAT_COMPOSER"
    />
    <ChatComposerActionGroup data-testid="chat-composer-action-group" element="CUSTOM_CHAT_COMPOSER_ACTION_GROUP">
      <Button variant="secondary_icon" size="reset" data-testid="attach-button">
        <AttachIcon decorative={false} title="Attach" />
      </Button>
      <Button variant="primary_icon" size="reset" data-testid="send-button">
        <SendIcon decorative={false} title="Send" />
      </Button>
    </ChatComposerActionGroup>
    <ChatComposerAttachmentGroup
      data-testid="chat-composer-attachement-group"
      element="CUSTOM_CHAT_COMPOSER_ATTACHMENT_GROUP"
    >
      {attachments.map((attatchment, index) => (
        <ChatComposerAttachmentCard
          onDismiss={() => {
            attatchmentCloseSpy(attatchment.name);
          }}
          key={`attachment=${index}`}
          data-testid={`chat-composer-attachment-card-${index}`}
          element="CUSTOM_CHAT_COMPOSER_ATTACHMENT_CARD"
        >
          <ChatComposerAttachment
            attachmentIcon={<DownloadIcon decorative />}
            data-testid={`chat-composer-attachment-${index}`}
            element={`CUSTOM_CHAT_COMPOSER_ATTACHMENT-${index}`}
          >
            <ChatComposerAttachmentLink
              href={attatchment.href}
              data-testid={`chat-composer-attachment-link-${index}`}
              element={`CUSTOM_CHAT_COMPOSER_ATTACHMENT_LINK-${index}`}
            >
              {attatchment.name}
            </ChatComposerAttachmentLink>
            <ChatComposerAttachmentDescription
              data-testid={`chat-composer-attachment-description-${index}`}
              element={`CUSTOM_CHAT_COMPOSER_ATTACHMENT_DESCRIPTION-${index}`}
            >
              {attatchment.size}
            </ChatComposerAttachmentDescription>
          </ChatComposerAttachment>
        </ChatComposerAttachmentCard>
      ))}
    </ChatComposerAttachmentGroup>
  </ChatComposerContainer>
);

describe("ChatComposer", () => {
  it("should render", () => {
    const spy = jest.fn();
    render(<ExampleChatComposerContained attatchmentCloseSpy={spy} />);
    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByText("Type here...")).toBeDefined();
    expect(screen.getByRole("button", { name: "Attach" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Send" })).toBeDefined();
    attachments.forEach((attatchment) => {
      expect(screen.getByText(attatchment.name)).toBeDefined();
      expect(screen.getByText(attatchment.size)).toBeDefined();
    });
    screen.getAllByRole("button", { name: "Remove attachment" }).forEach((button, index) => {
      userEvent.click(button);
      expect(spy).toHaveBeenCalledWith(attachments[index].name);
    });
  });

  describe("Customization", () => {
    it("should set element data attribute", () => {
      render(<ExampleChatComposerContained />);
      expect(screen.getByTestId("chat-composer-container").getAttribute("data-paste-element")).toEqual(
        "CHAT_COMPOSER_CONTAINER",
      );
      // data-testid getting set on lexiocal elemnt not the paste wrapper so need to check parent node
      expect(screen.getByTestId("my-composer").parentElement?.getAttribute("data-paste-element")).toEqual(
        "CHAT_COMPOSER",
      );
      expect(screen.getByTestId("chat-composer-action-group").getAttribute("data-paste-element")).toEqual(
        "CHAT_COMPOSER_ACTION_GROUP",
      );
      expect(screen.getByTestId("chat-composer-attachement-group").getAttribute("data-paste-element")).toEqual(
        "CHAT_COMPOSER_ATTACHMENT_GROUP",
      );
      attachments.forEach((attatchment, index) => {
        expect(screen.getByTestId(`chat-composer-attachment-card-${index}`).getAttribute("data-paste-element")).toEqual(
          "CHAT_COMPOSER_ATTACHMENT_CARD",
        );
        expect(screen.getByTestId(`chat-composer-attachment-${index}`).getAttribute("data-paste-element")).toEqual(
          "CHAT_COMPOSER_ATTACHMENT",
        );
        expect(screen.getByTestId(`chat-composer-attachment-link-${index}`).getAttribute("data-paste-element")).toEqual(
          "CHAT_COMPOSER_ATTACHMENT_LINK",
        );
        expect(
          screen.getByTestId(`chat-composer-attachment-description-${index}`).getAttribute("data-paste-element"),
        ).toEqual("CHAT_COMPOSER_ATTACHMENT_DESCRIPTION");
      });
    });

    it("should set custom element data attribute", () => {
      render(<CustomizedExampleChatComposerContained />);
      expect(screen.getByTestId("chat-composer-container").getAttribute("data-paste-element")).toEqual(
        "CUSTOM_CHAT_COMPOSER_CONTAINER",
      );
      // data-testid getting set on lexiocal elemnt not the paste wrapper so need to check parent node
      expect(screen.getByTestId("my-composer").parentElement?.getAttribute("data-paste-element")).toEqual(
        "CUSTOM_CHAT_COMPOSER",
      );
      expect(screen.getByTestId("chat-composer-action-group").getAttribute("data-paste-element")).toEqual(
        "CUSTOM_CHAT_COMPOSER_ACTION_GROUP",
      );
      expect(screen.getByTestId("chat-composer-attachement-group").getAttribute("data-paste-element")).toEqual(
        "CUSTOM_CHAT_COMPOSER_ATTACHMENT_GROUP",
      );
      attachments.forEach((attatchment, index) => {
        expect(screen.getByTestId(`chat-composer-attachment-card-${index}`).getAttribute("data-paste-element")).toEqual(
          "CUSTOM_CHAT_COMPOSER_ATTACHMENT_CARD",
        );
        expect(screen.getByTestId(`chat-composer-attachment-${index}`).getAttribute("data-paste-element")).toEqual(
          `CUSTOM_CHAT_COMPOSER_ATTACHMENT-${index}`,
        );
        expect(screen.getByTestId(`chat-composer-attachment-link-${index}`).getAttribute("data-paste-element")).toEqual(
          `CUSTOM_CHAT_COMPOSER_ATTACHMENT_LINK-${index}`,
        );
        expect(
          screen.getByTestId(`chat-composer-attachment-description-${index}`).getAttribute("data-paste-element"),
        ).toEqual(`CUSTOM_CHAT_COMPOSER_ATTACHMENT_DESCRIPTION-${index}`);
      });
    });
  });
});
