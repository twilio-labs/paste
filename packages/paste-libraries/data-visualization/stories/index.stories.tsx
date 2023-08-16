import * as React from 'react';
import type {StoryFn, Meta} from '@storybook/react';
import {Stack} from '@twilio-paste/stack';
/* eslint-disable import/no-extraneous-dependencies */
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import merge from 'deepmerge';
/* eslint-enable */

import {usePasteHighchartsTheme} from '../src';
import {lineChartOptions} from './options/lineChartOptions';
import {lineChartWithAnnotationsOptions} from './options/lineChartWithAnnotationsOptions';
import {columnChartOptions} from './options/columnChartOptions';
import {timeSeriesOptions} from './options/timeSeriesOptions';
import {basicAreaChartOptions} from './options/basicAreaChartOptions';
import {pieChartOptions} from './options/pieChartOptions';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Libraries/data-visualization',
  parameters: {
    // default diffThreshold is 0.063
    chromatic: {delay: 3000, diffThreshold: 0.2},
  },
} as Meta;

const disableAnimationOptions = {
  chart: {
    animation: false,
  },
  plotOptions: {
    series: {
      animation: false,
    },
  },
  drilldown: {
    animation: false,
  },
};

export const LineChart: StoryFn = () => {
  const disabledAnimationOptions = merge(lineChartOptions, disableAnimationOptions);
  const themedLineChartOptions = usePasteHighchartsTheme(disabledAnimationOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedLineChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={disabledAnimationOptions} />
    </Stack>
  );
};

export const LineChartWithAnnotations: StoryFn = () => {
  const disabledAnimationOptions = merge(lineChartWithAnnotationsOptions, disableAnimationOptions);
  const themedLineChartWithAnnotationsOptions = usePasteHighchartsTheme(disabledAnimationOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedLineChartWithAnnotationsOptions} />
      <HighchartsReact highcharts={Highcharts} options={disabledAnimationOptions} />
    </Stack>
  );
};

export const TimeSeries: StoryFn = () => {
  const disabledAnimationOptions = merge(timeSeriesOptions, disableAnimationOptions);
  const themedTimeSeriesChartOptions = usePasteHighchartsTheme(disabledAnimationOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedTimeSeriesChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={disabledAnimationOptions} />
    </Stack>
  );
};

export const ColumnChart: StoryFn = () => {
  const disabledAnimationOptions = merge(columnChartOptions, disableAnimationOptions);
  const themedColumnChartOptions = usePasteHighchartsTheme(disabledAnimationOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedColumnChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={disabledAnimationOptions} />
    </Stack>
  );
};

export const BasicAreaChart: StoryFn = () => {
  const disabledAnimationOptions = merge(basicAreaChartOptions, disableAnimationOptions);
  const themedBasicAreaChartOptions = usePasteHighchartsTheme(disabledAnimationOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedBasicAreaChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={disabledAnimationOptions} />
    </Stack>
  );
};

export const PieChart: StoryFn = () => {
  const disabledAnimationOptions = merge(pieChartOptions, disableAnimationOptions);
  const themedPieChartOptions = usePasteHighchartsTheme(disabledAnimationOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedPieChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={disabledAnimationOptions} />
    </Stack>
  );
};
