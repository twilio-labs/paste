/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PhoneNumbersIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const PhoneNumbersIcon: React.FC<PhoneNumbersIconProps> = ({title, decorative, ...props}) => (
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
            d="M921.7 358.4v-51.2H711.268L752.74 0h-45.568L665.7 307.2H430.692L472.164 0h-45.568L384.1 307.2H153.7v51.2h223.744l-41.472 307.2H102.5v51.2h226.816L287.844 1024h45.568l42.496-307.2h234.496L568.932 1024H614.5l42.496-307.2H870.5v-51.2H665.7l41.472-307.2H921.7M614.5 665.6H382.564l41.472-307.2h234.496L614.5 665.6"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

PhoneNumbersIcon.defaultProps = {
  title: 'Phone Numbers Icon',
  decorative: true,
};

export {PhoneNumbersIcon};
