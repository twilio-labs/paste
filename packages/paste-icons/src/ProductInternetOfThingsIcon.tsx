/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductInternetOfThingsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInternetOfThingsIcon: React.FC<ProductInternetOfThingsIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
  ...props
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductInternetOfThingsIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color} {...props}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 20 20"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12.88 2l.147.005a1.5 1.5 0 01.913.41l1.62 1.62A1.5 1.5 0 0116 5.1v11.65c0 .69-.56 1.25-1.25 1.25h-9.5A1.25 1.25 0 014 16.74V3.24A1.255 1.255 0 015.25 2h7.63zm0 1H5.25a.25.25 0 00-.25.25v13.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V5.1a.5.5 0 00-.145-.33l-1.62-1.62A.5.5 0 0012.88 3zm-.38 4A1.5 1.5 0 0114 8.5v6a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 016 14.5v-6A1.5 1.5 0 017.5 7zM7 10.805V14.5a.5.5 0 00.5.5h3.695L7 10.805zM7.915 8H7.5a.5.5 0 00-.5.5v.89L12.595 15a.5.5 0 00.405-.5v-1.415L7.915 8zM12.5 8H9.325L13 11.675V8.5a.5.5 0 00-.5-.5z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductInternetOfThingsIcon.displayName = 'ProductInternetOfThingsIcon';
export {ProductInternetOfThingsIcon};
