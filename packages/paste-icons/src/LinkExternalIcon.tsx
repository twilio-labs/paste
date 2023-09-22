import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface LinkExternalIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LinkExternalIcon = React.forwardRef<HTMLElement, LinkExternalIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `LinkExternalIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[LinkExternalIcon]: Missing a title for non-decorative icon.');
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
            d="M8.4 4.5a.5.5 0 01.5.5v.1a.5.5 0 01-.5.5H5.6v8.8h8.8v-2.8a.5.5 0 01.41-.492l.09-.008h.1a.5.5 0 01.492.41l.008.09V15a.5.5 0 01-.41.492L15 15.5H5a.5.5 0 01-.492-.41L4.5 15V5a.5.5 0 01.41-.492L5 4.5h3.4zm6.6 0a.5.5 0 01.5.5v.1l-.001.01.001 3.29a.5.5 0 01-.5.5h-.1a.5.5 0 01-.5-.5l-.001-1.935-3.967 3.967a.611.611 0 01-.78.07l-.084-.07a.611.611 0 01-.07-.78l.07-.084L13.534 5.6H11.6a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5H15z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

LinkExternalIcon.displayName = 'LinkExternalIcon';
export { LinkExternalIcon };
