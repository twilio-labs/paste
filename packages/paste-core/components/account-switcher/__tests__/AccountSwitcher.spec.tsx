import * as React from 'react';
import {render, screen, act} from '@testing-library/react';

import {AccountSwitcherMenu} from '../stories/AccountSwitcher.stories';
import {CustomElementName, DefaultElementName} from '../stories/AccountSwitcher.customization.stories';

describe('AccountSwitcher', () => {
  describe('element naming', () => {
    it('should set all default element names', async () => {
      await act(async () => {
        render(<AccountSwitcherMenu />);
      });
      expect(screen.getByRole('button', {name: 'Switch accounts'}).dataset.pasteElement).toEqual(
        'ACCOUNT_SWITCHER_BADGE_BUTTON'
      );
      expect(screen.getByRole('menu').dataset.pasteElement).toEqual('ACCOUNT_SWITCHER');
      expect(screen.getByRole('menuitem', {name: 'Account settings'}).dataset.pasteElement).toEqual(
        'ACCOUNT_SWITCHER_ITEM'
      );
      expect(screen.getByRole('menuitemradio', {name: 'Owl Telehealth'}).dataset.pasteElement).toEqual(
        'ACCOUNT_SWITCHER_ITEM_RADIO'
      );
      expect(screen.getAllByRole('separator')[0].dataset.pasteElement).toEqual('ACCOUNT_SWITCHER_SEPARATOR');
    });
  });
  describe('element name overrides', () => {
    it('should set all custom element names', async () => {
      await act(async () => {
        render(<CustomElementName />);
      });
      expect(screen.getByRole('button', {name: 'Switch accounts'}).dataset.pasteElement).toEqual('FOO_BUTTON');
      expect(screen.getByRole('menu').dataset.pasteElement).toEqual('BAR');
      expect(screen.getByRole('menuitem', {name: 'Account settings'}).dataset.pasteElement).toEqual('BAZ');
      expect(screen.getByRole('menuitemradio', {name: 'Owl Telehealth'}).dataset.pasteElement).toEqual('BAZ_RADIO');
      expect(screen.getAllByRole('separator')[0].dataset.pasteElement).toEqual('LINE');
    });
  });
  describe('customization of styles', () => {
    it('should set all custom styles', async () => {
      await act(async () => {
        render(<DefaultElementName />);
      });
      expect(screen.getByRole('button', {name: 'Switch accounts'})).toHaveStyleRule(
        'background-color',
        'rgb(214, 31, 31)'
      );
      expect(screen.getByRole('menu')).toHaveStyleRule('border-color', 'rgb(117, 12, 12)');
      expect(screen.getByRole('menuitem', {name: 'Account settings'})).toHaveStyleRule(
        'background-color',
        'rgb(0, 20, 137)'
      );
      expect(screen.getByRole('menuitemradio', {name: 'Owl Telehealth'})).toHaveStyleRule('font-style', 'italic');
    });
  });
  describe('customization of styles with custom name', () => {
    it('should set all custom styles', async () => {
      await act(async () => {
        render(<CustomElementName />);
      });
      expect(screen.getByRole('button', {name: 'Switch accounts'})).toHaveStyleRule(
        'background-color',
        'rgb(214, 31, 31)'
      );
      expect(screen.getByRole('menu')).toHaveStyleRule('border-color', 'rgb(117, 12, 12)');
      expect(screen.getByRole('menuitem', {name: 'Account settings'})).toHaveStyleRule(
        'background-color',
        'rgb(0, 20, 137)'
      );
      expect(screen.getByRole('menuitemradio', {name: 'Owl Telehealth'})).toHaveStyleRule('font-style', 'italic');
    });
  });
});
