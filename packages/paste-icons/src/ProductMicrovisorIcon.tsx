import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductMicrovisorIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductMicrovisorIcon = React.forwardRef<HTMLElement, ProductMicrovisorIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductMicrovisorIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductMicrovisorIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M17.754 3.001a7.525 7.525 0 00-7.502 0 .5.5 0 00-.25.434 7.522 7.522 0 003.75 6.496.5.5 0 00.5 0 7.524 7.524 0 003.752-6.496.5.5 0 00-.25-.434zM11.69 6.314a6.482 6.482 0 01-.681-2.587 6.52 6.52 0 015.436-.244L11.69 6.314zm2.313 2.599a6.484 6.484 0 01-1.804-1.738l4.73-2.816a6.52 6.52 0 01-2.926 4.554z"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="M8.468 12.982a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          <path
            fill="currentColor"
            d="M14.857 11.852a.5.5 0 01-.354.147h-1.537v1h1.537a.5.5 0 110 1h-1.537v.9a1.102 1.102 0 01-1.1 1.1h-.864v1.5a.5.5 0 01-1 0V16h-1v1.5a.5.5 0 01-1 0V16h-1v1.5A.5.5 0 016 17.5V16h-.936a1.101 1.101 0 01-1.1-1.1V14H2.5a.5.5 0 010-1h1.464v-1H2.5a.5.5 0 110-1h1.464v-1H2.5a.5.5 0 110-1.001h1.464v-.9a1.102 1.102 0 011.1-1.1h.937v-1.5a.5.5 0 111 0v1.5h1v-1.5a.5.5 0 111 0v1.5h.5a.5.5 0 010 1H5.066a.1.1 0 00-.1.1V14.9a.1.1 0 00.1.1h6.801a.1.1 0 00.1-.1v-3.4a.5.5 0 01.5-.5h2.037a.5.5 0 01.354.853z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductMicrovisorIcon.displayName = 'ProductMicrovisorIcon';
export { ProductMicrovisorIcon };
