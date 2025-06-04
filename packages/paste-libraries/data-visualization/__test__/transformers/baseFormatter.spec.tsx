import { renderHook } from "@testing-library/react";
import { Theme } from "@twilio-paste/theme";
import React from "react";

import { LineChartConfig, LineSeries } from "../../src";
import { handleBaseChartOptionsFormatting } from "../../src/transformers/baseFormatter";

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
  title: {
    text: "Solar Employment Growth by Sector, 2010-2016",
  },
  subtitle: {
    text: "Source: thesolarfoundation.com",
  },
  xAxisTitle: {
    text: "X Axis Title",
  },
  yAxisTitle: {
    text: "Y Axis Title",
  },
};

const mockFormatter = jest.fn();

describe("Base Transformer", () => {
  it("should show title and sub title if not hidden", () => {
    const { result } = renderHook(() => handleBaseChartOptionsFormatting(options), { wrapper: container });

    expect(result.current.title).toEqual(
      expect.objectContaining({
        text: options.title?.text,
        style: {
          display: "block",
        },
      }),
    );
    expect(result.current.subtitle).toEqual(
      expect.objectContaining({
        text: options.subtitle?.text,
        style: {
          display: "block",
        },
      }),
    );
  });

  it("should hide title and sub title if not hidden", () => {
    const { result } = renderHook(
      () =>
        handleBaseChartOptionsFormatting({
          ...options,
          title: { ...options.title, hide: true },
          subtitle: { ...options.subtitle, hide: true },
        }),
      { wrapper: container },
    );

    expect(result.current.title).toEqual(
      expect.objectContaining({
        text: options.title?.text,
        style: {
          display: "none",
        },
      }),
    );
    expect(result.current.subtitle).toEqual(
      expect.objectContaining({
        text: options.subtitle?.text,
        style: {
          display: "none",
        },
      }),
    );
  });

  it("should show axis titles if set", () => {
    const { result } = renderHook(() => handleBaseChartOptionsFormatting(options), { wrapper: container });

    expect(result.current.xAxis).toEqual(
      expect.objectContaining({
        type: undefined,
        title: {
          text: options.xAxisTitle?.text,
          style: {
            display: "block",
          },
        },
      }),
    );

    expect(result.current.yAxis).toEqual(
      expect.objectContaining({
        title: {
          text: options.yAxisTitle?.text,
          style: {
            display: "block",
          },
        },
      }),
    );
  });

  it("should set xAxis type to datetime if isXTimeAxis is true", () => {
    const { result } = renderHook(
      () =>
        handleBaseChartOptionsFormatting({
          ...options,
          isXTimeAxis: true,
        }),
      { wrapper: container },
    );

    expect(result.current.xAxis).toEqual(
      expect.objectContaining({
        type: "datetime",
      }),
    );
  });

  it("should show legend by default", () => {
    const { result } = renderHook(() => handleBaseChartOptionsFormatting(options), { wrapper: container });

    expect(result.current.legend).toEqual(
      expect.objectContaining({
        enabled: true,
      }),
    );
  });

  it("should hide legend if showLegend is false", () => {
    const { result } = renderHook(
      () =>
        handleBaseChartOptionsFormatting({
          ...options,
          showLegend: false,
        }),
      { wrapper: container },
    );

    expect(result.current.legend).toEqual(
      expect.objectContaining({
        enabled: false,
      }),
    );
  });

  it("should hide credits by default", () => {
    const { result } = renderHook(() => handleBaseChartOptionsFormatting(options), { wrapper: container });

    expect(result.current.credits).toEqual(
      expect.objectContaining({
        enabled: false,
      }),
    );
  });

  it("should show credits if enableCredits is true", () => {
    const { result } = renderHook(
      () =>
        handleBaseChartOptionsFormatting({
          ...options,
          enableCredits: true,
        }),
      { wrapper: container },
    );

    expect(result.current.credits).toEqual(
      expect.objectContaining({
        enabled: true,
      }),
    );
  });

  it("should not override point formats if not set", () => {
    const { result } = renderHook(() => handleBaseChartOptionsFormatting(options), { wrapper: container });

    expect(result.current.tooltip?.pointFormatter).toBeUndefined();
  });

  it("should override point formats if set", () => {
    const { result } = renderHook(
      () =>
        handleBaseChartOptionsFormatting({
          ...options,
          pointFormatter: mockFormatter,
        }),
      { wrapper: container },
    );

    expect(result.current.tooltip?.pointFormatter).toBeTruthy();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore complains point isn't correct format but not needed in this instance
    result.current.tooltip?.pointFormatter?.call({ x: 50 });
    expect(mockFormatter).toHaveBeenCalled();
    expect(mockFormatter).toHaveBeenCalledWith({ x: 50 });
  });

  it("should set chart type correctly", () => {
    const { result } = renderHook(() => handleBaseChartOptionsFormatting(options), { wrapper: container });

    expect(result.current.chart).toEqual(
      expect.objectContaining({
        type: "line",
      }),
    );
  });

  it("should not set Zooming type if not set", () => {
    const { result } = renderHook(() => handleBaseChartOptionsFormatting(options), { wrapper: container });

    expect(result.current.chart).toEqual(
      expect.objectContaining({
        zoomType: undefined,
      }),
    );
  });

  it("should set zoomingType correctly", () => {
    const { result } = renderHook(
      () =>
        handleBaseChartOptionsFormatting({
          ...options,
          zoomingType: "x",
        }),
      { wrapper: container },
    );

    expect(result.current.chart).toEqual(
      expect.objectContaining({
        zoomType: "x",
      }),
    );
  });

  it("should not set panning if not set", () => {
    const { result } = renderHook(() => handleBaseChartOptionsFormatting(options), { wrapper: container });

    expect(result.current.chart?.panning).toEqual(
      expect.objectContaining({
        enabled: false,
        type: undefined,
      }),
    );
  });

  it("should set panning correctly", () => {
    const { result } = renderHook(
      () =>
        handleBaseChartOptionsFormatting({
          ...options,
          panningType: "x",
        }),
      { wrapper: container },
    );

    expect(result.current.chart?.panning).toEqual(
      expect.objectContaining({
        enabled: true,
        type: "x",
      }),
    );
  });
});
