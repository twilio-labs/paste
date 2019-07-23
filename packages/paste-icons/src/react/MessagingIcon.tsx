/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface MessagingIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const MessagingIcon: React.FC<MessagingIconProps> = ({title, decorative, ...props}) => (
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
            d="M153.6 852.86V632.7H0V69.5h921.6v563.2H450.56L153.6 852.86M51.2 581.5h153.6v169.472L433.664 581.5H870.4V120.7H51.2v460.8M768 955.26L453.12 719.228l41.472-30.208L716.8 853.372V683.9h256V223.1h51.2v512H768v220.16"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

MessagingIcon.defaultProps = {
  title: 'Messaging Icon',
  decorative: true,
};

export {MessagingIcon};
