import { act, render } from "@testing-library/react";
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { createRoot } from "testing-tools/react-dom-create-root";

import { Theme } from "../src";

const ThemeConsumerExampleComponent = (): React.ReactElement => {
  return (
    <Theme.Consumer>
      {({ theme }) => <p>{theme.breakpoints.map((breakpoint: string) => `${breakpoint},`)}</p>}
    </Theme.Consumer>
  );
};

const ThemeConsumerExampleTextColor = (): React.ReactElement => {
  return <Theme.Consumer>{({ theme }) => <p>Color: {theme.textColors.colorTextLink}</p>}</Theme.Consumer>;
};

describe("Theme.Provider", () => {
  it("should render without crashing", (): void => {
    const root = createRoot(document.createElement("div") as HTMLElement);
    act(() => {
      root.render(<Theme.Provider />);
    });
  });

  it("should render the sendgrid link text color", (): void => {
    const { getByText } = render(
      <Theme.Provider theme="sendgrid">
        <ThemeConsumerExampleTextColor />
      </Theme.Provider>,
    );

    expect(getByText("Color: rgb(2, 99, 224)")).toBeDefined();
  });

  it("should override selected theme with hash value", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.location = new URL("https://www.example.com#paste-theme-override=evergreen");

    const { getByText } = render(
      <Theme.Provider>
        <ThemeConsumerExampleTextColor />
      </Theme.Provider>,
    );
    expect(getByText("Color: rgb(51, 102, 255)")).toBeDefined();
  });

  it("should rely on the default breakpoints set on the theme object", () => {
    const { getByText } = render(
      <Theme.Provider theme="default">
        <ThemeConsumerExampleComponent />
      </Theme.Provider>,
    );

    expect(getByText("400px,1024px,1232px,")).toBeDefined();
  });

  it("should set custom breakpoints when provided", () => {
    const customBreakpoints = ["480px", "320px", "1440px"];

    const { getByText } = render(
      <Theme.Provider customBreakpoints={customBreakpoints}>
        <ThemeConsumerExampleComponent />
      </Theme.Provider>,
    );

    expect(getByText("480px,320px,1440px,")).toBeDefined();
  });
});
