import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { ChatBubble, ChatMessage } from "../src";

const CustomizationWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      CHAT_BUBBLE: {
        color: "colorTextInverse",
        variants: {
          inbound: { backgroundColor: "colorBackgroundPrimary" },
          outbound: { backgroundColor: "colorBackgroundPrimaryStronger" },
        },
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

const CustomizationFooWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomizationProvider
    baseTheme="default"
    theme={TestTheme}
    elements={{
      FOO_BUBBLE: {
        color: "colorTextInverse",
        variants: {
          inbound: { backgroundColor: "colorBackgroundPrimary" },
          outbound: { backgroundColor: "colorBackgroundPrimaryStronger" },
        },
      },
    }}
  >
    {children}
  </CustomizationProvider>
);

describe("ChatBubble", () => {
  it("should render", () => {
    render(
      <ChatMessage variant="inbound">
        <ChatBubble>test</ChatBubble>
      </ChatMessage>,
    );
    expect(screen.getByText("test")).toBeDefined();
  });
});

describe("Customization", () => {
  it("should add custom styles to variants", () => {
    render(
      <>
        <ChatMessage variant="inbound">
          <ChatBubble data-testid="inbound-bubble">test</ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble data-testid="outbound-bubble">test</ChatBubble>
        </ChatMessage>
      </>,
      { wrapper: CustomizationWrapper },
    );

    const inboundBubble = screen.getByTestId("inbound-bubble");
    const outboundBubble = screen.getByTestId("outbound-bubble");

    expect(inboundBubble).toHaveStyleRule("background-color", "rgb(2, 99, 224)");
    expect(inboundBubble).toHaveStyleRule("color", "rgb(255, 255, 255)");
    expect(outboundBubble).toHaveStyleRule("background-color", "rgb(3, 11, 93)");
    expect(outboundBubble).toHaveStyleRule("color", "rgb(255, 255, 255)");
  });

  it("should set element data attribute", () => {
    render(
      <>
        <ChatMessage variant="inbound">
          <ChatBubble data-testid="inbound-bubble">test</ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble data-testid="outbound-bubble">test</ChatBubble>
        </ChatMessage>
      </>,
      { wrapper: CustomizationWrapper },
    );

    const inboundBubble = screen.getByTestId("inbound-bubble");
    const outboundBubble = screen.getByTestId("outbound-bubble");

    expect(inboundBubble.getAttribute("data-paste-element")).toEqual("CHAT_BUBBLE");
    expect(outboundBubble.getAttribute("data-paste-element")).toEqual("CHAT_BUBBLE");
  });

  it("should add custom styles to variants with a custom element data attribute", () => {
    render(
      <>
        <ChatMessage variant="inbound">
          <ChatBubble element="FOO_BUBBLE" data-testid="inbound-bubble">
            test
          </ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble element="FOO_BUBBLE" data-testid="outbound-bubble">
            test
          </ChatBubble>
        </ChatMessage>
      </>,
      { wrapper: CustomizationFooWrapper },
    );

    const inboundBubble = screen.getByTestId("inbound-bubble");
    const outboundBubble = screen.getByTestId("outbound-bubble");

    expect(inboundBubble).toHaveStyleRule("background-color", "rgb(2, 99, 224)");
    expect(inboundBubble).toHaveStyleRule("color", "rgb(255, 255, 255)");
    expect(outboundBubble).toHaveStyleRule("background-color", "rgb(3, 11, 93)");
    expect(outboundBubble).toHaveStyleRule("color", "rgb(255, 255, 255)");
  });

  it("should set custom element data attribute", () => {
    render(
      <>
        <ChatMessage variant="inbound">
          <ChatBubble element="FOO_BUBBLE" data-testid="inbound-bubble">
            test
          </ChatBubble>
        </ChatMessage>
        <ChatMessage variant="outbound">
          <ChatBubble element="FOO_BUBBLE" data-testid="outbound-bubble">
            test
          </ChatBubble>
        </ChatMessage>
      </>,
      { wrapper: CustomizationFooWrapper },
    );

    const inboundBubble = screen.getByTestId("inbound-bubble");
    const outboundBubble = screen.getByTestId("outbound-bubble");

    expect(inboundBubble.getAttribute("data-paste-element")).toEqual("FOO_BUBBLE");
    expect(outboundBubble.getAttribute("data-paste-element")).toEqual("FOO_BUBBLE");
  });
});
