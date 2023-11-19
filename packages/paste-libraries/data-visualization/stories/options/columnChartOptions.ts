// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck copied from official highcharts docs
import type Highcharts from "highcharts";

export const columnChartOptions: Highcharts.Options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Monthly Average Rainfall",
  },
  subtitle: {
    text: "Source: WorldClimate.com",
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Rainfall (mm)",
    },
  },
  series: [
    {
      name: "Tokyo",
      data: [49.9, 71.5, 106.4, 129.2, 144, 176, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    },
    {
      name: "New York",
      data: [83.6, 78.8, 98.5, 93.4, 106, 84.5, 105, 104.3, 91.2, 83.5, 106.6, 92.3],
    },
    {
      name: "London",
      data: [48.9, 38.8, 39.3, 41.4, 47.1, 48.3, 59.2, 59.6, 52.4, 65.2, 59.3, 51.2],
    },
    {
      name: "Berlin",
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
    },
  ],
};
