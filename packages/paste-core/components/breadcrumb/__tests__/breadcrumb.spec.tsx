import * as React from 'react';
import {matchers} from 'jest-emotion';
import {render, screen} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Breadcrumb, BreadcrumbItem} from '../src';

expect.extend(matchers);

describe('Breadcrumb', () => {
  const BreadcrumbExample: React.FC = () => {
    return (
      <Breadcrumb>
        <BreadcrumbItem href="#">foo</BreadcrumbItem>
        <BreadcrumbItem>bar</BreadcrumbItem>
      </Breadcrumb>
    );
  };

  it('should render a nav with correct aria-label', () => {
    const {getByRole} = render(<BreadcrumbExample />);
    expect(getByRole('navigation').getAttribute('aria-label')).toBe('breadcrumb');
  });

  it('should render a list with display: inline-flex', () => {
    render(<BreadcrumbExample />);
    const renderedList = screen.getByRole('list');
    expect(renderedList).toHaveStyleRule('display', 'inline-flex');
  });

  it('should render listitems', () => {
    render(<BreadcrumbExample />);
    const renderedListItem = screen.findByRole('listitem');
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
      </Breadcrumb>
    );
    const renderedAnchor = screen.findByRole('link');
    expect(renderedAnchor).not.toBeNull();
  });

  it('should render text with correct aria-current', () => {
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

  describe.only('HTML attributes', () => {
    it('should set a element data attribute for Breadcrumb', () => {
      render(
        <Breadcrumb data-testid="breadcrumb">
          <BreadcrumbItem href="#" data-testid="breadcrumb-item-1">
            First
          </BreadcrumbItem>
          <BreadcrumbItem href="#" data-testid="breadcrumb-item-2">
            Second
          </BreadcrumbItem>
          <BreadcrumbItem data-testid="breadcrumb-item-3">Third</BreadcrumbItem>
        </Breadcrumb>
      );

      expect(screen.getByTestId('breadcrumb').getAttribute('data-paste-element')).toEqual('BREADCRUMB');

      const breadcrumbItem1 = screen.getByTestId('breadcrumb-item-1') as HTMLElement;
      const breadcrumbItem2 = screen.getByTestId('breadcrumb-item-2') as HTMLElement;
      const breadcrumbItem3 = screen.getByTestId('breadcrumb-item-3') as HTMLElement;

      expect(breadcrumbItem1.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ITEM');
      expect(breadcrumbItem2.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ITEM');
      expect(breadcrumbItem3.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ITEM');

      const node1 = breadcrumbItem1.firstChild as HTMLElement;
      const separator1 = breadcrumbItem1.lastChild as HTMLElement;

      expect(node1.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ITEM_ANCHOR');
      expect(separator1.getAttribute('data-paste-element')).toEqual('BREADCRUMB_SEPARATOR');

      const node2 = breadcrumbItem2.firstChild as HTMLElement;
      const separator2 = breadcrumbItem2.lastChild as HTMLElement;

      expect(node2.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ITEM_ANCHOR');
      expect(separator2.getAttribute('data-paste-element')).toEqual('BREADCRUMB_SEPARATOR');

      const node3 = breadcrumbItem3.firstChild as HTMLElement;

      // fix this test!!!!!!
      expect(node3.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ITEM_TEXT');
    });

    it('should set a custom element data attribute for Breadcrumb', () => {
      render(
        <Breadcrumb element="CUSTOM" data-testid="breadcrumb">
          <BreadcrumbItem element="CUSTOM_ITEM" href="#" data-testid="breadcrumb-item-1">
            First
          </BreadcrumbItem>
          <BreadcrumbItem element="CUSTOM_ITEM" data-testid="breadcrumb-item-2">
            Second
          </BreadcrumbItem>
          <BreadcrumbItem href="#" data-testid="breadcrumb-item-3">
            Third
          </BreadcrumbItem>
        </Breadcrumb>
      );

      expect(screen.getByTestId('breadcrumb').getAttribute('data-paste-element')).toEqual('CUSTOM');

      const breadcrumbItem1 = screen.getByTestId('breadcrumb-item-1') as HTMLElement;
      const breadcrumbItem2 = screen.getByTestId('breadcrumb-item-2') as HTMLElement;
      const breadcrumbItem3 = screen.getByTestId('breadcrumb-item-3') as HTMLElement;

      expect(breadcrumbItem1.getAttribute('data-paste-element')).toEqual('CUSTOM_ITEM');
      expect(breadcrumbItem2.getAttribute('data-paste-element')).toEqual('CUSTOM_ITEM');
      expect(breadcrumbItem3.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ITEM');

      const node1 = breadcrumbItem1.firstChild as HTMLElement;
      const separator1 = breadcrumbItem1.lastChild as HTMLElement;

      expect(node1.getAttribute('data-paste-element')).toEqual('CUSTOM_ITEM_ANCHOR');
      expect(separator1.getAttribute('data-paste-element')).toEqual('CUSTOM_ITEM_SEPARATOR');

      const node2 = breadcrumbItem2.firstChild as HTMLElement;
      const separator2 = breadcrumbItem2.lastChild as HTMLElement;

      expect(node2.getAttribute('data-paste-element')).toEqual('CUSTOM_ITEM_TEXT');
      expect(separator2.getAttribute('data-paste-element')).toEqual('CUSTOM_ITEM_SEPARATOR');

      const node3 = breadcrumbItem3.firstChild as HTMLElement;

      expect(node3.getAttribute('data-paste-element')).toEqual('BREADCRUMB_ITEM_ANCHOR');
    });
  });

  describe.only('Customization', () => {
    it('should add custom styles to Breadcrumb', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          // @ts-expect-error global test variable
          theme={TestTheme}
          elements={{
            BREADCRUMB: {fontVariantNumeric: 'slashed-zero'},
            BREADCRUMB_ITEM: {fontWeight: 'fontWeightMedium'},
            BREADCRUMB_ITEM_ANCHOR: {
              textDecoration: 'underline wavy',
              color: 'colorTextInverseWeaker',
              ':hover': {color: 'colorLinkStronger'},
            },
            BREADCRUMB_ITEM_TEXT: {letterSpacing: '0.25rem'},
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
        </CustomizationProvider>
      );

      expect(screen.getByTestId('breadcrumb')).toHaveStyleRule('font-variant-numeric', 'slashed-zero');

      const breadcrumbItem1 = screen.getByTestId('breadcrumb-item-1') as HTMLElement;
      const breadcrumbItem2 = screen.getByTestId('breadcrumb-item-2') as HTMLElement;
      const breadcrumbItem3 = screen.getByTestId('breadcrumb-item-3') as HTMLElement;

      expect(breadcrumbItem1).toHaveStyleRule('font-weight', '500');
      expect(breadcrumbItem2).toHaveStyleRule('font-weight', '500');
      expect(breadcrumbItem3).toHaveStyleRule('font-weight', '500');

      const node1 = breadcrumbItem1.firstChild as HTMLElement;
      const separator1 = breadcrumbItem1.lastChild as HTMLElement;
      expect(node1).toHaveStyleRule('text-decoration', 'underline wavy');
      expect(node1).toHaveStyleRule('color', 'rgb(96,107,133)');
      expect(separator1).toHaveStyleRule('color', 'rgb(242,47,70)');

      const node2 = breadcrumbItem2.firstChild as HTMLElement;
      const separator2 = breadcrumbItem2.lastChild as HTMLElement;
      expect(node2).toHaveStyleRule('text-decoration', 'underline wavy');
      expect(node2).toHaveStyleRule('color', 'rgb(96,107,133)');
      expect(separator2).toHaveStyleRule('color', 'rgb(242,47,70)');

      const node3 = breadcrumbItem3.firstChild as HTMLElement;
      expect(node3).toHaveStyleRule('letter-spacing', '0.25rem');
    });

    it('should add custom styles to Breadcrumb with a custom element data attribute', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          // @ts-expect-error global test variable
          theme={TestTheme}
          elements={{
            CUSTOM: {marginY: 'space60', fontVariantNumeric: 'ordinal'},
            CUSTOM_ITEM: {fontWeight: 'fontWeightLight'},
            CUSTOM_ITEM_ANCHOR: {fontWeight: 'fontWeightBold'},
            CUSTOM_ITEM_SEPARATOR: {fontWeight: 'fontWeightLight'},
            CUSTOM_ITEM_TEXT: {fontWeight: 'fontWeightSemibold'},
            BREADCRUMB_ITEM: {fontWeight: 'fontWeightBold'},
            BREADCRUMB_ITEM_ANCHOR: {letterSpacing: '0.25rem'},
            BREADCRUMB_SEPARATOR: {
              color: 'colorTextBrandHighlight',
            },
          }}
        >
          <Breadcrumb element="CUSTOM" data-testid="breadcrumb">
            <BreadcrumbItem element="CUSTOM_ITEM" href="#" data-testid="breadcrumb-item-1">
              First
            </BreadcrumbItem>
            <BreadcrumbItem element="CUSTOM_ITEM" data-testid="breadcrumb-item-2">
              Second
            </BreadcrumbItem>
            <BreadcrumbItem href="#" data-testid="breadcrumb-item-3">
              Third
            </BreadcrumbItem>
          </Breadcrumb>
        </CustomizationProvider>
      );

      expect(screen.getByTestId('breadcrumb')).toHaveStyleRule('font-variant-numeric', 'ordinal');

      const breadcrumbItem1 = screen.getByTestId('breadcrumb-item-1') as HTMLElement;
      const breadcrumbItem2 = screen.getByTestId('breadcrumb-item-2') as HTMLElement;
      const breadcrumbItem3 = screen.getByTestId('breadcrumb-item-3') as HTMLElement;

      expect(breadcrumbItem1).toHaveStyleRule('font-weight', '400');
      expect(breadcrumbItem2).toHaveStyleRule('font-weight', '400');
      expect(breadcrumbItem3).toHaveStyleRule('font-weight', '700');

      const node1 = breadcrumbItem1.firstChild as HTMLElement;
      const separator1 = breadcrumbItem1.lastChild as HTMLElement;
      expect(node1).toHaveStyleRule('font-weight', '700');
      expect(separator1).toHaveStyleRule('color', 'rgb(96,107,133)');

      const node2 = breadcrumbItem2.firstChild as HTMLElement;
      const separator2 = breadcrumbItem2.lastChild as HTMLElement;
      expect(node2).toHaveStyleRule('font-weight', '600');
      expect(separator2).toHaveStyleRule('color', 'rgb(96,107,133)');

      const node3 = breadcrumbItem3.firstChild as HTMLElement;
      expect(node3).toHaveStyleRule('letter-spacing', '0.25rem');
    });
  });
});
