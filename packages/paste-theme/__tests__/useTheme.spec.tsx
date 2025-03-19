import { act, render } from "@testing-library/react";
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { createRoot } from "testing-tools/react-dom-create-root";

import { Theme, useTheme } from "../src";

const HookExampleComponent = (): React.ReactElement<HTMLElement> => {
  const theme = useTheme();
  return <p>{theme.textColors.colorText}</p>;
};

describe("useTheme", () => {
  it("should render without crashing", (): void => {
    const root = createRoot(document.createElement("div") as HTMLElement);
    act(() => {
      root.render(
        <Theme.Provider theme="default">
          <HookExampleComponent />
        </Theme.Provider>,
      );
    });
  });

  it("should be able to access the theme object", () => {
    const { getByText } = render(
      <Theme.Provider theme="default">
        <HookExampleComponent />
      </Theme.Provider>,
    );

    expect(getByText("rgb(18, 28, 45)")).toBeDefined();
  });
});
