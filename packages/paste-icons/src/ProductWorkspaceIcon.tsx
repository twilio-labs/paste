/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductWorkspaceIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductWorkspaceIcon = React.forwardRef<HTMLElement, ProductWorkspaceIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ProductWorkspaceIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductWorkspaceIcon]: Missing a title for non-decorative icon.');
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
            d="M7.272 5.5V4a1.5 1.5 0 011.5-1.5h2.456a1.5 1.5 0 011.5 1.5v1.5H16.5A1.5 1.5 0 0118 7v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16V7a1.5 1.5 0 011.5-1.5h3.772zm1-1.5a.5.5 0 01.5-.5h2.456a.5.5 0 01.5.5v1.5H8.272V4zM3.5 6.5A.5.5 0 003 7v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5h-13z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ProductWorkspaceIcon.displayName = 'ProductWorkspaceIcon';
export {ProductWorkspaceIcon};
