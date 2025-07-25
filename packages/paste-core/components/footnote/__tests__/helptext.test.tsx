import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { HelpText } from "../src";

describe("HelpText marginTop prop", () => {
  render(<HelpText data-testid="help_text" marginTop="space0" />);

  it("should have marginTop: space0", () => {
    expect(screen.getByTestId("help_text")).toHaveStyleRule("margin-top", "space0");
  });
});

describe("HelpText HTML attributes", () => {
  it("should set element data attribute for help text", (): void => {
    const { container } = render(<HelpText data-testid="help_text">This is help text.</HelpText>);

    expect(container.querySelector('[data-paste-element="HELP_TEXT"]')).toBeInTheDocument();
    expect(screen.getByTestId("help_text").getAttribute("data-paste-element")).toEqual("HELP_TEXT");
  });

  it("should set custom element data attribute for flex wrapper and help text", (): void => {
    const { container } = render(
      <HelpText element="foo" data-testid="help_text">
        This is help text.
      </HelpText>,
    );

    expect(container.querySelector('[data-paste-element="foo"]')).toBeInTheDocument();
    expect(screen.getByTestId("help_text").getAttribute("data-paste-element")).toEqual("foo");
  });
});

describe("Customization", () => {
  it("should customize help text default and error variant", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          HELP_TEXT: {
            color: "colorTextSuccess",
            fontWeight: "fontWeightBold",
            variants: { error: { color: "colorTextWarningStrong" } },
          },
        }}
      >
        <HelpText data-testid="help_text">This is help text.</HelpText>
        <HelpText data-testid="help_text_error" variant="error">
          This is error help text.
        </HelpText>
      </CustomizationProvider>,
    );
    expect(screen.getByTestId("help_text")).toHaveStyleRule("font-weight", "700");
    expect(screen.getByTestId("help_text")).toHaveStyleRule("color", "rgb(14, 124, 58)");
    expect(screen.getByTestId("help_text_error")).toHaveStyleRule("color", "rgb(141, 49, 24)");
  });

  it("should customize help text default and error variant with custom element name", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          foo: {
            color: "colorTextSuccess",
            fontWeight: "fontWeightBold",
            variants: { error: { color: "colorTextWarningStrong" } },
          },
        }}
      >
        <HelpText element="foo" data-testid="help_text">
          This is help text.
        </HelpText>
        <HelpText data-testid="help_text_error" variant="error" element="foo">
          This is error help text.
        </HelpText>
      </CustomizationProvider>,
    );
    expect(screen.getByTestId("help_text")).toHaveStyleRule("font-weight", "700");
    expect(screen.getByTestId("help_text")).toHaveStyleRule("color", "rgb(14, 124, 58)");
    expect(screen.getByTestId("help_text_error")).toHaveStyleRule("color", "rgb(141, 49, 24)");
  });
});
