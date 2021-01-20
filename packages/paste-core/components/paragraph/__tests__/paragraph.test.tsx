import * as React from 'react';
import {render as testRender} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Paragraph} from '../src';

describe('General', () => {
  it('should render', (): void => {
    const textContent = `This is a paragraph`;
    const {getByText} = testRender(<Paragraph>{textContent}</Paragraph>);
    expect(getByText(textContent)).toBeDefined();
  });
});

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const {container} = testRender(<Paragraph>Hello world!</Paragraph>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
