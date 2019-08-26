/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SipTrunkingIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const SipTrunkingIcon: React.FC<SipTrunkingIconProps> = ({title, decorative, ...props}) => (
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
            d="M601.751 421.392v301.432h60.307V421.392h-60.307m241.125 0H722.314v301.432h60.307V602.262h60.255c33.298 0 60.308-27.01 60.308-60.308v-60.255c0-33.298-27.01-60.307-60.308-60.307m0 120.562h-60.255v-60.255h60.255v60.255m-482.251-60.255v60.255c0 33.298 26.958 60.308 60.256 60.308h60.307v60.255H360.625v60.307h120.563c33.298 0 60.256-27.01 60.256-60.307v-60.255c0-33.298-26.958-60.308-60.256-60.308h-60.307v-60.255h120.563v-60.307H420.881c-33.298 0-60.256 27.009-60.256 60.307M903.184 59.652a120.915 120.915 0 00-71.75 24.123c-214.374-134.79-493.437-103.4-672.503 75.667C-20.135 338.456-51.525 617.57 83.315 831.944c-36.184 48.76-30.463 116.8 13.35 158.809s112.007 44.947 159.222 6.804c47.214-38.143 58.76-105.46 26.854-157.108-31.854-51.648-97.161-71.595-152.417-46.493C13.936 603.859 43.007 358.713 200.631 201.09 358.254 43.467 603.349 14.396 793.445 130.835c-21.906 48.76-9.072 106.13 31.494 140.923 40.566 34.792 99.223 38.76 144.067 9.638 44.895-29.071 65.204-84.223 49.998-135.46-15.205-51.286-62.369-86.387-115.82-86.284"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

SipTrunkingIcon.defaultProps = {
  title: 'Sip Trunking Icon',
  decorative: true,
};

SipTrunkingIcon.displayName = 'SipTrunkingIcon';

export {SipTrunkingIcon};
