import * as React from 'react';
import {render} from 'react-dom';
import {render as testRender, cleanup} from '@testing-library/react';
import {axe} from 'jest-axe';
import {Option} from '../../src';

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

const MockOption = ({suffix = 'test', ...props}) => {
    return (
         <Option
            data-testid={`option-${suffix}`}
            value="option-1"
            {...props}
        >
            Option 1
        </Option>
    );
}


describe('Form | Option', () => {
  afterEach(cleanup);

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
  
      expect(attributeMap.hasOwnProperty('data-attr')).toBe(true);
      expect(attributeMap.hasOwnProperty('title')).toBe(true);
      expect(attributeMap.hasOwnProperty('spellcheck')).toBe(true);
      expect(attributeMap.hasOwnProperty('hidden')).toBe(true);
      expect(attributeMap.hasOwnProperty('draggable')).toBe(true);
      expect(attributeMap.hasOwnProperty('accesskey')).toBe(true);
      expect(attributeMap.hasOwnProperty('disabled')).toBe(true);
      expect(attributeMap.hasOwnProperty('label')).toBe(true);
  });

  it('should filter blacklisted props via safelySpreadFormControlProps', () => {
    const blackListedPropsMap = {
        style: {},
        className: 'blacklisted',
        height: '1px',
        width: '2px',
        size: 2,
      };
      const {getByTestId} = testRender(<MockOption {...blackListedPropsMap} />);
      const attributeMap = createAttributeMap(getByTestId('option-test'));
  
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
    render(<MockOption />, container);
    const results = await axe(document.body);

    expect(results).toHaveNoViolations();
  });
});
