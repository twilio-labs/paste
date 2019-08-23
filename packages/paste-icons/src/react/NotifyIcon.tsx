/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface NotifyIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const NotifyIcon: React.FC<NotifyIconProps> = ({title, decorative, ...props}) => (
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
            d="M742.4 288.8c0 59.136 64 96.051 115.2 66.509A76.805 76.805 0 00896 288.8c0-59.136-64-96.051-115.2-66.509a76.805 76.805 0 00-38.4 66.509m76.8 204.8c113.101 0 204.8-91.699 204.8-204.8C1024 175.699 932.301 84 819.2 84c-113.101 0-204.8 91.699-204.8 204.8 0 113.101 91.699 204.8 204.8 204.8m0-358.4c84.838 0 153.6 68.762 153.6 153.6s-68.762 153.6-153.6 153.6-153.6-68.762-153.6-153.6 68.762-153.6 153.6-153.6m102.4 512H462.848L204.8 838.176V647.2H51.2V186.4h512v-51.2H0v563.2h153.6v241.664L480.256 698.4H972.8V544.8h-51.2v102.4"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

NotifyIcon.defaultProps = {
  title: 'Notify Icon',
  decorative: true,
};

NotifyIcon.displayName = 'NotifyIcon';

export {NotifyIcon};
