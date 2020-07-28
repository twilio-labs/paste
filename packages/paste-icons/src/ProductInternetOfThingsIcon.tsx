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
  iconColor,
  title,
  decorative,
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductInternetOfThingsIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} iconColor={iconColor}>
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
              d="M14.88 4l.147.005a1.5 1.5 0 01.913.41l1.62 1.62A1.5 1.5 0 0118 7.1v11.65c0 .69-.56 1.25-1.25 1.25h-9.5A1.25 1.25 0 016 18.74V5.24A1.255 1.255 0 017.25 4h7.63zm0 1H7.25a.25.25 0 00-.25.25v13.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V7.1a.5.5 0 00-.145-.33l-1.62-1.62A.5.5 0 0014.88 5zm-.38 4a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 018 16.5v-6A1.5 1.5 0 019.5 9zM9 12.805V16.5a.5.5 0 00.5.5h3.695L9 12.805zM9.915 10H9.5a.5.5 0 00-.5.5v.89L14.595 17a.5.5 0 00.405-.5v-1.415L9.915 10zm4.585 0h-3.175L15 13.675V10.5a.5.5 0 00-.5-.5z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductInternetOfThingsIcon.displayName = 'ProductInternetOfThingsIcon';
export {ProductInternetOfThingsIcon};
