import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import {Theme} from '../src';

const ThemeConsumerExampleComponent = (): React.ReactElement => {
  return <Theme.Consumer>{({theme}) => <p>{theme.breakpoints.map(breakpoint => `${breakpoint},`)}</p>}</Theme.Consumer>;
};

const ThemeConsumerExampleTextColor = (): React.ReactElement => {
  return <Theme.Consumer>{({theme}) => <p>Color: {theme.textColors.colorTextLink}</p>}</Theme.Consumer>;
};

describe('Theme.Provider', () => {
  it('should render without crashing', (): void => {
    ReactDOM.render(<Theme.Provider />, document.createElement('div'));
  });

  it('should render the console link text color', (): void => {
    const wrapper = mount(
      <Theme.Provider>
        <ThemeConsumerExampleTextColor />
      </Theme.Provider>
    );
    expect(wrapper.find('p').text()).toBe('Color: #0075c3');
  });

  it('should render the sendgrid link text color', (): void => {
    const wrapper = mount(
      <Theme.Provider theme="sendgrid">
        <ThemeConsumerExampleTextColor />
      </Theme.Provider>
    );
    expect(wrapper.find('p').text()).toBe('Color: #003adb');
  });

  it('should rely on the default breakpoints set on the theme object', () => {
    const wrapper = mount(
      <Theme.Provider>
        <ThemeConsumerExampleComponent />
      </Theme.Provider>
    );
    expect(wrapper.find('p').text()).toBe('25rem,64rem,77rem,');
  });

  it('should set custom breakpoints when provided', () => {
    const customBreakpoints = ['30rem', '20rem', '90rem'];
    const wrapper = mount(
      <Theme.Provider customBreakpoints={customBreakpoints}>
        <ThemeConsumerExampleComponent />
      </Theme.Provider>
    );
    expect(wrapper.find('p').text()).toBe('30rem,20rem,90rem,');
  });
});
