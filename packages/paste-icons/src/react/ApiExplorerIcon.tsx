/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ApiExplorerIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ApiExplorerIcon: React.FC<ApiExplorerIconProps> = ({title, decorative, ...props}) => (
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
            d="M354.093 1024c-15.835 0-26.392-10.557-26.392-26.392V242.804c0-15.835 10.557-26.392 26.392-26.392 15.835 0 26.392 10.557 26.392 26.392v760.083c0 10.556-10.557 21.113-26.392 21.113m316.701-216.412c-15.835 0-26.392-10.557-26.392-26.392V26.392C644.402 10.557 654.959 0 670.794 0c15.835 0 26.392 10.557 26.392 26.392v760.082c0 10.557-15.835 21.114-26.392 21.114M971.66 1024L665.515 818.144 364.649 1024h-31.67L16.278 807.588 11 781.196V26.392L53.227 5.278l306.144 205.856L660.237 5.278h31.67l316.701 216.413 5.279 21.113v760.083L971.66 1024M63.784 770.639l290.309 200.577 300.866-205.855h31.67l279.752 190.02v-702.02L676.072 52.784 369.928 263.918h-31.67L63.784 73.897v696.742"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ApiExplorerIcon.defaultProps = {
  title: 'Api Explorer Icon',
  decorative: true,
};

export {ApiExplorerIcon};
