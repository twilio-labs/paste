/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductSourcesIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSourcesIcon = React.forwardRef<HTMLElement, ProductSourcesIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ProductSourcesIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductSourcesIcon]: Missing a title for non-decorative icon.');
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
            d="M7.89 3.546a6.5 6.5 0 11-.22 11.806.5.5 0 10-.436.9A7.5 7.5 0 107.49 2.63a.5.5 0 00.4.916z"
          />
          <path
            fill="currentColor"
            d="M10.146 6.646a.5.5 0 000 .707L11.793 9H2.5a.5.5 0 000 1h9.293l-1.646 1.646a.5.5 0 00.707.707l2.5-2.5a.5.5 0 000-.707l-2.5-2.5a.5.5 0 00-.707 0z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ProductSourcesIcon.displayName = 'ProductSourcesIcon';
export {ProductSourcesIcon};
