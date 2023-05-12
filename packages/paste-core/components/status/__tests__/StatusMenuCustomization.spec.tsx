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
        render(<BaseMenu />);
      });
      const menuButton = screen.getByTestId('menu-badge-status');
      const menuItem = screen.getByTestId('menu-item-1');
      expect(menuButton.getAttribute(PASTE_ELEMENT)).toEqual('MENU_BADGE_STATUS_BUTTON');
      expect(menuItem.getAttribute(PASTE_ELEMENT)).toEqual('MENU_ITEM_STATUS');
      expect(menuButton.parentElement?.parentElement?.getAttribute(PASTE_ELEMENT)).toEqual('MENU_BADGE_STATUS');
    });

    it('Should add the correct "data-paste-element" attribute when element prop is "CUSTOM_MENU"', async () => {
      await act(async () => {
        render(<BaseMenu element="CUSTOM_MENU" />);
      });

      const menuButton = screen.getByTestId('menu-badge-status');
      const menuItem = screen.getByTestId('menu-item-1');
      expect(menuButton.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_BADGE_STATUS_BUTTON');
      expect(menuItem.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM_STATUS');
      expect(menuButton.parentElement?.parentElement?.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_BADGE_STATUS');
    });
  });

  describe('Custom styles', () => {
    describe('Style overrides using the default element name', () => {
      it('Should apply correct style rules', async () => {
        await act(async () => {
          render(<BaseMenu menuBadgeStatusVariant="ProcessSuccess" />, {
            wrapper: initWrapper('menu'),
          });
        });

        const nodeCalledMenuBadge = screen.getByTestId('menu-badge-status');
        const nodeCalledMenuItemStatus = screen.getByTestId('menu-item-1');
        expect(nodeCalledMenuBadge).toHaveStyleRule('background-color', 'rgb(117, 12, 12)');
        expect(nodeCalledMenuItemStatus).toHaveStyleRule('background-color', 'rgb(235, 244, 255)');
      });
    });

    describe('Style overrides using a custom element name', () => {
      it('Should apply correct style rules', async () => {
        await act(async () => {
          render(<BaseMenu menuBadgeStatusVariant="ProcessSuccess" element="CUSTOM" />, {
            wrapper: initWrapper('custom'),
          });
        });

        const nodeCalledMenuButton = screen.getByTestId('menu-badge-status');
        const nodeCalledMenuItemStatus = screen.getByTestId('menu-item-1');
        expect(nodeCalledMenuButton).toHaveStyleRule('background-color', 'rgb(117, 12, 12)');
        expect(nodeCalledMenuItemStatus).toHaveStyleRule('background-color', 'rgb(235, 244, 255)');
      });
    });
  });
});
