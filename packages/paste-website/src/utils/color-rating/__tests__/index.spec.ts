/* eslint-env jest */

import colorRating from "..";

describe("utils/colorRating", (): void => {
  it("should return a AAA small rating", (): void => {
    const mockRating = {
      aaa: true,
      aa: true,
      aaaLarge: true,
      aaLarge: true,
    };
    expect(colorRating(mockRating)).toStrictEqual({
      bold: "AAA",
      large: "AAA",
      small: "AAA",
    });
  });

  it("should return a AA small rating", (): void => {
    const mockRating = {
      aaa: false,
      aa: true,
      aaaLarge: true,
      aaLarge: true,
    };
    expect(colorRating(mockRating)).toStrictEqual({
      bold: "AAA",
      large: "AAA",
      small: "AA",
    });
  });

  it("should return a AA large rating", (): void => {
    const mockRating = {
      aaa: false,
      aa: false,
      aaaLarge: false,
      aaLarge: true,
    };
    expect(colorRating(mockRating)).toStrictEqual({
      bold: "AA",
      large: "AA",
      small: "Fail",
    });
  });

  it("should return a fail rating", (): void => {
    const mockRating = {
      aaa: false,
      aa: false,
      aaaLarge: false,
      aaLarge: false,
    };
    expect(colorRating(mockRating)).toStrictEqual({
      bold: "Fail",
      large: "Fail",
      small: "Fail",
    });
  });
});
