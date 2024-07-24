import { render } from "@testing-library/react";
import * as React from "react";

import { CornerOrnament } from "../src";

describe("CornerOrnament", () => {
  it("should render", () => {
    const { getByText } = render(<CornerOrnament>test</CornerOrnament>);
    expect(getByText("test")).toBeDefined();
  });
});
