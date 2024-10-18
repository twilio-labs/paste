import { Chart, OptionsStackingValue, Point } from "highcharts";
import React, { useEffect, useState } from "react";

export interface ChartContextProps {
  chartId?: string;
  legendTextFormatter?: (name: string) => string;
  disableLegends?: boolean;
  isLight?: boolean;
  hideLegends?: boolean;
  columnStackingType?: OptionsStackingValue;
  children?: React.ReactNode;
}

interface ChartProviderProps extends ChartContextProps {
  chart?: Chart;
  activePoint: Point | null;
  setActivePoint(p: Point | null): void;
  setChart(chart: Chart): void;
}

export const ChartContext = React.createContext<ChartProviderProps>({
  activePoint: null,
  setActivePoint: () => {},
  setChart: () => {},
});

export const useChartContext = () => React.useContext(ChartContext);

export const ChartContextProvider: React.FC<ChartContextProps> = ({
  children,
  chartId,
  legendTextFormatter,
  disableLegends = false,
  hideLegends = false,
}) => {
  const [activePoint, setActivePoint] = useState<Point | null>(null);
  const [chart, setChart] = useState<Chart>();

  useEffect(() => {
  }, [activePoint]);

  return (
    <ChartContext.Provider
      value={{
        chart,
        setChart,
        activePoint,
        setActivePoint,
        chartId,
        legendTextFormatter,
        disableLegends,
        hideLegends,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
};
