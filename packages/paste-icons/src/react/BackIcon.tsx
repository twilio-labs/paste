/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface BackIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const BackIcon: React.FC<BackIconProps> = ({title, decorative, ...props}) => (
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
            d="M791.545 966.191L351.039 520.285 791.545 57.809 736.436 0 233 520.285 736.436 1024l55.109-57.809"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

BackIcon.defaultProps = {
  title: 'Back Icon',
  decorative: true,
};

BackIcon.displayName = 'BackIcon';

export {BackIcon};
