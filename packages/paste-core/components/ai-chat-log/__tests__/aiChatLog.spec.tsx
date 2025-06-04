import { render, screen } from "@testing-library/react";
import * as React from "react";

import {
  AIChatLog,
  AIChatMessage,
  AIChatMessageActionCard,
  AIChatMessageActionGroup,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageLoading,
} from "../src";

const ExampleAIChatLog: React.FC<React.PropsWithChildren> = () => (
  <AIChatLog>
    <AIChatMessage variant="bot">
      <AIChatMessageAuthor aria-label="AI said" data-testid="author">
        Good Bot
      </AIChatMessageAuthor>
      <AIChatMessageBody>Lorem ipsum dolor.</AIChatMessageBody>
      <AIChatMessageActionGroup data-testid="action_group">
        <AIChatMessageActionCard aria-label="action" data-testid="action">
          Is this helpful?
        </AIChatMessageActionCard>
      </AIChatMessageActionGroup>
      <AIChatMessageLoading onStopLoading={() => {}} data-testid="loading" />
    </AIChatMessage>
  </AIChatLog>
);

const CustomExampleAIChatLog: React.FC<React.PropsWithChildren> = () => (
  <AIChatLog element="FOO_AI_LOG">
    <AIChatMessage variant="bot" element="FOO_AI_CHAT_MESSAGE">
      <AIChatMessageAuthor aria-label="AI said" data-testid="author" element="FOO_AI_CHAT_MESSAGE_AUTHOR">
        Good Bot
      </AIChatMessageAuthor>
      <AIChatMessageBody element="FOO_AI_CHAT_MESSAGE_BODY">Lorem ipsum dolor.</AIChatMessageBody>
      <AIChatMessageActionGroup data-testid="action_group" element="FOO_AI_CHAT_MESSAGE_ACTION_GROUP">
        <AIChatMessageActionCard
          aria-label="Feedback form"
          data-testid="action"
          element="FOO_AI_CHAT_MESSAGE_ACTION_CARD"
        >
          Is this helpful?
        </AIChatMessageActionCard>
      </AIChatMessageActionGroup>
      <AIChatMessageLoading onStopLoading={() => {}} data-testid="loading" element="FOO_AI_CHAT_MESSAGE_LOADING" />
    </AIChatMessage>
  </AIChatLog>
);

describe("AIChatLog", () => {
  it("should render", () => {
    render(<ExampleAIChatLog />);
    expect(screen.getByRole("log")).toBeDefined();
    expect(screen.getByRole("list")).toBeDefined();
  });
});

describe("Customization", () => {
  it("should set element data attribute", () => {
    render(<ExampleAIChatLog />);

    expect(screen.getByRole("log").getAttribute("data-paste-element")).toEqual("AI_CHAT_LOG");
    expect(screen.getByRole("list").getAttribute("data-paste-element")).toEqual("AI_CHAT_LOG_LIST");
    expect(screen.getAllByRole("listitem")[0].getAttribute("data-paste-element")).toEqual("AI_CHAT_MESSAGE");
    expect(screen.getByTestId("author").getAttribute("data-paste-element")).toEqual("AI_CHAT_MESSAGE_AUTHOR");
    expect(screen.getByTestId("author").firstElementChild?.getAttribute("data-paste-element")).toEqual(
      "AI_CHAT_MESSAGE_AUTHOR_BOT_AVATAR",
    );
    expect(screen.getByText("Lorem ipsum dolor.").getAttribute("data-paste-element")).toEqual("AI_CHAT_MESSAGE_BODY");
    expect(screen.getByTestId("action_group").getAttribute("data-paste-element")).toEqual(
      "AI_CHAT_MESSAGE_ACTION_GROUP",
    );
    expect(screen.getByTestId("action").getAttribute("data-paste-element")).toEqual("AI_CHAT_MESSAGE_ACTION_CARD");
    expect(screen.getByTestId("loading").getAttribute("data-paste-element")).toEqual("AI_CHAT_MESSAGE_LOADING");
    expect(screen.getByTestId("loading").firstElementChild?.getAttribute("data-paste-element")).toEqual(
      "AI_CHAT_MESSAGE_LOADING_SKELETON",
    );
    expect(screen.getByTestId("loading").lastElementChild?.getAttribute("data-paste-element")).toEqual(
      "AI_CHAT_MESSAGE_LOADING_STOP_LOADING",
    );
    expect(
      screen.getByTestId("loading").lastElementChild?.firstElementChild?.getAttribute("data-paste-element"),
    ).toEqual("AI_CHAT_MESSAGE_LOADING_STOP_BUTTON");
  });

  it("should set custom element data attribute", () => {
    render(<CustomExampleAIChatLog />);

    expect(screen.getByRole("log").getAttribute("data-paste-element")).toEqual("FOO_AI_LOG");
    expect(screen.getByRole("list").getAttribute("data-paste-element")).toEqual("FOO_AI_LOG_LIST");
    expect(screen.getAllByRole("listitem")[0].getAttribute("data-paste-element")).toEqual("FOO_AI_CHAT_MESSAGE");
    expect(screen.getByTestId("author").getAttribute("data-paste-element")).toEqual("FOO_AI_CHAT_MESSAGE_AUTHOR");
    expect(screen.getByTestId("author").firstElementChild?.getAttribute("data-paste-element")).toEqual(
      "FOO_AI_CHAT_MESSAGE_AUTHOR_BOT_AVATAR",
    );
    expect(screen.getByText("Lorem ipsum dolor.").getAttribute("data-paste-element")).toEqual(
      "FOO_AI_CHAT_MESSAGE_BODY",
    );
    expect(screen.getByTestId("action_group").getAttribute("data-paste-element")).toEqual(
      "FOO_AI_CHAT_MESSAGE_ACTION_GROUP",
    );
    expect(screen.getByTestId("action").getAttribute("data-paste-element")).toEqual("FOO_AI_CHAT_MESSAGE_ACTION_CARD");
    expect(screen.getByTestId("loading").getAttribute("data-paste-element")).toEqual("FOO_AI_CHAT_MESSAGE_LOADING");
    expect(screen.getByTestId("loading").firstElementChild?.getAttribute("data-paste-element")).toEqual(
      "FOO_AI_CHAT_MESSAGE_LOADING_SKELETON",
    );
    expect(screen.getByTestId("loading").lastElementChild?.getAttribute("data-paste-element")).toEqual(
      "FOO_AI_CHAT_MESSAGE_LOADING_STOP_LOADING",
    );
    expect(
      screen.getByTestId("loading").lastElementChild?.firstElementChild?.getAttribute("data-paste-element"),
    ).toEqual("FOO_AI_CHAT_MESSAGE_LOADING_STOP_BUTTON");
  });
});
