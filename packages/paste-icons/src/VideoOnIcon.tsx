/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface VideoOnIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const VideoOnIcon = React.forwardRef<HTMLElement, VideoOnIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `VideoOnIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[VideoOnIcon]: Missing a title for non-decorative icon.');
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
            d="M1.5 7A1.5 1.5 0 013 5.5h9A1.5 1.5 0 0113.5 7v7a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 14V7zM3 6.5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5H3zm15.5 4.017V7.63a1.034 1.034 0 00-1.495-.925l-1.839.92a1.568 1.568 0 00-.866 1.4V10.5a.46.46 0 000 .033v1.474a1.567 1.567 0 00.866 1.402l1.839.919a1.034 1.034 0 001.495-.925v-2.886zm-3.2 0v1.49a.568.568 0 00.313.507l1.839.92a.033.033 0 00.032-.002.034.034 0 00.016-.029v-2.87a.455.455 0 010-.033V7.63a.033.033 0 00-.016-.028.033.033 0 00-.032-.002l-1.84.919a.567.567 0 00-.312.507v1.491z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

VideoOnIcon.displayName = 'VideoOnIcon';
export { VideoOnIcon };
