import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import {Theme, withTheme, ThemeShape} from '../src';

const MockComponent = ({theme}: {theme: ThemeShape}): React.ReactElement => <p>{theme.textColors.colorText}</p>;
const MockComponentWithTheme = withTheme(MockComponent);

describe('withTheme', () => {
  it('should render without crashing', (): void => {
    ReactDOM.render(
      <Theme.Provider theme="default">
        <MockComponentWithTheme />
      </Theme.Provider>,
      document.createElement('div')
    );
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
