import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductSourceSchemaIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSourceSchemaIcon = React.forwardRef<HTMLElement, ProductSourceSchemaIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductSourceSchemaIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductSourceSchemaIcon]: Missing a title for non-decorative icon.');
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
            d="M8.5 2a.5.5 0 00-.5.5v1.314A6.509 6.509 0 003.815 8H2.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h1.314A6.51 6.51 0 008 16.186V17.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1.314A6.51 6.51 0 0016.186 12H17.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-1.314A6.509 6.509 0 0012 3.814V2.5a.5.5 0 00-.5-.5h-3zM12 4.876V5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-.624A5.509 5.509 0 004.876 8H5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-.624A5.51 5.51 0 008 15.124V14.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v.624A5.51 5.51 0 0015.124 12H14.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h.624A5.509 5.509 0 0012 4.876zM11 15v2H9v-2h2zM9 4.17a.5.5 0 010 .039V5h2V3H9v1.17zM3 9h2v2H3V9zm12 0v2h2V9h-2z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductSourceSchemaIcon.displayName = 'ProductSourceSchemaIcon';
export { ProductSourceSchemaIcon };
