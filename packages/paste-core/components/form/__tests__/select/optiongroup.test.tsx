import * as React from 'react';
import {render} from 'react-dom';
import {render as testRender, cleanup} from '@testing-library/react';
import {axe} from 'jest-axe';
import {OptionGroup, Option} from '../../src';
import {createAttributeMap} from '../../test-utils';

interface MockOptionGroupProps extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  groupSuffix?: string;
}

const MockOptionGroup: React.FC<MockOptionGroupProps> = ({groupSuffix = 'test', ...props}) => {
  return (
    <OptionGroup data-testid={`optgroup-1-${groupSuffix}`} {...props} label="first-group">
      <Option value="option-1">Option 1</Option>
      <Option value="option-2">Option 2</Option>
    </OptionGroup>
  );
};

describe('Form | OptionGroup', () => {
  afterEach(cleanup);

  it('should be able to take arbitrary html attributes on the container', () => {
    const additionalAttributes = {
      disabled: true,
      'data-attr': 'test-attribute',
      title: 'test-title',
      spellCheck: true,
      hidden: true,
      draggable: true,
      accessKey: 't e s t',
    };
    const {getByTestId} = testRender(<MockOptionGroup {...additionalAttributes} />);
    const attributeMap = createAttributeMap(getByTestId('optgroup-1-test'));

    expect(attributeMap['data-attr']).toEqual('test-attribute');
    expect(attributeMap.title).toEqual('test-title');
    expect(attributeMap.spellcheck).toEqual('true');
    expect(attributeMap.hidden).toEqual('');
    expect(attributeMap.draggable).toEqual('true');
    expect(attributeMap.accesskey).toEqual('t e s t');
    expect(attributeMap.disabled).toEqual('');
  });

  it('should filter blacklisted props via safelySpreadFormControlProps', () => {
    const blackListedPropsMap = {
      style: {},
      className: 'blacklisted',
      height: '1px',
      width: '2px',
      size: 2,
    };
    const {getByTestId} = testRender(<MockOptionGroup {...blackListedPropsMap} />);
    const attributeMap = createAttributeMap(getByTestId('optgroup-1-test'));

    expect(attributeMap.hasOwnProperty('style')).toBe(false);
    expect(attributeMap.hasOwnProperty('className')).toBe(false);
    expect(attributeMap.hasOwnProperty('height')).toBe(false);
    expect(attributeMap.hasOwnProperty('width')).toBe(false);
    expect(attributeMap.hasOwnProperty('size')).toBe(false);
    expect(attributeMap.class).not.toBe('blacklisted');
  });

  it('should have no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(<MockOptionGroup />, container);
    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });
});
