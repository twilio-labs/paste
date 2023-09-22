import { render, screen } from "@testing-library/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import * as React from "react";

import { CustomizableTextExample } from "../__fixtures__/CustomizableText";
import { Text } from "../src";

describe("as", () => {
  it("should render as a provided HTML element", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="label">background single</Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("display", () => {
  it("should set a display property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" display="inline-block">
          display single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive display property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" display={["inline-block", "block"]}>
          display responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("fontFamily", () => {
  it("should set a font family property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" fontFamily="fontFamilyCode">
          font family single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive font family property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" fontFamily={["fontFamilyText", "fontFamilyCode"]}>
          font family responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("fontSize", () => {
  it("should set a font size property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" fontSize="fontSize10">
          font size single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive font size property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" fontSize={["fontSize20", "fontSize30"]}>
          font size responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("fontStyle", () => {
  it("should set a font style property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" fontStyle="italic">
          font style single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive font style property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" fontStyle={["italic", "normal"]}>
          font style responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("fontWeight", () => {
  it("should set a font weight property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" fontWeight="fontWeightBold">
          font weight single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive font weight property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" fontWeight={["fontWeightLight", "fontWeightSemibold"]}>
          font weight responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("letterSpacing", () => {
  it("should set a letter spacing property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" letterSpacing="1px">
          letter spacing single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive letter spacing property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" letterSpacing={["-2px", "3px"]}>
          letter spacing responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("lineHeight", () => {
  it("should set a line height property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" lineHeight="lineHeight10">
          line height single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive line height property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" lineHeight={["lineHeight20", "lineHeight30"]}>
          line height responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("margin", () => {
  it("should set a margin property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" margin="space10">
          margin single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive margin property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" margin={["space20", "space30"]}>
          margin responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("marginBottom", () => {
  it("should set a marginBottom property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" marginBottom="space10">
          marginBottom single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive marginBottom property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" marginBottom={["space20", "space30"]}>
          marginBottom responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("marginLeft", () => {
  it("should set a marginLeft property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" marginLeft="space10">
          marginLeft single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive marginLeft property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" marginLeft={["space20", "space30"]}>
          marginLeft responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("marginRight", () => {
  it("should set a marginRight property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" marginRight="space10">
          marginRight single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive marginRight property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" marginRight={["space20", "space30"]}>
          marginRight responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("marginTop", () => {
  it("should set a marginTop property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" marginTop="space10">
          marginTop single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive marginTop property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" marginTop={["space20", "space30"]}>
          marginTop responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("padding", () => {
  it("should set a padding property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" padding="space10">
          padding single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive padding property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" padding={["space20", "space30"]}>
          padding responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("paddingBottom", () => {
  it("should set a paddingBottom property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" paddingBottom="space10">
          paddingBottom single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive paddingBottom property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" paddingBottom={["space20", "space30"]}>
          paddingBottom responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("paddingLeft", () => {
  it("should set a paddingLeft property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" paddingLeft="space10">
          paddingLeft single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive paddingLeft property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" paddingLeft={["space20", "space30"]}>
          paddingLeft responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("paddingRight", () => {
  it("should set a paddingRight property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" paddingRight="space10">
          paddingRight single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive paddingRight property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" paddingRight={["space20", "space30"]}>
          paddingRight responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("paddingTop", () => {
  it("should set a paddingTop property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" paddingTop="space10">
          paddingTop single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive paddingTop property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" paddingTop={["space20", "space30"]}>
          paddingTop responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("textAlign", () => {
  it("should set a textAlign property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" textAlign="right">
          textAlign single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive textAlign property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" textAlign={["center", "left"]}>
          textAlign responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("color", () => {
  it("should set a color property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" color="colorText">
          color single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive color property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" color={["colorTextError", "colorTextSuccess"]}>
          color responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("textDecoration", () => {
  it("should set a textDecoration property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" textDecoration="underline">
          textDecoration single
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a responsive textDecoration property", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text as="span" textDecoration={["underline", "normal"]}>
          textDecoration responsive
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Pseudo-class props", () => {
  it("should generate pseudo-class CSS", (): void => {
    const { asFragment } = render(
      <CustomizationProvider baseTheme="default" theme={TestTheme}>
        <Text
          as="span"
          _hover={{ color: "colorTextLink" }}
          _active={{ color: "colorTextLinkStrong" }}
          _focus={{ color: "colorTextLinkStronger" }}
          _visited={{ color: "colorTextLinkDestructive" }}
          _even={{ padding: "space40" }}
          _odd={{ margin: "space30" }}
          _disabled={{ paddingTop: "space40" }}
          _checked={{ paddingRight: "space40" }}
          _mixed={{ paddingBottom: "space40" }}
          _selected={{ paddingLeft: "space40" }}
          _invalid={{ marginTop: "space40" }}
          _pressed={{ marginRight: "space40" }}
          _readOnly={{ marginBottom: "space40" }}
          _first={{ marginLeft: "space40" }}
          _last={{ color: "colorTextLinkWeak" }}
          _expanded={{ color: "colorTextWeaker" }}
          _grabbed={{ color: "colorTextSuccess" }}
          _notFirst={{ color: "colorTextWarning" }}
          _notLast={{ color: "colorTextWarningStrong" }}
          _before={{ content: `"Before text"`, position: "absolute", bottom: 0, left: 0 }}
          _after={{ content: `"After text"`, position: "absolute", bottom: 0, left: 0 }}
          _focusWithin={{ color: "colorTextWeak" }}
        >
          PseudoBox
        </Text>
      </CustomizationProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("HTML attributes", () => {
  it("should set a default element data attribute", () => {
    render(<Text as="p">text</Text>);
    expect(screen.getByText("text").getAttribute("data-paste-element")).toEqual("TEXT");
  });
  it("should set a custom element data attribute", () => {
    render(
      <Text as="p" element="bar">
        text
      </Text>,
    );
    expect(screen.getByText("text").getAttribute("data-paste-element")).toEqual("bar");
  });
});

describe("Customization", () => {
  it("should add custom styles to a component provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{ CUSTOM_TEXT: { color: "colorTextWeak", textDecoration: "underline" } }}
      >
        <CustomizableTextExample element="CUSTOM_TEXT" data-testid="customizable-box">
          Custom Box
        </CustomizableTextExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("text-decoration", "underline");
    expect(renderedBox).toHaveStyleRule("color", "rgb(96, 107, 133)");
    expect(renderedBox).toHaveStyleRule("padding", "0.75rem");
  });

  it("should override existing styles when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider baseTheme="default" theme={TestTheme} elements={{ CUSTOM_TEXT: { padding: "space20" } }}>
        <CustomizableTextExample element="CUSTOM_TEXT" data-testid="customizable-box">
          Custom Box
        </CustomizableTextExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("padding", "0.25rem");
  });

  it("should add custom styles to pseudo selectors when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{ CUSTOM_TEXT: { ":hover": { color: "colorTextSuccess" } } }}
      >
        <CustomizableTextExample element="CUSTOM_TEXT" data-testid="customizable-box">
          Custom Box
        </CustomizableTextExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("color", "rgb(14, 124, 58)", { target: ":hover" });
  });

  it("should override existing pseudo selector styles when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{ CUSTOM_TEXT: { ":hover": { textDecoration: "dotted" } } }}
      >
        <CustomizableTextExample element="CUSTOM_TEXT" data-testid="customizable-box">
          Custom Box
        </CustomizableTextExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("text-decoration", "dotted", { target: ":hover" });
  });

  it("should add custom styles to a component variant provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{ CUSTOM_TEXT: { variants: { primary: { fontStyle: "italic" } } } }}
      >
        <CustomizableTextExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableTextExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("font-style", "italic");
  });

  it("should override existing variant styles when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{ CUSTOM_TEXT: { variants: { primary: { color: "colorTextSuccess" } } } }}
      >
        <CustomizableTextExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableTextExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("color", "rgb(14, 124, 58)");
  });

  it("should add custom styles to variant pseudo selectors when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{ CUSTOM_TEXT: { ":hover": { margin: "space30" } } }}
      >
        <CustomizableTextExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableTextExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("margin", "0.5rem", { target: ":hover" });
  });

  it("should override existing variant pseudo selector styles when provided as element styles on the customization provider", (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        theme={TestTheme}
        elements={{ CUSTOM_TEXT: { ":hover": { fontWeight: "fontWeightMedium" } } }}
      >
        <CustomizableTextExample element="CUSTOM_TEXT" variant="primary" data-testid="customizable-box">
          Custom Box
        </CustomizableTextExample>
      </CustomizationProvider>,
    );
    const renderedBox = screen.getByTestId("customizable-box");
    expect(renderedBox).toHaveStyleRule("font-weight", "500", { target: ":hover" });
  });
});
