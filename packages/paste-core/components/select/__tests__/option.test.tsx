import * as React from 'react';
import {render} from 'react-dom';
import {render as testRender} from '@testing-library/react';
import {axe} from 'jest-axe';
import {Option} from '../src';
import {createAttributeMap} from '../test-utils';

interface MockOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  suffix?: string;
  value?: string;
}

const MockOption: React.FC<MockOptionProps> = ({suffix = 'test', ...props}): React.ReactElement => {
  return (
    <Option data-testid={`option-${suffix}`} value={'option-1'} {...props}>
      Option 1
    </Option>
  );
};

describe('Form | Option', () => {
  it('should be able to take arbitrary html attributes on the container', () => {
    const additionalAttributes = {
      disabled: true,
      label: 'option-1-label',
      selected: true,
      'data-attr': 'test-attribute',
      title: 'test-title',
      spellCheck: true,
      hidden: true,
      draggable: true,
      accessKey: 't e s t',
    };
    const {getByTestId} = testRender(<MockOption {...additionalAttributes} />);
    const attributeMap = createAttributeMap(getByTestId('option-test'));

    expect(attributeMap['data-attr']).toEqual('test-attribute');
    expect(attributeMap.title).toEqual('test-title');
    expect(attributeMap.spellcheck).toEqual('true');
    expect(attributeMap.hidden).toEqual('');
    expect(attributeMap.draggable).toEqual('true');
    expect(attributeMap.accesskey).toEqual('t e s t');
    expect(attributeMap.disabled).toEqual('');
    expect(attributeMap.label).toEqual('option-1-label');
  });

  it('should filter blocklist props', () => {
    const blockListedPropsMap = {
      style: {},
      className: 'blocklisted',
      height: '1px',
      width: '2px',
      size: 2,
      selected: true,
    };
    const {getByTestId} = testRender(<MockOption {...blockListedPropsMap} />);
    const attributeMap = createAttributeMap(getByTestId('option-test'));

    expect(attributeMap.hasOwnProperty('style')).toBe(false);
    expect(attributeMap.hasOwnProperty('className')).toBe(false);
    expect(attributeMap.hasOwnProperty('height')).toBe(false);
    expect(attributeMap.hasOwnProperty('width')).toBe(false);
    expect(attributeMap.hasOwnProperty('size')).toBe(false);
    expect(attributeMap.hasOwnProperty('selected')).toBe(false);
    expect(attributeMap.class).not.toBe('blocklisted');
  });

  it('should have no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(<MockOption />, container);
    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });
});
