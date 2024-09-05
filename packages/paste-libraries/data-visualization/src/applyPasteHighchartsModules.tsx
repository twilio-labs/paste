import Highcharts from "highcharts";

/**
 * A hook to apply any Highcharts modules iwth accessibility being mandatory.
 */
export const applyPasteHighchartsModules = (
  highcharts: typeof Highcharts,
  accessibilityModule: (highcharts: typeof Highcharts) => void,
  ...rest: Array<(highcharts: typeof Highcharts) => void>
): void => {
  if (highcharts === undefined) {
    throw new Error("[applyPasteHighchartsModules]: Must provide highcharts into this function.");
  }

  if (accessibilityModule === undefined) {
    throw new Error(
      '[applyPasteHighchartsModules]: Must provide accessibility module into this function. You can do this using `import HighchartsAccessibility Module from "highcharts/modules/accessibility"`',
    );
  }

  accessibilityModule(highcharts);
  rest.forEach((module) => module(highcharts));
};
