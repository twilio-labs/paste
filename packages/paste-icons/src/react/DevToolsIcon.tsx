/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface DevToolsIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const DevToolsIcon: React.FC<DevToolsIconProps> = ({title, decorative, ...props}) => (
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
            d="M418.918 1024h46.029L605.082 0h-46.029L418.918 1024m341.863-798.208l-36.711 36.352L950.579 486.4 724.07 710.656l36.711 36.352L1024 486.4 760.781 225.792m-497.511 0L0 486.4l263.27 260.608 36.711-36.352L72.909 486.4l227.072-224.256-36.711-36.352"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

DevToolsIcon.defaultProps = {
  title: 'Dev Tools Icon',
  decorative: true,
};

DevToolsIcon.displayName = 'DevToolsIcon';

export {DevToolsIcon};
