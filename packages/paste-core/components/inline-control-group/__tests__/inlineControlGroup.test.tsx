import { render as testRender, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { InlineControlGroup } from "../src";

const defaultGroupProps = {
  legend: "This is a group legend",
  name: "bar",
  value: "bar",
};

describe("InlineControlGroup", () => {
  it("should render", () => {
    const { container } = testRender(
      <InlineControlGroup {...defaultGroupProps}>
        <div />
      </InlineControlGroup>,
    );
    expect(container.querySelector("fieldset")).not.toBeNull();
  });

  it("should render a legend", () => {
    const { getByText } = testRender(
      <InlineControlGroup {...defaultGroupProps}>
        <div />
      </InlineControlGroup>,
    );
    expect(getByText("This is a group legend")).not.toBeNull();
  });

  it("should have a required a required dot in the legend", () => {
    testRender(
      <InlineControlGroup {...defaultGroupProps} required>
        <div />
      </InlineControlGroup>,
    );

    const fieldset = screen.getByRole("group");
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot).toBeDefined();
  });

  it("renders a helpText message when helpText prop is present", () => {
    const helpText = "I am a helpText message";
    const { getByText } = testRender(
      <InlineControlGroup {...defaultGroupProps} helpText={helpText}>
        <div />
      </InlineControlGroup>,
    );
    expect(getByText(helpText)).toBeDefined();
  });

  it("renders an errorText message when errorText prop is present", () => {
    const errorText = "I am an errorText message";
    const { getByText } = testRender(
      <InlineControlGroup {...defaultGroupProps} errorText={errorText}>
        <div />
      </InlineControlGroup>,
    );
    expect(getByText(errorText)).toBeDefined();
  });
});

describe("Customization", () => {
  it("Should set a default element data attribute for Inline Control Group", (): void => {
    const { container } = testRender(
      <InlineControlGroup data-testid="inline-control-group" {...defaultGroupProps} errorText="error">
        <div />
      </InlineControlGroup>,
    );
    expect(screen.getByTestId("inline-control-group")).toHaveAttribute("data-paste-element", "INLINE_CONTROL_GROUP");
    expect(container.querySelector('[data-paste-element="INLINE_CONTROL_GROUP_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="INLINE_CONTROL_GROUP_FIELD"]')).toBeInTheDocument();
    expect(
      container.querySelector('[data-paste-element="INLINE_CONTROL_GROUP_ERROR_TEXT_WRAPPER"]'),
    ).toBeInTheDocument();
  });

  it("Should set a custom element data attribute for custom named Inline Control Group", (): void => {
    const { container } = testRender(
      <InlineControlGroup
        element="MY_INLINE_CONTROL_GROUP"
        data-testid="inline-control-group"
        {...defaultGroupProps}
        errorText="error"
      >
        <div />
      </InlineControlGroup>,
    );
    expect(screen.getByTestId("inline-control-group")).toHaveAttribute("data-paste-element", "MY_INLINE_CONTROL_GROUP");
    expect(container.querySelector('[data-paste-element="MY_INLINE_CONTROL_GROUP_SET"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_INLINE_CONTROL_GROUP_FIELD"]')).toBeInTheDocument();
    expect(
      container.querySelector('[data-paste-element="MY_INLINE_CONTROL_GROUP_ERROR_TEXT_WRAPPER"]'),
    ).toBeInTheDocument();
  });

  it("Should add custom styling to default Inline Control Group", (): void => {
    const { container } = testRender(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          INLINE_CONTROL_GROUP: { margin: "space60" },
          INLINE_CONTROL_GROUP_SET: { marginLeft: "space60" },
          INLINE_CONTROL_GROUP_FIELD: { color: "colorTextSuccess" },
          INLINE_CONTROL_GROUP_ERROR_TEXT_WRAPPER: { marginTop: "space60" },
        }}
      >
        <InlineControlGroup data-testid="inline-control-group" {...defaultGroupProps} errorText="error">
          <div />
        </InlineControlGroup>
      </CustomizationProvider>,
    );
    expect(screen.getByTestId("inline-control-group")).toHaveStyleRule("margin", "1.25rem");
    expect(container.querySelector('[data-paste-element="INLINE_CONTROL_GROUP_SET"]')).toHaveStyleRule(
      "margin-left",
      "1.25rem",
    );
    expect(container.querySelector('[data-paste-element="INLINE_CONTROL_GROUP_FIELD"]')).toHaveStyleRule(
      "color",
      "rgb(14, 124, 58)",
    );
    expect(container.querySelector('[data-paste-element="INLINE_CONTROL_GROUP_ERROR_TEXT_WRAPPER"]')).toHaveStyleRule(
      "margin-top",
      "1.25rem",
    );
  });

  it("Should add custom styling to custom named Inline Control Group", (): void => {
    const { container } = testRender(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          MY_INLINE_CONTROL_GROUP: { margin: "space60" },
          MY_INLINE_CONTROL_GROUP_SET: { marginLeft: "space60" },
          MY_INLINE_CONTROL_GROUP_FIELD: { color: "colorTextSuccess" },
          MY_INLINE_CONTROL_GROUP_ERROR_TEXT_WRAPPER: { marginTop: "space60" },
        }}
      >
        <InlineControlGroup
          element="MY_INLINE_CONTROL_GROUP"
          data-testid="inline-control-group"
          {...defaultGroupProps}
          errorText="error"
        >
          <div />
        </InlineControlGroup>
      </CustomizationProvider>,
    );
    expect(screen.getByTestId("inline-control-group")).toHaveStyleRule("margin", "1.25rem");
    expect(container.querySelector('[data-paste-element="MY_INLINE_CONTROL_GROUP_SET"]')).toHaveStyleRule(
      "margin-left",
      "1.25rem",
    );
    expect(container.querySelector('[data-paste-element="MY_INLINE_CONTROL_GROUP_FIELD"]')).toHaveStyleRule(
      "color",
      "rgb(14, 124, 58)",
    );
    expect(
      container.querySelector('[data-paste-element="MY_INLINE_CONTROL_GROUP_ERROR_TEXT_WRAPPER"]'),
    ).toHaveStyleRule("margin-top", "1.25rem");
  });
});
