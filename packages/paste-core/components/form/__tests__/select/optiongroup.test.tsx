import * as React from 'react';
import {render} from 'react-dom';
import {render as testRender, cleanup} from '@testing-library/react';
import {axe} from 'jest-axe';
import {OptionGroup, Option} from '../../src';

// @TODO move to util and allow for diff interfaces
interface AttributesMap {
    // class?: string;
    // 'data-testid'?: string;
    // id?: string;
    // 'aria-invalid'?: string;
}

export const createAttributeMap = (element: HTMLElement) : AttributesMap => {
    const attributesMap = {};
    const attributesNodeList: NamedNodeMap = element.attributes;
    for (let i = 0; i < attributesNodeList.length; i++) {
        const {name, value} = attributesNodeList[i];
        attributesMap[name] = value;
    }

    return attributesMap;
}

const MockOptionGroup = ({groupSuffix = 'test', ...props}) => {
    return (
        <>
        <OptionGroup data-testid={`optgroup-1-${groupSuffix}`} {...props} label="first-group">
            <Option value="option-1">Option 1</Option>
            <Option value="option-2">Option 2</Option>
        </OptionGroup>
        <OptionGroup data-testid={`optgroup-2-${groupSuffix}`} label="second-group">
            <Option value="option-3">Option 3</Option>
            <Option value="option-4">Option 4</Option>
        </OptionGroup>
        </>
    );
}

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

    expect(attributeMap.hasOwnProperty('data-attr')).toBe(true);
    expect(attributeMap.hasOwnProperty('title')).toBe(true);
    expect(attributeMap.hasOwnProperty('spellcheck')).toBe(true);
    expect(attributeMap.hasOwnProperty('hidden')).toBe(true);
    expect(attributeMap.hasOwnProperty('draggable')).toBe(true);
    expect(attributeMap.hasOwnProperty('accesskey')).toBe(true);
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