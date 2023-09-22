/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface SocialIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SocialIcon = React.forwardRef<HTMLElement, SocialIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `SocialIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SocialIcon]: Missing a title for non-decorative icon.');
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
            d="M3.475 3.941a.533.533 0 00-.534.534v10.038a.533.533 0 00.534.534h2.008c.26 0 .47.21.47.47v2.071l3.263-2.447a.47.47 0 01.283-.094h7.026a.534.534 0 00.534-.534V4.475a.534.534 0 00-.534-.534H3.475zm-1.043-.51A1.475 1.475 0 013.475 3h13.05A1.475 1.475 0 0118 4.475v10.038a1.473 1.473 0 01-1.475 1.475h-6.87l-3.89 2.918a.47.47 0 01-.753-.377v-2.541H3.475A1.475 1.475 0 012 14.513V4.475c0-.391.155-.767.432-1.043z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.67 7.708a1.017 1.017 0 00-.377.045.97.97 0 00-.326.177.895.895 0 00-.223.274.832.832 0 00-.085.527c.03.179.12.347.259.48l.007.007L10 11.278l2.083-2.068a.862.862 0 00.258-.48.827.827 0 00-.086-.524l-.001-.003a.872.872 0 00-.174-.229.99.99 0 00-.681-.267.99.99 0 00-.682.267l-.392.374a.47.47 0 01-.65 0l-.392-.372a.979.979 0 00-.614-.268zm-.662-.852a1.958 1.958 0 011.433.099c.18.087.347.201.491.339l.068.064.069-.065a1.93 1.93 0 011.33-.527c.496 0 .974.187 1.331.526.145.138.266.299.359.476.181.344.245.736.18 1.119a1.803 1.803 0 01-.532 1l-2.405 2.388a.47.47 0 01-.663 0L7.265 9.89a1.806 1.806 0 01-.534-1 1.77 1.77 0 01.179-1.121c.113-.216.269-.407.457-.563.189-.156.407-.274.64-.349z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SocialIcon.displayName = 'SocialIcon';
export { SocialIcon };
