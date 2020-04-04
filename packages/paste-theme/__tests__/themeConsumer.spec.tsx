import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import {Theme} from '../src';

const ThemeConsumerExampleComponent = (): React.ReactElement => {
  return <Theme.Consumer>{({theme}) => <p>{theme.textColors.colorText}</p>}</Theme.Consumer>;
};

describe('Theme.Consumer', () => {
  it('should render without crashing', (): void => {
    ReactDOM.render(
      <Theme.Provider theme="console">
        <ThemeConsumerExampleComponent />
      </Theme.Provider>,
      document.createElement('div')
    );
  });

  it('should be able to access the theme object', () => {
    const wrapper = mount(
      <Theme.Provider theme="console">
        <ThemeConsumerExampleComponent />
      </Theme.Provider>
    );
    expect(wrapper.find('p').text()).toBe('rgb(40, 42, 43)');
  });
});
