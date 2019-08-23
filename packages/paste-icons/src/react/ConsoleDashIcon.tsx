/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ConsoleDashIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ConsoleDashIcon: React.FC<ConsoleDashIconProps> = ({title, decorative, ...props}) => (
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
            d="M26 0v1024h972.8V0H26m921.6 972.8H77.2V51.2h870.4v921.6M742.8 614.4H794V460.8h51.2v-51.2H794v-256h-51.2v256h-51.2v51.2h51.2v153.6m-256 0H538V307.2h51.2V256H538V153.6h-51.2V256h-51.2v51.2h51.2v307.2m-256 0H282V409.6h51.2v-51.2H282V153.6h-51.2v204.8h-51.2v51.2h51.2v204.8m460.8 179.2c0 59.136 64 96.051 115.2 66.509a76.805 76.805 0 0038.4-66.509c0-59.136-64-96.051-115.2-66.509a76.805 76.805 0 00-38.4 66.509m-256 0c0 59.136 64 96.051 115.2 66.509a76.805 76.805 0 0038.4-66.509c0-59.136-64-96.051-115.2-66.509a76.805 76.805 0 00-38.4 66.509m-256 0c0 59.136 64 96.051 115.2 66.509a76.805 76.805 0 0038.4-66.509c0-59.136-64-96.051-115.2-66.509a76.805 76.805 0 00-38.4 66.509"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ConsoleDashIcon.defaultProps = {
  title: 'Console Dash Icon',
  decorative: true,
};

ConsoleDashIcon.displayName = 'ConsoleDashIcon';

export {ConsoleDashIcon};
