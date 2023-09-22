import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductUsageIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductUsageIcon = React.forwardRef<HTMLElement, ProductUsageIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductUsageIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductUsageIcon]: Missing a title for non-decorative icon.');
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
            d="M10.005 4a9.143 9.143 0 016.388 2.62A8.596 8.596 0 0119 12.856v1.509c0 .903-.756 1.635-1.687 1.636H2.688C1.756 15.999 1 15.267 1 14.364v-1.511C.964 8 4.991 4.037 10.005 4zm.004 9.274H10c-.936.005-1.686.735-1.687 1.635h3.375c-.002-.9-.751-1.63-1.68-1.635zm3.967-7.139a8.089 8.089 0 00-7.948-.001c-2.455 1.39-3.947 3.956-3.903 6.713v1.517c0 .3.252.545.563.545h4.5c.002-1.349 1.02-2.494 2.396-2.694l1.57-4.567a.567.567 0 01.712-.345.542.542 0 01.355.69l-1.474 4.29c1.219.326 2.064 1.4 2.066 2.626h4.5c.31 0 .562-.244.562-.545V12.85c.046-2.757-1.445-5.324-3.9-6.716zm1.368 5.501c.466 0 .844.367.844.819a.831.831 0 01-.844.818.831.831 0 01-.844-.818c0-.452.378-.819.844-.819zm-10.688 0a.78.78 0 01.843.695.77.77 0 01-.705.827.782.782 0 01-.861-.673.769.769 0 01.682-.845l.018-.001c.008 0 .015-.003.023-.003zm1.125-2.725c.466 0 .844.367.844.818a.831.831 0 01-.844.819.831.831 0 01-.843-.819c0-.451.378-.818.843-.818zm8.444 0a.657.657 0 01.065.007.827.827 0 01.773.811.831.831 0 01-.844.819.831.831 0 01-.844-.819c0-.451.378-.818.844-.818l.012.001zM8.03 6.732l.068.005c.451.035.794.41.776.848a.833.833 0 01-.844.786.833.833 0 01-.843-.786.828.828 0 01.776-.848.53.53 0 01.135 0z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductUsageIcon.displayName = 'ProductUsageIcon';
export { ProductUsageIcon };
