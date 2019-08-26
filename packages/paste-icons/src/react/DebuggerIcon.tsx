/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface DebuggerIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const DebuggerIcon: React.FC<DebuggerIconProps> = ({title, decorative, ...props}) => (
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
            d="M589.445 153.518V0h51.172v153.518h-51.172m-204.692 0V0h51.173v153.518h-51.173M26 358.753h972.283v51.173H26v-51.173m716.419 153.519h255.864v51.173H742.419v-51.173m-716.419 0h255.864v51.173H26v-51.173M742.419 665.79h255.864v51.173H742.419V665.79M26 665.79h255.864v51.173H26V665.79M512.142 1024c-5.118 0-10.235 0-15.352-5.117-10.235-10.235-266.099-230.278-266.099-383.796V384.34c15.352-158.636 122.815-255.864 281.451-255.864 158.635 0 266.098 102.345 281.45 255.864v250.747c0 153.518-255.864 373.561-266.098 383.796-5.118 5.117-10.235 5.117-15.352 5.117m0-844.351c-133.05 0-220.043 76.759-230.278 204.691v245.629c0 102.346 153.519 260.982 230.278 332.624 76.759-71.642 230.277-230.278 230.277-332.624V384.34c-10.234-127.932-97.228-204.691-230.277-204.691"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

DebuggerIcon.defaultProps = {
  title: 'Debugger Icon',
  decorative: true,
};

DebuggerIcon.displayName = 'DebuggerIcon';

export {DebuggerIcon};
