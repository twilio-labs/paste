/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface LogInIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LogInIcon = React.forwardRef<HTMLElement, LogInIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `LogInIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[LogInIcon]: Missing a title for non-decorative icon.');
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
            d="M14.59 3.5h.022c.362.016.717.154.982.404.264.25.42.594.405.965V15.13c.015.37-.14.716-.405.965a1.53 1.53 0 01-1.004.404H8.408a.5.5 0 010-1h6.17a.528.528 0 00.33-.132.255.255 0 00.092-.199l-.001-.026V4.83c.004-.057-.018-.13-.09-.199a.528.528 0 00-.33-.131h-6.17a.5.5 0 110-1h6.181z"
          />
          <path
            fill="currentColor"
            d="M8.145 12.856a.5.5 0 00.708 0l2.5-2.5a.499.499 0 00.146-.347v-.006a.5.5 0 00-.146-.354l-2.5-2.5a.5.5 0 00-.708.707l1.647 1.647H4.499a.5.5 0 000 1h5.293l-1.647 1.646a.5.5 0 000 .707z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

LogInIcon.displayName = 'LogInIcon';
export { LogInIcon };
