import * as React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Theme} from '@twilio-paste/theme';
import {FormHelperText} from '../src';

describe('FormHelperText render', () => {
  it('it should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormHelperText>child</FormHelperText>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with an error icon', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormHelperText variant="error">child</FormHelperText>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('FormHelperText variant prop', () => {
  const initialProps = {
    variant: 'error',
  };

  const container = shallow(<FormHelperText {...initialProps} />);

  it('should have an error icon', () => {
    expect(container.find('ErrorIcon').length).toEqual(1);
  });

  it('should have colorTextError', () => {
    expect(container.find('Text').prop('textColor')).toEqual('colorTextError');
  });
});

describe('FormHelperText marginTop prop', () => {
  const initialProps = {
    marginTop: 'space0',
  };

  const container = shallow(<FormHelperText {...initialProps} />);

  it('should have marginTop: space0', () => {
    expect(container.find('Flex').prop('marginTop')).toEqual('space0');
  });
});
