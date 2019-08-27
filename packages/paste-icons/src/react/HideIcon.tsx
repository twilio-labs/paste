/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface HideIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const HideIcon: React.FC<HideIconProps> = ({title, decorative, ...props}) => (
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
            d="M512 838.977c-273.855 0-494.132-297.688-500.097-309.592L0 511.517l11.903-17.868C23.807 481.746 238.145 184.058 512 184.058s494.132 297.688 500.097 309.591L1024 511.517l-11.903 17.868C1006.132 541.289 785.855 838.977 512 838.977M77.385 511.543c47.639 59.543 232.18 267.917 440.554 267.917 208.373 0 386.975-208.374 434.615-267.917-47.64-59.542-232.18-267.916-440.554-267.916-208.374 0-386.976 208.374-434.615 267.916M512 690.146c-101.217 0-178.602-77.385-178.602-178.603 0-101.217 77.385-178.602 178.602-178.602s178.602 77.385 178.602 178.602c0 101.218-77.385 178.603-178.602 178.603m0-297.662c-65.481 0-119.059 53.578-119.059 119.059 0 65.482 53.578 119.06 119.059 119.06s119.059-53.578 119.059-119.06c0-65.481-53.578-119.059-119.059-119.059M95.279 886.929L886.708 95.5l42.091 42.091L137.37 929.02l-42.091-42.091"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

HideIcon.defaultProps = {
  title: 'Hide Icon',
  decorative: true,
};

HideIcon.displayName = 'HideIcon';

export {HideIcon};
