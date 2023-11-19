import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { Paragraph } from "../src";

describe("General", () => {
  it("should render", (): void => {
    const textContent = `This is a paragraph`;
    const { getByText } = render(<Paragraph>{textContent}</Paragraph>);
    expect(getByText(textContent)).toBeDefined();
    expect(getByText(textContent).tagName).toEqual("P");
  });
  it("should allow for global html Attributes", (): void => {
    const textContent = `This is a paragraph`;
    render(
      <Paragraph aria-label="foo" data-testid="bar">
        {textContent}
      </Paragraph>,
    );
    expect(screen.getByTestId("bar")).toBeDefined();
    expect(screen.getByLabelText("foo")).toBeDefined();
  });
});

describe("HTML attributes", () => {
  it("should set a element data attribute for Paragraph", () => {
    render(<Paragraph>paragraph</Paragraph>);
    expect(screen.getByText("paragraph").getAttribute("data-paste-element")).toEqual("PARAGRAPH");
  });
  it("should set a custom element data attribute for Paragraph", () => {
    render(<Paragraph element="foo">paragraph</Paragraph>);
    expect(screen.getByText("paragraph").getAttribute("data-paste-element")).toEqual("foo");
  });
});

describe("Customization", () => {
  it("should add custom styles to Paragraph", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ PARAGRAPH: { color: "colorTextWeak", backgroundColor: "colorBackground" } }}
      >
        <Paragraph>Custom paragraph</Paragraph>
      </CustomizationProvider>,
    );
    const renderedParagraph = screen.getByText("Custom paragraph");
    expect(renderedParagraph).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
    expect(renderedParagraph).toHaveStyleRule("color", "rgb(96, 107, 133)");
  });

  it("should add custom styles to Paragraph with a custom element data attribute", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ foo: { color: "colorTextWeak", backgroundColor: "colorBackground" } }}
      >
        <Paragraph element="foo">Custom paragraph</Paragraph>
      </CustomizationProvider>,
    );
    const renderedParagraph = screen.getByText("Custom paragraph");
    expect(renderedParagraph).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
    expect(renderedParagraph).toHaveStyleRule("color", "rgb(96, 107, 133)");
  });
});
