import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ZoomInIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ZoomInIcon = React.forwardRef<HTMLElement, ZoomInIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ZoomInIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ZoomInIcon]: Missing a title for non-decorative icon.');
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
            d="M5.5 8a.5.5 0 000 1H8v2.5a.5.5 0 101 0V9h2.5a.5.5 0 000-1H9V5.5a.5.5 0 00-1 0V8H5.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.8 13.507a6.543 6.543 0 01-10.303-7.47 6.542 6.542 0 1111.01 6.762l4.347 4.347a.5.5 0 11-.708.707l-4.345-4.346zM5.464 3.933a5.542 5.542 0 016.997 8.526l-.014.015a5.543 5.543 0 11-6.983-8.54z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ZoomInIcon.displayName = 'ZoomInIcon';
export { ZoomInIcon };
