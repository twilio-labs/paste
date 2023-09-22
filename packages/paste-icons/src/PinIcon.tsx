import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface PinIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PinIcon = React.forwardRef<HTMLElement, PinIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `PinIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[PinIcon]: Missing a title for non-decorative icon.');
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
            d="M11.793 4.007a1.2 1.2 0 01.98.344l2.876 2.877a1.2 1.2 0 01-.205 1.86l-2.95 1.877.02.121c.105.828-.041 1.67-.423 2.418l-.11.202a1.2 1.2 0 01-1.883.24L8.4 12.25l-3.613 3.615a.461.461 0 01-.706-.589l.053-.064 3.614-3.615-1.694-1.693a1.2 1.2 0 01-.353-.864l.01-.138a1.2 1.2 0 01.585-.884 4.164 4.164 0 012.617-.531l.12.018 1.878-2.95a1.2 1.2 0 01.747-.525zm.163.918h-.062l-.06.013a.277.277 0 00-.144.113L9.645 8.266a.461.461 0 01-.497.2 3.24 3.24 0 00-2.386.349.277.277 0 00-.055.435l4.044 4.044a.277.277 0 00.434-.054c.419-.72.544-1.576.349-2.387a.462.462 0 01.2-.497L14.95 8.31a.277.277 0 00.047-.43L12.12 5.005a.277.277 0 00-.226-.08z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

PinIcon.displayName = 'PinIcon';
export { PinIcon };
