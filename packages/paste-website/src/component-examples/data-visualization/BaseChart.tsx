import { Box } from "@twilio-paste/box";
import { ChartContext } from "@twilio-paste/chart-provider";
import { applyPasteHighchartsModules, usePasteHighchartsTheme } from "@twilio-paste/data-visualization-library";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsAccessibilityModule from "highcharts/modules/accessibility";
import * as React from "react";

const Chart: React.FC = () => {
  applyPasteHighchartsModules(Highcharts, HighchartsAccessibilityModule);
  const chartRef = React.useRef<HTMLElement | null>(null);
  const { options, setChart, setChartRef } = React.useContext(ChartContext);
  const pasteThemedOptions = usePasteHighchartsTheme(options);
  const [chartOptions, setChartOptions] = React.useState<Highcharts.Options>(
    Highcharts.merge(pasteThemedOptions, {
      // only affects our docs live examples. Want to optimize and show licensing info
      plotOptions: { series: { animation: false } },
      credits: { ...pasteThemedOptions.credits, enabled: true },
    }),
  );

  React.useLayoutEffect(() => {
    setChartOptions(
      Highcharts.merge(chartOptions, options, {
        // only affects our docs live examples. Want to optimize and show licensing info
        plotOptions: { series: { animation: false } },
        credits: { ...pasteThemedOptions.credits, enabled: true },
      }),
    );
  }, [options]);

  React.useEffect(() => {
    if (chartRef.current) {
      setChartRef(chartRef.current);
    }
  }, [chartRef.current]);

  const callback = (chart: Highcharts.Chart): void => {
    if (chart?.series?.length > 0) {
      setChart(chart);
    }
  };

  return (
    <Box gridArea="base-chart" ref={chartRef} position="relative">
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        constructorType={chartOptions.chart?.map ? "mapChart" : undefined}
        updateArgs={[true, true, false]}
        callback={callback}
      />
    </Box>
  );
};

export const ExamplesDataVizBaseChart = React.memo(Chart);
