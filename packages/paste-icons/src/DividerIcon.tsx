import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface DividerIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DividerIcon = React.forwardRef<HTMLElement, DividerIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `DividerIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[DividerIcon]: Missing a title for non-decorative icon.');
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
            d="M10.497 12.5a.5.5 0 00-1 0v4.793L7.684 15.48a.5.5 0 00-.708.707l2.667 2.667a.5.5 0 00.707 0l2.667-2.667a.5.5 0 00-.707-.707l-1.813 1.813V12.5zm-1-5a.5.5 0 101 0V2.707L12.31 4.52a.5.5 0 10.707-.707L10.35 1.146a.5.5 0 00-.707 0L6.976 3.813a.5.5 0 10.708.707l1.813-1.813V7.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2 10c0-.276.21-.5.47-.5h15.06c.26 0 .47.224.47.5s-.21.5-.47.5H2.47c-.26 0-.47-.224-.47-.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DividerIcon.displayName = 'DividerIcon';
export { DividerIcon };
