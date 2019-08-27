/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProxyIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ProxyIcon: React.FC<ProxyIconProps> = ({title, decorative, ...props}) => (
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
            d="M1019.949 801.67H4.5V213.779h1015.449V801.67M57.945 748.225h908.559V267.223H57.945v481.002m106.889-233.018V1024l694.781-513.603V0L164.834 515.207m641.336-34.205L218.279 918.18V544.067L806.17 106.889v374.113"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ProxyIcon.defaultProps = {
  title: 'Proxy Icon',
  decorative: true,
};

ProxyIcon.displayName = 'ProxyIcon';

export {ProxyIcon};
