import * as React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Theme} from '@twilio-paste/theme';
import {FormLabel} from '../src';

describe('FormLabel render', () => {
  it('it should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormLabel htmlFor="input">child</FormLabel>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with required', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <FormLabel htmlFor="input" required>
            child
          </FormLabel>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('FormLabel for prop', () => {
  const initialProps = {
    htmlFor: 'input',
  };

  const container = shallow(<FormLabel {...initialProps} />);

  it('should have a for prop on label', () => {
    expect(container.find('Box').prop('htmlFor')).toEqual('input');
  });
});

describe('FormLabel disabled prop', () => {
  const initialProps = {
    disabled: true,
    htmlFor: 'input',
  };

  const container = shallow(<FormLabel {...initialProps} />);

  it('should have colorTextWeak', () => {
    expect(container.find('Text').prop('color')).toEqual('colorTextWeak');
  });
});

describe('FormLabel required prop', () => {
  const initialProps = {
    htmlFor: 'input',
    required: true,
  };

  const container = shallow(<FormLabel {...initialProps} />);

  it('should have a required indicator', () => {
    expect(container.find('StyledRequiredDot').length).toEqual(1);
  });
});
