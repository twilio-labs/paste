import * as React from 'react';
import {safelySpreadBoxProps, Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {MenuItemVariants} from './constants';
import type {MenuItemVariant, MenuGroupProps} from './types';

export const MenuGroupContext = React.createContext<MenuItemVariant>(MenuItemVariants.DEFAULT);

const MenuGroup = React.forwardRef<HTMLDivElement, MenuGroupProps>(({label, icon, children, ...props}, ref) => {
  return (
    <MenuGroupContext.Provider value={MenuItemVariants.GROUP_ITEM}>
      <Box {...safelySpreadBoxProps(props)} role="presentation" aria-label={label} textDecoration="none" ref={ref}>
        <Box display="flex" alignItems="center" paddingX="space70" paddingY="space30" cursor="default">
          {React.isValidElement(icon) ? (
            <Box flexShrink={0} size="sizeIcon30">
              {React.cloneElement(icon, {color: 'colorTextIcon'})}
            </Box>
          ) : null}
          <Text
            as="span"
            color="colorText"
            role="presentation"
            fontWeight="fontWeightBold"
            paddingLeft={icon != null ? 'space20' : undefined}
          >
            {label}
          </Text>
        </Box>
        {children}
      </Box>
    </MenuGroupContext.Provider>
  );
});
MenuGroup.displayName = 'MenuGroup';
export {MenuGroup};
