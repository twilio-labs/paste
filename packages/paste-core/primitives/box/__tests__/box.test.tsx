import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { CustomizableBoxExample } from "../__fixtures__/CustomizableBox";
import { Box } from "../src";

describe("Backgrounds", () => {
  it("should render single values", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box backgroundColor="colorBackgroundPrimary" data-testid="box">
          background single
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("background-color", "rgb(2, 99, 224)");
  });

  it("should render responsive values", () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box backgroundColor={["colorBackgroundPrimaryWeak", "colorBackgroundPrimary"]} data-testid="box">
          background responsive
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("background-color", "rgb(153, 205, 255)");
    expect(renderedBox).toHaveStyleRule("background-color", "rgb(2, 99, 224)", {
      media: "screen and (min-width:400px)",
    });
  });
});

describe("Color mappings", () => {
  it("should map single color values", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box
          backgroundColor="colorBackgroundPrimary"
          borderColor="colorBorderStrong"
          borderBottomColor="colorBorderErrorStrong"
          borderLeftColor="colorBorderErrorStrong"
          borderRightColor="colorBorderInverse"
          borderTopColor="colorBorderInverse"
          color="colorText"
          data-testid="box"
        >
          background single
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("background-color", "rgb(2, 99, 224)");
    expect(renderedBox).toHaveStyleRule("border-color", "rgb(96, 107, 133)");
    expect(renderedBox).toHaveStyleRule("border-bottom-color", "rgb(117, 12, 12)");
    expect(renderedBox).toHaveStyleRule("border-left-color", "rgb(117, 12, 12)");
    expect(renderedBox).toHaveStyleRule("border-right-color", "rgba(255, 255, 255, 0.5)");
    expect(renderedBox).toHaveStyleRule("border-top-color", "rgba(255, 255, 255, 0.5)");
    expect(renderedBox).toHaveStyleRule("color", "rgb(18, 28, 45)");
  });

  it("should map responsive color values", () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box
          backgroundColor={["colorBackgroundPrimaryWeak", "colorBackgroundPrimary"]}
          borderColor={["colorBorderStrong", "colorBorderDestructiveStrong"]}
          color={["colorText", "colorTextBrandInverse"]}
          data-testid="box"
        >
          background responsive
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("background-color", "rgb(153, 205, 255)");
    expect(renderedBox).toHaveStyleRule("background-color", "rgb(2, 99, 224)", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("border-color", "rgb(96, 107, 133)");
    expect(renderedBox).toHaveStyleRule("border-color", "rgb(117, 12, 12)", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("color", "rgb(18, 28, 45)");
    expect(renderedBox).toHaveStyleRule("color", "rgb(255, 255, 255)", {
      media: "screen and (min-width:400px)",
    });
  });

  it("should map pseudo selector color values", () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box
          _hover={{
            backgroundColor: "colorBackground",
            borderColor: "colorBorderDestructiveStrong",
            color: "colorTextBrandInverse",
          }}
          data-testid="box"
        >
          background responsive
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("background-color", "rgb(244, 244, 246)", { target: ":hover" });
    expect(renderedBox).toHaveStyleRule("border-color", "rgb(117, 12, 12)", { target: ":hover" });
    expect(renderedBox).toHaveStyleRule("color", "rgb(255, 255, 255)", { target: ":hover" });
  });

  it("should map responsive pseudo selector color values", () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box
          _hover={{
            backgroundColor: ["colorBackground", "colorBackgroundBody"],
            borderColor: ["colorBorderDestructiveStrong", "colorBorderErrorStrong"],
            color: ["colorTextError", "colorTextIconInverse"],
          }}
          data-testid="box"
        >
          background responsive
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("background-color", "rgb(244, 244, 246)", { target: ":hover" });
    expect(renderedBox).toHaveStyleRule("background-color", "rgb(255, 255, 255)", {
      target: ":hover",
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("border-color", "rgb(117, 12, 12)", { target: ":hover" });
    expect(renderedBox).toHaveStyleRule("border-color", "rgb(117, 12, 12)", {
      target: ":hover",
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("color", "rgb(214, 31, 31)", { target: ":hover" });
    expect(renderedBox).toHaveStyleRule("color", "rgb(136, 145, 170)", {
      target: ":hover",
      media: "screen and (min-width:400px)",
    });
  });
});

describe("Borders", () => {
  it("should render single values", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box
          borderStyle="solid"
          borderColor="colorBorderPrimaryStrong"
          borderWidth="borderWidth10"
          borderRadius="borderRadius20"
          data-testid="box"
        >
          border single
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("border-style", "solid");
    expect(renderedBox).toHaveStyleRule("border-color", "rgb(0, 20, 137)");
    expect(renderedBox).toHaveStyleRule("border-width", "1px");
    expect(renderedBox).toHaveStyleRule("border-radius", "4px");
  });

  it("should render responsive values", () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box
          borderStyle={["dashed", "dotted", "solid"]}
          borderColor={["colorBorderPrimaryStrong", "colorBorderPrimaryWeak"]}
          borderWidth={["borderWidth10", "borderWidth20"]}
          borderRadius={["borderRadius0", "borderRadius10"]}
          data-testid="box"
        >
          border responsive
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("border-style", "dashed");
    expect(renderedBox).toHaveStyleRule("border-style", "dotted", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("border-style", "solid", {
      media: "screen and (min-width:1024px)",
    });
    expect(renderedBox).toHaveStyleRule("border-color", "rgb(0, 20, 137)");
    expect(renderedBox).toHaveStyleRule("border-color", "rgb(102, 179, 255)", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("border-width", "1px");
    expect(renderedBox).toHaveStyleRule("border-width", "2px", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("border-radius", "0");
    expect(renderedBox).toHaveStyleRule("border-radius", "2px", {
      media: "screen and (min-width:400px)",
    });
  });
});

describe("Sizes", () => {
  it("should render single values", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box
          width="size10"
          minWidth="size0"
          maxWidth="size20"
          height="size10"
          minHeight="size0"
          maxHeight="size20"
          data-testid="box"
        >
          size single
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("width", "5.5rem");
    expect(renderedBox).toHaveStyleRule("min-width", "0");
    expect(renderedBox).toHaveStyleRule("max-width", "12rem");
    expect(renderedBox).toHaveStyleRule("height", "5.5rem");
    expect(renderedBox).toHaveStyleRule("min-height", "0");
    expect(renderedBox).toHaveStyleRule("max-height", "12rem");
  });

  it("should render responsive values", () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box
          width={["size10", "size20"]}
          minWidth={["size0", "size10"]}
          maxWidth={["size20", "size30"]}
          height={["size10", "size20"]}
          minHeight={["size0", "size10"]}
          maxHeight={["size20", "size30"]}
          data-testid="box"
        >
          size responsive
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("width", "5.5rem");
    expect(renderedBox).toHaveStyleRule("width", "12rem", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("min-width", "0");
    expect(renderedBox).toHaveStyleRule("min-width", "5.5rem", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("max-width", "12rem");
    expect(renderedBox).toHaveStyleRule("max-width", "18.5rem", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("height", "5.5rem");
    expect(renderedBox).toHaveStyleRule("height", "12rem", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("min-height", "0");
    expect(renderedBox).toHaveStyleRule("min-height", "5.5rem", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("max-height", "12rem");
    expect(renderedBox).toHaveStyleRule("max-height", "18.5rem", {
      media: "screen and (min-width:400px)",
    });
  });
});

describe("Spaces", () => {
  it("(A) it should render single values", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box margin="space20" data-testid="box">
          space single 1
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("margin", "0.25rem");
  });

  it("(A) it should render responsive values", () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box margin={["space20", "space30"]} data-testid="box">
          space responsive 1
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("margin", "0.25rem");
    expect(renderedBox).toHaveStyleRule("margin", "0.5rem", {
      media: "screen and (min-width:400px)",
    });
  });

  it("(B) it should render single values", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box marginTop="space20" marginRight="space20" marginBottom="space30" marginLeft="space30" data-testid="box">
          space single 2
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("margin-top", "0.25rem");
    expect(renderedBox).toHaveStyleRule("margin-right", "0.25rem");
    expect(renderedBox).toHaveStyleRule("margin-bottom", "0.5rem");
    expect(renderedBox).toHaveStyleRule("margin-left", "0.5rem");
  });

  it("(B)it should render responsive values", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box
          marginTop={["space20", "space30"]}
          marginRight={["space20", "space30"]}
          marginBottom={["space30", "space40"]}
          marginLeft={["space30", "space40"]}
          data-testid="box"
        >
          space responsive 2
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("margin-top", "0.25rem");
    expect(renderedBox).toHaveStyleRule("margin-top", "0.5rem", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("margin-right", "0.25rem");
    expect(renderedBox).toHaveStyleRule("margin-right", "0.5rem", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("margin-bottom", "0.5rem");
    expect(renderedBox).toHaveStyleRule("margin-bottom", "0.75rem", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("margin-left", "0.5rem");
    expect(renderedBox).toHaveStyleRule("margin-left", "0.75rem", {
      media: "screen and (min-width:400px)",
    });
  });

  it("(C) it should render single values for column and row gap", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box display="flex" columnGap="space10" rowGap="space10" data-testid="box">
          space single 3
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("column-gap", "0.125rem");
    expect(renderedBox).toHaveStyleRule("row-gap", "0.125rem");
  });

  it("(C) it should render responsive values for column and row gap", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box display="flex" columnGap={["space20", "space30"]} rowGap={["space30", "space40"]} data-testid="box">
          space single 3
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("column-gap", "0.25rem");
    expect(renderedBox).toHaveStyleRule("row-gap", "0.5rem");

    expect(renderedBox).toHaveStyleRule("column-gap", "0.5rem", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("row-gap", "0.75rem", {
      media: "screen and (min-width:400px)",
    });
  });
});

describe("Grid CSS", () => {
  it("handles css grid style props", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box
          display="grid"
          gridColumn="1 / span 2"
          gridRow="1 / span 3"
          gridAutoFlow="column"
          gridAutoRows={["100px", "150px"]}
          gridAutoColumns="160px"
          gridArea="2 / 1 / span 2 / span 3"
          gridTemplateColumns="min-content"
          gridTemplateRows="max-content"
          gridTemplateAreas="myArea myArea2"
        >
          Grid test
        </Box>
      </CustomizationProvider>,
    );

    const renderedBox = screen.getByText("Grid test");
    expect(renderedBox).toHaveStyleRule("display", "grid");
    expect(renderedBox).toHaveStyleRule("grid-column", "1/span 2");
    expect(renderedBox).toHaveStyleRule("grid-row", "1/span 3");
    expect(renderedBox).toHaveStyleRule("grid-auto-flow", "column");
    expect(renderedBox).toHaveStyleRule("grid-auto-rows", "100px");
    expect(renderedBox).toHaveStyleRule("grid-auto-rows", "150px", {
      media: "screen and (min-width:400px)",
    });
    expect(renderedBox).toHaveStyleRule("grid-auto-columns", "160px");
    expect(renderedBox).toHaveStyleRule("grid-area", "2/1/span 2/span 3");
    expect(renderedBox).toHaveStyleRule("grid-template-columns", "min-content");
    expect(renderedBox).toHaveStyleRule("grid-template-rows", "max-content");
    expect(renderedBox).toHaveStyleRule("grid-template-areas", "myArea myArea2");
  });
});

describe("Shadows", () => {
  it("should render single values", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box boxShadow="shadowCard" data-testid="box">
          shadow single
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("box-shadow", "0 2px 8px 0 rgba(18, 28, 45, 0.1)");
  });

  it("should render responsive values", () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box boxShadow={["shadowCard", "shadowFocus"]} data-testid="box">
          shadow responsive
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("box-shadow", "0 2px 8px 0 rgba(18, 28, 45, 0.1)");
    expect(renderedBox).toHaveStyleRule("box-shadow", "0 0 0 4px rgba(2, 99, 224, 0.7)", {
      media: "screen and (min-width:400px)",
    });
  });
});

