import React from 'react';
import ReactDOM from 'react-dom/client';
import {render} from '@testing-library/react';

import {Theme} from '../src';

const ThemeConsumerExampleComponent = (): React.ReactElement => {
  return (
    <Theme.Consumer>
      {({theme}) => <p>{theme.breakpoints.map((breakpoint: string) => `${breakpoint},`)}</p>}
    </Theme.Consumer>
  );
};

const ThemeConsumerExampleTextColor = (): React.ReactElement => {
  return <Theme.Consumer>{({theme}) => <p>Color: {theme.textColors.colorTextLink}</p>}</Theme.Consumer>;
};

describe('Theme.Provider', () => {
  it('should render without crashing', (): void => {
    const root = ReactDOM.createRoot(document.querySelector('div') as HTMLElement);
    root.render(<Theme.Provider />);
  });

  it('should render the sendgrid link text color', (): void => {
    const {getByText} = render(
      <Theme.Provider theme="sendgrid">
        <ThemeConsumerExampleTextColor />
      </Theme.Provider>
    );

    expect(getByText('Color: rgb(2, 99, 224)')).toBeDefined();
  });

  it('should rely on the default breakpoints set on the theme object', () => {
    const {getByText} = render(
      <Theme.Provider theme="default">
        <ThemeConsumerExampleComponent />
      </Theme.Provider>
    );

    expect(getByText('25rem,64rem,77rem,')).toBeDefined();
  });

  it('should set custom breakpoints when provided', () => {
    const customBreakpoints = ['30rem', '20rem', '90rem'];

    const {getByText} = render(
      <Theme.Provider customBreakpoints={customBreakpoints}>
        <ThemeConsumerExampleComponent />
      </Theme.Provider>
    );

    expect(getByText('30rem,20rem,90rem,')).toBeDefined();
  });
});
