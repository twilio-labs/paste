import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import {Theme} from '../src';

const ThemeConsumerExampleComponent = (): React.ReactElement => {
  return <Theme.Consumer>{({theme}) => <p>{theme.textColors.colorText}</p>}</Theme.Consumer>;
};

describe('Theme.Consumer', () => {
  it('should render without crashing', (): void => {
    ReactDOM.render(
      <Theme.Provider theme="default">
        <ThemeConsumerExampleComponent />
      </Theme.Provider>,
      document.createElement('div')
    );
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
