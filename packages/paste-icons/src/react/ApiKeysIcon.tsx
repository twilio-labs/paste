/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ApiKeysIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ApiKeysIcon: React.FC<ApiKeysIconProps> = ({title, decorative, ...props}) => (
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
            d="M179.2 768c0 59.136 64 96.051 115.2 66.509A76.805 76.805 0 00332.8 768c0-59.136-64-96.051-115.2-66.509A76.805 76.805 0 00179.2 768m153.6 256C148.48 1024 0 875.52 0 691.2c0-184.32 148.48-332.8 332.8-332.8 46.08 0 92.16 10.24 138.24 30.72L855.04 0H1024v256h-87.04l-15.36 15.36v87.04h-87.04l-15.36 15.36v87.04h-87.04l-97.28 97.28c20.48 40.96 25.6 87.04 25.6 133.12C665.6 875.52 517.12 1024 332.8 1024m0-619.52c-153.6 0-281.6 128-281.6 281.6 0 153.6 128 286.72 281.6 286.72 153.6 0 281.6-128 281.6-281.6 0-46.08-10.24-87.04-30.72-128l-10.24-15.36L711.68 409.6H768v-56.32l46.08-46.08h56.32v-56.32l46.08-46.08h56.32V51.2h-97.28L476.16 450.56 460.8 435.2c-40.96-20.48-81.92-30.72-128-30.72"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ApiKeysIcon.defaultProps = {
  title: 'Api Keys Icon',
  decorative: true,
};

export {ApiKeysIcon};
