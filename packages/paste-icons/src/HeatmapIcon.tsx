/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface HeatmapIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const HeatmapIcon = React.forwardRef<HTMLElement, HeatmapIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
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
            d="M14.25 2.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM15 4.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM2.5 8.5a5 5 0 1110 0 5 5 0 01-10 0zm5-4a4 4 0 100 8 4 4 0 000-8z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.5 16a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm2.5-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5.5-5a3 3 0 100 6 3 3 0 000-6zm-2 3a2 2 0 114 0 2 2 0 01-4 0zM6 16.25a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0zm-1.75-.75a.75.75 0 110 1.5.75.75 0 010-1.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

HeatmapIcon.displayName = 'HeatmapIcon';
export {HeatmapIcon};
