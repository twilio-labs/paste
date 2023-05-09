import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {ProductSettingsIcon} from '@twilio-paste/icons/esm/ProductSettingsIcon';
import {useUID} from '@twilio-paste/uid-library';

import {Menu, MenuBadgeStatus, SubMenuButton, MenuGroup, MenuItemStatus, MenuSeparator, useMenuState} from '../src';
import type {MenuBadgeStatusProps} from '../src';

type ElementOverrides = Record<string, PasteCustomCSS>;

export const initStyles = (element: string): ElementOverrides => ({
  [`${element}_BADGE_STATUS`]: {
    variants: {
      ProcessSuccess: {color: 'colorText', backgroundColor: 'colorBackgroundNeutralWeakest'},
      ProcessNeutral: {color: 'colorText', backgroundColor: 'colorBackgroundNeutralWeakest'},
      ConnectivityAvailable: {backgroundColor: 'colorBackgroundNeutralWeakest', color: 'colorTextWarningStrong'},
      ConnectivityOffline: {
        padding: 'space40',
        borderRadius: 'borderRadiusCircle',
        backgroundColor: 'colorBackgroundNeutralWeakest',
      },
      ConnectivityUnavailable: {
        padding: 'space40',
        borderRadius: 'borderRadiusCircle',
        backgroundColor: 'colorBackgroundDestructiveWeak',
        color: 'colorTextWarningStrong',
        fontWeight: 'fontWeightBold',
      },
    },
  },
  [`${element}_BADGE_STATUS_BUTTON`]: {
    backgroundColor: 'colorBackgroundErrorStrong',
  },
  [`${element}_ITEM_STATUS`]: {
    backgroundColor: 'colorBackgroundNeutralWeakest',
    variants: {
      ConnectivityAvailable: {
        fontStyle: 'italic',
      },
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
  title: 'Components/Menu/MenuStatus/Customization',
  component: Menu,
  subcomponents: {MenuBadgeStatus, SubMenuButton, MenuGroup, MenuItemStatus, MenuSeparator},
  parameters: {
    // Sets a delay for the component's stories
    chromatic: {delay: 3000},
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
  excludeStories: ['initStyles', 'BaseMenu'],
};

export const BaseMenu: React.FC<
  React.PropsWithChildren<{menuBadgeStatusVariant?: MenuBadgeStatusProps['variant']; element?: string}>
> = React.memo(function BaseMenu({menuBadgeStatusVariant = 'ProcessError', element}) {
  const uniqueBaseID = useUID();
  const menu = useMenuState({
    visible: true,
    baseId: `${uniqueBaseID}-${menuBadgeStatusVariant}-menu-customization-story`,
  });

  const subMenu = useMenuState({baseId: `${uniqueBaseID}-${menuBadgeStatusVariant}-menu-submenu`});
  const onClick = React.useCallback(() => {
    menu.hide();
  }, [menu]);
  return (
    <>
      <MenuBadgeStatus
        {...menu}
        i18nButtonLabel="Open menu"
        element={getElementName(element, 'BADGE_STATUS')}
        variant={menuBadgeStatusVariant}
        data-testid="menu-badge-status"
      >
        Preferences
      </MenuBadgeStatus>
      <Menu {...menu} element={getElementName(element)} aria-label="Preferences" data-testid="menu">
        <MenuGroup
          element={getElementName(element, 'GROUP')}
          icon={<ProductSettingsIcon decorative />}
          label="Settings"
          data-testid="menu-group-settings"
        >
          <MenuItemStatus
            {...menu}
            variant="ConnectivityAvailable"
            element={getElementName(element, 'ITEM_STATUS')}
            onClick={onClick}
            data-testid="menu-item-1"
          >
            User info
          </MenuItemStatus>
          <MenuItemStatus
            {...menu}
            variant="ProcessError"
            element={getElementName(element, 'ITEM_STATUS')}
            onClick={onClick}
            data-testid="menu-item-2"
          >
            Extensions
          </MenuItemStatus>
          {/* submenu */}
          <SubMenuButton {...subMenu} element={getElementName(element, 'BUTTON', 'SUB')} data-testid="submenu-button">
            Advanced settings
          </SubMenuButton>
          <Menu {...subMenu} aria-label="Advanced settings" element={getElementName(element)} data-testid="submenu">
            <MenuItemStatus
              variant="ProcessInProgress"
              {...subMenu}
              element={getElementName(element, 'ITEM_STATUS')}
              data-testid="submenu-item-1"
            >
              Keyboard shortcuts
            </MenuItemStatus>
          </Menu>
          {/* submenu */}
        </MenuGroup>
      </Menu>
    </>
  );
});

export const WithDefaultElementName: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider disableAnimations={isTestEnvironment} theme={currentTheme} elements={initStyles('MENU')}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <BaseMenu menuBadgeStatusVariant="ProcessSuccess" />
        <BaseMenu menuBadgeStatusVariant="ProcessNeutral" />
        <BaseMenu menuBadgeStatusVariant="ConnectivityAvailable" />
        <BaseMenu menuBadgeStatusVariant="ConnectivityOffline" />
        <BaseMenu menuBadgeStatusVariant="ConnectivityUnavailable" />
      </Box>
    </CustomizationProvider>
  );
};

export const WithCustomElementName: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider disableAnimations={isTestEnvironment} theme={currentTheme} elements={initStyles('CUSTOM')}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <BaseMenu menuBadgeStatusVariant="ProcessSuccess" element="CUSTOM" />
        <BaseMenu menuBadgeStatusVariant="ProcessNeutral" element="CUSTOM" />
        <BaseMenu menuBadgeStatusVariant="ConnectivityAvailable" element="CUSTOM" />
        <BaseMenu menuBadgeStatusVariant="ConnectivityOffline" element="CUSTOM" />
        <BaseMenu menuBadgeStatusVariant="ConnectivityUnavailable" element="CUSTOM" />
      </Box>
    </CustomizationProvider>
  );
};
