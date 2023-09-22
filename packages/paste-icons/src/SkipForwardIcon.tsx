import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface SkipForwardIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SkipForwardIcon = React.forwardRef<HTMLElement, SkipForwardIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `SkipForwardIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SkipForwardIcon]: Missing a title for non-decorative icon.');
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
            d="M13.784 4.089l.07.057 3 3 .011.013a.503.503 0 01.033.039l-.044-.052A.502.502 0 0117 7.5v.02a.503.503 0 01-.005.052L17 7.5a.502.502 0 01-.089.284l-.013.018a.503.503 0 01-.033.04l-.011.012-3 3a.5.5 0 01-.765-.638l.057-.07L15.293 8H7.5a3.5 3.5 0 00-.192 6.995L7.5 15h5a.5.5 0 01.09.992L12.5 16h-5a4.5 4.5 0 01-.212-8.995L7.5 7h7.793l-2.147-2.146a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SkipForwardIcon.displayName = 'SkipForwardIcon';
export { SkipForwardIcon };
