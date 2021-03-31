import * as React from 'react';
import {render, screen} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Paragraph} from '../src';

describe('General', () => {
  it('should render', (): void => {
    const textContent = `This is a paragraph`;
    const {getByText} = render(<Paragraph>{textContent}</Paragraph>);
    expect(getByText(textContent)).toBeDefined();
    expect(getByText(textContent).tagName).toEqual('P');
  });
  it('should allow for global html Attributes', (): void => {
    const textContent = `This is a paragraph`;
    render(
      <Paragraph aria-label="foo" data-testid="bar">
        {textContent}
      </Paragraph>
    );
    expect(screen.getByTestId('bar')).toBeDefined();
    expect(screen.getByLabelText('foo')).toBeDefined();
  });
});

describe('Accessibility', () => {
  it('Should have no accessibility violations', async () => {
    const {container} = render(<Paragraph>Hello world!</Paragraph>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
