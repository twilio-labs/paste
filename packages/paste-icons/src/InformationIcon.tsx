import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface InformationIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const InformationIcon = React.forwardRef<HTMLElement, InformationIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `InformationIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[InformationIcon]: Missing a title for non-decorative icon.');
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
            d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM10 9a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

InformationIcon.displayName = 'InformationIcon';
export { InformationIcon };
