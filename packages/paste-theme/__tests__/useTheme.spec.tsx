import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import {Theme, useTheme} from '../src';

const HookExampleComponent = (): React.ReactElement => {
  const theme = useTheme();
  return <p>{theme.textColors.colorText}</p>;
};

describe('useTheme', () => {
  it('should render without crashing', (): void => {
    ReactDOM.render(
      <Theme.Provider theme="console">
        <HookExampleComponent />
      </Theme.Provider>,
      document.createElement('div')
    );
  });

  it('should be able to access the theme object', () => {
    const wrapper = mount(
      <Theme.Provider theme="console">
        <HookExampleComponent />
      </Theme.Provider>
    );
    expect(wrapper.find('p').text()).toBe('#282a2b');
  });
});
