import * as React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Theme} from '@twilio-paste/theme';
import {FormHelpText} from '../src';

describe('FormHelpText render', () => {
  it('it should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormHelpText>child</FormHelpText>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with an error icon', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormHelpText variant="error">child</FormHelpText>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('FormHelpText variant prop', () => {
  const initialProps = {
    variant: 'error',
  };

  const container = shallow(<FormHelpText {...initialProps} />);

  it('should have an error icon', () => {
    expect(container.find('ErrorIcon').length).toEqual(1);
  });

  it('should have colorTextError', () => {
    expect(container.find('Text').prop('color')).toEqual('colorTextError');
  });
});

describe('FormHelpText marginTop prop', () => {
  const initialProps = {
    marginTop: 'space0',
  };

  const container = shallow(<FormHelpText {...initialProps} />);

  it('should have marginTop: space0', () => {
    expect(container.find('Flex').prop('marginTop')).toEqual('space0');
  });
});
