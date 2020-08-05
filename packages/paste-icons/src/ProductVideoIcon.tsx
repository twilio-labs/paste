/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductVideoIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductVideoIcon: React.FC<ProductVideoIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductVideoIcon]: Missing a title for non-decorative icon.');
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
              d="M13.75 17h-8.5C4.56 17 4 16.44 4 15.75v-7.5C4 7.56 4.56 7 5.25 7h8.5c.69 0 1.25.56 1.25 1.25v1.94l3.19-1.595A1.25 1.25 0 0120 9.715v4.575a1.245 1.245 0 01-1.805 1.12L15 13.83v1.92c0 .69-.56 1.25-1.25 1.25zm-8.5-9a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-2.725a.5.5 0 01.72-.45l3.92 1.925a.25.25 0 00.24 0 .26.26 0 00.12-.215v-4.57a.26.26 0 00-.12-.215.25.25 0 00-.24 0l-3.915 1.955A.5.5 0 0114 11V8.25a.25.25 0 00-.25-.25h-8.5z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductVideoIcon.displayName = 'ProductVideoIcon';
export {ProductVideoIcon};
