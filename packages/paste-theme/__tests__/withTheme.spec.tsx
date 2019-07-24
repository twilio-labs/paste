import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {Theme, withTheme} from '../src';

const MockComponent = ({theme}: {theme: ThemeShape}): React.ReactElement => <p>{theme.textColors.colorText}</p>;
const MockComponentWithTheme = withTheme(MockComponent);

describe('withTheme', () => {
  it('should render without crashing', (): void => {
    ReactDOM.render(
      <Theme.Provider>
        <MockComponentWithTheme />
      </Theme.Provider>,
      document.createElement('div')
    );
  });

  it('should be able to access the theme object', () => {
    const wrapper = mount(
      <Theme.Provider>
        <MockComponentWithTheme />
      </Theme.Provider>
    );
    expect(wrapper.find('p').text()).toBe('#282a2b');
  });
});
