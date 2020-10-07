/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductTwimlBinsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductTwimlBinsIcon: React.FC<ProductTwimlBinsIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductTwimlBinsIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            height="100%"
            width="100%"
            viewBox="0 0 1024 1024"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              d="M998.4 358.7H25.6C10.24 358.7 0 348.46 0 333.1v-256c0-15.36 10.24-25.6 25.6-25.6h972.8c15.36 0 25.6 10.24 25.6 25.6v256c0 15.36-10.24 25.6-25.6 25.6M51.2 307.5h921.6V102.7H51.2v204.8m901.12 665.6H76.8c-15.36 0-25.6-10.24-25.6-25.6V333.1c0-15.36 10.24-25.6 25.6-25.6h875.52c15.36 0 25.6 10.24 25.6 25.6v614.4c0 15.36-15.36 25.6-25.6 25.6M102.4 921.9h824.32V358.7H102.4v563.2m588.8-302.08H332.8c-15.36 0-25.6-10.24-25.6-25.6v-102.4c0-20.48 10.24-30.72 25.6-30.72h358.4c15.36 0 25.6 10.24 25.6 25.6v102.4c0 15.36-10.24 30.72-25.6 30.72m-332.8-51.2h307.2v-51.2H358.4v51.2"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductTwimlBinsIcon.displayName = 'ProductTwimlBinsIcon';
export {ProductTwimlBinsIcon};
