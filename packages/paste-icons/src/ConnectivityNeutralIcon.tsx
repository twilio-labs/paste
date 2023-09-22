import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ConnectivityNeutralIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ConnectivityNeutralIcon = React.forwardRef<HTMLElement, ConnectivityNeutralIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ConnectivityNeutralIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ConnectivityNeutralIcon]: Missing a title for non-decorative icon.');
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
          fill="none"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <circle fill="currentColor" cx={10} cy={10} r={4} />
        </svg>
      </IconWrapper>
    );
  },
);

ConnectivityNeutralIcon.displayName = 'ConnectivityNeutralIcon';
export { ConnectivityNeutralIcon };
