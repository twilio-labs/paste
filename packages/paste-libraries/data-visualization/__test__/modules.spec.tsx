import { applyPasteHighchartsModules } from "../src";

type MockHighcarts = {
  modules: Set<string>;
};

let mockHighcarts: MockHighcarts;

const a11yModule = (highcharts: MockHighcarts): void => {
  highcharts.modules.add("accessibility");
};

const exportingModule = (highcharts: MockHighcarts): void => {
  highcharts.modules.add("exporting");
};

const sankeyModule = (highcharts: MockHighcarts): void => {
  highcharts.modules.add("sankeyModule");
};

describe("applyPasteHighchartsModules hook", () => {
  beforeEach(() => {
    mockHighcarts = {
      modules: new Set(),
    };
  });

  it("should fail when Highcarts is not present", () => {
    expect(applyPasteHighchartsModules).toThrow(
      "[applyPasteHighchartsModules]: Must provide highcharts into this function.",
    );
  });

  it("should apply modules", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    applyPasteHighchartsModules(mockHighcarts, a11yModule, exportingModule, sankeyModule);
    expect(mockHighcarts.modules).toEqual(new Set(["accessibility", "exporting", "sankeyModule"]));
  });
});
