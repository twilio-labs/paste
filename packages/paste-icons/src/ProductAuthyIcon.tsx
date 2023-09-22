import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductAuthyIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAuthyIcon = React.forwardRef<HTMLElement, ProductAuthyIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductAuthyIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductAuthyIcon]: Missing a title for non-decorative icon.');
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
            d="M10.722 6.547l2.89 2.762a.947.947 0 01.265.943 1 1 0 01-.723.69 1.054 1.054 0 01-.987-.252l-2.89-2.762c-1.198-1.14-3.135-1.137-4.33.005a2.838 2.838 0 00-.006 4.138l2.89 2.762c.293.28.38.7.222 1.064-.158.365-.53.603-.944.603-.27 0-.53-.103-.722-.286l-2.89-2.762c-1.996-1.907-1.996-4.998 0-6.905 1.995-1.907 5.23-1.907 7.225 0zm2.89-2.762l2.89 2.762c1.462 1.396 1.9 3.496 1.109 5.32-.791 1.825-2.655 3.014-4.721 3.013a5.216 5.216 0 01-3.613-1.428l-2.89-2.762a.947.947 0 01-.266-.944 1 1 0 01.723-.691c.353-.09.73.007.988.254l2.89 2.762c1.198 1.14 3.135 1.137 4.33-.005a2.838 2.838 0 00.006-4.138l-2.89-2.762a.946.946 0 010-1.38 1.056 1.056 0 011.444-.001z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductAuthyIcon.displayName = 'ProductAuthyIcon';
export { ProductAuthyIcon };
