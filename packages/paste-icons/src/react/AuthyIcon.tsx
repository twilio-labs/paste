/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface AuthyIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const AuthyIcon: React.FC<AuthyIconProps> = ({title, decorative, ...props}) => (
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
            d="M353.767 890.02a63.246 63.246 0 01-44.701 18.506 63.214 63.214 0 01-44.649-18.506L93.662 719.266c-121.747-121.953-124.515-318.594-6.254-443.93l2.871-3.384 6.818-5.69C222.433 148 419.075 150.768 541.027 272.516L711.73 443.27c24.709 24.658 24.709 64.642 0 89.35-24.657 24.658-64.641 24.658-89.35 0L451.677 361.866c-74.945-73.971-195.411-73.971-270.356 0-73.972 74.945-73.972 195.412 0 270.357l170.754 170.703c23.683 23.939 24.401 62.232 1.692 87.094m317.466-756.014a63.246 63.246 0 0144.701-18.506 63.123 63.123 0 0144.649 18.506L931.338 304.76c121.747 121.953 124.515 318.594 6.254 443.931l-2.871 3.383-6.818 5.69c-125.336 118.262-321.978 115.494-443.93-6.254L313.27 580.807c-24.709-24.708-24.709-64.693 0-89.401 24.657-24.657 64.641-24.657 89.35 0L573.323 662.16c74.945 74.023 195.462 74.023 270.356 0 73.972-74.894 73.972-195.411 0-270.306L672.925 221.1c-23.683-23.939-24.401-62.232-1.692-87.094"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

AuthyIcon.defaultProps = {
  title: 'Authy Icon',
  decorative: true,
};

export {AuthyIcon};
