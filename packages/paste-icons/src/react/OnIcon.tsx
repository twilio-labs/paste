/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface OnIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const OnIcon: React.FC<OnIconProps> = ({title, decorative, ...props}) => (
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
            d="M349.026 780.82L977.846 152 1024 198.089 349.026 872.998 0 524.037l46.154-46.089L349.026 780.82"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

OnIcon.defaultProps = {
  title: 'On Icon',
  decorative: true,
};

export {OnIcon};
