/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface InfoIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const InfoIcon: React.FC<InfoIconProps> = ({title, decorative, ...props}) => (
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
            d="M512.382.5c-393.878 0-640 426.418-443.061 767.497 196.938 341.079 689.183 341.079 886.122 0 44.886-77.766 68.557-165.97 68.557-255.81C1023.591 229.776 794.795.91 512.382.5m0 955.09c-341.352 0-554.662-369.524-383.987-665.103 170.676-295.65 597.298-295.65 767.973 0 38.952 67.397 59.416 143.867 59.416 221.7-.409 244.759-198.644 442.994-443.402 443.403m-68.216-545.726v409.295h136.432V409.864H444.166m0-204.647v136.432h136.432V205.217H444.166"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

InfoIcon.defaultProps = {
  title: 'Info Icon',
  decorative: true,
};

InfoIcon.displayName = 'InfoIcon';

export {InfoIcon};
