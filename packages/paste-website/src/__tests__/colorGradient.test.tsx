import { filterAliasNames, getAliasValuesFromPrefix, sortAliasNames } from "../components/color-swatch/ColorGradient";

const sampleAliases = ["palette-gray-80", "palette-gray-100", "palette-gray-20", "palette-gray-60"];
const sortedAliases = ["palette-gray-100", "palette-gray-80", "palette-gray-60", "palette-gray-20"];
const aliasValues = [
  "#121c2d",
  "#1f304c",
  "#394762",
  "#4b5671",
  "#606b85",
  "#8891aa",
  "#aeb2c1",
  "#cacdd8",
  "#e1e3ea",
  "#f4f4f6",
];

describe("sortAliasNames", () => {
  it("should sort alias names from largest to smallest number", () => {
    expect(sortAliasNames(sampleAliases)).toEqual(sortedAliases);
  });
});

describe("filterAliasNames", () => {
  it("should filter out excluded aliases", () => {
    expect(filterAliasNames("palette-orange-65", "palette-orange")).toBeFalsy();
    expect(filterAliasNames("palette-gray-0", "palette-gray")).toBeFalsy();
  });

  it("should include alias with the prefix", () => {
    expect(filterAliasNames("palette-orange-60", "palette-orange")).toBeTruthy();
  });

  it("should filter out aliases without the prefix", () => {
    expect(filterAliasNames("space-0", "palette-orange")).toBeFalsy();
    expect(filterAliasNames("palette-gray-0", "palette-orange")).toBeFalsy();
  });
});

describe("getAliasValuesFromPrefix", () => {
  it("should get 10 alias values from a prefix", () => {
    expect(getAliasValuesFromPrefix("palette-gray", "default")).toEqual(aliasValues);
  });
});
