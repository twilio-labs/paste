import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface VideoOffIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const VideoOffIcon = React.forwardRef<HTMLElement, VideoOffIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `VideoOffIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[VideoOffIcon]: Missing a title for non-decorative icon.');
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
            d="M3 6.5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h2a.5.5 0 010 1H3A1.5 1.5 0 011.5 14V7A1.5 1.5 0 013 5.5h9A1.5 1.5 0 0113.5 7h-1a.5.5 0 00-.5-.5H3zm10 4a.5.5 0 01.5.5v3a1.5 1.5 0 01-1.5 1.5H9a.5.5 0 010-1h3a.5.5 0 00.5-.5v-3a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18.354 1.646a.5.5 0 00-.708 0l-16 16a.5.5 0 00.708.708l16-16a.5.5 0 000-.708zm.146 8.871V7.63a1.034 1.034 0 00-1.495-.925l-1.839.92a1.568 1.568 0 00-.866 1.4V10.5a.455.455 0 000 .033v1.474a1.567 1.567 0 00.866 1.402l1.839.919a1.034 1.034 0 001.495-.925v-2.886zm-3.2 0v1.49a.568.568 0 00.313.507l1.839.92a.033.033 0 00.032-.002.034.034 0 00.016-.029v-2.87a.46.46 0 010-.033V7.63a.033.033 0 00-.016-.028.033.033 0 00-.032-.002l-1.84.919a.567.567 0 00-.312.507v1.491z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

VideoOffIcon.displayName = 'VideoOffIcon';
export { VideoOffIcon };
