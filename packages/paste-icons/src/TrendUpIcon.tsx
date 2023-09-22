/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface TrendUpIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TrendUpIcon = React.forwardRef<HTMLElement, TrendUpIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `TrendUpIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[TrendUpIcon]: Missing a title for non-decorative icon.');
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
            d="M9.613 7.163L4.11 14.295c-.171.187-.137.46.077.61a.54.54 0 00.31.095h11.009c.273 0 .495-.194.495-.434a.401.401 0 00-.108-.27l-5.505-7.133a.544.544 0 00-.774 0z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TrendUpIcon.displayName = 'TrendUpIcon';
export { TrendUpIcon };
