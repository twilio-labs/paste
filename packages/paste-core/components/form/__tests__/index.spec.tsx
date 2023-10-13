import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import {
  Form,
  FormActions,
  FormControl,
  FormControlTwoColumn,
  FormSection,
  FormSectionDescription,
  FormSectionHeading,
} from "../src";

describe("Form", () => {
  it("should render correctly", () => {
    render(
      <Form aria-label="My Form">
        <FormSection id="foo">
          <FormSectionHeading data-testid="section-heading">Settings</FormSectionHeading>
          <FormSectionDescription data-testid="section-desc">These are the settings</FormSectionDescription>
        </FormSection>
        <FormControlTwoColumn>Two column content</FormControlTwoColumn>
        <FormControl>Control content</FormControl>
        <FormActions>Actions content</FormActions>
      </Form>,
    );

    const form = screen.getByRole("form");
    expect(form).toBeDefined();
    expect(form).toHaveAttribute("aria-label", "My Form");

    const description = screen.getByTestId("section-desc");
    expect(description.id).toBe("foo-section-description");

    const section = screen.getByRole("group", { name: "Settings" });
    expect(section).toBeDefined();
    expect(section).toHaveAttribute("aria-describedby", description.id);

    expect(screen.getByTestId("section-heading").nodeName).toBe("LEGEND");
    expect(screen.getByText("Two column content")).toBeDefined();
    expect(screen.getByText("Control content")).toBeDefined();
    expect(screen.getByText("Actions content")).toBeDefined();
  });

  it("should set the description id if no id prop is passed to the form section", () => {
    render(
      <FormSection>
        <FormSectionHeading>Section</FormSectionHeading>
        <FormSectionDescription data-testid="section-desc">Description</FormSectionDescription>
      </FormSection>,
    );

    expect(screen.getByRole("group", { name: "Section" })).toHaveAttribute(
      "aria-describedby",
      screen.getByTestId("section-desc").id,
    );
  });
});

