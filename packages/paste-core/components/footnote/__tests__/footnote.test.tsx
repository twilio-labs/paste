import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { Footnote } from "../src";

describe("Default Footnote", () => {
  render(<Footnote data-testid="footnote">12</Footnote>);

  it("should be rendered", () => {
    expect(screen.getByTestId("footnote")).toBeInTheDocument();
  });
});

describe("Footnote with Tooltip", () => {
  it("should render a footnote with tooltip text", () => {
    const { container } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Footnote tooltipText="This is a footnote" data-testid="footnote">
          12
        </Footnote>
      </CustomizationProvider>,
    );

    expect(screen.getByTestId("footnote")).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FOOTNOTE"]')).toBeInTheDocument();
    expect(screen.getByTestId("footnote").textContent).toEqual("12");
    expect(container.querySelector('[data-paste-element="FOOTNOTE_TOOLTIP_BUTTON"]')).toBeInTheDocument();
  });

  it("should not render a tooltip if tooltipText is not provided", () => {
    const { container } = render(<Footnote data-testid="footnote">12</Footnote>);

    expect(container.querySelector('[data-paste-element="FOOTNOTE_TOOLTIP"]')).not.toBeInTheDocument();
  });
});

describe("Footnote HTML attributes", () => {
  it("should set element data attribute for footnote", (): void => {
    const { container } = render(<Footnote data-testid="footnote">This is a footnote.</Footnote>);

    expect(container.querySelector('[data-paste-element="FOOTNOTE"]')).toBeInTheDocument();
    expect(screen.getByTestId("footnote").getAttribute("data-paste-element")).toEqual("FOOTNOTE");
  });

  it("should set custom element data attribute for footnote", (): void => {
    const { container } = render(
      <Footnote element="foo" data-testid="footnote">
        This is a footnote.
      </Footnote>,
    );

    expect(container.querySelector('[data-paste-element="foo"]')).toBeInTheDocument();
    expect(screen.getByTestId("footnote").getAttribute("data-paste-element")).toEqual("foo");
  });
});

describe("Customization", () => {
  it("should customize footnote default and tooltip variant", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{
          FOOTNOTE: {
            color: "colorTextSuccess",
            fontWeight: "fontWeightBold",
          },
        }}
      >
        <Footnote data-testid="footnote">This is a footnote.</Footnote>
      </CustomizationProvider>,
    );
    expect(screen.getByTestId("footnote")).toHaveStyleRule("font-weight", "700");
    expect(screen.getByTestId("footnote")).toHaveStyleRule("color", "rgb(14, 124, 58)");
  });
});
