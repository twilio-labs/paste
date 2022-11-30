import React from 'react';
import ReactDOM from 'react-dom/client';
import {render} from '@testing-library/react';

import type {ThemeShape} from '../src';
import {Theme, withTheme} from '../src';

const MockComponent = ({theme}: {theme: ThemeShape}): React.ReactElement => <p>{theme.textColors.colorText}</p>;
const MockComponentWithTheme = withTheme(MockComponent);

describe('withTheme', () => {
  it('should render without crashing', (): void => {
    const root = ReactDOM.createRoot(document.querySelector('div') as HTMLElement);
    root.render(
      <Theme.Provider theme="default">
        <MockComponentWithTheme />
      </Theme.Provider>
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
