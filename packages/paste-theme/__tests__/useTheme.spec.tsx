import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import {Theme, useTheme} from '../src';

const HookExampleComponent = (): React.ReactElement => {
  const theme = useTheme();
  return <p>{theme.textColors.colorText}</p>;
};

describe('useTheme', () => {
  it('should render without crashing', (): void => {
    ReactDOM.render(
      <Theme.Provider theme="default">
        <HookExampleComponent />
      </Theme.Provider>,
      document.createElement('div')
    );
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
