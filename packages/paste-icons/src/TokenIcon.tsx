/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface TokenIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TokenIcon = React.forwardRef<HTMLElement, TokenIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `TokenIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[TokenIcon]: Missing a title for non-decorative icon.');
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
            d="M17.569 6.067l-1.175-1.161.355-.35c.434-.427.565-1.07.331-1.63A1.516 1.516 0 0015.681 2h-.002a1.517 1.517 0 00-1.07.437L7.613 9.341a4.069 4.069 0 00-4.924 1.443 3.95 3.95 0 00.494 5.049 4.078 4.078 0 005.113.486 3.959 3.959 0 001.46-4.863l1.638-1.615 1.175 1.163a1.53 1.53 0 002.13.013 1.482 1.482 0 00.012-2.131l-1.176-1.16.714-.705 1.182 1.167a1.53 1.53 0 002.127-.021c.584-.58.588-1.515.01-2.1zm-.72 1.391a.508.508 0 01-.709.019l-1.533-1.514a.525.525 0 00-.714 0l-1.428 1.41a.494.494 0 000 .706l1.51 1.49.023.024a.494.494 0 01-.225.835.51.51 0 01-.489-.129l-1.53-1.516a.51.51 0 00-.715 0L8.79 11a.495.495 0 00-.087.59 2.962 2.962 0 01-.854 3.814 3.054 3.054 0 01-3.947-.283 2.958 2.958 0 01-.287-3.896 3.05 3.05 0 013.864-.843c.196.105.44.07.597-.086l7.246-7.153a.51.51 0 01.714.002.495.495 0 010 .705l-.713.702a.496.496 0 00-.001.705l1.526 1.509c.19.193.19.5 0 .692zM6.044 11.261c-.977 0-1.768.781-1.768 1.745 0 .964.791 1.745 1.768 1.745.976 0 1.767-.781 1.767-1.745a1.759 1.759 0 00-1.767-1.745zm0 2.493a.753.753 0 01-.758-.748c0-.413.34-.748.758-.748s.757.335.757.748-.34.748-.757.748z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TokenIcon.displayName = 'TokenIcon';
export { TokenIcon };
