import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface SpacerVerticalIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SpacerVerticalIcon = React.forwardRef<HTMLElement, SpacerVerticalIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `SpacerVerticalIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SpacerVerticalIcon]: Missing a title for non-decorative icon.');
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
            d="M1 1.53c0-.293.24-.53.534-.53h16.932c.295 0 .534.237.534.53a.532.532 0 01-.534.529H1.534A.532.532 0 011 1.529zm0 16.94c0-.292.24-.529.534-.529h16.932c.295 0 .534.237.534.53a.532.532 0 01-.534.529H1.534A.531.531 0 011 18.47zM2.847 6.294c-.43 0-.78.347-.78.774v5.84c0 .427.35.773.78.773h14.305c.43 0 .78-.346.78-.774V7.068a.777.777 0 00-.78-.774H2.847zM1 7.068a1.84 1.84 0 011.847-1.833h14.305c1.02 0 1.847.82 1.847 1.833v5.84a1.84 1.84 0 01-1.847 1.832H2.847A1.84 1.84 0 011 12.907V7.068z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SpacerVerticalIcon.displayName = 'SpacerVerticalIcon';
export { SpacerVerticalIcon };
