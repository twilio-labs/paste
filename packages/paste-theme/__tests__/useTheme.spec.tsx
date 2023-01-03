import React from 'react';
import ReactDOM, {version} from 'react-dom';
import {render, act} from '@testing-library/react';

import {Theme, useTheme} from '../src';

const HookExampleComponent = (): React.ReactElement => {
  const theme = useTheme();
  return <p>{theme.textColors.colorText}</p>;
};

describe('useTheme', () => {
  describe('should render without crashing', (): void => {
    it('should render without crashing', (): void => {
      const useCreateRoot = parseInt(version.split('.')[0]) >= 18;
      if (useCreateRoot) {
        const ReactDOMClient = require('react-dom/client');
        const root = ReactDOMClient.createRoot(document.createElement('div') as HTMLElement);
        act(() =>
          root.render(
            <Theme.Provider theme="default">
              <HookExampleComponent />
            </Theme.Provider>
          )
        );
      } else {
        ReactDOM.render(
          <Theme.Provider theme="default">
            <HookExampleComponent />
          </Theme.Provider>,
          document.createElement('div')
        );
      }
    });
  });

  it('should be able to access the theme object', () => {
    const {getByText} = render(
      <Theme.Provider theme="default">
        <HookExampleComponent />
      </Theme.Provider>
    );

    expect(getByText('rgb(18, 28, 45)')).toBeDefined();
  });
});
