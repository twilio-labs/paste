import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductSyncIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSyncIcon = React.forwardRef<HTMLElement, ProductSyncIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductSyncIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductSyncIcon]: Missing a title for non-decorative icon.');
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
            d="M17.5 9.5a.5.5 0 01.5.5 8.05 8.05 0 01-4.355 7.136c-.321.17-.656.314-1 .43a8.074 8.074 0 01-6.695-.675.5.5 0 01-.105-.784l.075-.062a.5.5 0 01.54-.008 6.953 6.953 0 003.54.96 7.13 7.13 0 006.695-4.768c.227-.72.33-1.474.305-2.229a.5.5 0 01.5-.5zM6.985 13.553l-1.65 1.65v.004l-.705.705h-.005L2.95 17.586v-4.033h4.035zM13 9.5a.5.5 0 01.5.5 3.5 3.5 0 01-3.5 3.498.5.5 0 110-1A2.5 2.5 0 0012.5 10a.5.5 0 01.5-.5zm-3-2.998a.5.5 0 110 1A2.5 2.5 0 007.5 10a.5.5 0 01-1 0A3.5 3.5 0 0110 6.502zM7.355 2.434a8.074 8.074 0 016.695.675.5.5 0 01.105.784l-.075.062a.5.5 0 01-.54.008 7.063 7.063 0 00-5.26-.754 6.257 6.257 0 00-1.835.75A7.025 7.025 0 003 10a.5.5 0 01-1 0 8.05 8.05 0 014.355-7.136c.321-.17.656-.314 1-.43zm9.695-.025v4.038h-4.035l1.65-1.65v-.004l.705-.705h.005L17.05 2.41z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductSyncIcon.displayName = 'ProductSyncIcon';
export { ProductSyncIcon };
