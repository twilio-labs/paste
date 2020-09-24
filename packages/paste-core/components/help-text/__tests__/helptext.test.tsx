import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Theme} from '@twilio-paste/theme';
import {HelpText} from '../src';

describe('HelpText render', () => {
  it('it should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <HelpText>child</HelpText>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with an error icon', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <HelpText variant="error">child</HelpText>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('HelpText variant prop', () => {
  const container = shallow(<HelpText variant="error" />);

  it('should have an error icon', () => {
    expect(container.find('ErrorIcon').length).toEqual(1);
  });

  it('should have colorTextError', () => {
    expect(container.find('Text').prop('color')).toEqual('colorTextError');
  });
});

describe('HelpText marginTop prop', () => {
  const container = shallow(<HelpText marginTop="space0" />);

  it('should have marginTop: space0', () => {
    expect(container.find('Flex').prop('marginTop')).toEqual('space0');
  });
});