describe("ZIndex", () => {
  it("should render single values", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box zIndex="zIndex10" data-testid="box">
          z-index single
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("z-index", "10");
  });

  it("should render responsive values", () => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Box zIndex={["zIndex10", "zIndex20"]} data-testid="box">
          z-index responsive
        </Box>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("box");
    expect(renderedBox).toHaveStyleRule("z-index", "10");
    expect(renderedBox).toHaveStyleRule("z-index", "20", {
      media: "screen and (min-width:400px)",
    });
  });

  describe("Pseudo-class props", () => {
    it("should generate pseudo-class CSS", (): void => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <Box
            _hover={{ padding: "space10" }}
            _active={{ padding: "space10" }}
            _focus={{ padding: "space10" }}
            _visited={{ padding: "space10" }}
            _even={{ padding: "space10" }}
            _odd={{ padding: "space10" }}
            _disabled={{ padding: "space10" }}
            _checked={{ padding: "space10" }}
            _mixed={{ padding: "space10" }}
            _selected={{ padding: "space10" }}
            _invalid={{ padding: "space10" }}
            _pressed={{ padding: "space10" }}
            _readOnly={{ padding: "space10" }}
            _first={{ padding: "space10" }}
            _last={{ padding: "space10" }}
            _expanded={{ padding: "space10" }}
            _grabbed={{ padding: "space10" }}
            _notFirst={{ padding: "space10" }}
            _notLast={{ padding: "space10" }}
            _groupHover={{ padding: "space10" }}
            _before={{ padding: "space10" }}
            _after={{ padding: "space10" }}
            _focusWithin={{ padding: "space10" }}
            _focusVisible={{ padding: "space10" }}
            _placeholder={{ padding: "space10" }}
            data-testid="box"
          >
            PseudoBox
          </Box>
        </CustomizationProvider>,
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":hover" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":active" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":focus" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":visited" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":nth-of-type(even)" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":nth-of-type(odd)" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":disabled" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":checked" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":indeterminate" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: "[aria-selected=true]" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":invalid" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: "[aria-pressed=true]" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: "[readonly]" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":first-of-type" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":last-of-type" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: "[aria-expanded=true]" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: "[aria-grabbed=true]" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":not(:first-of-type)" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":not(:last-of-type)" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: "[role=group]:hover" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":before" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":after" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":focus-within" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: ":focus-visible" });
      expect(renderedBox).toHaveStyleRule("padding", "0.125rem", { target: "::placeholder" });
    });
  });
});

