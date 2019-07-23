/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface InterconnectIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const InterconnectIcon: React.FC<InterconnectIconProps> = ({title, decorative, ...props}) => (
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
            d="M414.72 512c0 74.906 81.05 121.702 145.92 84.224 30.106-17.357 48.64-49.459 48.64-84.224 0-74.906-81.05-121.702-145.92-84.224-30.106 17.357-48.64 49.459-48.64 84.224M512 1024c-138.24 0-266.24-51.2-363.52-148.48C51.2 778.24 0 650.24 0 512c0-138.24 51.2-266.24 148.48-363.52C245.76 51.2 373.76 0 512 0c138.24 0 266.24 51.2 363.52 148.48l-35.84 35.84C752.64 97.28 634.88 51.2 512 51.2S271.36 97.28 184.32 184.32C97.28 271.36 51.2 389.12 51.2 512s46.08 240.64 133.12 327.68C271.36 926.72 389.12 972.8 512 972.8s240.64-46.08 327.68-133.12C926.72 752.64 972.8 634.88 972.8 512h51.2c0 138.24-51.2 266.24-148.48 363.52C778.24 972.8 650.24 1024 512 1024m0-194.56c-87.04 0-163.84-30.72-225.28-92.16l35.84-35.84c51.2 51.2 117.76 76.8 189.44 76.8 71.68 0 138.24-25.6 189.44-76.8 51.2-51.2 76.8-117.76 76.8-189.44 0-71.68-25.6-138.24-76.8-189.44-51.2-51.2-117.76-76.8-189.44-76.8-71.68 0-138.24 25.6-189.44 76.8-51.2 51.2-76.8 117.76-76.8 189.44h-51.2c0-87.04 30.72-163.84 92.16-225.28S424.96 194.56 512 194.56c87.04 0 163.84 30.72 225.28 92.16S829.44 424.96 829.44 512c0 87.04-30.72 163.84-92.16 225.28S599.04 829.44 512 829.44"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

InterconnectIcon.defaultProps = {
  title: 'Interconnect Icon',
  decorative: true,
};

export {InterconnectIcon};
