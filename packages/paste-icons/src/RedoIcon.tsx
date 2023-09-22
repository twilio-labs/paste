/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface RedoIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const RedoIcon = React.forwardRef<HTMLElement, RedoIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `RedoIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[RedoIcon]: Missing a title for non-decorative icon.');
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
            d="M17.99 5.01a.611.611 0 00-1.203-.212l-.48 2.718a7.457 7.457 0 00-12.1-2.355 7.456 7.456 0 003.958 12.638.611.611 0 00.212-1.204 6.233 6.233 0 117.018-8.03l-3.186-.561a.611.611 0 00-.213 1.204l4.09.721.029.005.375.066a.611.611 0 00.708-.496l.793-4.493z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

RedoIcon.displayName = 'RedoIcon';
export { RedoIcon };
