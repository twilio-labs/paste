/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CommunityIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const CommunityIcon: React.FC<CommunityIconProps> = ({title, decorative, ...props}) => (
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
            d="M844.8 484.08c-66.56 0-122.88-56.32-122.88-122.88s56.32-122.88 122.88-122.88 122.88 56.32 122.88 122.88-56.32 122.88-122.88 122.88m0-204.8c-46.08 0-81.92 35.84-81.92 81.92s35.84 81.92 81.92 81.92 81.92-35.84 81.92-81.92-35.84-81.92-81.92-81.92m-665.6 204.8c-66.56 0-122.88-56.32-122.88-122.88s56.32-122.88 122.88-122.88 122.88 56.32 122.88 122.88-56.32 122.88-122.88 122.88m0-204.8c-46.08 0-81.92 35.84-81.92 81.92s35.84 81.92 81.92 81.92 81.92-35.84 81.92-81.92-35.84-81.92-81.92-81.92M512 489.2c-87.04 0-153.6-66.56-153.6-153.6 0-87.04 66.56-153.6 153.6-153.6 87.04 0 153.6 66.56 153.6 153.6 0 87.04-66.56 153.6-153.6 153.6m0-256c-56.32 0-102.4 46.08-102.4 102.4 0 56.32 46.08 102.4 102.4 102.4 56.32 0 102.4-46.08 102.4-102.4 0-56.32-46.08-102.4-102.4-102.4m307.2 609.28H768c0-143.36-112.64-256-256-256s-256 112.64-256 256h-51.2c0-168.96 138.24-307.2 307.2-307.2 168.96 0 307.2 138.24 307.2 307.2M1024 724.72h-51.2c0-76.8-61.44-133.12-138.24-133.12-46.08 0-87.04 20.48-112.64 61.44l-40.96-30.72c35.84-51.2 92.16-81.92 158.72-81.92 102.4-5.12 184.32 81.92 184.32 184.32m-972.8 0H0C0 622.32 81.92 540.4 189.44 540.4c61.44 0 122.88 30.72 158.72 87.04l-40.96 25.6c-25.6-40.96-66.56-61.44-112.64-61.44-81.92-5.12-143.36 56.32-143.36 133.12"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

CommunityIcon.defaultProps = {
  title: 'Community Icon',
  decorative: true,
};

export {CommunityIcon};
