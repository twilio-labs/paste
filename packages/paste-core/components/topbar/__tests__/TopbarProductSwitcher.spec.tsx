import * as React from 'react';
import {render, screen, act} from '@testing-library/react';

import {ProductSwitcherMenu} from '../stories/TopbarProductSwitcher/ProductSwitcher.stories';
import {
  DefaultElementName,
  CustomElementName,
} from '../stories/TopbarProductSwitcher/ProductSwitcher.customization.stories';

describe('TopbarProductSwitcher', () => {
  describe('element naming', () => {
    it('should set all default element names', async () => {
      await act(async () => {
        render(<ProductSwitcherMenu />);
      });
      expect(screen.getByRole('button', {name: 'Switch products'}).dataset.pasteElement).toEqual(
        'TOPBAR_PRODUCT_SWITCHER_BUTTON'
      );
      expect(screen.getByRole('menu').dataset.pasteElement).toEqual('TOPBAR_PRODUCT_SWITCHER');
      expect(screen.getByRole('menuitemradio', {name: 'Twilio SMS, Voice & Video'}).dataset.pasteElement).toEqual(
        'TOPBAR_PRODUCT_SWITCHER_ITEM'
      );
    });
  });
  describe('custom element naming', () => {
    it('should set all custom element names', async () => {
      await act(async () => {
        render(<CustomElementName />);
      });
      expect(screen.getByRole('button', {name: 'Switch products'}).dataset.pasteElement).toEqual('FOO');
      expect(screen.getByRole('menu').dataset.pasteElement).toEqual('BAR');
      expect(screen.getByRole('menuitemradio', {name: 'Twilio SMS, Voice & Video'}).dataset.pasteElement).toEqual(
        'BAZ'
      );
    });
  });
  describe.skip('customization of styles', () => {
    it('should set all custom styles', async () => {
      await act(async () => {
        render(<DefaultElementName />);
        screen.debug();
        expect(screen.getByRole('button', {name: 'Switch products'})).toHaveStyleRule(
          'background-color',
          'rgb(214, 31, 31)'
        );
        expect(screen.getByRole('menu')).toHaveStyleRule('border-color', 'rgb(117, 12, 12)');
        expect(screen.getByRole('menuitemradio', {name: 'Twilio SMS, Voice & Video'})).toHaveStyleRule(
          'font-style',
          'italic'
        );
      });
    });
  });
  describe('customization of styles with custom name', () => {
    it('should set all custom styles', async () => {
      await act(async () => {
        render(<CustomElementName />);
      });
      expect(screen.getByRole('button', {name: 'Switch products'})).toHaveStyleRule(
        'background-color',
        'rgb(2, 99, 224)'
      );
      expect(screen.getByRole('menu')).toHaveStyleRule('border-color', 'rgb(117, 12, 12)');
      expect(screen.getByRole('menuitemradio', {name: 'Twilio SMS, Voice & Video'})).toHaveStyleRule(
        'text-decoration',
        'underline'
      );
    });
  });
});
