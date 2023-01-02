import React from 'react';
import ReactDOM from 'react-dom';
import {render, act} from '@testing-library/react';

import {Theme} from '../src';

const ThemeConsumerExampleComponent = (): React.ReactElement => {
  return <Theme.Consumer>{({theme}) => <p>{theme.textColors.colorText}</p>}</Theme.Consumer>;
};

describe('Theme.Consumer', () => {
  it('should render without crashing', (): void => {
    if (ReactDOM?.client) {
      const root = ReactDOM.createRoot(document.createElement('div') as HTMLElement);
      act(() =>
        root.render(
          <Theme.Provider theme="default">
            <ThemeConsumerExampleComponent />
          </Theme.Provider>
        )
      );
    } else {
      ReactDOM.render(
        <Theme.Provider theme="default">
          <ThemeConsumerExampleComponent />
        </Theme.Provider>,
        document.createElement('div')
      );
    }
  });

  it('should be able to access the theme object', () => {
    const {getByText} = render(
      <Theme.Provider theme="default">
        <ThemeConsumerExampleComponent />
      </Theme.Provider>
    );

    expect(getByText('rgb(18, 28, 45)')).toBeDefined();
  });
});
