import * as React from 'react';
import {axe} from 'jest-axe';
import {matchers} from 'jest-emotion';
import {render, screen} from '@testing-library/react';
import {Breadcrumb, BreadcrumbItem} from '../src';

expect.extend(matchers);

describe('Breadcrumb', () => {
  const BreadcrumbExample: React.FC<{}> = () => {
    return (
      <Breadcrumb>
        <BreadcrumbItem href="#">foo</BreadcrumbItem>
        <BreadcrumbItem>bar</BreadcrumbItem>
      </Breadcrumb>
    );
  };

  it('it should render a nav with correct aria-label', () => {
    const {getByRole} = render(<BreadcrumbExample />);
    expect(getByRole('navigation').getAttribute('aria-label')).toBe('breadcrumb');
  });

  it('it should render a list with display: inline-flex', () => {
    render(<BreadcrumbExample />);
    const renderedList = screen.getByRole('list');
    expect(renderedList).toHaveStyleRule('display', 'inline-flex');
  });

  it('it should render listitems', () => {
    render(<BreadcrumbExample />);
    const renderedListItem = screen.findByRole('listitem');
    expect(renderedListItem).not.toBeNull();
  });

  it('it should render a breadcrumb separator', () => {
    render(<BreadcrumbExample />);
    const renderedSeparator = screen.getByText('/');
    expect(renderedSeparator).toBeDefined();
  });

  it('it should render an anchor', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="#">foo</BreadcrumbItem>
      </Breadcrumb>
    );
    const renderedAnchor = screen.findByRole('link');
    expect(renderedAnchor).not.toBeNull();
  });

  it('it should render text with correct aria-current', () => {
    const {getByText} = render(
      <Breadcrumb>
        <BreadcrumbItem>foo</BreadcrumbItem>
      </Breadcrumb>
    );
    expect(getByText('foo').getAttribute('aria-current')).toBe('page');
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<BreadcrumbExample />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
