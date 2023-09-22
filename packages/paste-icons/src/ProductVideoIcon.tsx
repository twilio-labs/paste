import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductVideoIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductVideoIcon = React.forwardRef<HTMLElement, ProductVideoIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductVideoIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductVideoIcon]: Missing a title for non-decorative icon.');
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
            d="M11.75 15h-8.5C2.56 15 2 14.44 2 13.75v-7.5C2 5.56 2.56 5 3.25 5h8.5c.69 0 1.25.56 1.25 1.25v1.94l3.19-1.595A1.25 1.25 0 0118 7.715v4.575a1.245 1.245 0 01-1.805 1.12L13 11.83v1.92c0 .69-.56 1.25-1.25 1.25zm-8.5-9a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-2.725a.5.5 0 01.72-.45l3.92 1.925a.25.25 0 00.24 0 .26.26 0 00.12-.215v-4.57a.26.26 0 00-.12-.215.25.25 0 00-.24 0l-3.915 1.955A.5.5 0 0112 9V6.25a.25.25 0 00-.25-.25h-8.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductVideoIcon.displayName = 'ProductVideoIcon';
export { ProductVideoIcon };
