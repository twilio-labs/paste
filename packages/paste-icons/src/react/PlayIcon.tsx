/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PlayIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const PlayIcon: React.FC<PlayIconProps> = ({title, decorative, ...props}) => (
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
            d="M510.866 1023.521c-45.942 0-86.78-5.105-132.722-15.314-132.722-35.733-239.92-122.513-311.386-239.92-137.826-245.025-56.151-556.41 188.874-699.342 117.407-66.36 255.234-86.78 387.956-51.047 132.721 35.733 239.92 122.512 311.385 239.92C1097.905 502.843 1011.125 814.23 766.1 957.16c-76.57 45.942-168.454 66.361-255.234 66.361M286.26 119.992C71.863 247.61-4.707 523.262 117.805 742.763c61.256 107.2 158.245 178.664 275.653 214.397 117.408 30.628 239.92 15.314 342.014-45.942 214.397-127.617 290.967-403.27 168.455-622.772C842.67 181.248 745.681 109.782 628.274 74.05 510.866 43.421 388.353 58.735 286.26 119.992m112.303 587.04V313.97l342.014 199.082-342.014 193.98"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

PlayIcon.defaultProps = {
  title: 'Play Icon',
  decorative: true,
};

PlayIcon.displayName = 'PlayIcon';

export {PlayIcon};
