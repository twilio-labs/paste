/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductInternetOfThingsEmbeddedSIMIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInternetOfThingsEmbeddedSIMIcon = React.forwardRef<
  HTMLElement,
  ProductInternetOfThingsEmbeddedSIMIconProps
>(({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
  const titleId = `ProductInternetOfThingsEmbeddedSIMIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductInternetOfThingsEmbeddedSIMIcon]: Missing a title for non-decorative icon.');
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
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.571 3H17.43a.571.571 0 01.571.571v13.143a.572.572 0 01-.571.572H2.57A.57.57 0 012 16.714V3.571A.571.571 0 012.571 3zm13.143 13.143h1.143v-12h-1.143v.571a.571.571 0 11-1.143 0v-.571h-2.285v.571a.571.571 0 11-1.143 0v-.571H8.857v.571a.571.571 0 01-1.143 0v-.571H5.43v.571a.571.571 0 11-1.143 0v-.571H3.143v12h1.143v-.572a.571.571 0 011.143 0v.572h2.285v-.572a.571.571 0 111.143 0v.572h2.286v-.572a.571.571 0 011.143 0v.572h2.285v-.572a.571.571 0 111.143 0v.572zM4.857 6.429h10.286a.571.571 0 01.571.571v6.286a.571.571 0 01-.571.571H4.857a.57.57 0 01-.571-.571V7a.571.571 0 01.571-.571zm.572 6.285h9.142V7.571H7.714v.572a.571.571 0 01-1.143 0V7.57H5.43v5.143z"
        />
      </svg>
    </IconWrapper>
  );
});

ProductInternetOfThingsEmbeddedSIMIcon.displayName = 'ProductInternetOfThingsEmbeddedSIMIcon';
export { ProductInternetOfThingsEmbeddedSIMIcon };
