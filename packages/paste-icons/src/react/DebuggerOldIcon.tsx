/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface DebuggerOldIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const DebuggerOldIcon: React.FC<DebuggerOldIconProps> = ({title, decorative, ...props}) => (
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
            d="M1014.433 430.471v-65.223H805.72c-17.393-97.834-71.745-171.753-154.361-210.887V0h-65.223v132.62c-23.915-4.348-47.83-8.696-73.919-8.696-26.09 0-50.005 2.174-73.92 8.696V0h-65.223v154.361c-82.615 39.134-139.142 113.053-154.361 210.887H10v65.223h204.365v93.487H10v65.222h204.365v67.397c0 8.697 0 17.393 2.174 26.09H10v65.223h228.28c63.049 132.62 232.629 254.369 254.37 269.588 6.522 4.348 13.044 6.522 19.567 6.522 6.522 0 13.044-2.174 19.566-6.522 23.916-15.219 193.495-139.143 254.37-269.588h228.28v-65.223H807.894c2.174-8.697 2.174-17.393 2.174-26.09V589.18h204.365v-65.222H810.068v-93.487h204.365m-502.216-239.15c121.749 0 204.365 65.223 226.106 173.927H286.11c21.741-110.879 104.357-173.927 226.107-173.927m0 758.76c-78.268-58.701-232.629-193.495-232.629-293.504V467.431l365.249 365.248c-45.657 47.831-95.661 91.313-132.62 117.402m232.628-293.504c0 39.134-23.915 82.616-56.527 126.098L336.115 430.471h406.556v226.106h2.174"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

DebuggerOldIcon.defaultProps = {
  title: 'Debugger Old Icon',
  decorative: true,
};

DebuggerOldIcon.displayName = 'DebuggerOldIcon';

export {DebuggerOldIcon};
