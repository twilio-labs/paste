/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface VoiceEnabledIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const VoiceEnabledIcon: React.FC<VoiceEnabledIconProps> = ({title, decorative, ...props}) => (
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
            d="M796.444 1000.094l-17.964-5.988c-5.989 0-71.86-35.93-101.802-47.907-233.543-155.696-437.146-347.321-598.83-574.877-17.965-23.953-65.871-95.813-65.871-95.813L0 257.544 227.556 24l263.485 263.486-89.825 95.813c77.848 83.836 161.685 167.672 257.497 239.532L760.515 521.03 1024 784.515l-227.556 215.579M77.848 263.533c11.977 23.953 35.93 59.883 47.906 71.859 155.696 227.556 353.31 413.193 586.854 556.913l71.86 35.929 149.707-149.707-179.649-179.649-95.813 101.801-17.964-17.965c-113.778-83.836-215.579-179.649-305.404-281.45L317.38 377.31l89.825-89.824-179.649-179.649L77.848 263.533"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

VoiceEnabledIcon.defaultProps = {
  title: 'Voice Enabled Icon',
  decorative: true,
};

VoiceEnabledIcon.displayName = 'VoiceEnabledIcon';

export {VoiceEnabledIcon};
