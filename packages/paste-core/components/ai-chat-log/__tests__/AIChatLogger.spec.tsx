import { render, screen } from "@testing-library/react";
import * as React from "react";

import { AIChatLogger, AIChatMessage, AIChatMessageBody } from "../src";
import type { AIChat } from "../src/useAIChatLogger";

const chats: AIChat[] = [
  {
    id: "uid1",
    variant: "bot",
    content: (
      <AIChatMessage variant="bot">
        <AIChatMessageBody>hi</AIChatMessageBody>
      </AIChatMessage>
    ),
  },
  {
    id: "uid2",
    variant: "user",
    content: (
      <AIChatMessage variant="user">
        <AIChatMessageBody>hello</AIChatMessageBody>
      </AIChatMessage>
    ),
  },
];

describe("ChatLogger", () => {
  it("should render", () => {
    render(<AIChatLogger aiChats={chats} />);
    expect(screen.getByRole("log")).toBeDefined();
    expect(screen.getByRole("list")).toBeDefined();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
