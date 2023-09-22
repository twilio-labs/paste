import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductInternetOfThingsNarrowbandIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInternetOfThingsNarrowbandIcon = React.forwardRef<HTMLElement, ProductInternetOfThingsNarrowbandIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductInternetOfThingsNarrowbandIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductInternetOfThingsNarrowbandIcon]: Missing a title for non-decorative icon.');
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
            d="M18.63 1.286a.588.588 0 01.245-.036.588.588 0 01.625.625v2.5a1.875 1.875 0 11-3.75 0v-2.5a.625.625 0 10-1.25 0v2.5a.625.625 0 11-1.25 0v-2.5a1.875 1.875 0 013.75 0v2.5a.625.625 0 001.25 0v-2.5a.589.589 0 01.38-.589zM10.624 5c.28.01.546.121.75.312l1.563 1.625c.189.18.301.427.312.688v10.813A1.55 1.55 0 0111.687 20H3.563A1.55 1.55 0 012 18.437V6.563A1.55 1.55 0 013.563 5h7.062zm1.357 13.56a.293.293 0 00.018-.122V7.75l-1.5-1.5H3.563a.294.294 0 00-.313.312v11.875a.293.293 0 00.313.313h8.124a.295.295 0 00.295-.19zm-7.103-8.524A.587.587 0 015.125 10h5a.587.587 0 01.625.625v6.25a.585.585 0 01-.625.625h-5a.587.587 0 01-.625-.625v-6.25a.588.588 0 01.38-.589zm2.996 1.214L9.5 12.875V11.25H7.875zm-.5 5L5.75 14.625v1.625h1.625zM5.75 12.875l3.375 3.375H9.5v-1.625L6.125 11.25H5.75v1.625z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductInternetOfThingsNarrowbandIcon.displayName = 'ProductInternetOfThingsNarrowbandIcon';
export { ProductInternetOfThingsNarrowbandIcon };
