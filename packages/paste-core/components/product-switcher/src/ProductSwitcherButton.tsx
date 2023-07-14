import * as React from 'react';
import {MenuButton, MenuButtonPropTypes} from '@twilio-paste/menu';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import type {MenuButtonProps} from '@twilio-paste/menu';
import {ProductSwitcherIcon} from '@twilio-paste/icons/esm/ProductSwitcherIcon';

export interface ProductSwitcherButtonProps extends Omit<MenuButtonProps, 'variant' | 'size' | 'children'> {
  i18nButtonLabel: string;
}

const ProductSwitcherButton = React.forwardRef<HTMLButtonElement, ProductSwitcherButtonProps>(
  ({element = 'PRODUCT_SWITCHER_BUTTON', i18nButtonLabel, ...props}, ref) => {
    return (
      <MenuButton element={element} {...props} variant="secondary_icon" size="reset" ref={ref}>
        <ProductSwitcherIcon decorative={true} />
        <ScreenReaderOnly>{i18nButtonLabel}</ScreenReaderOnly>
      </MenuButton>
    );
  }
);

// omit variant and size from MenuButtonPropTypes as we set them intenrally
const {variant, size, ...productSwitcherButtonPropTypes} = MenuButtonPropTypes;
ProductSwitcherButton.displayName = 'ProductSwitcherButton';
ProductSwitcherButton.propTypes = productSwitcherButtonPropTypes;
export {ProductSwitcherButton};
