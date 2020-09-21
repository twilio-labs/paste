import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Theme} from '@twilio-paste/theme';
import {Label} from '../src';

describe('Label render', () => {
  it('it should render', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Label htmlFor="input">child</Label>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should render with required', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider theme="console">
          <Label htmlFor="input" required>
            child
          </Label>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Label for prop', () => {
  const initialProps = {
    htmlFor: 'input',
  };

  const container = shallow(<Label {...initialProps}>Label</Label>);

  it('should have a for prop on label', () => {
    expect(container.find('Box').prop('htmlFor')).toEqual('input');
  });
});

describe('Label required prop', () => {
  const initialProps = {
    htmlFor: 'input',
    required: true,
  };

  const container = shallow(<Label {...initialProps}>label</Label>);

  it('should have a required indicator', () => {
    expect(container.find('Styled(span)').length).toEqual(1);
  });
});
