/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface EmailIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const EmailIcon: React.FC<EmailIconProps> = ({title, decorative, ...props}) => (
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
            d="M1024 793.7H204.8V230.5H1024v563.2m-768-51.2h716.8V281.7H256v460.8m358.4-211.2l332.749-249.549H972.8v44.493L614.4 595.3 256.051 326.551V281.7h25.6L614.4 531.3m-384-300.8c14.131 0 25.6 11.469 25.6 25.6 0 14.131-11.469 25.6-25.6 25.6H25.6C11.469 281.7 0 270.231 0 256.1c0-14.131 11.469-25.6 25.6-25.6h204.8M128 384.1c14.131 0 25.6 11.469 25.6 25.6 0 14.131-11.469 25.6-25.6 25.6H25.6C11.469 435.3 0 423.831 0 409.7c0-14.131 11.469-25.6 25.6-25.6H128"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

EmailIcon.defaultProps = {
  title: 'Email Icon',
  decorative: true,
};

export {EmailIcon};
