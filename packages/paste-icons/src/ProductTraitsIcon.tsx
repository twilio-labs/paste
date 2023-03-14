/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductTraitsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductTraitsIcon = React.forwardRef<HTMLElement, ProductTraitsIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ProductTraitsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductTraitsIcon]: Missing a title for non-decorative icon.');
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
            d="M10 6.174c-.96 0-1.74.779-1.74 1.739C8.26 8.873 9.04 10 10 10s1.74-1.127 1.74-2.087c0-.96-.78-1.74-1.74-1.74zm-2.783 7.304h5.566a.348.348 0 00.347-.348v-.775c0-.617-.407-1.16-1-1.335a7.634 7.634 0 00-2.13-.324 7.593 7.593 0 00-2.134.32 1.391 1.391 0 00-.996 1.335v.78c0 .191.155.347.347.347z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M17.26 6.637a2.78 2.78 0 01-.603.357c.42.932.647 1.953.647 3.006A7.312 7.312 0 0110 17.304 7.312 7.312 0 012.696 10 7.312 7.312 0 0110 2.696c1.399 0 2.765.41 3.933 1.157a1.723 1.723 0 00-.107.582c0 .958.78 1.739 1.74 1.739a1.74 1.74 0 001.738-1.74 1.732 1.732 0 00-3.011-1.176A8.011 8.011 0 0010 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8a8 8 0 00-.74-3.363z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ProductTraitsIcon.displayName = 'ProductTraitsIcon';
export {ProductTraitsIcon};
