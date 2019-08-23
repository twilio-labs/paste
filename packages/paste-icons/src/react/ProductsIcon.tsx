/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductsIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ProductsIcon: React.FC<ProductsIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg
          role="img"
          aria-hidden={decorative}
          aria-labelledby={uid}
          height="100%"
          width="100%"
          viewBox="0 0 1024 1024"
        >
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M768.5 256.5h-256V.5h512v512h-256v-256M538.1 26.1v230.4h230.4v230.4h230.4V26.1H538.1m-25.6 486.4h-256v-256h512v512h-256v-256M282.1 282.1v230.4h230.4v230.4h230.4V282.1H282.1m-256 256v460.8h460.8V538.1H26.1m486.4-25.6v512H.5v-512h512"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ProductsIcon.defaultProps = {
  title: 'Products Icon',
  decorative: true,
};

ProductsIcon.displayName = 'ProductsIcon';

export {ProductsIcon};
