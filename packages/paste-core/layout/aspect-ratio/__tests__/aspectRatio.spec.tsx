import { render } from "@testing-library/react";
import * as React from "react";

import { AspectRatio } from "../src";

describe("AspectRatio", () => {
  it("should render a 4:3 aspect ratio div", () => {
    const { getByTestId } = render(
      <div data-testid="wrapper">
        <AspectRatio ratio="4:3">
          <p>This is the AspectRatio utility.</p>
        </AspectRatio>
      </div>,
    );

    expect(getByTestId("wrapper").firstChild).toHaveAttribute("style", "padding-bottom: 75%;");
  });
});

describe("handlePropValidation function", () => {
  it("should throw an error if no ratio prop was passed", () => {
    // hide console errors from terminal when throwing expected errors
    const spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => {});
    expect(() =>
      render(
        <AspectRatio ratio="">
          <p>This is the AspectRatio utility without a passed ratio.</p>
        </AspectRatio>,
      ),
    ).toThrow(`[Paste: AspectRatio] Missing 'ratio' prop.`);
  });

  it("should throw an error if passed ratio prop is invalid", () => {
    // hide console errors from terminal when throwing expected errors
    const spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => {});
    expect(() =>
      render(
        <AspectRatio ratio="10:a">
          <p>This is the AspectRatio utility without a valid ratio.</p>
        </AspectRatio>,
      ),
    ).toThrow(`[Paste: AspectRatio] 'ratio' is invalid. Use a colon-separated number pattern (4:3).`);
  });

  it("should throw no errors if passed ratio prop is valid", () => {
    // hide console errors from terminal when throwing expected errors
    const spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => {});
    expect(() =>
      render(
        <AspectRatio ratio="5:8">
          <p>This is the AspectRatio utility with a valid ratio.</p>
        </AspectRatio>,
      ),
    ).not.toThrow();
  });
});
