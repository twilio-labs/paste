/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface CloudIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CloudIcon = React.forwardRef<HTMLElement, CloudIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `CloudIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[CloudIcon]: Missing a title for non-decorative icon.');
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
            d="M7.37 4.5a5.491 5.491 0 00-4.452 2.447A5.472 5.472 0 002.01 9.56a9.315 9.315 0 000 .87c.04.482.128.91.275 1.343a5.512 5.512 0 004.304 3.654c.261.043.473.062.768.07.272.008 6.776.008 7.001 0a3.75 3.75 0 003.636-3.445c.01-.126.004-.608-.01-.714a3.746 3.746 0 00-4.737-3.2 3.977 3.977 0 00-.494.175l-.02.01-.02-.062a5.538 5.538 0 00-.994-1.784 5.455 5.455 0 00-1.194-1.066 5.483 5.483 0 00-3.155-.91zm-.128 1.008a4.496 4.496 0 00-3.274 1.698 4.488 4.488 0 00-.964 2.487c-.01.154-.01.493.003.643a4.497 4.497 0 003.95 4.13c.262.031.091.03 3.904.03 3.407 0 3.595 0 3.683-.011a2.75 2.75 0 00.013-5.467 2.772 2.772 0 00-1.832.45c-.063.04-.133.08-.157.091a.398.398 0 01-.431-.043.664.664 0 01-.206-.287 2.839 2.839 0 01-.037-.157 4.465 4.465 0 00-.794-1.761 4.512 4.512 0 00-3.858-1.803z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CloudIcon.displayName = 'CloudIcon';
export { CloudIcon };
