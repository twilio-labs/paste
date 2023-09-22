import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface DirectoryIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DirectoryIcon = React.forwardRef<HTMLElement, DirectoryIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `DirectoryIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[DirectoryIcon]: Missing a title for non-decorative icon.');
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 4c-.346 0-.5.229-.5.367v11.266c0 .138.154.367.5.367H6V4H4.5zM7 4v12h8.5c.346 0 .5-.229.5-.367V4.367c0-.138-.154-.367-.5-.367H7zM4.5 17h11c.759 0 1.5-.547 1.5-1.367V4.367C17 3.547 16.259 3 15.5 3h-11C3.741 3 3 3.547 3 4.367v11.266C3 16.453 3.741 17 4.5 17zm7-10a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM9.25 8.25a2.25 2.25 0 113.39 1.94A3.5 3.5 0 0115 13.5a.5.5 0 01-1 0 2.5 2.5 0 00-5 0 .5.5 0 01-1 0 3.5 3.5 0 012.36-3.31 2.249 2.249 0 01-1.11-1.94z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DirectoryIcon.displayName = 'DirectoryIcon';
export { DirectoryIcon };
