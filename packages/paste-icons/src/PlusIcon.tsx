import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface PlusIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PlusIcon = React.forwardRef<HTMLElement, PlusIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `PlusIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[PlusIcon]: Missing a title for non-decorative icon.');
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
            d="M15.043 9.043h-4.086V4.957a.958.958 0 00-1.914 0v4.086H4.957a.958.958 0 000 1.914h4.086v4.086a.958.958 0 001.914 0v-4.086h4.086a.958.958 0 000-1.914z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

PlusIcon.displayName = 'PlusIcon';
export { PlusIcon };
