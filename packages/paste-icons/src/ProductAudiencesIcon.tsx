/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductAudiencesIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAudiencesIcon = React.forwardRef<HTMLElement, ProductAudiencesIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ProductAudiencesIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductAudiencesIcon]: Missing a title for non-decorative icon.');
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
            d="M7.856 4c0 1.105.874 2 1.952 2 1.079 0 1.953-.895 1.953-2s-.874-2-1.953-2c-1.078 0-1.952.895-1.952 2zM4.603 9.333v5.334h1.301V16a.66.66 0 01-.65.667H3.951a.66.66 0 01-.65-.667v-3.333H2v-4c0-.737.583-1.334 1.301-1.334h1.97a3.348 3.348 0 00-.668 2zM11.11 18H8.507a.66.66 0 01-.65-.667v-4H5.903v-4c0-1.105.874-2 1.952-2h3.905c1.078 0 1.952.895 1.952 2v4H11.76v4a.66.66 0 01-.651.667zM3.302 5.334c0 .736.582 1.333 1.301 1.333.72 0 1.302-.597 1.302-1.333C5.905 4.596 5.322 4 4.603 4c-.719 0-1.301.597-1.301 1.333zm11.712 9.333V9.333c0-.753-.254-1.441-.668-2h1.97c.718 0 1.3.597 1.3 1.334v4h-1.3V16a.66.66 0 01-.651.667h-1.301a.66.66 0 01-.651-.667v-1.333h1.3zm1.301-9.334c0 .737-.582 1.334-1.301 1.334s-1.302-.597-1.302-1.333c0-.737.583-1.334 1.302-1.334.719 0 1.301.597 1.301 1.333z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ProductAudiencesIcon.displayName = 'ProductAudiencesIcon';
export {ProductAudiencesIcon};
