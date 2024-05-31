import { render } from "@testing-library/react";
import * as React from "react";

import { AIChatLog } from "../src";

describe("AiLog", () => {
  it("should render", () => {
    const { getByText } = render(<AIChatLog>test</AIChatLog>);
    expect(getByText("test")).toBeDefined();
  });
});
