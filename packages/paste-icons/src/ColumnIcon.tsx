/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ColumnIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ColumnIcon = React.forwardRef<HTMLElement, ColumnIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ColumnIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ColumnIcon]: Missing a title for non-decorative icon.');
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
            d="M3.143 2.5a.643.643 0 00-.643.643v13.714c0 .355.288.643.643.643h13.714a.643.643 0 00.643-.643V3.143a.643.643 0 00-.643-.643H3.143zM1.5 3.143c0-.907.736-1.643 1.643-1.643h13.714c.908 0 1.643.736 1.643 1.643v13.714c0 .908-.735 1.643-1.643 1.643H3.143A1.643 1.643 0 011.5 16.857V3.143z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 1.5a.5.5 0 01.5.5v16a.5.5 0 01-1 0V2a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ColumnIcon.displayName = 'ColumnIcon';
export { ColumnIcon };
