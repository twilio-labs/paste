import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import { Heading } from "../src";

describe("Heading", () => {
  describe("Render", () => {
    it("should render an H1 at fontSize90", (): void => {
      render(
        <Theme.Provider theme="default">
          <Heading as="h1" variant="heading10">
            This is an H1
          </Heading>
        </Theme.Provider>,
      );
      const renderedHeading = screen.getByRole("heading", { level: 1 });
      expect(renderedHeading).not.toBeNull();
      expect(renderedHeading).toHaveStyleRule("margin-bottom", "1.5rem");
      expect(renderedHeading).toHaveStyleRule("font-size", "2rem");
      expect(renderedHeading).toHaveStyleRule("font-weight", "600");
      expect(renderedHeading).toHaveStyleRule("line-height", "2.5rem");
    });

    it("should render an H2 at fontSize70", (): void => {
      render(
        <Theme.Provider theme="default">
          <Heading as="h2" variant="heading20">
            This is an H2
          </Heading>
        </Theme.Provider>,
      );
      const renderedHeading = screen.getByRole("heading", { level: 2 });
      expect(renderedHeading).not.toBeNull();
      expect(renderedHeading).toHaveStyleRule("margin-bottom", "1.5rem");
      expect(renderedHeading).toHaveStyleRule("font-size", "1.5rem");
      expect(renderedHeading).toHaveStyleRule("font-weight", "600");
      expect(renderedHeading).toHaveStyleRule("line-height", "2rem");
    });

    it("should render an H3 at fontSize60", (): void => {
      render(
        <Theme.Provider theme="default">
          <Heading as="h3" variant="heading30">
            This is an H3
          </Heading>
        </Theme.Provider>,
      );
      const renderedHeading = screen.getByRole("heading", { level: 3 });
      expect(renderedHeading).not.toBeNull();
      expect(renderedHeading).toHaveStyleRule("margin-bottom", "1rem");
      expect(renderedHeading).toHaveStyleRule("font-size", "1.25rem");
      expect(renderedHeading).toHaveStyleRule("font-weight", "600");
      expect(renderedHeading).toHaveStyleRule("line-height", "1.75rem");
    });

    it("should render an H4 at fontSize40", (): void => {
      render(
        <Theme.Provider theme="default">
          <Heading as="h4" variant="heading40">
            This is an H4
          </Heading>
        </Theme.Provider>,
      );
      const renderedHeading = screen.getByRole("heading", { level: 4 });
      expect(renderedHeading).not.toBeNull();
      expect(renderedHeading).toHaveStyleRule("margin-bottom", "0.5rem");
      expect(renderedHeading).toHaveStyleRule("font-size", "1rem");
      expect(renderedHeading).toHaveStyleRule("font-weight", "600");
      expect(renderedHeading).toHaveStyleRule("line-height", "1.5rem");
    });

    it("should render an H5 at fontSize30", (): void => {
      render(
        <Theme.Provider theme="default">
          <Heading as="h5" variant="heading50">
            This is an H5
          </Heading>
        </Theme.Provider>,
      );
      const renderedHeading = screen.getByRole("heading", { level: 5 });
      expect(renderedHeading).not.toBeNull();
      expect(renderedHeading).toHaveStyleRule("margin-bottom", "0.5rem");
      expect(renderedHeading).toHaveStyleRule("font-size", "0.875rem");
      expect(renderedHeading).toHaveStyleRule("font-weight", "600");
      expect(renderedHeading).toHaveStyleRule("line-height", "1.25rem");
    });

    it("should render an H6 at fontSize20", (): void => {
      render(
        <Theme.Provider theme="default">
          <Heading as="h6" variant="heading60">
            This is an H6
          </Heading>
        </Theme.Provider>,
      );
      const renderedHeading = screen.getByRole("heading", { level: 6 });
      expect(renderedHeading).not.toBeNull();
      expect(renderedHeading).toHaveStyleRule("margin-bottom", "0.5rem");
      expect(renderedHeading).toHaveStyleRule("font-size", "0.75rem");
      expect(renderedHeading).toHaveStyleRule("font-weight", "600");
      expect(renderedHeading).toHaveStyleRule("line-height", "1.25rem");
    });

    it("should render an italic H2 at fontSize50", (): void => {
      render(
        <Theme.Provider theme="default">
          <Heading as="h2" variant="heading20">
            <i>This is an italic H2</i>
          </Heading>
        </Theme.Provider>,
      );
      const renderedHeading = screen.getByRole("heading", { level: 2 });
      const renderedHeadingIdiomatic = screen.getByText("This is an italic H2").closest("i");
      expect(renderedHeading).not.toBeNull();
      expect(renderedHeadingIdiomatic).not.toBeNull();
      expect(renderedHeading).toHaveStyleRule("margin-bottom", "1.5rem");
      expect(renderedHeading).toHaveStyleRule("font-size", "1.5rem");
      expect(renderedHeading).toHaveStyleRule("font-weight", "600");
      expect(renderedHeading).toHaveStyleRule("line-height", "2rem");
    });

    it("should render with no margin", (): void => {
      render(
        <Theme.Provider theme="default">
          <Heading as="h2" marginBottom="space0" variant="heading10">
            no margin heading
          </Heading>
        </Theme.Provider>,
      );
      const renderedHeading = screen.getByRole("heading", { level: 2 });
      expect(renderedHeading).not.toBeNull();
      expect(renderedHeading).toHaveStyleRule("margin-bottom", "0");
    });
  });

  describe("HTML attributes", () => {
    it("should set a element data attribute for Heading", () => {
      render(
        <Heading as="h1" variant="heading10">
          heading
        </Heading>,
      );
      expect(screen.getByRole("heading").getAttribute("data-paste-element")).toEqual("HEADING");
    });
    it("should set a custom element data attribute for Heading", () => {
      render(
        <Heading as="h1" variant="heading10" element="foo">
          heading
        </Heading>,
      );
      expect(screen.getByRole("heading").getAttribute("data-paste-element")).toEqual("foo");
    });
  });

  describe("Customization", () => {
    it("should add custom styles to Heading", (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{ HEADING: { color: "colorTextWeak", backgroundColor: "colorBackground" } }}
        >
          <Heading as="h1" variant="heading10">
            Custom heading
          </Heading>
        </CustomizationProvider>,
      );
      const renderedHeading = screen.getByRole("heading");
      expect(renderedHeading).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
      expect(renderedHeading).toHaveStyleRule("color", "rgb(96, 107, 133)");
    });

    it("should add custom styles to a Heading variant", (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            HEADING: {
              color: "colorTextWeak",
              backgroundColor: "colorBackground",
              variants: {
                heading20: {
                  color: "colorTextLink",
                  textDecoration: "underline",
                },
              },
            },
          }}
        >
          <Heading as="h2" variant="heading20">
            Custom heading
          </Heading>
        </CustomizationProvider>,
      );
      const renderedHeading = screen.getByRole("heading");
      expect(renderedHeading).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
      expect(renderedHeading).toHaveStyleRule("color", "rgb(2, 99, 224)");
      expect(renderedHeading).toHaveStyleRule("text-decoration", "underline");
    });

    it("should add custom styles to Heading with a custom element data attribute", (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{ foo: { color: "colorTextWeak", backgroundColor: "colorBackground" } }}
        >
          <Heading as="h1" variant="heading10" element="foo">
            Custom heading
          </Heading>
        </CustomizationProvider>,
      );
      const renderedHeading = screen.getByRole("heading");
      expect(renderedHeading).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
      expect(renderedHeading).toHaveStyleRule("color", "rgb(96, 107, 133)");
    });

    it("should add custom styles to a Heading variant with a custom element data attribute", (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            foo: {
              color: "colorTextWeak",
              backgroundColor: "colorBackground",
              variants: {
                heading20: {
                  color: "colorTextLink",
                  textDecoration: "underline",
                },
              },
            },
          }}
        >
          <Heading as="h2" variant="heading20" element="foo">
            Custom heading
          </Heading>
        </CustomizationProvider>,
      );
      const renderedHeading = screen.getByRole("heading");
      expect(renderedHeading).toHaveStyleRule("background-color", "rgb(244, 244, 246)");
      expect(renderedHeading).toHaveStyleRule("color", "rgb(2, 99, 224)");
      expect(renderedHeading).toHaveStyleRule("text-decoration", "underline");
    });
  });
});
