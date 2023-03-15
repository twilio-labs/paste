/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface RefreshIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const RefreshIcon = React.forwardRef<HTMLElement, RefreshIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `RefreshIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[RefreshIcon]: Missing a title for non-decorative icon.');
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
            d="M7.802 4.25a6.002 6.002 0 014.009.212.5.5 0 00.383-.924 7.002 7.002 0 00-8.437 10.46H2a.5.5 0 100 1h2.766a.52.52 0 00.09 0H5a.5.5 0 00.5-.5v-3a.5.5 0 10-1 0v1.815A6.002 6.002 0 017.802 4.25zM14.5 8.499V6.683a6 6 0 01-7.31 8.856.5.5 0 10-.385.923 7 7 0 008.439-10.463H17a.5.5 0 000-1h-2.767a.503.503 0 00-.09 0H14a.5.5 0 00-.5.5v3a.5.5 0 001 0z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

RefreshIcon.displayName = 'RefreshIcon';
export {RefreshIcon};
