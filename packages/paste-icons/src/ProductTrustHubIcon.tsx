/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductTrustHubIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductTrustHubIcon: React.FC<ProductTrustHubIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductTrustHubIcon]: Missing a title for non-decorative icon.');
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
              d="M18.5 4A1.502 1.502 0 0120 5.5v5.125a9.473 9.473 0 01-7.917 9.368.496.496 0 01-.166 0A9.473 9.473 0 014 10.625V5.5A1.502 1.502 0 015.5 4zm0 1h-13a.5.5 0 00-.5.5v5.125a8.476 8.476 0 007 8.368 8.476 8.476 0 007-8.368V5.5a.5.5 0 00-.5-.5zm-6.49 1.995a2.751 2.751 0 01.342 5.48 4.518 4.518 0 013.686 2.467.5.5 0 01-.893.45 3.521 3.521 0 00-6.29 0 .5.5 0 01-.893-.45 4.555 4.555 0 012.003-2.004 4.496 4.496 0 011.667-.466 2.751 2.751 0 01.379-5.477zM12 8a1.75 1.75 0 100 3.5A1.75 1.75 0 0012 8z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductTrustHubIcon.displayName = 'ProductTrustHubIcon';
export {ProductTrustHubIcon};
