import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductInterconnectIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInterconnectIcon = React.forwardRef<HTMLElement, ProductInterconnectIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductInterconnectIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductInterconnectIcon]: Missing a title for non-decorative icon.');
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
            d="M4.342 4.342a8 8 0 0111.312 0 .5.5 0 01-.705.706 7 7 0 00-9.902 0 7.005 7.005 0 007.63 11.423A7.003 7.003 0 0017 10a.5.5 0 111 0 7.935 7.935 0 01-2.346 5.658A8 8 0 014.342 4.342zm10.276 3.742a5 5 0 01-8.156 5.453.5.5 0 01.705-.706 4 4 0 006.296-4.83A4 4 0 005.997 10a.5.5 0 11-1 0 5.002 5.002 0 019.621-1.916zm-4.62.415a1.5 1.5 0 110 3.001 1.5 1.5 0 010-3z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductInterconnectIcon.displayName = 'ProductInterconnectIcon';
export { ProductInterconnectIcon };
