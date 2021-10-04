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

const initStyles = (element: string): ElementOverrides => ({
  [element]: {
    boxShadow: 'shadowHigh',
    borderRadius: 'borderRadius0',
  },
  [`${element}_GROUP`]: {},
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
  [`SUB_${element}_BUTTON`]: {
    ':hover': {
      borderLeftWidth: 'borderWidth30',
      borderLeftStyle: 'solid',
      color: 'colorTextLink',
      borderLeftColor: 'colorBorderPrimary',
      textDecoration: 'none',
      ':disabled': {
        borderLeftWidth: 'borderWidth0',
      },
    },
  },
  // [`SUB_${element}_MEDIA_OBJECT`]: {},
  [`SUB_${element}_MEDIA_FIGURE`]: {
    ':hover': {
      color: 'currentColor',
    },
  },
  [`SUB_${element}_ICON`]: {
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
      ':disabled': {
        borderLeftWidth: 'borderWidth0',
      },
    },
    ':focus': {
      borderLeftWidth: 'borderWidth30',
      borderLeftStyle: 'solid',
      borderLeftColor: 'colorBorderPrimary',
      textDecoration: 'none',
      fontWeight: 'fontWeightBold',
    },
  },
});

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Menu/Customization',
  component: Menu,
  subcomponents: {MenuButton, SubMenuButton, MenuGroup, MenuItem, MenuSeparator},
  parameters: {
    // Sets a delay for the component's stories
    chromatic: {delay: 3000},
  },
};

const PreferencesSubMenu = React.forwardRef<HTMLButtonElement, {element: string}>(({element, ...props}, ref) => {
  const menu = useMenuState();
  return (
    <>
      <SubMenuButton ref={ref} {...menu} {...props} element={element}>
        Advanced settings
      </SubMenuButton>
      <Menu {...menu} aria-label="Advanced settings" element={element}>
        <MenuItem {...menu} element={`${element}_ITEM`}>
          Keyboard shortcuts
        </MenuItem>
      </Menu>
    </>
  );
});

const BaseMenu: React.FC<{menuButtonVariant?: ButtonVariants; element?: string}> = React.memo(
  ({menuButtonVariant = 'primary', element = 'MENU'}) => {
    const currentTheme = useTheme();
    const menu = useMenuState({
      visible: true,
      baseId: `${menuButtonVariant}-${element.toLowerCase()}-customization-story`,
    });
    const onClick = React.useCallback(() => {
      menu.hide();
    }, [menu.hide]);
    return (
      <CustomizationProvider theme={currentTheme} elements={initStyles(element)}>
        <MenuButton {...menu} element={`${element}_BUTTON`} variant={menuButtonVariant}>
          Preferences <ChevronDownIcon decorative />
        </MenuButton>
        <Menu {...menu} element={element} aria-label="Preferences">
          <MenuGroup element={`${element}_GROUP`} icon={<ProductSettingsIcon decorative />} label="Settings">
            <MenuItem {...menu} element={`${element}_ITEM`} onClick={onClick}>
              User info
            </MenuItem>
            <MenuItem {...menu} element={`${element}_ITEM`} onClick={onClick}>
              Extensions
            </MenuItem>
            <PreferencesSubMenu element={element} />
          </MenuGroup>
          <MenuSeparator {...menu} element={`${element}_SEPARATOR`} />
          <MenuGroup element={`${element}_GROUP`} icon={<SearchIcon decorative />} label="Search Options">
            <MenuItem {...menu} element={`${element}_ITEM`} onClick={onClick}>
              Google
            </MenuItem>

            <MenuItem {...menu} element={`${element}_ITEM`} disabled>
              Bing
            </MenuItem>
          </MenuGroup>
          <MenuSeparator {...menu} element={`${element}_SEPARATOR`} />
          <MenuGroup element={`${element}_GROUP`} icon={<SupportIcon decorative />} label="Help">
            <MenuItem {...menu} element={`${element}_ITEM`} href="" onClick={onClick}>
              Contact support
            </MenuItem>
            <MenuItem {...menu} element={`${element}_ITEM`} href="" onClick={onClick}>
              View FAQ
            </MenuItem>
          </MenuGroup>
        </Menu>
      </CustomizationProvider>
    );
  }
);

export const WithDefaultElementName: React.FC = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <BaseMenu menuButtonVariant="primary" element="MENU" />
      <BaseMenu menuButtonVariant="secondary" element="MENU" />
      <BaseMenu menuButtonVariant="destructive" element="MENU" />
      <BaseMenu menuButtonVariant="destructive_secondary" element="MENU" />
      <BaseMenu menuButtonVariant="link" element="MENU" />
    </Box>
  );
};

export const WithCustomElementName: React.FC = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <BaseMenu menuButtonVariant="primary" element="CUSTOM" />
      <BaseMenu menuButtonVariant="secondary" element="CUSTOM" />
      <BaseMenu menuButtonVariant="destructive" element="CUSTOM" />
      <BaseMenu menuButtonVariant="destructive_secondary" element="CUSTOM" />
      <BaseMenu menuButtonVariant="link" element="CUSTOM" />
    </Box>
  );
};
