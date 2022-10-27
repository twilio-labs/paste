import React from 'react';
import ReactDOM from 'react-dom/client';
import {render} from '@testing-library/react';

import {Theme, useTheme} from '../src';

const HookExampleComponent = (): React.ReactElement => {
  const theme = useTheme();
  return <p>{theme.textColors.colorText}</p>;
};

describe('useTheme', () => {
  it('should render without crashing', (): void => {
    const root = ReactDOM.createRoot(document.querySelector('div') as HTMLElement);
    root.render(
      <Theme.Provider theme="default">
        <HookExampleComponent />
      </Theme.Provider>
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
