import * as React from 'react';
import {render, screen} from '@testing-library/react';
import type {RenderOptions} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {initStyles, BaseMenu} from '../stories/menu-badge-status-customization.stories';

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
      const menuButton = screen.getByTestId('menu-badge-status');
      const menuItem = screen.getByTestId('menu-item-1');
      expect(menuButton.getAttribute(PASTE_ELEMENT)).toEqual('MENU_BADGE_STATUS_BUTTON');
      expect(menuItem.getAttribute(PASTE_ELEMENT)).toEqual('MENU_ITEM_STATUS');
      expect(menuButton.parentElement?.parentElement?.parentElement?.getAttribute(PASTE_ELEMENT)).toEqual(
        'MENU_BADGE_STATUS'
      );
    });

    it('Should add the correct "data-paste-element" attribute when element prop is "CUSTOM_MENU"', () => {
      render(<BaseMenu element="CUSTOM_MENU" />);

      const menuButton = screen.getByTestId('menu-badge-status');
      const menuItem = screen.getByTestId('menu-item-1');
      expect(menuButton.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_BADGE_STATUS_BUTTON');
      expect(menuItem.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_ITEM_STATUS');
      expect(menuButton.parentElement?.parentElement?.parentElement?.getAttribute(PASTE_ELEMENT)).toEqual(
        'CUSTOM_MENU_BADGE_STATUS'
      );
    });
  });

  describe('Custom styles', () => {
    describe('Style overrides using the default element name', () => {
      it('Should apply correct style rules', () => {
        render(<BaseMenu menuBadgeStatusVariant="ProcessSuccess" />, {
          wrapper: initWrapper('menu'),
        });

        const nodeCalledMenuBadge = screen.getByTestId('menu-badge-status');
        const nodeCalledMenuItemStatus = screen.getByTestId('menu-item-1');
        expect(nodeCalledMenuBadge).toHaveStyleRule('background-color', 'rgb(117, 12, 12)');
        expect(nodeCalledMenuItemStatus).toHaveStyleRule('background-color', 'rgb(235, 244, 255)');
      });
    });

    describe('Style overrides using a custom element name', () => {
      it('Should apply correct style rules', () => {
        render(<BaseMenu menuBadgeStatusVariant="ProcessSuccess" element="CUSTOM" />, {
          wrapper: initWrapper('custom'),
        });

        const nodeCalledMenuButton = screen.getByTestId('menu-badge-status');
        const nodeCalledMenuItemStatus = screen.getByTestId('menu-item-1');
        expect(nodeCalledMenuButton).toHaveStyleRule('background-color', 'rgb(117, 12, 12)');
        expect(nodeCalledMenuItemStatus).toHaveStyleRule('background-color', 'rgb(235, 244, 255)');
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
