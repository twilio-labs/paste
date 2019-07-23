/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface MultiFactorAuthenticationIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const MultiFactorAuthenticationIcon: React.FC<MultiFactorAuthenticationIconProps> = ({title, decorative, ...props}) => (
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
            d="M205.2 460.8v512h614.4v-512H205.2m-25.6-51.2h665.6c14.144 0 25.6 11.456 25.6 25.6v563.2c0 14.144-11.456 25.6-25.6 25.6H179.6c-14.144 0-25.6-11.456-25.6-25.6V435.2c0-14.144 11.456-25.6 25.6-25.6m486.4 0V204.8c0-84.832-68.768-153.6-153.6-153.6s-153.6 68.768-153.6 153.6v204.8H666M512.4 0c113.12 0 204.8 91.68 204.8 204.8v230.4c0 14.144-11.456 25.6-25.6 25.6H333.2c-14.144 0-25.6-11.456-25.6-25.6V204.8C307.6 91.68 399.28 0 512.4 0m0 614.4c28.288 0 51.2 22.912 51.2 51.2V768c0 28.288-22.912 51.2-51.2 51.2-28.288 0-51.2-22.912-51.2-51.2V665.6c0-28.288 22.912-51.2 51.2-51.2"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

MultiFactorAuthenticationIcon.defaultProps = {
  title: 'Multi Factor Authentication Icon',
  decorative: true,
};

export {MultiFactorAuthenticationIcon};
