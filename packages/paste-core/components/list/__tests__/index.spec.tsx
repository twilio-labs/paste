import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import { OrderedList, UnorderedList, ListItem } from '../src';

describe('Ordered List', () => {
  describe('Render', () => {
    it('should render a plain ordered list wrapper', () => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <OrderedList>Children</OrderedList>
        </CustomizationProvider>,
      );
      const renderedList = screen.getByRole('list');
      expect(renderedList).not.toBeNull();
    });

    it('should allow marginTop and marginBottom styling props', () => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <OrderedList marginTop="space40" marginBottom="space40">
            Children
          </OrderedList>
        </CustomizationProvider>,
      );
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveStyleRule('margin-top', '0.75rem');
      expect(renderedList).toHaveStyleRule('margin-bottom', '0.75rem');
    });

    it('should set list style type styles to combat css reset stylesheets', () => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <OrderedList data-testid="ordered-list">Children</OrderedList>
          <UnorderedList data-testid="unordered-list">Children</UnorderedList>
        </CustomizationProvider>,
      );
      const renderedOrderedList = screen.getByTestId('ordered-list');
      const renderedUnorderedList = screen.getByTestId('unordered-list');
      expect(renderedOrderedList).toHaveStyleRule('list-style-type', 'decimal');
      expect(renderedUnorderedList).toHaveStyleRule('list-style-type', 'disc');
    });

    it('should allow aria attributes', () => {
      render(<OrderedList aria-expanded="true">Children</OrderedList>);
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveAttribute('aria-expanded', 'true');
    });

    it('should allow data attributes', () => {
      render(<OrderedList data-test="test-hook">Children</OrderedList>);
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveAttribute('data-test', 'test-hook');
    });

    it('should allow HTML attributes', () => {
      render(<OrderedList title="random title">Children</OrderedList>);
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveAttribute('title', 'random title');
    });
  });

  describe('HTML attributes', () => {
    it('should set a element data attribute for OrderedList', () => {
      render(<OrderedList>ordered list</OrderedList>);
      expect(screen.getByRole('list').getAttribute('data-paste-element')).toEqual('ORDERED_LIST');
    });
    it('should set a custom element data attribute for OrderedList', () => {
      render(<OrderedList element="foo">ordered list</OrderedList>);
      expect(screen.getByRole('list').getAttribute('data-paste-element')).toEqual('foo');
    });
  });

  describe('Customization', () => {
    it('should add custom styles to OrderedList', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{ ORDERED_LIST: { color: 'colorTextWeak', backgroundColor: 'colorBackground' } }}
        >
          <OrderedList>Custom ordered list</OrderedList>
        </CustomizationProvider>,
      );
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
      expect(renderedList).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });

    it('should add custom styles to OrderedList with a custom element data attribute', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{ foo: { color: 'colorTextWeak', backgroundColor: 'colorBackground' } }}
        >
          <OrderedList element="foo">Custom ordered list</OrderedList>
        </CustomizationProvider>,
      );
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
      expect(renderedList).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });
  });
});

