import * as React from 'react';
import {shallow} from 'enzyme';
import {HelpText} from '../src';

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
