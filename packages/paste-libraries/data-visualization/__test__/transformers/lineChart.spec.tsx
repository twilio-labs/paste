import { renderHook } from "@testing-library/react";
import { Theme } from "@twilio-paste/theme";
import React from "react";

import { LineChartConfig, LineSeries } from "../../src";
import { handleLineOptions } from "../../src/transformers/lineChart";

const container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Theme.Provider theme="default">{children}</Theme.Provider>
);

const seriesData: LineSeries[] = [
  {
    name: "Installation",
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
  },
  {
    name: "Manufacturing",
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
  },
];

const options: LineChartConfig = {
  series: seriesData,
  type: "line",
};

describe("Line Chart Transformer", () => {
  it("should transform line chart data correctly", () => {
    const { result } = renderHook(() => handleLineOptions(options), { wrapper: container });

    expect(result.current.chart).toEqual(
      expect.objectContaining({
        type: "line",
      }),
    );

    expect(result.current.plotOptions).toEqual(
      expect.objectContaining({
        series: {
          stickyTracking: false,
        },
      }),
    );

    expect(result.current.series).toEqual(
      expect.arrayContaining([
        {
          name: "Installation",
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          type: "line",
        },
      ]),
    );
  });
});
