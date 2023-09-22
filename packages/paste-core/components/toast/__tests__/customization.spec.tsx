import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { getStyles, makeToast } from "../stories/customization.stories";

describe("Toast data-paste-element attribute", () => {
  it("should set the correct default element prop on Toast", () => {
    const { container } = render(makeToast("neutral"));
    expect(screen.getByTestId("toast_neutral").getAttribute("data-paste-element")).toEqual("TOAST");
    expect(container.querySelector('[data-paste-element="TOAST_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="TOAST_CLOSE_BUTTON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="TOAST_CLOSE_ICON"]')).toBeInTheDocument();
  });
  it("should set the correct custom element prop on Toast", () => {
    const { container } = render(makeToast("success", "FOO"));
    expect(screen.getByTestId("toast_success").getAttribute("data-paste-element")).toEqual("FOO");
    expect(container.querySelector('[data-paste-element="FOO_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FOO_CLOSE_BUTTON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FOO_CLOSE_ICON"]')).toBeInTheDocument();
  });
});

describe("Toast customization", () => {
  it("should set styles on default Toast", () => {
    const { container } = render(
      <CustomizationProvider theme={TestTheme} elements={getStyles()}>
        {makeToast("warning")}
      </CustomizationProvider>,
    );
    expect(screen.getByTestId("toast_warning")).toHaveStyleRule("background-color", "rgb(254, 245, 238)");
    expect(screen.getByTestId("toast_warning")).toHaveStyleRule("width", "18.5rem");
    expect(container.querySelector('[data-paste-element="TOAST_ICON"]')).toHaveStyleRule("color", "rgb(96, 107, 133)");
    expect(container.querySelector('[data-paste-element="TOAST_CLOSE_BUTTON"]')).toHaveStyleRule(
      "cursor",
      "not-allowed",
    );
    expect(container.querySelector('[data-paste-element="TOAST_CLOSE_ICON"]')).toHaveStyleRule(
      "color",
      "rgb(214, 31, 31)",
    );
  });
  it("should set styles on custom element Toast", () => {
    const { container } = render(
      <CustomizationProvider theme={TestTheme} elements={getStyles("FOO")}>
        {makeToast("error", "FOO")}
      </CustomizationProvider>,
    );
    expect(screen.getByTestId("toast_error")).toHaveStyleRule("background-color", "rgb(254, 236, 236)");
    expect(screen.getByTestId("toast_error")).toHaveStyleRule("width", "18.5rem");
    expect(container.querySelector('[data-paste-element="FOO_ICON"]')).toHaveStyleRule("color", "rgb(96, 107, 133)");
    expect(container.querySelector('[data-paste-element="FOO_CLOSE_BUTTON"]')).toHaveStyleRule("cursor", "not-allowed");
    expect(container.querySelector('[data-paste-element="FOO_CLOSE_ICON"]')).toHaveStyleRule(
      "color",
      "rgb(214, 31, 31)",
    );
  });
});
