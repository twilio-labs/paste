import { act, render } from "@testing-library/react";
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { createRoot } from "testing-tools/react-dom-create-root";

import type { ThemeShape } from "../src";
import { Theme, withTheme } from "../src";

const MockComponent = ({ theme }: { theme: ThemeShape }): React.ReactElement => <p>{theme.textColors.colorText}</p>;
const MockComponentWithTheme = withTheme(MockComponent);

describe("withTheme", () => {
  it("should render without crashing", (): void => {
    const root = createRoot(document.createElement("div") as HTMLElement);
    act(() => {
      root.render(
        <Theme.Provider theme="default">
          <MockComponentWithTheme />
        </Theme.Provider>,
      );
    });
  });

  it("should be able to access the theme object", () => {
    const { getByText } = render(
      <Theme.Provider theme="default">
        <MockComponentWithTheme />
      </Theme.Provider>,
    );

    expect(getByText("rgb(18, 28, 45)")).toBeDefined();
  });
});
