/* eslint-env jest */

import ColorCombos from "..";

describe("ColorCombos", (): void => {
  const mockColorArray = ["white", "red"];
  const mockColorObject = {
    white: "white",
    red: "red",
  };
  const mockThresholdColors = ["#FFFFFF", "#1276CE", "#A6A6A6", "#12CE54"];
  const mockRGB = ["rgb(255,255,255)", "rgb(0,25,255)"];
  const mockRGBa = ["rgb(255,255,255)", "rgba(0,25,255, 0.4)"];
  const mockHSL = ["hsl(134,90%, 76%)", "hsl(4,90%, 40%)"];

  it("should return some color combos from an array of colors", (): void => {
    expect(ColorCombos(mockColorArray)).toEqual([
      {
        color: [255, 255, 255],
        combinations: [
          {
            accessibility: {
              aa: false,
              aaLarge: true,
              aaa: false,
              aaaLarge: false,
            },
            color: [255, 0, 0],
            contrast: 3.9984767707539985,
            hex: "#FF0000",
            model: "rgb",
            valpha: 1,
          },
        ],
        hex: "#FFFFFF",
        model: "rgb",
        valpha: 1,
      },
      {
        color: [255, 0, 0],
        combinations: [
          {
            accessibility: { aa: false, aaLarge: true, aaa: false, aaaLarge: false },
            color: [255, 255, 255],
            contrast: 3.9984767707539985,
            hex: "#FFFFFF",
            model: "rgb",
            valpha: 1,
          },
        ],
        hex: "#FF0000",
        model: "rgb",
        valpha: 1,
      },
    ]);
  });

  it("should return some color combos from an object of colors", (): void => {
    expect(ColorCombos(mockColorObject)).toEqual([
      {
        color: [255, 255, 255],
        combinations: [
          {
            accessibility: {
              aa: false,
              aaLarge: true,
              aaa: false,
              aaaLarge: false,
            },
            color: [255, 0, 0],
            contrast: 3.9984767707539985,
            hex: "#FF0000",
            model: "rgb",
            valpha: 1,
          },
        ],
        hex: "#FFFFFF",
        model: "rgb",
        valpha: 1,
      },
      {
        color: [255, 0, 0],
        combinations: [
          {
            accessibility: { aa: false, aaLarge: true, aaa: false, aaaLarge: false },
            color: [255, 255, 255],
            contrast: 3.9984767707539985,
            hex: "#FFFFFF",
            model: "rgb",
            valpha: 1,
          },
        ],
        hex: "#FF0000",
        model: "rgb",
        valpha: 1,
      },
    ]);
  });

  it("should return return false if not passed an array or object", (): void => {
    // hide console errors from terminal when throwing expected errors
    const spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => {});
    // @ts-expect-error testing input validation
    expect(ColorCombos("#ddd")).toEqual(false);
    spy.mockRestore();
  });

  it("should return a compact combo when passed compact", (): void => {
    expect(ColorCombos(mockColorObject, { compact: true })).toEqual([
      {
        combinations: [
          {
            accessibility: { aa: false, aaLarge: true, aaa: false, aaaLarge: false },
            contrast: 3.9984767707539985,
            hex: "#FF0000",
          },
        ],
        hex: "#FFFFFF",
      },
      {
        combinations: [
          {
            accessibility: { aa: false, aaLarge: true, aaa: false, aaaLarge: false },
            contrast: 3.9984767707539985,
            hex: "#FFFFFF",
          },
        ],
        hex: "#FF0000",
      },
    ]);
  });

  it("should filter out dupes", (): void => {
    expect(ColorCombos(["white", "red", "white"], { compact: true })).toEqual([
      {
        combinations: [
          {
            accessibility: { aa: false, aaLarge: true, aaa: false, aaaLarge: false },
            contrast: 3.9984767707539985,
            hex: "#FF0000",
          },
        ],
        hex: "#FFFFFF",
      },
      {
        combinations: [
          {
            accessibility: { aa: false, aaLarge: true, aaa: false, aaaLarge: false },
            contrast: 3.9984767707539985,
            hex: "#FFFFFF",
          },
        ],
        hex: "#FF0000",
      },
    ]);
  });

  it("should not filter out dupes when passed uniq false", (): void => {
    expect(ColorCombos(["white", "red", "white"], { compact: true, uniq: false })).toEqual([
      {
        combinations: [
          {
            accessibility: { aa: false, aaLarge: true, aaa: false, aaaLarge: false },
            contrast: 3.9984767707539985,
            hex: "#FF0000",
          },
          {
            accessibility: { aa: false, aaLarge: false, aaa: false, aaaLarge: false },
            contrast: 1,
            hex: "#FFFFFF",
          },
        ],
        hex: "#FFFFFF",
      },
      {
        combinations: [
          {
            accessibility: { aa: false, aaLarge: true, aaa: false, aaaLarge: false },
            contrast: 3.9984767707539985,
            hex: "#FFFFFF",
          },
          {
            accessibility: { aa: false, aaLarge: true, aaa: false, aaaLarge: false },
            contrast: 3.9984767707539985,
            hex: "#FFFFFF",
          },
        ],
        hex: "#FF0000",
      },
      {
        combinations: [
          {
            accessibility: { aa: false, aaLarge: false, aaa: false, aaaLarge: false },
            contrast: 1,
            hex: "#FFFFFF",
          },
          {
            accessibility: { aa: false, aaLarge: true, aaa: false, aaaLarge: false },
            contrast: 3.9984767707539985,
            hex: "#FF0000",
          },
        ],
        hex: "#FFFFFF",
      },
    ]);
  });

  it("should only return combonations that meet a contrast threshold", (): void => {
    expect(ColorCombos(mockThresholdColors, { compact: true, threshold: 3.5 })).toEqual([
      {
        combinations: [
          {
            accessibility: { aa: true, aaLarge: true, aaa: false, aaaLarge: true },
            contrast: 4.658034537943552,
            hex: "#1276CE",
          },
        ],
        hex: "#FFFFFF",
      },
      {
        combinations: [
          {
            accessibility: { aa: true, aaLarge: true, aaa: false, aaaLarge: true },
            contrast: 4.658034537943552,
            hex: "#FFFFFF",
          },
        ],
        hex: "#1276CE",
      },
      { combinations: [], hex: "#A6A6A6" },
      { combinations: [], hex: "#12CE54" },
    ]);
  });

  it("should work with rgb values", (): void => {
    expect(ColorCombos(mockRGB, { compact: true })).toEqual([
      {
        combinations: [
          {
            accessibility: { aa: true, aaLarge: true, aaa: true, aaaLarge: true },
            contrast: 8.12991671155036,
            hex: "#0019FF",
          },
        ],
        hex: "#FFFFFF",
      },
      {
        combinations: [
          {
            accessibility: { aa: true, aaLarge: true, aaa: true, aaaLarge: true },
            contrast: 8.12991671155036,
            hex: "#FFFFFF",
          },
        ],
        hex: "#0019FF",
      },
    ]);
  });

  it("should work with rgba values", (): void => {
    expect(ColorCombos(mockRGBa, { compact: true })).toEqual([
      {
        combinations: [
          {
            accessibility: { aa: true, aaLarge: true, aaa: true, aaaLarge: true },
            contrast: 8.12991671155036,
            hex: "#0019FF",
          },
        ],
        hex: "#FFFFFF",
      },
      {
        combinations: [
          {
            accessibility: { aa: true, aaLarge: true, aaa: true, aaaLarge: true },
            contrast: 8.12991671155036,
            hex: "#FFFFFF",
          },
        ],
        hex: "#0019FF",
      },
    ]);
  });

  it("should work with hsl values", (): void => {
    expect(ColorCombos(mockHSL, { compact: true })).toEqual([
      {
        combinations: [
          {
            accessibility: { aa: true, aaLarge: true, aaa: false, aaaLarge: true },
            contrast: 4.739545310784024,
            hex: "#C2160A",
          },
        ],
        hex: "#8BF9A4",
      },
      {
        combinations: [
          {
            accessibility: { aa: true, aaLarge: true, aaa: false, aaaLarge: true },
            contrast: 4.739545310784024,
            hex: "#8BF9A4",
          },
        ],
        hex: "#C2160A",
      },
    ]);
  });
});
