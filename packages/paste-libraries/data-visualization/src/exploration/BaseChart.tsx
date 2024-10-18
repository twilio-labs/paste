import { Box } from "@twilio-paste/box";
import Highcharts, { Chart, Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsAccessibilityModule from "highcharts/modules/accessibility";
import React, { FC, memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import { applyPasteHighchartsModules } from "../applyPasteHighchartsModules";
import { usePasteHighchartsTheme } from "../usePasteHighchartsTheme";
import { useChartContext } from "./ChartContext";

export const TextBox = () => {
  return <Box backgroundColor="colorBackgroundAvailable">Text</Box>;
};

const useTooltipTracking = (options: Highcharts.Options): Highcharts.Options => {
  const context = useChartContext();

  const series = options.series?.map((s) => {
    return {
      ...s,
      point: {
        ...s.point,
        events: {
          mouseOver: function (this) {
            context.setActivePoint(this);
          },
          mouseOut: function (this) {
            // context.setActivePoint(null);
          },
          click: function (this) {
            const actions = document.getElementById("tooltip-actions");
            if (actions) {
                context.chart?.tooltip.hide();
                this.select(false,true);
                this.graphic.element.blur()
                actions.focus();
            }
          },
        },
      },
    };
  });

  return {
    ...options,
    series,
  };
};

const Chart: FC<{
  options: Options;
}> = ({ options }) => {
  applyPasteHighchartsModules(Highcharts, HighchartsAccessibilityModule);

  const [chartOptions, setChartOptions] = useState<Options>(usePasteHighchartsTheme(useTooltipTracking(options)));
  const chartContext = useChartContext();
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    setChartOptions(options);
  }, [options]);

  // if setting the chart too early before data loaded, events throughout charting run into issues
  const waitForSeriesToBeLoaded = (chart: Highcharts.Chart) => {
    if (chart.series?.length === 0) {
      setTimeout(() => waitForSeriesToBeLoaded(chart), 100);
    } else {
      chartContext.setChart(chart);
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      // @ts-ignore
      waitForSeriesToBeLoaded(chartRef.current.chart, chartContext.setChart);
    }
  }, [chartRef.current]);

  const callback = (chart: Chart) => {
    // This works with loaded series
    console.log("chart callback", chart?.series?.length);
  };

  return (
    <Box width="100%" id="example-chart-container" padding="space100" data-testid="highcharts-container">
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        containerProps={{ style: { width: "100%", overflow: "visible" } }}
        ref={chartRef}
        constructorType={chartOptions.chart?.map ? "mapChart" : undefined}
        updateArgs={[true, true, false]}
        callback={callback}
      />
    </Box>
  );
};

export const BaseChart = memo(Chart);