describe("HTML attributes", () => {
  it("should set a default element data attribute", () => {
    render(<Box>box</Box>);
    expect(screen.getByText("box").getAttribute("data-paste-element")).toEqual("BOX");
  });
  it("should set a custom element data attribute", () => {
    render(<Box element="foo">box</Box>);
    expect(screen.getByText("box").getAttribute("data-paste-element")).toEqual("foo");
  });
});

describe("Customization", () => {
  it("should add custom styles to a component provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ CUSTOM_BOX: { color: "colorTextWeak", textDecoration: "underline" } }}
      >
        <CustomizableBoxExample element="CUSTOM_BOX" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("text-decoration", "underline");
    expect(renderedBox).toHaveStyleRule("color", "rgb(96, 107, 133)");
    expect(renderedBox).toHaveStyleRule("padding", "0.75rem");
  });

  it("should override existing styles when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider baseTheme="default" elements={{ CUSTOM_BOX: { padding: "space20" } }}>
        <CustomizableBoxExample element="CUSTOM_BOX" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("padding", "0.25rem");
  });

  it("should add custom styles to pseudo selectors when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider baseTheme="default" elements={{ CUSTOM_BOX: { ":hover": { color: "colorTextSuccess" } } }}>
        <CustomizableBoxExample element="CUSTOM_BOX" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("color", "rgb(14, 124, 58)", { target: ":hover" });
  });

  it("should override existing pseudo selector styles when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ CUSTOM_BOX: { ":hover": { backgroundColor: "colorBackground" } } }}
      >
        <CustomizableBoxExample element="CUSTOM_BOX" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("background-color", "rgb(244, 244, 246)", { target: ":hover" });
  });

  it("should add custom styles to a component variant provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ CUSTOM_TEXT: { variants: { primary: { fontStyle: "italic" } } } }}
      >
        <CustomizableBoxExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("font-style", "italic");
  });

  it("should override existing variant styles when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ CUSTOM_TEXT: { variants: { primary: { backgroundColor: "colorBackgroundWarning" } } } }}
      >
        <CustomizableBoxExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("background-color", "rgb(244, 124, 34)");
  });

  it("should add custom styles to variant pseudo selectors when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider baseTheme="default" elements={{ CUSTOM_TEXT: { ":hover": { margin: "space30" } } }}>
        <CustomizableBoxExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("margin", "0.5rem", { target: ":hover" });
  });

  it("should override existing variant pseudo selector styles when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ CUSTOM_TEXT: { ":hover": { fontWeight: "fontWeightMedium" } } }}
      >
        <CustomizableBoxExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableBoxExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("font-weight", "500", { target: ":hover" });
  });
});
