import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProcessErrorIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProcessErrorIcon = React.forwardRef<HTMLElement, ProcessErrorIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProcessErrorIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProcessErrorIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.091 3.452l5.457 5.457c.603.602.603 1.58 0 2.182l-5.457 5.457a1.543 1.543 0 01-2.182 0l-5.457-5.457a1.543 1.543 0 010-2.182l5.457-5.457a1.543 1.543 0 012.182 0z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProcessErrorIcon.displayName = 'ProcessErrorIcon';
export { ProcessErrorIcon };
