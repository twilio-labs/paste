import { safelySpreadBoxProps } from "../src/SafelySpreadProps";

const badProps = {
  foo: "bar",
  borderColor: "borderColorSuccess",
};

const goodProps = {
  baz: "foo",
  "aria-label": "test",
};

describe("safelySpreadBoxProps", () => {
  it("should not filter out good props", () => {
    expect(safelySpreadBoxProps(goodProps)).toEqual({
      baz: "foo",
      "aria-label": "test",
    });
  });

  it("should filter out bad props", () => {
    expect(safelySpreadBoxProps(badProps)).toEqual({
      foo: "bar",
    });
  });
});
