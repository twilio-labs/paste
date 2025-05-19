import { renderHook } from "@testing-library/react";
import { Theme } from "@twilio-paste/theme";
import React from "react";

import { ColumnChartConfig, ColumnSeries } from "../../src";
import { handleColumnOptions } from "../../src/transformers/columnChart";

const container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Theme.Provider theme="default">{children}</Theme.Provider>
);

const seriesData: ColumnSeries[] = [
  {
    name: "Apples",
    data: [3, 5, 1, 13],
  },
  {
    name: "Oranges",
    data: [14, 8, 8, 12],
  },
];

const options: ColumnChartConfig = {
  series: seriesData,
  type: "column",
};

describe("Column Chart Transformer", () => {
  it("should transform column chart data correctly with only required props", () => {
    const { result } = renderHook(() => handleColumnOptions(options), { wrapper: container });

    expect(result.current.plotOptions?.column).toEqual(
      expect.objectContaining({
        stacking: undefined,
        dataLabels: {
          enabled: undefined,
        },
      }),
    );

    expect(result.current.chart).toEqual(
      expect.objectContaining({
        type: "column",
      }),
    );

    expect(result.current.xAxis).toEqual(
      expect.objectContaining({
        categories: undefined,
      }),
    );

    expect(result.current.yAxis).toEqual(
      expect.objectContaining({
        stackLabels: {
          enabled: undefined,
        },
      }),
    );

    expect(result.current.series).toEqual(
      expect.arrayContaining([
        {
          name: "Apples",
          data: [3, 5, 1, 13],
          type: "column",
        },
      ]),
    );
  });

  it("should transform column chart data correctly with optional props", () => {
    const xAxisCategories = ["2020", "2021", "2022", "2023"];
    const { result } = renderHook(
      () =>
        handleColumnOptions({
          ...options,
          xAxisCategories,
          stackingType: "normal",
          showDataLabels: true,
        }),
      { wrapper: container },
    );

    expect(result.current.plotOptions?.column).toEqual(
      expect.objectContaining({
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      }),
    );

    expect(result.current.xAxis).toEqual(
      expect.objectContaining({
        categories: xAxisCategories,
      }),
    );

    expect(result.current.yAxis).toEqual(
      expect.objectContaining({
        stackLabels: {
          enabled: true,
        },
      }),
    );
  });
});
