import { act, render, screen } from "@testing-library/react";
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { createRoot } from "testing-tools/react-dom-create-root";

import { CustomizationConsumer, CustomizationProvider } from "../src";

const ThemeConsumerExample = (): React.ReactElement => {
  return (
    <CustomizationConsumer>
      {({ theme }) => {
        if (theme.textColors && theme.textColors.colorTextLink) {
          return <p>Color: {theme.textColors.colorTextLink}</p>;
        }
        return <></>;
      }}
    </CustomizationConsumer>
  );
};

const ThemeConsumerBreakpointsExample = (): React.ReactElement => {
  return (
    <CustomizationConsumer>
      {({ theme }) => <p data-testid="breakpoint-test">Breakpoints: {JSON.stringify(theme.breakpoints)}</p>}
    </CustomizationConsumer>
  );
};

const ThemeConsumerElementsExample = (): React.ReactElement => {
  return (
    <CustomizationConsumer>
      {({ theme }) => <p data-testid="elements-test">Elements: {JSON.stringify(theme.elements)}</p>}
    </CustomizationConsumer>
  );
};

interface BaseThemeConsumerExampleProps {
  "data-testid"?: string;
}
const BaseThemeConsumerExample: React.FC<React.PropsWithChildren<BaseThemeConsumerExampleProps>> = (props) => {
  return (
    <CustomizationConsumer>
      {({ theme }) => {
        if (theme.textColors && theme.textColors.colorTextLink) {
          return <p data-testid={props["data-testid"]}>Color: {theme.textColors.colorTextLink}</p>;
        }
        return <></>;
      }}
    </CustomizationConsumer>
  );
};

describe("CustomizationProvider", () => {
  it("should render without crashing", (): void => {
    const root = createRoot(document.createElement("div") as HTMLElement);
    act(() => {
      root.render(<CustomizationProvider />);
    });
  });

  it("should inherit one of two base themes", () => {
    render(
      <>
        <CustomizationProvider baseTheme="default">
          <BaseThemeConsumerExample data-testid="default-base" />
        </CustomizationProvider>
        <CustomizationProvider baseTheme="dark">
          <BaseThemeConsumerExample data-testid="dark-base" />
        </CustomizationProvider>
      </>,
    );
    expect(screen.getByTestId("default-base").textContent).not.toEqual(screen.getByTestId("dark-base").textContent);
  });

  it("should override a value in the theme with a custom property", () => {
    render(
      <CustomizationProvider theme={{ textColors: { colorTextLink: "hotpink" } }}>
        <ThemeConsumerExample />
      </CustomizationProvider>,
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(document.querySelector("p").textContent).toEqual("Color: hotpink");
  });

  it("should set breakpoints if none are provided", () => {
    render(
      <CustomizationProvider baseTheme="default">
        <ThemeConsumerBreakpointsExample />
      </CustomizationProvider>,
    );
    expect(screen.getByTestId("breakpoint-test").textContent).toEqual('Breakpoints: ["400px","1024px","1232px"]');
  });

  it("should set a custom set of breakpoints if they are provided", () => {
    render(
      <CustomizationProvider baseTheme="default" customBreakpoints={["20px", "50px", "200px"]}>
        <ThemeConsumerBreakpointsExample />
      </CustomizationProvider>,
    );
    expect(screen.getByTestId("breakpoint-test").textContent).toEqual('Breakpoints: ["20px","50px","200px"]');
  });

  it("should set a set of elements on the theme if they are provided", () => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{ CARD: { backgroundColor: "colorBackground", variant: { padded: { padding: "space20" } } } }}
      >
        <ThemeConsumerElementsExample />
      </CustomizationProvider>,
    );
    expect(screen.getByTestId("elements-test").textContent).toEqual(
      'Elements: {"CARD":{"backgroundColor":"colorBackground","variant":{"padded":{"padding":"space20"}}}}',
    );
  });
});