describe('Unordered List', () => {
  describe('Render', () => {
    it('should render a plain unordered list wrapper', () => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <UnorderedList>Children</UnorderedList>
        </CustomizationProvider>,
      );
      const renderedList = screen.getByRole('list');
      expect(renderedList).not.toBeNull();
    });

    it('should allow marginTop and marginBottom styling props', () => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <UnorderedList marginTop="space40" marginBottom="space40">
            Children
          </UnorderedList>
        </CustomizationProvider>,
      );
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveStyleRule('margin-top', '0.75rem');
      expect(renderedList).toHaveStyleRule('margin-bottom', '0.75rem');
    });

    it('should allow aria attributes', () => {
      render(<UnorderedList aria-label="label">Children</UnorderedList>);
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveAttribute('aria-label', 'label');
    });

    it('should allow data attributes', () => {
      render(<UnorderedList data-rando="test-hook">Children</UnorderedList>);
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveAttribute('data-rando', 'test-hook');
    });

    it('should allow HTML attributes', () => {
      render(<UnorderedList title="random title">Children</UnorderedList>);
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveAttribute('title', 'random title');
    });
  });

  describe('HTML attributes', () => {
    it('should set a element data attribute for UnorderedList', () => {
      render(<UnorderedList>unordered list</UnorderedList>);
      expect(screen.getByRole('list').getAttribute('data-paste-element')).toEqual('UNORDERED_LIST');
    });
    it('should set a custom element data attribute for UnorderedList', () => {
      render(<UnorderedList element="foo">unordered list</UnorderedList>);
      expect(screen.getByRole('list').getAttribute('data-paste-element')).toEqual('foo');
    });
  });

  describe('Customization', () => {
    it('should add custom styles to UnorderedList', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{ UNORDERED_LIST: { color: 'colorTextWeak', backgroundColor: 'colorBackground' } }}
        >
          <UnorderedList>Custom unordered list</UnorderedList>
        </CustomizationProvider>,
      );
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
      expect(renderedList).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });

    it('should add custom styles to UnorderedList with a custom element data attribute', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{ foo: { color: 'colorTextWeak', backgroundColor: 'colorBackground' } }}
        >
          <UnorderedList element="foo">Custom unordered list</UnorderedList>
        </CustomizationProvider>,
      );
      const renderedList = screen.getByRole('list');
      expect(renderedList).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
      expect(renderedList).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });
  });
});

describe('ListItem', () => {
  describe('Render', () => {
    it('should render a plain list item', () => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <ListItem>Children</ListItem>
        </CustomizationProvider>,
      );
      const renderedListItem = screen.getByRole('listitem');
      expect(renderedListItem).not.toBeNull();
    });

    it('should allow aria attributes', () => {
      render(<ListItem aria-pressed="true">Children</ListItem>);
      const renderedListItem = screen.getByRole('listitem');
      expect(renderedListItem).toHaveAttribute('aria-pressed', 'true');
    });

    it('should allow data attributes', () => {
      render(<ListItem data-rando="test-hook">Children</ListItem>);
      const renderedListItem = screen.getByRole('listitem');
      expect(renderedListItem).toHaveAttribute('data-rando', 'test-hook');
    });

    it('should allow HTML attributes', () => {
      render(<ListItem title="random title">Children</ListItem>);
      const renderedListItem = screen.getByRole('listitem');
      expect(renderedListItem).toHaveAttribute('title', 'random title');
    });
  });

  describe('HTML attributes', () => {
    it('should set a element data attribute for ListItem', () => {
      render(<ListItem>list item</ListItem>);
      expect(screen.getByRole('listitem').getAttribute('data-paste-element')).toEqual('LIST_ITEM');
    });
    it('should set a custom element data attribute for ListItem', () => {
      render(<ListItem element="foo">list item</ListItem>);
      expect(screen.getByRole('listitem').getAttribute('data-paste-element')).toEqual('foo');
    });
  });

  describe('Customization', () => {
    it('should add custom styles to ListItem', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{ LIST_ITEM: { color: 'colorTextWeak', backgroundColor: 'colorBackground' } }}
        >
          <ListItem>Custom list item</ListItem>
        </CustomizationProvider>,
      );
      const renderedListItem = screen.getByRole('listitem');
      expect(renderedListItem).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
      expect(renderedListItem).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });

    it('should add custom styles to ListItem with a custom element data attribute', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{ foo: { color: 'colorTextWeak', backgroundColor: 'colorBackground' } }}
        >
          <ListItem element="foo">Custom list item</ListItem>
        </CustomizationProvider>,
      );
      const renderedListItem = screen.getByRole('listitem');
      expect(renderedListItem).toHaveStyleRule('background-color', 'rgb(244, 244, 246)');
      expect(renderedListItem).toHaveStyleRule('color', 'rgb(96, 107, 133)');
    });
  });
});
