import * as React from 'react';
import {render, screen, act} from '@testing-library/react';
import type {RenderOptions} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {initStyles, BaseMenu} from '../stories/StatusMenuCustomization.stories';

const PASTE_ELEMENT = 'data-paste-element';

const initWrapper = (element: string): RenderOptions['wrapper'] =>
  function Wrapper({children}) {
    return (
      <CustomizationProvider theme={TestTheme} elements={initStyles(element.toUpperCase())}>
        {children}
      </CustomizationProvider>
    );
  };

describe('Menu Customization', () => {
  describe('"data-paste-element" HTML attributes', () => {
    it('Should add the correct "data-paste-element" attribute when element prop is undefined', async () => {
      await act(async () => {
        render(<BaseMenu element="STATUS_MENU" />);
      });
      const menuButton = screen.getByTestId('menu-badge-status');
      const menuContainer = screen.getByTestId('menu');
      const menuItem = screen.getByTestId('menu-item-1');
      const menuItemCheckbox = screen.getByTestId('menu-item-4');
      const menuItemRadio = screen.getByTestId('menu-item-5');
      const menuItemChild = screen.getByTestId('menu-child-item-1');
      expect(menuButton.getAttribute(PASTE_ELEMENT)).toEqual('STATUS_MENU_BADGE_BUTTON');
      expect(menuContainer.getAttribute(PASTE_ELEMENT)).toEqual('STATUS_MENU');
      expect(menuItem.getAttribute(PASTE_ELEMENT)).toEqual('STATUS_MENU_ITEM');
      expect(menuItemCheckbox.getAttribute(PASTE_ELEMENT)).toEqual('STATUS_MENU_ITEM_CHECKBOX');
      expect(menuItemRadio.getAttribute(PASTE_ELEMENT)).toEqual('STATUS_MENU_ITEM_RADIO');
      expect(menuItemChild.getAttribute(PASTE_ELEMENT)).toEqual('STATUS_MENU_ITEM_CHILD');
      expect(menuButton.parentElement?.parentElement?.getAttribute(PASTE_ELEMENT)).toEqual('STATUS_MENU_BADGE');
    });

    it('Should add the correct "data-paste-element" attribute when element prop is "CUSTOM_MENU"', async () => {
      await act(async () => {
        render(<BaseMenu element="CUSTOM_MENU" />);
      });

      const menuButton = screen.getByTestId('menu-badge-status');
      const menuContainer = screen.getByTestId('menu');
      const menuItem = screen.getByTestId('menu-item-1');
      const menuItemCheckbox = screen.getByTestId('menu-item-4');
      const menuItemRadio = screen.getByTestId('menu-item-5');
      const menuItemChild = screen.getByTestId('menu-child-item-1');
      expect(menuButton.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_BADGE_BUTTON');
      expect(menuContainer.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU');
      expect(menuItem.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM');
      expect(menuItemCheckbox.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM_CHECKBOX');
      expect(menuItemRadio.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM_RADIO');
      expect(menuItemChild.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM_CHILD');
      expect(menuButton.parentElement?.parentElement?.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_BADGE');
    });
  });

  describe('Custom styles', () => {
    describe('Style overrides using the default element name', () => {
      it('Should apply correct style rules', async () => {
        await act(async () => {
          render(<BaseMenu element="STATUS_MENU" menuBadgeStatusVariant="ProcessSuccess" />, {
            wrapper: initWrapper('STATUS_MENU'),
          });
        });

        const nodeCalledMenu = screen.getByTestId('menu');
        const nodeCalledMenuBadge = screen.getByTestId('menu-badge-status');
        const nodeCalledMenuItem = screen.getByTestId('menu-item-1');
        const nodeCalledMenuItemCheckbox = screen.getByTestId('menu-item-4');
        const nodeCalledMenuItemRadio = screen.getByTestId('menu-item-5');
        const nodeCalledMenuItemChild = screen.getByTestId('menu-child-item-1');

        expect(nodeCalledMenu).toHaveStyleRule('border-color', 'rgb(244, 124, 34)');
        expect(nodeCalledMenuItem).toHaveStyleRule('border-color', 'rgb(20, 176, 83)');
        expect(nodeCalledMenuItemCheckbox).toHaveStyleRule('font-weight', '700');
        expect(nodeCalledMenuItemRadio).toHaveStyleRule('color', 'rgb(141, 49, 24)');
        expect(nodeCalledMenuBadge).toHaveStyleRule('background-color', 'rgb(117, 12, 12)');
        expect(nodeCalledMenuItemChild).toHaveStyleRule('background-color', 'rgb(235, 244, 255)');
      });
    });

    describe('Style overrides using a custom element name', () => {
      it('Should apply correct style rules', async () => {
        await act(async () => {
          render(<BaseMenu menuBadgeStatusVariant="ProcessSuccess" element="CUSTOM" />, {
            wrapper: initWrapper('custom'),
          });
        });

        const nodeCalledMenu = screen.getByTestId('menu');
        const nodeCalledMenuBadge = screen.getByTestId('menu-badge-status');
        const nodeCalledMenuItem = screen.getByTestId('menu-item-1');
        const nodeCalledMenuItemCheckbox = screen.getByTestId('menu-item-4');
        const nodeCalledMenuItemRadio = screen.getByTestId('menu-item-5');
        const nodeCalledMenuItemChild = screen.getByTestId('menu-child-item-1');

        expect(nodeCalledMenu).toHaveStyleRule('border-color', 'rgb(244, 124, 34)');
        expect(nodeCalledMenuItem).toHaveStyleRule('border-color', 'rgb(20, 176, 83)');
        expect(nodeCalledMenuItemCheckbox).toHaveStyleRule('font-weight', '700');
        expect(nodeCalledMenuItemRadio).toHaveStyleRule('color', 'rgb(141, 49, 24)');
        expect(nodeCalledMenuBadge).toHaveStyleRule('background-color', 'rgb(117, 12, 12)');
        expect(nodeCalledMenuItemChild).toHaveStyleRule('background-color', 'rgb(235, 244, 255)');
      });
    });
  });
});
