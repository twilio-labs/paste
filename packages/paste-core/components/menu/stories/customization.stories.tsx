import type { StoryFn } from '@storybook/react';
import { Box } from '@twilio-paste/box';
import type { ButtonProps } from '@twilio-paste/button';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { PasteCustomCSS } from '@twilio-paste/customization';
import { ChevronDownIcon } from '@twilio-paste/icons/esm/ChevronDownIcon';
import { ProductSettingsIcon } from '@twilio-paste/icons/esm/ProductSettingsIcon';
import { SearchIcon } from '@twilio-paste/icons/esm/SearchIcon';
import { SupportIcon } from '@twilio-paste/icons/esm/SupportIcon';
import { useTheme } from '@twilio-paste/theme';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuItemCheckbox,
  MenuItemRadio,
  MenuSeparator,
  SubMenuButton,
  useMenuState,
} from '../src';

type ButtonVariants = ButtonProps['variant'];
type ElementOverrides = Record<string, PasteCustomCSS>;

export const initStyles = (element: string): ElementOverrides => ({
  [element]: {
    boxShadow: 'shadowHigh',
    borderRadius: 'borderRadius0',
  },
  [`${element}_BUTTON`]: {
    variants: {
      secondary: { color: 'colorText', backgroundColor: 'colorBackgroundNeutralWeakest' },
      destructive: { color: 'colorText', backgroundColor: 'colorBackgroundNeutralWeakest' },
      destructive_secondary: { backgroundColor: 'colorBackgroundNeutralWeakest', color: 'colorTextWarningStrong' },
      link: {
        padding: 'space40',
        borderRadius: 'borderRadiusCircle',
        backgroundColor: 'colorBackgroundNeutralWeakest',
      },
      destructive_link: {
        padding: 'space40',
        borderRadius: 'borderRadiusCircle',
        backgroundColor: 'colorBackgroundDestructiveWeak',
        color: 'colorTextWarningStrong',
        fontWeight: 'fontWeightBold',
      },
    },
  },
  [`SUB${element}_BUTTON`]: {
    ':hover': {
      borderLeftWidth: 'borderWidth30',
      borderLeftStyle: 'solid',
      color: 'colorTextLink',
      borderLeftColor: 'colorBorderPrimary',
      textDecoration: 'none',
    },
    ':disabled': {
      borderLeftWidth: 'borderWidth0',
    },
  },
  [`SUB${element}_BUTTON_MEDIA_FIGURE`]: {
    ':hover': {
      color: 'currentColor',
    },
  },
  [`SUB${element}_BUTTON_ICON`]: {
    paddingLeft: 'space0',
  },
  [`${element}_SEPARATOR`]: {
    borderStyle: 'inset',
    opacity: 0.5,
    borderWidth: 'borderWidth40',
    borderColor: 'colorBorderWeaker',
  },
  [`${element}_ITEM`]: {
    fontWeight: 'fontWeightMedium',
    ':hover': {
      borderLeftWidth: 'borderWidth30',
      borderLeftStyle: 'solid',
      borderLeftColor: 'colorBorderPrimary',
      textDecoration: 'none',
    },
    ':focus': {
      borderLeftWidth: 'borderWidth30',
      borderLeftStyle: 'solid',
      borderLeftColor: 'colorBorderPrimary',
      textDecoration: 'none',
      fontWeight: 'fontWeightBold',
    },
    ':disabled': {
      borderLeftWidth: 'borderWidth0',
    },
  },
  [`${element}_ITEM_CHECKBOX`]: {
    backgroundColor: 'colorBackgroundDestructiveWeakest',
    fontStyle: 'italic',
  },
  [`${element}_ITEM_RADIO`]: {
    backgroundColor: 'colorBackgroundSuccessWeakest',
    fontStyle: 'italic',
  },
});

