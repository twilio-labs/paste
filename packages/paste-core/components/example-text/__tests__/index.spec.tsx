import { render } from "@testing-library/react";
import * as React from "react";

import { ExampleText } from "../src";

describe("ExampleText", () => {
  it("should render text in a <samp> and <kbd> tag", () => {
    const { getByText } = render(<ExampleText>test</ExampleText>);
    expect(getByText("test").tagName).toEqual("KBD");
    expect(getByText("test").parentElement?.tagName).toEqual("SAMP");
  });
  it("should have a default element attribute", () => {
    const { getByText } = render(<ExampleText>test</ExampleText>);
    expect(getByText("test").getAttribute("data-paste-element")).toEqual("EXAMPLE_TEXT");
  });
  it("should have a custom element attribute when set", () => {
    const { getByText } = render(<ExampleText element="MY_EXAMPLE_TEXT">test</ExampleText>);
    expect(getByText("test").getAttribute("data-paste-element")).toEqual("MY_EXAMPLE_TEXT");
  });
});
