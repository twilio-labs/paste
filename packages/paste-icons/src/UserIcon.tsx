import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface UserIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UserIcon = React.forwardRef<HTMLElement, UserIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `UserIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[UserIcon]: Missing a title for non-decorative icon.');
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
            d="M10 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM6.5 6a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm3.5 5.5A5.5 5.5 0 004.5 17a.5.5 0 01-1 0 6.5 6.5 0 1113 0 .5.5 0 01-1 0 5.5 5.5 0 00-5.5-5.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UserIcon.displayName = 'UserIcon';
export { UserIcon };
