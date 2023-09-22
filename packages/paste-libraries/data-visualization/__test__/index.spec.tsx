import * as React from 'react';
import { render } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';

import { usePasteHighchartsTheme } from '../src';
import { lineChartOptions } from '../stories/options/lineChartOptions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TestComponent: React.FC<React.PropsWithChildren<{ options?: { [key: string]: any } }>> = ({ options = {} }) => {
  const chartOptions = usePasteHighchartsTheme(options);
  return <span data-testid="test">{JSON.stringify(chartOptions)}</span>;
};

describe('usePasteHighChartsTheme hook', () => {
  it('throws an error when no arguments are passed', () => {
    expect(usePasteHighchartsTheme).toThrowError();
  });

  it('throws an error when not used within the Paste Theme.Provider', () => {
    expect(usePasteHighchartsTheme).toThrowError();
  });

  it('should return the theme options object when an empty object is passed', () => {
    const { getByTestId } = render(
      <Theme.Provider theme="default">
        <TestComponent />
      </Theme.Provider>,
    );
    const content = JSON.parse(getByTestId('test').innerHTML);
    expect(content).toMatchSnapshot();
  });

  it('should return a deepmerged options object when options are passed', () => {
    const { getByTestId } = render(
      <Theme.Provider theme="default">
        <TestComponent options={lineChartOptions} />
      </Theme.Provider>,
    );
    const content = JSON.parse(getByTestId('test').innerHTML);
    expect(content).toMatchSnapshot();
  });
});
