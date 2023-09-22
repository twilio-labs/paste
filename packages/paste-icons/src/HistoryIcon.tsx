import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface HistoryIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const HistoryIcon = React.forwardRef<HTMLElement, HistoryIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `HistoryIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[HistoryIcon]: Missing a title for non-decorative icon.');
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
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M8.197 2.641a7.966 7.966 0 113.049 15.326.625.625 0 110-1.25 6.716 6.716 0 10-6.71-6.994l1.575-1.65a.625.625 0 01.904.864l-2.837 2.97a.625.625 0 01-.987-.108L1.027 8.224a.625.625 0 111.07-.648l1.196 1.976a7.966 7.966 0 014.904-6.91z"
          />
          <path
            fill="currentColor"
            d="M11.712 6.5a.625.625 0 00-1.25 0v3.358c0 .308.16.593.425.75l2.378 1.428a.625.625 0 00.643-1.072l-2.196-1.318V6.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

HistoryIcon.displayName = 'HistoryIcon';
export { HistoryIcon };
