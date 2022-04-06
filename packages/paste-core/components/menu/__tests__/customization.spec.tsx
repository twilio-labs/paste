import * as React from 'react';
import {render, screen} from '@testing-library/react';

import type {RenderOptions} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {initStyles, BaseMenu} from '../stories/customization.stories';

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
    it('Should add the correct "data-paste-element" attribute when element prop is undefined', () => {
      render(<BaseMenu />);

      expect(screen.getByTestId('menu-button').getAttribute(PASTE_ELEMENT)).toEqual('MENU_BUTTON');
      expect(screen.getByTestId('menu').getAttribute(PASTE_ELEMENT)).toEqual('MENU');
      expect(screen.getByTestId('menu-group-settings').getAttribute(PASTE_ELEMENT)).toEqual('MENU_GROUP');
      expect(screen.getByTestId('menu-group-search-options').getAttribute(PASTE_ELEMENT)).toEqual('MENU_GROUP');
      expect(screen.getByTestId('menu-group-help').getAttribute(PASTE_ELEMENT)).toEqual('MENU_GROUP');

      expect(screen.getByTestId('menu-item-1').getAttribute(PASTE_ELEMENT)).toEqual('MENU_ITEM');
      expect(screen.getByTestId('menu-item-2').getAttribute(PASTE_ELEMENT)).toEqual('MENU_ITEM');
      expect(screen.getByTestId('menu-item-3').getAttribute(PASTE_ELEMENT)).toEqual('MENU_ITEM');
      expect(screen.getByTestId('menu-item-4').getAttribute(PASTE_ELEMENT)).toEqual('MENU_ITEM');
      expect(screen.getByTestId('menu-item-5').getAttribute(PASTE_ELEMENT)).toEqual('MENU_ITEM');
      expect(screen.getByTestId('menu-item-6').getAttribute(PASTE_ELEMENT)).toEqual('MENU_ITEM');

      expect(screen.getByTestId('submenu-button').getAttribute(PASTE_ELEMENT)).toEqual('SUBMENU_BUTTON');

      expect(screen.getByTestId('menu-separator-1').getAttribute(PASTE_ELEMENT)).toEqual('MENU_SEPARATOR');
      expect(screen.getByTestId('menu-separator-2').getAttribute(PASTE_ELEMENT)).toEqual('MENU_SEPARATOR');
    });

    it('Should add the correct "data-paste-element" attribute when element prop is "CUSTOM_MENU"', () => {
      render(<BaseMenu element="CUSTOM_MENU" />);

      expect(screen.getByTestId('menu-button').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_BUTTON');
      expect(screen.getByTestId('menu').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU');
      expect(screen.getByTestId('menu-group-settings').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_GROUP');
      expect(screen.getByTestId('menu-group-search-options').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_GROUP');
      expect(screen.getByTestId('menu-group-help').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_GROUP');

      expect(screen.getByTestId('menu-item-1').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM');
      expect(screen.getByTestId('menu-item-2').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM');
      expect(screen.getByTestId('menu-item-3').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM');
      expect(screen.getByTestId('menu-item-4').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM');
      expect(screen.getByTestId('menu-item-5').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM');
      expect(screen.getByTestId('menu-item-6').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM');

      expect(screen.getByTestId('submenu-button').getAttribute(PASTE_ELEMENT)).toEqual('SUBCUSTOM_MENU_BUTTON');

      expect(screen.getByTestId('menu-separator-1').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_SEPARATOR');
      expect(screen.getByTestId('menu-separator-2').getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_SEPARATOR');
    });
  });

  describe('Custom styles', () => {
    describe('Style overrides using the default element name', () => {
      it('Should apply correct style rules when menu button variant is "primary"', () => {
        render(<BaseMenu menuButtonVariant="primary" />, {
          wrapper: initWrapper('menu'),
        });

        const nodeCalledMenu = screen.getByTestId('menu');
        const nodeCalledMenuButton = screen.getByTestId('menu-button');

        const nodeCalledMenuItem = screen.getByTestId('menu-item-1');
        const nodeCalledSubmenuButton = screen.getByTestId('submenu-button');
        const nodeCalledMenuSeparator = screen.getByTestId('menu-separator-1');

        expect(nodeCalledMenu).toHaveStyleRule('box-shadow', '0 16px 24px 0 rgba(18,28,45,0.2)');
        expect(nodeCalledMenu).toHaveStyleRule('border-radius', '0');

        expect(nodeCalledMenuButton).toHaveStyleRule('background-color', 'rgb(2,99,224)');

        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '500');
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '700', {target: ':focus'});

        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-style', 'inset');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('opacity', '0.5');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-width', '8px');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-color', 'rgb(225,227,234)');
      });

      it('Should apply correct style rules when menu button variant is "secondary"', () => {
        render(<BaseMenu menuButtonVariant="secondary" />, {
          wrapper: initWrapper('menu'),
        });

        const nodeCalledMenu = screen.getByTestId('menu');
        const nodeCalledMenuButton = screen.getByTestId('menu-button');

        const nodeCalledMenuItem = screen.getByTestId('menu-item-1');

        const nodeCalledSubmenuButton = screen.getByTestId('submenu-button');
        const nodeCalledMenuSeparator = screen.getByTestId('menu-separator-1');

        expect(nodeCalledMenu).toHaveStyleRule('box-shadow', '0 16px 24px 0 rgba(18,28,45,0.2)');
        expect(nodeCalledMenu).toHaveStyleRule('border-radius', '0');
        expect(nodeCalledMenuButton).toHaveStyleRule('background-color', 'rgb(244,124,34)');
        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '500');
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '700', {target: ':focus'});

        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-style', 'inset');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('opacity', '0.5');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-width', '8px');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-color', 'rgb(225,227,234)');
      });

      it('Should apply correct style rules when menu button variant is "destructive"', () => {
        render(<BaseMenu menuButtonVariant="destructive" />, {
          wrapper: initWrapper('menu'),
        });

        const nodeCalledMenu = screen.getByTestId('menu');

        const nodeCalledMenuButton = screen.getByTestId('menu-button');
        const nodeCalledMenuItem = screen.getByTestId('menu-item-1');
        const nodeCalledSubmenuButton = screen.getByTestId('submenu-button');
        const nodeCalledMenuSeparator = screen.getByTestId('menu-separator-1');

        expect(nodeCalledMenu).toHaveStyleRule('box-shadow', '0 16px 24px 0 rgba(18,28,45,0.2)');
        expect(nodeCalledMenu).toHaveStyleRule('border-radius', '0');
        expect(nodeCalledMenuButton).toHaveStyleRule('background-color', 'rgb(49,12,12)');

        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '500');
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '700', {target: ':focus'});

        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-style', 'inset');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('opacity', '0.5');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-width', '8px');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-color', 'rgb(225,227,234)');
      });

      it('Should apply correct style rules when menu button variant is "destructive_secondary"', () => {
        render(<BaseMenu menuButtonVariant="destructive_secondary" />, {
          wrapper: initWrapper('menu'),
        });

        const nodeCalledMenu = screen.getByTestId('menu');
        const nodeCalledMenuButton = screen.getByTestId('menu-button');

        const nodeCalledMenuItem = screen.getByTestId('menu-item-1');
        const nodeCalledSubmenuButton = screen.getByTestId('submenu-button');
        const nodeCalledMenuSeparator = screen.getByTestId('menu-separator-1');

        expect(nodeCalledMenu).toHaveStyleRule('box-shadow', '0 16px 24px 0 rgba(18,28,45,0.2)');
        expect(nodeCalledMenu).toHaveStyleRule('border-radius', '0');

        expect(nodeCalledMenuButton).toHaveStyleRule('background-color', 'rgb(235,244,255)');

        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '500');
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '700', {target: ':focus'});

        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-style', 'inset');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('opacity', '0.5');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-width', '8px');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-color', 'rgb(225,227,234)');
      });
    });

    describe('Style overrides using a custom element name', () => {
      it('Should apply correct style rules when menu button variant is "primary"', () => {
        render(<BaseMenu menuButtonVariant="primary" element="CUSTOM" />, {
          wrapper: initWrapper('custom'),
        });

        const nodeCalledMenu = screen.getByTestId('menu');
        const nodeCalledMenuButton = screen.getByTestId('menu-button');

        const nodeCalledMenuItem = screen.getByTestId('menu-item-1');
        const nodeCalledSubmenuButton = screen.getByTestId('submenu-button');
        const nodeCalledMenuSeparator = screen.getByTestId('menu-separator-1');

        expect(nodeCalledMenu).toHaveStyleRule('box-shadow', '0 16px 24px 0 rgba(18,28,45,0.2)');
        expect(nodeCalledMenu).toHaveStyleRule('border-radius', '0');
        expect(nodeCalledMenuButton).toHaveStyleRule('background-color', 'rgb(2,99,224)');

        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '500');
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '700', {target: ':focus'});

        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-style', 'inset');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('opacity', '0.5');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-width', '8px');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-color', 'rgb(225,227,234)');
      });

      it('Should apply correct style rules when menu button variant is "secondary"', () => {
        render(<BaseMenu menuButtonVariant="secondary" element="CUSTOM" />, {
          wrapper: initWrapper('custom'),
        });

        const nodeCalledMenu = screen.getByTestId('menu');
        const nodeCalledMenuButton = screen.getByTestId('menu-button');

        const nodeCalledMenuItem = screen.getByTestId('menu-item-1');
        const nodeCalledSubmenuButton = screen.getByTestId('submenu-button');
        const nodeCalledMenuSeparator = screen.getByTestId('menu-separator-1');

        expect(nodeCalledMenu).toHaveStyleRule('box-shadow', '0 16px 24px 0 rgba(18,28,45,0.2)');
        expect(nodeCalledMenu).toHaveStyleRule('border-radius', '0');
        expect(nodeCalledMenuButton).toHaveStyleRule('background-color', 'rgb(244,124,34)');

        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '500');
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '700', {target: ':focus'});

        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-style', 'inset');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('opacity', '0.5');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-width', '8px');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-color', 'rgb(225,227,234)');
      });

      it('Should apply correct style rules when menu button variant is "destructive"', () => {
        render(<BaseMenu menuButtonVariant="destructive" element="CUSTOM" />, {
          wrapper: initWrapper('custom'),
        });

        const nodeCalledMenu = screen.getByTestId('menu');
        const nodeCalledMenuButton = screen.getByTestId('menu-button');

        const nodeCalledMenuItem = screen.getByTestId('menu-item-1');
        const nodeCalledSubmenuButton = screen.getByTestId('submenu-button');
        const nodeCalledMenuSeparator = screen.getByTestId('menu-separator-1');

        expect(nodeCalledMenu).toHaveStyleRule('box-shadow', '0 16px 24px 0 rgba(18,28,45,0.2)');
        expect(nodeCalledMenu).toHaveStyleRule('border-radius', '0');
        expect(nodeCalledMenuButton).toHaveStyleRule('background-color', 'rgb(49,12,12)');

        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '500');
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '700', {target: ':focus'});

        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-style', 'inset');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('opacity', '0.5');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-width', '8px');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-color', 'rgb(225,227,234)');
      });

      it('Should apply correct style rules when menu button variant is "destructive_secondary"', () => {
        render(<BaseMenu menuButtonVariant="destructive_secondary" element="CUSTOM" />, {
          wrapper: initWrapper('custom'),
        });

        const nodeCalledMenu = screen.getByTestId('menu');
        const nodeCalledMenuButton = screen.getByTestId('menu-button');

        const nodeCalledMenuItem = screen.getByTestId('menu-item-1');
        const nodeCalledSubmenuButton = screen.getByTestId('submenu-button');
        const nodeCalledMenuSeparator = screen.getByTestId('menu-separator-1');

        expect(nodeCalledMenu).toHaveStyleRule('box-shadow', '0 16px 24px 0 rgba(18,28,45,0.2)');
        expect(nodeCalledMenu).toHaveStyleRule('border-radius', '0');
        expect(nodeCalledMenuButton).toHaveStyleRule('background-color', 'rgb(235,244,255)');

        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '500');
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-width', '4px', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-style', 'solid', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('text-decoration', 'none', {target: ':focus'});
        expect(nodeCalledMenuItem).toHaveStyleRule('font-weight', '700', {target: ':focus'});

        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-width', '4px', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-style', 'solid', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('border-left-color', 'rgb(2,99,224)', {target: ':hover'});
        expect(nodeCalledSubmenuButton).toHaveStyleRule('text-decoration', 'none', {target: ':hover'});

        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-style', 'inset');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('opacity', '0.5');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-width', '8px');
        expect(nodeCalledMenuSeparator).toHaveStyleRule('border-color', 'rgb(225,227,234)');
      });
    });
  });
});

