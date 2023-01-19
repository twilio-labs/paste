/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface FeedIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FeedIcon = React.forwardRef<HTMLElement, FeedIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `FeedIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[FeedIcon]: Missing a title for non-decorative icon.');
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
            d="M2.6 3.232a12.018 12.018 0 0114.17 14.16.5.5 0 00.98.198A13.018 13.018 0 002.4 2.252a.5.5 0 10.2.98z"
          />
          <path
            fill="currentColor"
            d="M6.546 8.165a7.052 7.052 0 00-3.883.204.5.5 0 11-.326-.946A8.052 8.052 0 0112.573 17.66a.5.5 0 11-.946-.326 7.053 7.053 0 00-5.081-9.168z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.879 12.877a3 3 0 114.242 4.242 3 3 0 01-4.242-4.242zM5 12.998a2 2 0 100 4 2 2 0 000-4z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

FeedIcon.displayName = 'FeedIcon';
export {FeedIcon};
