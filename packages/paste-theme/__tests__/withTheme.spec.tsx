import React from 'react';
import ReactDOM, {version} from 'react-dom';
import {render, act} from '@testing-library/react';

import type {ThemeShape} from '../src';
import {Theme, withTheme} from '../src';

const MockComponent = ({theme}: {theme: ThemeShape}): React.ReactElement => <p>{theme.textColors.colorText}</p>;
const MockComponentWithTheme = withTheme(MockComponent);

describe('withTheme', () => {
  it('should render without crashing', (): void => {
    const useCreateRoot = parseInt(version.split('.')[0]) >= 18;
    if (useCreateRoot) {
      const ReactDOMClient = require('react-dom/client');
      const root = ReactDOMClient.createRoot(document.createElement('div') as HTMLElement);
      act(() =>
        root.render(
          <Theme.Provider theme="default">
            <MockComponentWithTheme />
          </Theme.Provider>
        )
      );
    } else {
      ReactDOM.render(
        <Theme.Provider theme="default">
          <MockComponentWithTheme />
        </Theme.Provider>,
        document.createElement('div')
      );
    }
  });

  it('should be able to access the theme object', () => {
    const {getByText} = render(
      <Theme.Provider theme="default">
        <MockComponentWithTheme />
      </Theme.Provider>
    );

    expect(getByText('rgb(18, 28, 45)')).toBeDefined();
  });
});
