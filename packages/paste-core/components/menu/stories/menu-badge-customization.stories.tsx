import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { Box } from '@twilio-paste/box';
import { useTheme } from '@twilio-paste/theme';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { PasteCustomCSS } from '@twilio-paste/customization';
import { ProductSettingsIcon } from '@twilio-paste/icons/esm/ProductSettingsIcon';
import { useUID } from '@twilio-paste/uid-library';

import { Menu, MenuBadge, SubMenuButton, MenuGroup, MenuItem, MenuSeparator, useMenuState } from '../src';
import type { MenuBadgeProps } from '../src';

type ElementOverrides = Record<string, PasteCustomCSS>;

export const initStyles = (element: string): ElementOverrides => ({
  [`${element}_BADGE`]: {
    variants: {
      decorative10: { color: 'colorText', backgroundColor: 'colorBackgroundNeutralWeakest' },
      error: { color: 'colorText', backgroundColor: 'colorBackgroundNeutralWeakest' },
      neutral: { backgroundColor: 'colorBackgroundNeutralWeakest', color: 'colorTextWarningStrong' },
      subaccount: {
        padding: 'space40',
        borderRadius: 'borderRadiusCircle',
        backgroundColor: 'colorBackgroundNeutralWeakest',
      },
      new: {
        padding: 'space40',
        borderRadius: 'borderRadiusCircle',
        backgroundColor: 'colorBackgroundDestructiveWeak',
        color: 'colorTextWarningStrong',
        fontWeight: 'fontWeightBold',
      },
    },
  },
  [`${element}_BADGE_BUTTON`]: { backgroundColor: 'colorBackgroundErrorStrong' },
});

const getElementName = (elementName: string | undefined, suffix?: string, prefix?: string): string | undefined => {
  const end = suffix ? `_${suffix}` : '';
  const start = prefix ? `${prefix}` : '';
  return elementName != null ? `${start}${elementName}${end}` : undefined;
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Menu/MenuBadge/Customization',
  component: Menu,
  subcomponents: { MenuBadge, SubMenuButton, MenuGroup, MenuItem, MenuSeparator },
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

export const BaseMenu: React.FC<
  React.PropsWithChildren<{ menuBadgeVariant?: MenuBadgeProps['variant']; element?: string }>
> = React.memo(function BaseMenu({ menuBadgeVariant = 'decorative10', element }) {
  const uniqueBaseID = useUID();
  const menu = useMenuState({
    baseId: `${uniqueBaseID}-${menuBadgeVariant}-menu-customization-story`,
  });

  const subMenu = useMenuState({ baseId: `${uniqueBaseID}-${menuBadgeVariant}-menu-submenu` });
  const onClick = React.useCallback(() => {
    menu.hide();
  }, [menu]);
  return (
    <>
      <MenuBadge
        {...menu}
        i18nButtonLabel="Open menu"
        element={getElementName(element, 'BADGE')}
        variant={menuBadgeVariant}
        data-testid="menu-badge"
      >
        Preferences
      </MenuBadge>
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
      </Menu>
    </>
  );
});

export const WithDefaultElementName: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider disableAnimations={isTestEnvironment} theme={currentTheme} elements={initStyles('MENU')}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <BaseMenu menuBadgeVariant="decorative10" />
        <BaseMenu menuBadgeVariant="error" />
        <BaseMenu menuBadgeVariant="neutral" />
        <BaseMenu menuBadgeVariant="subaccount" />
        <BaseMenu menuBadgeVariant="new" />
      </Box>
    </CustomizationProvider>
  );
};

export const WithCustomElementName: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider disableAnimations={isTestEnvironment} theme={currentTheme} elements={initStyles('CUSTOM')}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <BaseMenu menuBadgeVariant="decorative10" element="CUSTOM" />
        <BaseMenu menuBadgeVariant="error" element="CUSTOM" />
        <BaseMenu menuBadgeVariant="neutral" element="CUSTOM" />
        <BaseMenu menuBadgeVariant="subaccount" element="CUSTOM" />
        <BaseMenu menuBadgeVariant="new" element="CUSTOM" />
      </Box>
    </CustomizationProvider>
  );
};
