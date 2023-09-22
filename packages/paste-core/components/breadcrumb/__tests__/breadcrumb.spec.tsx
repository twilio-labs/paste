import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { Breadcrumb, BreadcrumbItem } from '../src';

describe('Breadcrumb', () => {
  const BreadcrumbExample = (): JSX.Element => {
    return (
      <Breadcrumb>
        <BreadcrumbItem href="#">foo</BreadcrumbItem>
        <BreadcrumbItem>bar</BreadcrumbItem>
      </Breadcrumb>
    );
  };

  it('should render a nav with correct aria-label', () => {
    const { getByRole } = render(<BreadcrumbExample />);
    expect(getByRole('navigation').getAttribute('aria-label')).toBe('breadcrumb');
  });

  it('should render a list with display: inline-flex', () => {
    render(<BreadcrumbExample />);
    const renderedList = screen.getByRole('list');
    expect(renderedList).toHaveStyleRule('display', 'inline-flex');
  });

  it('should render list items', () => {
    render(<BreadcrumbExample />);
    const renderedListItem = screen.getAllByRole('listitem');
    expect(renderedListItem).not.toBeNull();
  });

  it('should render a breadcrumb separator', () => {
    render(<BreadcrumbExample />);
    const renderedSeparator = screen.getByText('/');
    expect(renderedSeparator).toBeDefined();
  });

  it('should render an anchor', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="#">foo</BreadcrumbItem>
      </Breadcrumb>,
    );
    const renderedAnchor = screen.getAllByRole('link');
    expect(renderedAnchor).not.toBeNull();
  });

  it('should render text with correct aria-current', () => {
    const { getByText } = render(
      <Breadcrumb>
        <BreadcrumbItem>foo</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(getByText('foo').getAttribute('aria-current')).toBe('page');
  });

  it('should pass props given to BreadcrumbItem onto its Anchor or Text child', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="#" data-testid="breadcrumb-anchor">
          foo
        </BreadcrumbItem>
      </Breadcrumb>,
    );
    const breadcrumbAnchor = screen.getByRole('listitem').firstChild as HTMLElement;
    expect(breadcrumbAnchor.getAttribute('data-testid')).toEqual('breadcrumb-anchor');
  });

  describe('Customization', () => {
    it('should correctly set data attributes when Breadcrumb and BreadcrumbItem are being passed an element prop', () => {
      render(
        <Breadcrumb element="TEST_PARENT" data-testid="breadcrumb">
          <BreadcrumbItem element="TEST" href="#" data-testid="breadcrumb-item-1">
            First
          </BreadcrumbItem>
          <BreadcrumbItem element="TEST" href="#" data-testid="breadcrumb-item-2">
            First
          </BreadcrumbItem>
        </Breadcrumb>,
      );

      expect(screen.getByTestId('breadcrumb').getAttribute('data-paste-element')).toEqual('TEST_PARENT');

      const breadcrumbItem1 = screen.getAllByRole('listitem')[0] as HTMLElement;
      const breadcrumbItem2 = screen.getAllByRole('listitem')[1] as HTMLElement;

      expect(breadcrumbItem1.getAttribute('data-paste-element')).toEqual('TEST_ITEM');
      expect(breadcrumbItem2.getAttribute('data-paste-element')).toEqual('TEST_ITEM');

      const node1 = screen.getByTestId('breadcrumb-item-1') as HTMLElement;
      const node2 = screen.getByTestId('breadcrumb-item-2') as HTMLElement;

      expect(node1.getAttribute('data-paste-element')).toEqual('TEST_ANCHOR');
      expect(node2.getAttribute('data-paste-element')).toEqual('TEST_ANCHOR');

      const separator1 = breadcrumbItem1.lastChild as HTMLElement;
      expect(separator1.getAttribute('data-paste-element')).toEqual('TEST_SEPARATOR');
    });

    it('should correctly set a element data attribute for Breadcrumb and BreadcrumbItem, when only Breadcrumb is passed a valid (non-falsy string) element', () => {
      render(
        <Breadcrumb element="TEST_PARENT" data-testid="breadcrumb">
          <BreadcrumbItem element="" href="#" data-testid="breadcrumb-item-1">
            First
          </BreadcrumbItem>
          <BreadcrumbItem href="#" data-testid="breadcrumb-item-2">
            First
          </BreadcrumbItem>
        </Breadcrumb>,
      );

      expect(screen.getByTestId('breadcrumb').getAttribute('data-paste-element')).toEqual('TEST_PARENT');

      const breadcrumbItem1 = screen.getAllByRole('listitem')[0] as HTMLElement;
      const breadcrumbItem2 = screen.getAllByRole('listitem')[1] as HTMLElement;

      expect(breadcrumbItem1.getAttribute('data-paste-element')).toEqual('TEST_PARENT_ITEM');
      expect(breadcrumbItem2.getAttribute('data-paste-element')).toEqual('TEST_PARENT_ITEM');

      const node1 = screen.getByTestId('breadcrumb-item-1') as HTMLElement;
      const node2 = screen.getByTestId('breadcrumb-item-2') as HTMLElement;

      expect(node1.getAttribute('data-paste-element')).toEqual('TEST_PARENT_ANCHOR');
      expect(node2.getAttribute('data-paste-element')).toEqual('TEST_PARENT_ANCHOR');

      const separator1 = breadcrumbItem1.lastChild as HTMLElement;

      expect(separator1.getAttribute('data-paste-element')).toEqual('TEST_PARENT_SEPARATOR');
    });

    it('should correctly set a element data attribute for Breadcrumb and BreadcrumbItem, when neither Breadcrumb nor BreadcrumbItem are passed a valid (non-falsy string) element', () => {
      render(
        <Breadcrumb data-testid="breadcrumb">
          <BreadcrumbItem element="" href="#" data-testid="breadcrumb-item-1">
            First
          </BreadcrumbItem>
          <BreadcrumbItem href="#" data-testid="breadcrumb-item-2">
            First
          </BreadcrumbItem>
        </Breadcrumb>,
      );

      expect(screen.getByTestId('breadcrumb').getAttribute('data-paste-element')).toEqual('BREADCRUMB');

      const breadcrumbItem1 = screen.getAllByRole('listitem')[0] as HTMLElement;
      const breadcrumbItem2 = screen.getAllByRole('listitem')[1] as HTMLElement;

      expect(breadcrumbItem1.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ITEM');
      expect(breadcrumbItem2.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ITEM');

      const node1 = screen.getByTestId('breadcrumb-item-1') as HTMLElement;
      const node2 = screen.getByTestId('breadcrumb-item-2') as HTMLElement;

      expect(node1.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ANCHOR');
      expect(node2.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ANCHOR');

      const separator1 = breadcrumbItem1.lastChild as HTMLElement;

      expect(separator1.getAttribute('data-paste-element')).toEqual('BREADCRUMB_SEPARATOR');
    });
  });

  describe('Custom styles', () => {
    it('should add custom styles to Breadcrumb', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            BREADCRUMB: { fontVariantNumeric: 'slashed-zero' },
            BREADCRUMB_ITEM: { fontWeight: 'fontWeightMedium' },
            BREADCRUMB_ANCHOR: {
              textDecoration: 'underline wavy',
              color: 'colorTextInverseWeaker',
              ':hover': { color: 'colorLinkStronger' },
            },
            BREADCRUMB_TEXT: { letterSpacing: '0.25rem' },
            BREADCRUMB_SEPARATOR: {
              color: 'colorTextBrandHighlight',
            },
          }}
        >
          <Breadcrumb data-testid="breadcrumb">
            <BreadcrumbItem href="#" data-testid="breadcrumb-item-1">
              First
            </BreadcrumbItem>
            <BreadcrumbItem href="#" data-testid="breadcrumb-item-2">
              Second
            </BreadcrumbItem>
            <BreadcrumbItem data-testid="breadcrumb-item-3">Third</BreadcrumbItem>
          </Breadcrumb>
        </CustomizationProvider>,
      );

      expect(screen.getByTestId('breadcrumb')).toHaveStyleRule('font-variant-numeric', 'slashed-zero');

      const breadcrumbItem1 = screen.getAllByRole('listitem')[0] as HTMLElement;
      const breadcrumbItem2 = screen.getAllByRole('listitem')[1] as HTMLElement;
      const breadcrumbItem3 = screen.getAllByRole('listitem')[2] as HTMLElement;

      expect(breadcrumbItem1).toHaveStyleRule('font-weight', '500');
      expect(breadcrumbItem2).toHaveStyleRule('font-weight', '500');
      expect(breadcrumbItem3).toHaveStyleRule('font-weight', '500');

      const node1 = screen.getByTestId('breadcrumb-item-1') as HTMLElement;
      const separator1 = breadcrumbItem1.lastChild as HTMLElement;
      expect(node1).toHaveStyleRule('text-decoration', 'underline wavy');
      expect(node1).toHaveStyleRule('color', 'rgb(96, 107, 133)');
      expect(separator1).toHaveStyleRule('color', 'rgb(242, 47, 70)');

      const node2 = screen.getByTestId('breadcrumb-item-2') as HTMLElement;
      const separator2 = breadcrumbItem1.lastChild as HTMLElement;
      expect(node2).toHaveStyleRule('text-decoration', 'underline wavy');
      expect(node2).toHaveStyleRule('color', 'rgb(96, 107, 133)');
      expect(separator2).toHaveStyleRule('color', 'rgb(242, 47, 70)');

      const node3 = screen.getByTestId('breadcrumb-item-3') as HTMLElement;
      expect(node3).toHaveStyleRule('letter-spacing', '0.25rem');
    });

    it('should add custom styles to Breadcrumb with a custom element data attribute', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            CUSTOM: { marginY: 'space60', fontVariantNumeric: 'ordinal' },
            CUSTOM_CHILD_ITEM: { fontWeight: 'fontWeightLight' },
            CUSTOM_CHILD_ANCHOR: { fontWeight: 'fontWeightBold' },
            CUSTOM_CHILD_SEPARATOR: { fontWeight: 'fontWeightLight' },
            CUSTOM_CHILD_TEXT: { fontWeight: 'fontWeightSemibold' },
            CUSTOM_ITEM: { fontWeight: 'fontWeightBold' },
            CUSTOM_ANCHOR: { letterSpacing: '0.25rem' },
            CUSTOM_SEPARATOR: {
              color: 'colorTextBrandHighlight',
            },
            BREADCRUMB_ITEM: { fontWeight: 'fontWeightLight' },
            BREADCRUMB_ANCHOR: { letterSpacing: '0.5rem' },
            BREADCRUMB_SEPARATOR: {
              color: 'colorText',
            },
          }}
        >
          <Breadcrumb element="CUSTOM" data-testid="breadcrumb">
            <BreadcrumbItem element="CUSTOM_CHILD" href="#" data-testid="breadcrumb-item-1">
              First
            </BreadcrumbItem>
            <BreadcrumbItem element="CUSTOM_CHILD" data-testid="breadcrumb-item-2">
              Second
            </BreadcrumbItem>
            <BreadcrumbItem href="#" data-testid="breadcrumb-item-3">
              Third
            </BreadcrumbItem>
          </Breadcrumb>
        </CustomizationProvider>,
      );

      expect(screen.getByTestId('breadcrumb')).toHaveStyleRule('font-variant-numeric', 'ordinal');

      const breadcrumbItem1 = screen.getAllByRole('listitem')[0] as HTMLElement;
      const breadcrumbItem2 = screen.getAllByRole('listitem')[1] as HTMLElement;
      const breadcrumbItem3 = screen.getAllByRole('listitem')[2] as HTMLElement;

      expect(breadcrumbItem1).toHaveStyleRule('font-weight', '400');
      expect(breadcrumbItem2).toHaveStyleRule('font-weight', '400');
      expect(breadcrumbItem3).toHaveStyleRule('font-weight', '700');

      const node1 = screen.getByTestId('breadcrumb-item-1') as HTMLElement;
      const separator1 = breadcrumbItem1.lastChild as HTMLElement;
      expect(node1).toHaveStyleRule('font-weight', '700');
      expect(separator1).toHaveStyleRule('color', 'rgb(96, 107, 133)');

      const node2 = screen.getByTestId('breadcrumb-item-2') as HTMLElement;
      const separator2 = breadcrumbItem2.lastChild as HTMLElement;
      expect(node2).toHaveStyleRule('font-weight', '600');
      expect(separator2).toHaveStyleRule('color', 'rgb(96, 107, 133)');

      const node3 = screen.getByTestId('breadcrumb-item-3') as HTMLElement;
      expect(node3).toHaveStyleRule('letter-spacing', '0.25rem');
    });
  });
});
