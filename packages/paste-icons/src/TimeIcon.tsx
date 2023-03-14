/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface TimeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TimeIcon = React.forwardRef<HTMLElement, TimeIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `TimeIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[TimeIcon]: Missing a title for non-decorative icon.');
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
          <path fill="currentColor" d="M10.5 5.5a.5.5 0 00-1 0v5a.5.5 0 00.5.5h3.5a.5.5 0 000-1h-3V5.5z" />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm7-8a7 7 0 11-14 0 7 7 0 0114 0z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

TimeIcon.displayName = 'TimeIcon';
export {TimeIcon};
