/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface MoreIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const MoreIcon: React.FC<MoreIconProps> = ({title, decorative, ...props}) => (
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
            d="M179.712 512c0 59.136 64 96.051 115.2 66.509a76.805 76.805 0 0038.4-66.509c0-59.136-64-96.051-115.2-66.509a76.805 76.805 0 00-38.4 66.509m255.488 0c0 59.136 64 96.051 115.2 66.509A76.805 76.805 0 00588.8 512c0-59.136-64-96.051-115.2-66.509A76.805 76.805 0 00435.2 512m255.488 0c0 59.136 64 96.051 115.2 66.509a76.805 76.805 0 0038.4-66.509c0-59.136-64-96.051-115.2-66.509a76.805 76.805 0 00-38.4 66.509M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512m0-972.8C257.485 51.2 51.2 257.485 51.2 512c0 254.515 206.285 460.8 460.8 460.8 254.515 0 460.8-206.285 460.8-460.8 0-254.515-206.285-460.8-460.8-460.8"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

MoreIcon.defaultProps = {
  title: 'More Icon',
  decorative: true,
};

MoreIcon.displayName = 'MoreIcon';

export {MoreIcon};
