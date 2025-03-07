import { DefaultTheme, SendGridTheme } from "../src";
import { CSSVariablesTheme } from "../src/themes/css-variables";

describe("Default theme", () => {
  it("should match the snapshot", () => {
    expect(Object.keys(DefaultTheme).sort((a, b) => a.localeCompare(b))).toMatchSnapshot();
  });
});
describe("Sendgrid theme", () => {
  it("should match the snapshot", () => {
    expect(Object.keys(SendGridTheme).sort((a, b) => a.localeCompare(b))).toMatchSnapshot();
  });
});
describe("CSS Theme", () => {
  it("should match the snapshot", () => {
    expect(Object.keys(CSSVariablesTheme).sort((a, b) => a.localeCompare(b))).toMatchSnapshot();
  });
  it("should transform values correctly", () => {
    expect(CSSVariablesTheme.space).toEqual(expect.objectContaining({ space10: "var(--space-10)" }));
    expect(CSSVariablesTheme.textColors).toEqual(
      expect.objectContaining({ colorTextBrand: "var(--color-text-brand)" }),
    );
  });
});
