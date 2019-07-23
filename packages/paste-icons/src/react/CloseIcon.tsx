/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CloseIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const CloseIcon: React.FC<CloseIconProps> = ({title, decorative, ...props}) => (
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
            d="M6.5 73.15l60.953-60.953 950.85 950.85L957.35 1024 6.5 73.15m0 877.7L957.35 0l60.953 60.953-950.85 950.85L6.5 950.85"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

CloseIcon.defaultProps = {
  title: 'Close Icon',
  decorative: true,
};

export {CloseIcon};
