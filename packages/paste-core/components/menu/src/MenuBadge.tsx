import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {Badge} from '@twilio-paste/badge';
import type {BadgeProps} from '@twilio-paste/badge';
import {Button} from '@twilio-paste/button';
import type {ButtonProps} from '@twilio-paste/button';
import {MenuPrimitiveButton} from '@twilio-paste/menu-primitive';
import type {MenuPrimitiveButtonProps} from '@twilio-paste/menu-primitive';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';

export type MenuBadgeProps = MenuPrimitiveButtonProps &
  Omit<ButtonProps, 'variant'> &
  Pick<BadgeProps, 'variant'> & {
    i18nButtonLabel: string;
  };

export type MenuBadgeContentProps = Omit<MenuBadgeProps, 'variant'>;
export const MenuBadgeContent = React.forwardRef<HTMLButtonElement, MenuBadgeContentProps>(
  ({children, element, i18nButtonLabel, ...props}, ref) => {
    return (
      <Box as="span" display="flex" flexDirection="row" columnGap="space20" alignItems="center">
        {children}
        <MenuPrimitiveButton
          {...props}
          variant="secondary_icon"
          size="reset"
          element={`${element}_BUTTON`}
          as={Button}
          ref={ref}
        >
          <ChevronDownIcon decorative={true} size="sizeIcon10" />
          <ScreenReaderOnly>{i18nButtonLabel}</ScreenReaderOnly>
        </MenuPrimitiveButton>
      </Box>
    );
  }
);
MenuBadgeContent.displayName = 'MenuBadgeContent';

const MenuBadge = React.forwardRef<HTMLButtonElement, MenuBadgeProps>(
  ({children, element = 'MENU_BADGE', variant = 'default', i18nButtonLabel, ...props}, ref) => {
    return (
      <Badge element={element} as="span" variant={variant}>
        <MenuBadgeContent {...props} element={element} i18nButtonLabel={i18nButtonLabel} ref={ref}>
          {children}
        </MenuBadgeContent>
      </Badge>
    );
  }
);

MenuBadge.displayName = 'MenuBadge';

MenuBadge.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export {MenuBadge};
