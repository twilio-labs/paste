/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ClockRegularIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ClockRegularIcon: React.FC<ClockRegularIconProps> = ({title, decorative, ...props}) => (
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
            d="M512 0C229.145 0 0 229.178 0 512s229.178 512 512 512 512-229.178 512-512S794.822 0 512 0m0 924.903C283.879 924.903 99.097 740.121 99.097 512S283.879 99.097 512 99.097 924.903 283.879 924.903 512 740.121 924.903 512 924.903m127.604-215.535l-175.27-127.373c-6.408-4.756-10.107-12.189-10.107-20.017V223.001c0-13.61 11.164-24.774 24.774-24.774h66.064c13.643 0 24.774 11.164 24.774 24.774v292.533l137.91 100.352c11.132 8.06 13.411 23.519 5.384 34.684l-38.812 53.48c-8.06 10.933-23.519 13.411-34.684 5.384l-.033-.066"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ClockRegularIcon.defaultProps = {
  title: 'Clock Regular Icon',
  decorative: true,
};

ClockRegularIcon.displayName = 'ClockRegularIcon';

export {ClockRegularIcon};
