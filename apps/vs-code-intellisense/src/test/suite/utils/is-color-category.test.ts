import assert from "assert";

import { TokenCategory } from "../../../types";
import { isColorCategory } from "../../../utils/is-color-category";

const COLOR_CATEGORIES: TokenCategory[] = ["border-color", "background-color", "color", "text-color"];

const NON_COLOR_CATEGORIES: TokenCategory[] = [
  "radius",
  "border-width",
  "box-shadow",
  "data-visualization",
  "font",
  "font-size",
  "font-weight",
  "line-height",
  "sizing",
  "spacing",
  "z-index",
];

suite("isColorCategory", () => {
  COLOR_CATEGORIES.forEach((category) => {
    test(`should return true for ${category}`, () => {
      assert.strictEqual(true, isColorCategory(category));
    });
  });

  NON_COLOR_CATEGORIES.forEach((category) => {
    test(`should return false for ${category}`, () => {
      assert.strictEqual(false, isColorCategory(category));
    });
  });
});
