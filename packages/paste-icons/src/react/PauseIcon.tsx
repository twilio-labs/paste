/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PauseIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const PauseIcon: React.FC<PauseIconProps> = ({title, decorative, ...props}) => (
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
            d="M69.183 766.763C-71.364 525.863 9.687 215.38 258.421 70.891 507.104-73.649 815.282 12.01 955.829 258.236c140.546 246.225 59.444 551.331-189.239 695.871-248.683 144.54-556.861 58.881-697.407-187.344m340.895-407.867v307.206h51.201V358.896h-51.201m153.603 0v307.206h51.201V358.896h-51.201"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

PauseIcon.defaultProps = {
  title: 'Pause Icon',
  decorative: true,
};

export {PauseIcon};
