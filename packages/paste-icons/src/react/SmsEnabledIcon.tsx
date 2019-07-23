/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SmsEnabledIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const SmsEnabledIcon: React.FC<SmsEnabledIconProps> = ({title, decorative, ...props}) => (
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
            d="M128 896V640H0V0h1024v640H441.6L128 896M64 576h128v185.6L416 576h544V64H64v512m128-384v64h640v-64H192m0 192v64h448v-64H192m249.6 640"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

SmsEnabledIcon.defaultProps = {
  title: 'Sms Enabled Icon',
  decorative: true,
};

export {SmsEnabledIcon};
