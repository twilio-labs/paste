/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface CloseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CloseIcon = React.forwardRef<HTMLElement, CloseIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `CloseIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[CloseIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15.16 13.514L11.645 10l3.515-3.514a1.165 1.165 0 00-1.646-1.646L10 8.355 6.486 4.84A1.165 1.165 0 004.84 6.486L8.355 10 4.84 13.514a1.165 1.165 0 001.646 1.646L10 11.645l3.514 3.515a1.165 1.165 0 001.646-1.646z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CloseIcon.displayName = 'CloseIcon';
export { CloseIcon };
