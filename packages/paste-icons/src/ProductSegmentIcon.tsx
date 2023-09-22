/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductSegmentIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSegmentIcon = React.forwardRef<HTMLElement, ProductSegmentIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductSegmentIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductSegmentIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M11.6 4.25C11.1 4.1 10.55 4 10 4 7.55 4 5.5 5.45 4.55 7.55c-.1.25-.35.35-.6.25L3 7.45c-.3-.1-.4-.45-.3-.7C3.95 3.95 6.75 2 10 2c.75 0 1.5.1 2.2.35.3.1.45.4.35.65l-.35.95c-.1.25-.35.35-.6.3zm3.9.25a1 1 0 11-2 0 1 1 0 012 0zM9.05 9h7.9c.3 0 .55-.25.6-.55V7.5c0-.3-.25-.55-.55-.55H9.05c-.3 0-.55.25-.55.55v.95c0 .3.25.55.55.55zm-6 4h7.9c.3 0 .55-.25.6-.5v-.95c0-.3-.25-.55-.55-.55H3.05c-.3 0-.55.25-.55.5v.95c0 .3.25.55.55.55zm2.45 3.5a1 1 0 100-2 1 1 0 000 2zM10 16c-.55 0-1.1-.1-1.6-.25-.25-.05-.5.05-.6.3l-.35.95c-.1.25.05.55.35.65.7.25 1.45.35 2.2.35 3.25 0 6.05-1.95 7.3-4.75.1-.25 0-.6-.3-.7l-.95-.35c-.25-.1-.5 0-.6.25-.95 2.1-3 3.55-5.45 3.55z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductSegmentIcon.displayName = 'ProductSegmentIcon';
export { ProductSegmentIcon };
