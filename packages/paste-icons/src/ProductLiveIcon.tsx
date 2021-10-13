/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductLiveIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductLiveIcon: React.FC<ProductLiveIconProps> = ({
  as,
  display,
  element = 'ICON',
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ProductLiveIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductLiveIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
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
          d="M15.664 4.219a.713.713 0 00-1.028 0 .746.746 0 000 1.048c2.561 2.61 2.561 6.852 0 9.462a.746.746 0 000 1.048c.135.137.32.223.505.223a.66.66 0 00.506-.223c3.135-3.194 3.135-8.38.017-11.558zm-2.41 2.44a.713.713 0 00-1.028 0 .746.746 0 000 1.047c1.23 1.254 1.247 3.314 0 4.568a.746.746 0 000 1.048c.135.137.32.223.505.223a.66.66 0 00.506-.223c1.837-1.838 1.82-4.826.017-6.664zm-7.888-2.44a.746.746 0 010 1.048c-2.561 2.61-2.561 6.852-.016 9.445a.746.746 0 010 1.048.66.66 0 01-.506.223.725.725 0 01-.506-.223c-3.117-3.177-3.117-8.363 0-11.54a.713.713 0 011.028 0zM7.76 7.706a.746.746 0 000-1.048.713.713 0 00-1.028 0c-1.803 1.838-1.803 4.826 0 6.664.135.137.32.223.506.223a.66.66 0 00.506-.223.746.746 0 000-1.048C6.53 11.021 6.53 8.96 7.76 7.706zm3.473 2.284c0 .692-.551 1.253-1.23 1.253-.68 0-1.23-.56-1.23-1.253 0-.693.55-1.254 1.23-1.254.679 0 1.23.561 1.23 1.254z"
          clipRule="evenodd"
        />
      </svg>
    </IconWrapper>
  );
};

ProductLiveIcon.displayName = 'ProductLiveIcon';
export {ProductLiveIcon};
