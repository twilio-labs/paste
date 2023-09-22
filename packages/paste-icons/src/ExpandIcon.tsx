import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ExpandIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ExpandIcon = React.forwardRef<HTMLElement, ExpandIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ExpandIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ExpandIcon]: Missing a title for non-decorative icon.');
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
            d="M7.558 11.55a.625.625 0 11.884.885l-1.808 1.808a.125.125 0 000 .176l.72.72a.5.5 0 01-.354.854H4.5a.5.5 0 01-.5-.5v-2.5a.5.5 0 01.854-.354l.719.72a.125.125 0 00.177 0zm3.993 0a.625.625 0 01.884 0l1.808 1.809a.125.125 0 00.177 0l.72-.72a.5.5 0 01.853.354v2.5a.5.5 0 01-.5.5h-2.5a.5.5 0 01-.353-.854l.719-.72a.124.124 0 000-.176l-1.808-1.808a.625.625 0 010-.884zM7 4a.5.5 0 01.354.853l-.72.72a.125.125 0 000 .177l1.808 1.808a.625.625 0 01-.884.883L5.662 6.545l-.808.809A.5.5 0 014 7V4.5a.5.5 0 01.5-.5zm8.493 0a.5.5 0 01.5.5V7a.5.5 0 01-.853.353l-.72-.72a.125.125 0 00-.177 0l-1.808 1.808a.625.625 0 11-.884-.884l1.808-1.807a.125.125 0 000-.177l-.72-.72A.5.5 0 0112.994 4z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ExpandIcon.displayName = 'ExpandIcon';
export { ExpandIcon };
