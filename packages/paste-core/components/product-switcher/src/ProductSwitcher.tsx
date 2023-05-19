import * as React from 'react';
import {Menu} from '@twilio-paste/menu';
import type {MenuProps} from '@twilio-paste/menu';

export interface ProductSwitcherProps extends MenuProps {
  children: NonNullable<React.ReactNode>;
}

const ProductSwitcher = React.forwardRef<HTMLDivElement, ProductSwitcherProps>(
  ({children, element = 'PRODUCT_SWITCHER', ...props}, ref) => {
    return (
      <Menu element={element} {...props} ref={ref}>
        {children}
      </Menu>
    );
  }
);

ProductSwitcher.displayName = 'ProductSwitcher';

export {ProductSwitcher};
