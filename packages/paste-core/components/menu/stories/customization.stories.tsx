import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {SearchIcon} from '@twilio-paste/icons/esm/SearchIcon';
import {SupportIcon} from '@twilio-paste/icons/esm/SupportIcon';
import {ProductSettingsIcon} from '@twilio-paste/icons/esm/ProductSettingsIcon';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';

import type {ButtonProps} from '@twilio-paste/button';

import {Menu, MenuButton, SubMenuButton, MenuGroup, MenuItem, MenuSeparator, useMenuState} from '../src';

type ButtonVariants = ButtonProps['variant'];
type ElementOverrides = Record<string, PasteCustomCSS>;

export const initStyles = (element: string): ElementOverrides => ({
  [element]: {
    boxShadow: 'shadowHigh',
    borderRadius: 'borderRadius0',
  },
  [`${element}_BUTTON`]: {
    variants: {
      secondary: {backgroundColor: 'colorBackgroundBusy'},
      destructive: {backgroundColor: 'colorBackgroundDestructiveDarkest'},
      destructive_secondary: {backgroundColor: 'colorBackgroundNeutralWeakest', color: 'colorTextWarningStrong'},
      link: {padding: 'space40', borderRadius: 'borderRadiusCircle', backgroundColor: 'colorBackgroundNeutralWeakest'},
      destructive_link: {
        padding: 'space40',
        borderRadius: 'borderRadiusCircle',
        backgroundColor: 'colorBackgroundDestructiveLight',
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
  subcomponents: {MenuButton, SubMenuButton, MenuGroup, MenuItem, MenuSeparator},
  parameters: {
    // Sets a delay for the component's stories
    chromatic: {delay: 3000},
  },
  excludeStories: ['initStyles', 'BaseMenu'],
};

export const BaseMenu: React.FC<{menuButtonVariant?: ButtonVariants; element?: string}> = React.memo(function BaseMenu({
  menuButtonVariant = 'primary',
  element,
}) {
  const menu = useMenuState({
    visible: true,
    baseId: `${menuButtonVariant}-menu-customization-story`,
  });

  const subMenu = useMenuState({baseId: `${menuButtonVariant}-menu-submenu`});
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
      </Menu>
    </>
  );
});

export const WithDefaultElementName: React.FC = () => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider theme={currentTheme} elements={initStyles('MENU')}>
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

export const WithCustomElementName: React.FC = () => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider theme={currentTheme} elements={initStyles('CUSTOM')}>
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
