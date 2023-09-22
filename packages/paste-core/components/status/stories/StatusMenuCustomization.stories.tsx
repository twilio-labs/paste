import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { Box } from '@twilio-paste/box';
import { useTheme } from '@twilio-paste/theme';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { PasteCustomCSS } from '@twilio-paste/customization';
import { useUID } from '@twilio-paste/uid-library';

import {
  StatusMenu,
  StatusMenuBadge,
  StatusMenuItem,
  StatusMenuItemCheckbox,
  StatusMenuItemRadio,
  StatusMenuItemChild,
  useStatusMenuState,
} from '../src';
import type { StatusMenuBadgeProps } from '../src';

type ElementOverrides = Record<string, PasteCustomCSS>;

export const initStyles = (element: string): ElementOverrides => ({
  [`${element}_BADGE`]: {
    variants: {
      ProcessSuccess: { color: 'colorText', backgroundColor: 'colorBackgroundNeutralWeakest' },
      ProcessNeutral: { color: 'colorText', backgroundColor: 'colorBackgroundNeutralWeakest' },
      ConnectivityAvailable: { backgroundColor: 'colorBackgroundNeutralWeakest', color: 'colorTextWarningStrong' },
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
  [`${element}_BADGE_BUTTON`]: {
    backgroundColor: 'colorBackgroundErrorStrong',
  },
  [`${element}`]: {
    borderColor: 'colorBorderWarning',
  },
  [`${element}_ITEM`]: {
    borderColor: 'colorBorderSuccess',
  },
  [`${element}_ITEM_CHECKBOX`]: {
    fontWeight: 'fontWeightBold',
  },
  [`${element}_ITEM_RADIO`]: {
    color: 'colorTextWarningStrong',
  },
  [`${element}_ITEM_CHILD`]: {
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
  title: 'Components/Status/MenuStatus/Customization',
  component: StatusMenu,
  parameters: {
    // Sets a delay for the component's stories
    chromatic: { delay: 3000, diffThreshold: 0.2 },
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
  excludeStories: ['initStyles', 'BaseMenu'],
};

export const BaseMenu: React.FC<
  React.PropsWithChildren<{ menuBadgeStatusVariant?: StatusMenuBadgeProps['variant']; element?: string }>
> = React.memo(function BaseMenu({ menuBadgeStatusVariant = 'ProcessError', element }) {
  const uniqueBaseID = useUID();
  const menu = useStatusMenuState({
    visible: true,
    baseId: `${uniqueBaseID}-${menuBadgeStatusVariant}-menu-customization-story`,
  });

  const onClick = React.useCallback(() => {
    menu.hide();
  }, [menu]);
  return (
    <>
      <StatusMenuBadge
        {...menu}
        i18nButtonLabel="Open menu"
        element={getElementName(element, 'BADGE')}
        variant={menuBadgeStatusVariant}
        data-testid="menu-badge-status"
      >
        Preferences
      </StatusMenuBadge>
      <StatusMenu {...menu} element={getElementName(element)} aria-label="Preferences" data-testid="menu">
        <StatusMenuItem data-testid="menu-item-1" {...menu} element={getElementName(element, 'ITEM')} onClick={onClick}>
          <StatusMenuItemChild
            variant="ConnectivityAvailable"
            element={getElementName(element, 'ITEM_CHILD')}
            data-testid="menu-child-item-1"
          >
            User info
          </StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem data-testid="menu-item-2" {...menu} element={getElementName(element, 'ITEM')} onClick={onClick}>
          <StatusMenuItemChild
            variant="ProcessError"
            element={getElementName(element, 'ITEM_CHILD')}
            data-testid="menu-child-item-2"
          >
            Extensions
          </StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem data-testid="menu-item-3" {...menu} element={getElementName(element, 'ITEM')} onClick={onClick}>
          <StatusMenuItemChild
            variant="ProcessInProgress"
            element={getElementName(element, 'ITEM_CHILD')}
            data-testid="menu-child-item-3"
          >
            Keyboard shortcuts
          </StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItemCheckbox
          {...menu}
          element={getElementName(element, 'ITEM_CHECKBOX')}
          onClick={onClick}
          checked
          data-testid="menu-item-4"
        >
          <StatusMenuItemChild
            variant="ProcessInProgress"
            element={getElementName(element, 'ITEM_CHILD')}
            data-testid="menu-child-item-4"
          >
            Checkbox
          </StatusMenuItemChild>
        </StatusMenuItemCheckbox>
        <StatusMenuItemRadio
          {...menu}
          element={getElementName(element, 'ITEM_RADIO')}
          checked
          onClick={onClick}
          data-testid="menu-item-5"
        >
          <StatusMenuItemChild
            variant="ProcessInProgress"
            element={getElementName(element, 'ITEM_CHILD')}
            data-testid="menu-child-item-5"
          >
            Radio
          </StatusMenuItemChild>
        </StatusMenuItemRadio>
      </StatusMenu>
    </>
  );
});

export const WithDefaultElementName: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={initStyles('STATUS_MENU')}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <BaseMenu element="STATUS_MENU" menuBadgeStatusVariant="ProcessSuccess" />
        <BaseMenu element="STATUS_MENU" menuBadgeStatusVariant="ProcessNeutral" />
        <BaseMenu element="STATUS_MENU" menuBadgeStatusVariant="ConnectivityAvailable" />
        <BaseMenu element="STATUS_MENU" menuBadgeStatusVariant="ConnectivityOffline" />
        <BaseMenu element="STATUS_MENU" menuBadgeStatusVariant="ConnectivityUnavailable" />
      </Box>
    </CustomizationProvider>
  );
};

export const WithCustomElementName: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
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
