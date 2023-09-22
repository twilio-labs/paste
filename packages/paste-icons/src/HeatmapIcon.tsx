import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface HeatmapIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const HeatmapIcon = React.forwardRef<HTMLElement, HeatmapIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `HeatmapIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[HeatmapIcon]: Missing a title for non-decorative icon.');
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
            d="M13.75 2a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zm.75 1.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM2 8a5 5 0 1110 0A5 5 0 012 8zm5-4a4 4 0 100 8 4 4 0 000-8z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7 15.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM9.5 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM15 9a3 3 0 100 6 3 3 0 000-6zm-2 3a2 2 0 114 0 2 2 0 01-4 0zm-7.5 3.75a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0zM3.75 15a.75.75 0 110 1.5.75.75 0 010-1.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

HeatmapIcon.displayName = 'HeatmapIcon';
export { HeatmapIcon };
