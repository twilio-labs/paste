import React from 'react';
import ReactDOM from 'react-dom/client';
import {render} from '@testing-library/react';

import {Theme} from '../src';

const ThemeConsumerExampleComponent = (): React.ReactElement => {
  return <Theme.Consumer>{({theme}) => <p>{theme.textColors.colorText}</p>}</Theme.Consumer>;
};

describe('Theme.Consumer', () => {
  it('should render without crashing', (): void => {
    const root = ReactDOM.createRoot(document.querySelector('div') as HTMLElement);
    root.render(
      <Theme.Provider theme="default">
        <ThemeConsumerExampleComponent />
      </Theme.Provider>
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
