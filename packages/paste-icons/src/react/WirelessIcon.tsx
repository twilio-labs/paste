/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface WirelessIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const WirelessIcon: React.FC<WirelessIconProps> = ({title, decorative, ...props}) => (
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
            d="M642.387 317.63H382.576c-64.642.066-117.032 52.456-117.099 117.097v346.416c.067 64.642 52.457 117.031 117.099 117.098h259.811c64.642-.067 117.031-52.456 117.099-117.098V434.727c-.068-64.64-52.457-117.03-117.099-117.098m56.11 117.098v189.92l-246.15-246.029h190.04c30.976.036 56.073 25.133 56.11 56.11M326.466 781.142v-203.58l259.751 259.751H382.576c-31.001-.037-56.11-25.17-56.11-56.17m340.317 50.437L326.466 491.264v-56.537c.098-25.328 17.132-47.46 41.594-54.036l330.437 330.437v70.137a56.118 56.118 0 01-31.714 50.377v-.06m196.81-689.905L739.786 17.87A60.58 60.58 0 00696.667 0H247.181C189.918 0 143.5 46.42 143.5 103.681V920.32c0 57.263 46.418 103.681 103.681 103.681h530.601c57.262 0 103.681-46.418 103.681-103.68V184.795a60.578 60.578 0 00-17.87-43.119M820.474 920.32c0 23.578-19.114 42.692-42.692 42.692H247.181c-23.578 0-42.692-19.114-42.692-42.692V103.62c0-23.578 19.114-42.692 42.692-42.692h449.486l123.807 123.807V920.32"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

WirelessIcon.defaultProps = {
  title: 'Wireless Icon',
  decorative: true,
};

WirelessIcon.displayName = 'WirelessIcon';

export {WirelessIcon};
