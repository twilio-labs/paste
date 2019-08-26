/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface VoiceIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const VoiceIcon: React.FC<VoiceIconProps> = ({title, decorative, ...props}) => (
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
            d="M230.963 1024l17.664-9.626c160.205-88.576 307.251-199.116 436.736-328.499a1956.514 1956.514 0 00328.448-436.685L1024 231.475 792.525 0 527.309 265.267 640.87 378.829 378.88 641.382 265.267 527.821 0 795.75 230.963 1024m726.631-783.411c-84.48 149.043-188.672 286.054-309.76 407.245-121.191 121.088-258.151 225.28-407.245 309.708L76.083 793.037l189.696-189.696 113.613 113.613 337.562-338.125-113.562-113.562L792.525 76.083l165.069 164.506"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

VoiceIcon.defaultProps = {
  title: 'Voice Icon',
  decorative: true,
};

VoiceIcon.displayName = 'VoiceIcon';

export {VoiceIcon};
