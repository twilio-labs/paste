/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface CodeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CodeIcon = React.forwardRef<HTMLElement, CodeIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `CodeIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[CodeIcon]: Missing a title for non-decorative icon.');
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
            d="M2 14.75c0 .69.56 1.25 1.25 1.25h13.5c.69 0 1.25-.56 1.25-1.25v-9.5C18 4.56 17.44 4 16.75 4H3.25C2.56 4 2 4.56 2 5.25v9.5zm1-9.5A.25.25 0 013.25 5h13.5a.25.25 0 01.25.25v9.5a.25.25 0 01-.25.25H3.25a.25.25 0 01-.25-.25v-9.5zM6 13a.5.5 0 01-.355-.855l1.95-1.945a.255.255 0 00-.005-.355l-2-1.97a.5.5 0 11.7-.71l2 1.97a1.25 1.25 0 010 1.77L6.375 12.83A.5.5 0 016 13zm4.5 0H14a.5.5 0 000-1h-3.5a.5.5 0 000 1z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

CodeIcon.displayName = 'CodeIcon';
export {CodeIcon};
