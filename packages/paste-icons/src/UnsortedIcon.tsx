/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface UnsortedIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnsortedIcon = React.forwardRef<HTMLElement, UnsortedIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `UnsortedIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[UnsortedIcon]: Missing a title for non-decorative icon.');
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
            d="M4.088 7.135a.598.598 0 00.057.704l.069.063c.193.15.46.128.632-.063L6.5 5.914V11.5a.5.5 0 001 0V5.913l1.654 1.926.069.063c.193.15.46.128.632-.063a.596.596 0 000-.78L7.35 4.161l-.068-.063a.459.459 0 00-.632.063L4.145 7.06l-.057.076zm11.824 5.73a.598.598 0 00-.057-.704l-.069-.063a.459.459 0 00-.632.063L13.5 14.086V8.5a.5.5 0 00-1 0v5.587l-1.654-1.926-.069-.063a.459.459 0 00-.632.063.596.596 0 000 .78l2.505 2.898.068.063c.193.15.46.128.632-.063l2.505-2.898.057-.076z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UnsortedIcon.displayName = 'UnsortedIcon';
export { UnsortedIcon };