const getElementName = (elementName: string | undefined, suffix?: string, prefix?: string): string | undefined => {
  const end = suffix ? `_${suffix}` : '';
  const start = prefix ? `${prefix}` : '';
  return elementName != null ? `${start}${elementName}${end}` : undefined;
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Menu/Customization',
  component: Menu,
  subcomponents: { MenuButton, SubMenuButton, MenuGroup, MenuItem, MenuSeparator },
  parameters: {
    // Sets a delay for the component's stories
    chromatic: { delay: 3000 },
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
  excludeStories: ['initStyles', 'BaseMenu'],
};

export const BaseMenu: React.FC<React.PropsWithChildren<{ menuButtonVariant?: ButtonVariants; element?: string }>> =
  React.memo(function BaseMenu({ menuButtonVariant = 'primary', element }) {
    const uniqueBaseID = useUID();
    const menu = useMenuState({
      visible: true,
      baseId: `${uniqueBaseID}-${menuButtonVariant}-menu-customization-story`,
    });

    const subMenu = useMenuState({ baseId: `${uniqueBaseID}-${menuButtonVariant}-menu-submenu` });
    const onClick = React.useCallback(() => {
      menu.hide();
    }, [menu.hide]);
    return (
      <>
        <MenuButton
          {...menu}
          element={getElementName(element, 'BUTTON')}
          variant={menuButtonVariant}
          data-testid="menu-button"
        >
          Preferences <ChevronDownIcon decorative />
        </MenuButton>
        <Menu {...menu} element={getElementName(element)} aria-label="Preferences" data-testid="menu">
          <MenuGroup
            element={getElementName(element, 'GROUP')}
            icon={<ProductSettingsIcon decorative />}
            label="Settings"
            data-testid="menu-group-settings"
          >
            <MenuItem {...menu} element={getElementName(element, 'ITEM')} onClick={onClick} data-testid="menu-item-1">
              User info
            </MenuItem>
            <MenuItem {...menu} element={getElementName(element, 'ITEM')} onClick={onClick} data-testid="menu-item-2">
              Extensions
            </MenuItem>
            {/* submenu */}
            <SubMenuButton {...subMenu} element={getElementName(element, 'BUTTON', 'SUB')} data-testid="submenu-button">
              Advanced settings
            </SubMenuButton>
            <Menu {...subMenu} aria-label="Advanced settings" element={getElementName(element)} data-testid="submenu">
              <MenuItem {...subMenu} element={getElementName(element, 'ITEM')} data-testid="submenu-item-1">
                Keyboard shortcuts
              </MenuItem>
            </Menu>
            {/* submenu */}
          </MenuGroup>
          <MenuSeparator {...menu} element={getElementName(element, 'SEPARATOR')} data-testid="menu-separator-1" />
          <MenuGroup
            element={getElementName(element, 'GROUP')}
            icon={<SearchIcon decorative />}
            label="Search Options"
            data-testid="menu-group-search-options"
          >
            <MenuItem {...menu} element={getElementName(element, 'ITEM')} onClick={onClick} data-testid="menu-item-3">
              Google
            </MenuItem>

            <MenuItem {...menu} element={getElementName(element, 'ITEM')} disabled data-testid="menu-item-4">
              Bing
            </MenuItem>
          </MenuGroup>
          <MenuSeparator {...menu} element={getElementName(element, 'SEPARATOR')} data-testid="menu-separator-2" />
          <MenuGroup
            element={getElementName(element, 'GROUP')}
            icon={<SupportIcon decorative />}
            label="Help"
            data-testid="menu-group-help"
          >
            <MenuItem
              {...menu}
              element={getElementName(element, 'ITEM')}
              href=""
              onClick={onClick}
              data-testid="menu-item-5"
            >
              Contact support
            </MenuItem>
            <MenuItem
              {...menu}
              element={getElementName(element, 'ITEM')}
              href=""
              onClick={onClick}
              data-testid="menu-item-6"
            >
              View FAQ
            </MenuItem>
          </MenuGroup>
          <MenuItemCheckbox
            {...menu}
            element={getElementName(element, 'ITEM_CHECKBOX')}
            name="formatting"
            value="wrap"
            data-testid="menu-item-7"
          >
            Check Wrap
          </MenuItemCheckbox>
          <MenuItemRadio
            {...menu}
            element={getElementName(element, 'ITEM_RADIO')}
            name="display-view"
            value="wrap"
            data-testid="menu-item-8"
          >
            Radio Wrap
          </MenuItemRadio>
        </Menu>
      </>
    );
  });

export const WithDefaultElementName: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider disableAnimations={isTestEnvironment} theme={currentTheme} elements={initStyles('MENU')}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <BaseMenu menuButtonVariant="primary" />
        <BaseMenu menuButtonVariant="secondary" />
        <BaseMenu menuButtonVariant="destructive" />
        <BaseMenu menuButtonVariant="destructive_secondary" />
        <BaseMenu menuButtonVariant="link" />
      </Box>
    </CustomizationProvider>
  );
};

export const WithCustomElementName: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider disableAnimations={isTestEnvironment} theme={currentTheme} elements={initStyles('CUSTOM')}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <BaseMenu menuButtonVariant="primary" element="CUSTOM" />
        <BaseMenu menuButtonVariant="secondary" element="CUSTOM" />
        <BaseMenu menuButtonVariant="destructive" element="CUSTOM" />
        <BaseMenu menuButtonVariant="destructive_secondary" element="CUSTOM" />
        <BaseMenu menuButtonVariant="link" element="CUSTOM" />
      </Box>
    </CustomizationProvider>
  );
};
