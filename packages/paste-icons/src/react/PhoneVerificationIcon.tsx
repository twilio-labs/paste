/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PhoneVerificationIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const PhoneVerificationIcon: React.FC<PhoneVerificationIconProps> = ({title, decorative, ...props}) => (
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
            d="M929.677 439.821c-53.192 0-96.282 43.091-96.282 96.283a94.905 94.905 0 0013.153 47.352L478.255 951.749 52.613 529.79V53.114h847.074v63.136L473.52 540.313 283.06 347.748l-35.251 35.251L473.52 610.815l473.519-473.52V.5H0v549.809l473.52 473.52L879.168 618.18a95.547 95.547 0 0048.404 13.154c74.133 0 120.432-80.235 83.393-144.424-17.205-29.779-48.983-48.141-83.393-48.141l2.105 1.052"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

PhoneVerificationIcon.defaultProps = {
  title: 'Phone Verification Icon',
  decorative: true,
};

export {PhoneVerificationIcon};
