/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface VideoIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const VideoIcon: React.FC<VideoIconProps> = ({title, decorative, ...props}) => (
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
            d="M754.534 862.621H0V162h754.534v225.28L1024 215.863v592.844L754.534 638.979v223.642m-700.62-53.914h646.707V539.242l269.517 169.779V315.037L700.621 485.379V215.863H53.914v592.844"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

VideoIcon.defaultProps = {
  title: 'Video Icon',
  decorative: true,
};

export {VideoIcon};
