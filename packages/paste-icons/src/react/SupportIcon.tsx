/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SupportIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const SupportIcon: React.FC<SupportIconProps> = ({title, decorative, ...props}) => (
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
            d="M512 0C229.222 0 0 229.222 0 512s229.222 512 512 512 512-229.222 512-512c0-135.782-53.965-266.035-149.965-362.035S647.782 0 512 0m457.728 460.8h-204.8C744.141 359.629 664.576 280.883 563.2 261.12V56.32C776.294 80.128 944.845 247.808 969.728 460.8M512 716.8c-113.101 0-204.8-91.699-204.8-204.8 0-113.101 91.699-204.8 204.8-204.8 113.101 0 204.8 91.699 204.8 204.8 0 54.323-21.555 106.394-60.006 144.794C618.394 695.245 566.323 716.8 512 716.8M460.8 54.272v204.8C359.629 279.859 280.883 359.424 261.12 460.8H56.32C80.128 247.706 247.808 79.155 460.8 54.272M54.272 563.2h204.8C279.859 664.371 359.424 743.117 460.8 762.88v204.8C247.706 943.872 79.155 776.192 54.272 563.2M563.2 969.728v-204.8C664.371 744.141 743.117 664.576 762.88 563.2h204.8C943.872 776.294 776.192 944.845 563.2 969.728"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

SupportIcon.defaultProps = {
  title: 'Support Icon',
  decorative: true,
};

export {SupportIcon};
