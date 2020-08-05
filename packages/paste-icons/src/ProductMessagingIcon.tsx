/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductMessagingIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductMessagingIcon: React.FC<ProductMessagingIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductMessagingIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M7.885 19A.867.867 0 017 18.123v-2.158H5.25c-.69 0-1.25-.557-1.25-1.245V7.246C4 6.558 4.56 6 5.25 6h13.5c.69 0 1.25.558 1.25 1.246v7.474c0 .688-.56 1.245-1.25 1.245h-7.06l-3.235 2.82a.882.882 0 01-.57.215zM5.25 6.997a.25.25 0 00-.25.249v7.474c0 .137.112.249.25.249H7.5a.497.497 0 01.5.498v2.377l3.165-2.756a.501.501 0 01.335-.12h7.25a.25.25 0 00.25-.248V7.246a.25.25 0 00-.25-.25H5.25z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductMessagingIcon.displayName = 'ProductMessagingIcon';
export {ProductMessagingIcon};