describe("Form customization", () => {
  it("should set an element data attribute", () => {
    render(
      <Form aria-label="My Form">
        <FormSection id="foo">
          <FormSectionHeading data-testid="section-heading">Settings</FormSectionHeading>
          <FormSectionDescription data-testid="section-desc">These are the settings</FormSectionDescription>
        </FormSection>
        <FormControlTwoColumn>Two column content</FormControlTwoColumn>
        <FormControl>Control content</FormControl>
        <FormActions>Actions content</FormActions>
      </Form>,
    );

    expect(screen.getByRole("form").dataset.pasteElement).toBe("FORM");
    expect(screen.getByRole("group", { name: "Settings" }).dataset.pasteElement).toBe("FORM_SECTION");
    expect(screen.getByTestId("section-heading").dataset.pasteElement).toBe("FORM_SECTION_HEADING");
    expect(screen.getByText("Two column content").dataset.pasteElement).toBe("FORM_CONTROL_TWO_COLUMN");
    expect(screen.getByText("Control content").dataset.pasteElement).toBe("FORM_CONTROL");
    expect(screen.getByText("Actions content").dataset.pasteElement).toBe("FORM_ACTIONS");
  });

  it("should set a custom element data attribute", () => {
    render(
      <Form aria-label="My Form" element="MY_FORM">
        <FormSection id="foo" element="MY_FORM_SECTION">
          <FormSectionHeading data-testid="section-heading" element="MY_FORM_SECTION_HEADING">
            Settings
          </FormSectionHeading>
          <FormSectionDescription data-testid="section-desc" element="MY_FORM_SECTION_DESCRIPTION">
            These are the settings
          </FormSectionDescription>
        </FormSection>
        <FormControlTwoColumn element="MY_FORM_CONTROL_TWO_COLUMN">Two column content</FormControlTwoColumn>
        <FormControl element="MY_FORM_CONTROL">Control content</FormControl>
        <FormActions element="MY_FORM_ACTIONS">Actions content</FormActions>
      </Form>,
    );

    expect(screen.getByRole("form").dataset.pasteElement).toBe("MY_FORM");
    expect(screen.getByRole("group", { name: "Settings" }).dataset.pasteElement).toBe("MY_FORM_SECTION");
    expect(screen.getByTestId("section-heading").dataset.pasteElement).toBe("MY_FORM_SECTION_HEADING");
    expect(screen.getByText("Two column content").dataset.pasteElement).toBe("MY_FORM_CONTROL_TWO_COLUMN");
    expect(screen.getByText("Control content").dataset.pasteElement).toBe("MY_FORM_CONTROL");
    expect(screen.getByText("Actions content").dataset.pasteElement).toBe("MY_FORM_ACTIONS");
  });

  it("should add custom styling", () => {
    render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          FORM: { rowGap: "space20" },
          FORM_ACTIONS: { justifyContent: "center" },
          FORM_CONTROL: { flexGrow: "unset" },
          FORM_CONTROL_TWO_COLUMN: { columnGap: "space20" },
          FORM_SECTION: { borderWidth: "borderWidth10", borderStyle: "solid", borderColor: "colorBorder" },
          FORM_SECTION_DESCRIPTION: { fontWeight: "fontWeightBold" },
          FORM_SECTION_HEADING: { backgroundColor: "colorBackgroundErrorWeakest" },
        }}
      >
        <Form aria-label="My Form">
          <FormSection id="foo">
            <FormSectionHeading data-testid="section-heading">Settings</FormSectionHeading>
            <FormSectionDescription data-testid="section-desc">These are the settings</FormSectionDescription>
          </FormSection>
          <FormControlTwoColumn data-testid="two-col">Two column content</FormControlTwoColumn>
          <FormControl>Control content</FormControl>
          <FormActions>Actions content</FormActions>
        </Form>
      </CustomizationProvider>,
    );

    expect(screen.getByRole("form")).toHaveStyleRule("row-gap", "0.25rem");
    expect(screen.getByRole("group", { name: "Settings" })).toHaveStyleRule("border-style", "solid");
    expect(screen.getByTestId("section-heading")).toHaveStyleRule("background-color", "rgb(254, 236, 236)");
    expect(screen.getByText("Two column content")).toHaveStyleRule("column-gap", "0.25rem");
    expect(screen.getByText("Control content")).toHaveStyleRule("flex-grow", "unset");
    expect(screen.getByText("Actions content")).toHaveStyleRule("justify-content", "center");
  });

  it("should add custom styling to a custom named form", () => {
    render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          MY_FORM: { rowGap: "space20" },
          MY_FORM_ACTIONS: { justifyContent: "center" },
          MY_FORM_CONTROL: { flexGrow: "unset" },
          MY_FORM_CONTROL_TWO_COLUMN: { columnGap: "space20" },
          MY_FORM_SECTION: { borderWidth: "borderWidth10", borderStyle: "solid", borderColor: "colorBorder" },
          MY_FORM_SECTION_DESCRIPTION: { fontWeight: "fontWeightBold" },
          MY_FORM_SECTION_HEADING: { backgroundColor: "colorBackgroundErrorWeakest" },
        }}
      >
        <Form aria-label="My Form" element="MY_FORM">
          <FormSection id="foo" element="MY_FORM_SECTION">
            <FormSectionHeading data-testid="section-heading" element="MY_FORM_SECTION_HEADING">
              Settings
            </FormSectionHeading>
            <FormSectionDescription data-testid="section-desc" element="MY_FORM_SECTION_DESCRIPTION">
              These are the settings
            </FormSectionDescription>
          </FormSection>
          <FormControlTwoColumn element="MY_FORM_CONTROL_TWO_COLUMN">Two column content</FormControlTwoColumn>
          <FormControl element="MY_FORM_CONTROL">Control content</FormControl>
          <FormActions element="MY_FORM_ACTIONS">Actions content</FormActions>
        </Form>
      </CustomizationProvider>,
    );

    expect(screen.getByRole("form")).toHaveStyleRule("row-gap", "0.25rem");
    expect(screen.getByRole("group", { name: "Settings" })).toHaveStyleRule("border-style", "solid");
    expect(screen.getByTestId("section-heading")).toHaveStyleRule("background-color", "rgb(254, 236, 236)");
    expect(screen.getByText("Two column content")).toHaveStyleRule("column-gap", "0.25rem");
    expect(screen.getByText("Control content")).toHaveStyleRule("flex-grow", "unset");
    expect(screen.getByText("Actions content")).toHaveStyleRule("justify-content", "center");
  });
});
