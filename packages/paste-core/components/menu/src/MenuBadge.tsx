import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
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
    buttonLabel: string;
  };

const MenuBadge = React.forwardRef<HTMLButtonElement, MenuBadgeProps>(
  ({children, element = 'MENU_BADGE', variant = 'default', buttonLabel, ...props}, ref) => {
    return (
      <Badge element={element} as="span" variant={variant} ref={ref}>
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
            <ChevronDownIcon decorative={false} size="sizeIcon10" title={buttonLabel} />
          </MenuPrimitiveButton>
        </Box>
      </Badge>
    );
  }
);

MenuBadge.displayName = 'MenuBadge';

MenuBadge.propTypes = {
  children: PropTypes.node.isRequired,
};

export {MenuBadge};
