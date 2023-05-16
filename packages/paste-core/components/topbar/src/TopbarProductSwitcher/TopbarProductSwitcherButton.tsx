import * as React from 'react';
import {MenuButton} from '@twilio-paste/menu';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import type {MenuButtonProps} from '@twilio-paste/menu';
import {ProductSwitcherIcon} from '@twilio-paste/icons/esm/ProductSwitcherIcon';

export interface TopbarProductSwitcherButtonProps extends Omit<MenuButtonProps, 'variant' | 'size' | 'children'> {
  i18nButtonLabel: string;
}

const TopbarProductSwitcherButton = React.forwardRef<HTMLButtonElement, TopbarProductSwitcherButtonProps>(
  ({element = 'TOPBAR_ACCOUNT_SWITCHER_BADGE', i18nButtonLabel, ...props}, ref) => {
    return (
      <MenuButton element={element} {...props} variant="secondary_icon" size="icon_small" ref={ref}>
        <ProductSwitcherIcon decorative={true} />
        <ScreenReaderOnly>{i18nButtonLabel}</ScreenReaderOnly>
      </MenuButton>
    );
  }
);

TopbarProductSwitcherButton.displayName = 'TopbarProductSwitcherButton';

export {TopbarProductSwitcherButton};
