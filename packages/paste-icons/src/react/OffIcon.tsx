/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface OffIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const OffIcon: React.FC<OffIconProps> = ({title, decorative, ...props}) => (
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
            d="M0 62.087L961.913 1024 1024 961.913 62.087 0m899.826 0L0 961.913 62.087 1024 1024 62.087"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

OffIcon.defaultProps = {
  title: 'Off Icon',
  decorative: true,
};

export {OffIcon};