const NOOP = (): null => null;

jest.mock('../src/useMenuState', () => {
  return {
    useMenuState: (baseId: string): Record<string, any> => ({
      animated: false,
      animating: false,
      baseId,
      currentId: null,
      down: NOOP,
      first: NOOP,
      groups: [],
      hide: NOOP,
      items: [
        {disabled: false, groupId: undefined, id: 'primary-menu-customization-story-1', ref: {current: 'button'}},
        {disabled: false, groupId: undefined, id: 'primary-menu-customization-story-2', ref: {}},
        {disabled: false, groupId: undefined, id: 'primary-menu-customization-story-3', ref: {}},
        {disabled: false, groupId: undefined, id: 'primary-menu-customization-story-4', ref: {}},
        {disabled: false, groupId: undefined, id: 'primary-menu-customization-story-5', ref: {}},
        {disabled: false, groupId: undefined, id: 'primary-menu-customization-story-6', ref: {}},
      ],
      last: NOOP,
      loop: false,
      modal: false,
      move: NOOP,
      next: NOOP,
      orientation: 'vertical',
      place: NOOP,
      placement: 'bottom-start',
      previous: NOOP,
      registerGroup: NOOP,
      registerItem: NOOP,
      reset: NOOP,
      rtl: false,
      setAnimated: NOOP,
      setBaseId: NOOP,
      setCurrentId: NOOP,
      setLoop: NOOP,
      setModal: NOOP,
      setOrientation: NOOP,
      setRTL: NOOP,
      setShift: NOOP,
      setVisible: NOOP,
      setWrap: NOOP,
      shift: false,
      show: NOOP,
      sort: NOOP,
      stopAnimation: NOOP,
      toggle: NOOP,
      unregisterGroup: NOOP,
      unregisterItem: NOOP,
      unstable_arrowRef: {current: null},
      unstable_arrowStyles: {},
      unstable_disclosureRef: {current: undefined},
      unstable_hasActiveWidget: false,
      unstable_idCountRef: {current: 6},
      unstable_includesBaseElement: false,
      unstable_moves: 2,
      unstable_originalPlacement: 'bottom-start',
      unstable_popoverRef: {current: undefined},
      unstable_referenceRef: {current: undefined},
      unstable_setHasActiveWidget: NOOP,
      unstable_setIncludesBaseElement: NOOP,
      unstable_setValue: NOOP,
      unstable_setVirtual: NOOP,
      unstable_update: NOOP,
      unstable_values: {},
      unstable_virtual: false,
      up: NOOP,
      visible: true,
      wrap: false,
    }),
  };
});
