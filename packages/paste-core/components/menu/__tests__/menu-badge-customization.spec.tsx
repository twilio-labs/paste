import * as React from 'react';
import {render, screen} from '@testing-library/react';
import type {RenderOptions} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {initStyles, BaseMenu} from '../stories/menu-badge-customization.stories';

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
      const menuButton = screen.getByTestId('menu-badge');
      expect(menuButton.getAttribute(PASTE_ELEMENT)).toEqual('MENU_BADGE_BUTTON');
      expect(menuButton.parentElement?.parentElement?.getAttribute(PASTE_ELEMENT)).toEqual('MENU_BADGE');
    });

    it('Should add the correct "data-paste-element" attribute when element prop is "CUSTOM_MENU"', () => {
      render(<BaseMenu element="CUSTOM_MENU" />);

      const menuButton = screen.getByTestId('menu-badge');
      expect(menuButton.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_BADGE_BUTTON');
      expect(menuButton.parentElement?.parentElement?.getAttribute(PASTE_ELEMENT)).toEqual('CUSTOM_MENU_BADGE');
    });
  });

  describe('Custom styles', () => {
    describe('Style overrides using the default element name', () => {
      it('Should apply correct style rules', () => {
        render(<BaseMenu menuBadgeVariant="decorative10" />, {
          wrapper: initWrapper('menu'),
        });

        const nodeCalledMenuBadge = screen.getByTestId('menu-badge');
        expect(nodeCalledMenuBadge).toHaveStyleRule('background-color', 'rgb(117, 12, 12)');
      });
    });

    describe('Style overrides using a custom element name', () => {
      it('Should apply correct style rules', () => {
        render(<BaseMenu menuBadgeVariant="decorative10" element="CUSTOM" />, {
          wrapper: initWrapper('custom'),
        });

        const nodeCalledMenuButton = screen.getByTestId('menu-badge');

        expect(nodeCalledMenuButton).toHaveStyleRule('background-color', 'rgb(117, 12, 12)');
      });
    });
  });
});
