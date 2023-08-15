import * as React from 'react';
import type {StoryFn, Meta} from '@storybook/react';
import {Stack} from '@twilio-paste/stack';
/* eslint-disable import/no-extraneous-dependencies */
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
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

export const LineChart: StoryFn = () => {
  const themedLineChartOptions = usePasteHighchartsTheme(lineChartOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedLineChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={lineChartOptions} />
    </Stack>
  );
};

export const LineChartWithAnnotations: StoryFn = () => {
  const themedLineChartWithAnnotationsOptions = usePasteHighchartsTheme(lineChartWithAnnotationsOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedLineChartWithAnnotationsOptions} />
      <HighchartsReact highcharts={Highcharts} options={lineChartWithAnnotationsOptions} />
    </Stack>
  );
};

export const TimeSeries: StoryFn = () => {
  const themedTimeSeriesChartOptions = usePasteHighchartsTheme(timeSeriesOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedTimeSeriesChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={timeSeriesOptions} />
    </Stack>
  );
};

export const ColumnChart: StoryFn = () => {
  const themedColumnChartOptions = usePasteHighchartsTheme(columnChartOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedColumnChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={columnChartOptions} />
    </Stack>
  );
};

export const BasicAreaChart: StoryFn = () => {
  const themedBasicAreaChartOptions = usePasteHighchartsTheme(basicAreaChartOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedBasicAreaChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={basicAreaChartOptions} />
    </Stack>
  );
};

export const PieChart: StoryFn = () => {
  const themedPieChartOptions = usePasteHighchartsTheme(pieChartOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedPieChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
    </Stack>
  );
};
