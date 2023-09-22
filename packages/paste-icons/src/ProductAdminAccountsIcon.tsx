/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductAdminAccountsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAdminAccountsIcon = React.forwardRef<HTMLElement, ProductAdminAccountsIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductAdminAccountsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductAdminAccountsIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.356 10.548c.605 0 1.096.49 1.096 1.096v5.26c0 .605-.49 1.096-1.096 1.096h-5.26C2.49 18 2 17.51 2 16.904v-5.26c0-.605.49-1.096 1.096-1.096zm8.548 0c.605 0 1.096.49 1.096 1.096v5.26C18 17.51 17.51 18 16.904 18h-5.26c-.605 0-1.096-.49-1.096-1.096v-5.26c0-.605.49-1.096 1.096-1.096zm-8.548.876h-5.26a.22.22 0 00-.22.22v5.26c0 .122.098.22.22.22h5.26a.22.22 0 00.22-.22v-5.26a.22.22 0 00-.22-.22zm8.548 0h-5.26a.22.22 0 00-.22.22v5.26c0 .122.099.22.22.22h5.26a.22.22 0 00.22-.22v-5.26a.22.22 0 00-.22-.22zM8.356 2c.605 0 1.096.49 1.096 1.096v5.26c0 .605-.49 1.096-1.096 1.096h-5.26C2.49 9.452 2 8.962 2 8.356v-5.26C2 2.49 2.49 2 3.096 2zm8.548 0C17.51 2 18 2.49 18 3.096v5.26c0 .605-.49 1.096-1.096 1.096h-5.26c-.605 0-1.096-.49-1.096-1.096v-5.26c0-.605.49-1.096 1.096-1.096zm-8.548.876h-5.26a.22.22 0 00-.22.22v5.26c0 .121.098.22.22.22h5.26a.22.22 0 00.22-.22v-5.26a.22.22 0 00-.22-.22zm8.548 0h-5.26a.22.22 0 00-.22.22v5.26c0 .121.099.22.22.22h5.26a.22.22 0 00.22-.22v-5.26a.22.22 0 00-.22-.22z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductAdminAccountsIcon.displayName = 'ProductAdminAccountsIcon';
export { ProductAdminAccountsIcon };
