import { Box } from "@twilio-paste/box";
import { ChartContext } from "@twilio-paste/chart-provider";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsAccessibilityModule from "highcharts/modules/accessibility";
import * as React from "react";

import { applyPasteHighchartsModules, usePasteHighchartsTheme } from "../../src";

const Chart: React.FC = () => {
  applyPasteHighchartsModules(Highcharts, HighchartsAccessibilityModule);
  const chartRef = React.useRef<HTMLElement | null>(null);
  const { options, setChart, setChartRef } = React.useContext(ChartContext);
  const [chartOptions, setChartOptions] = React.useState<Highcharts.Options>(
    // disabling animation for stories only. Not included in our docs exmaples
    usePasteHighchartsTheme({ ...options, plotOptions: { series: { animation: false } } }),
  );

  React.useLayoutEffect(() => {
    setChartOptions(Highcharts.merge(chartOptions, options));
  }, [options]);

  React.useEffect(() => {
    if (chartRef.current) {
      setChartRef(chartRef.current);
    }
  }, [chartRef.current]);

  const callback = (chart: Highcharts.Chart) => {
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

export const BaseChart = React.memo(Chart);
