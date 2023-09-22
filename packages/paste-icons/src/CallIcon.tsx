import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface CallIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CallIcon = React.forwardRef<HTMLElement, CallIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `CallIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[CallIcon]: Missing a title for non-decorative icon.');
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
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.141 2.98a1.643 1.643 0 012.322.001l2.03 2.026a1.656 1.656 0 01.359 1.812 1.657 1.657 0 01-.36.538.63.63 0 000 .892l3.245 3.241a.654.654 0 00.924 0 1.646 1.646 0 011.789-.356c.199.082.38.203.534.356l2.03 2.026a1.656 1.656 0 01.486 1.175 1.662 1.662 0 01-.487 1.175l-.48.48a3.94 3.94 0 01-4.918.527l-.004-.003a31.55 31.55 0 01-8.494-8.491v-.002a3.953 3.953 0 01.542-4.915l.482-.481zm1.161.54c-.175 0-.34.07-.461.19l-.482.48a2.922 2.922 0 00-.4 3.637l.005.009a30.541 30.541 0 008.202 8.185l.006.005a2.954 2.954 0 003.66-.408l.482-.48a.637.637 0 00.186-.447.626.626 0 00-.186-.446l-2.03-2.026a.647.647 0 00-.462-.19.656.656 0 00-.462.19 1.644 1.644 0 01-2.322 0L7.793 8.977a1.66 1.66 0 010-2.349.637.637 0 00.186-.446.626.626 0 00-.186-.447L5.763 3.71a.653.653 0 00-.46-.19z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CallIcon.displayName = 'CallIcon';
export { CallIcon };
