/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface LookupIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const LookupIcon: React.FC<LookupIconProps> = ({title, decorative, ...props}) => (
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
            d="M1024 982.1L685.264 643.364c136.139-158.924 122.367-397.002-31.181-539.183-153.598-142.18-392.035-137.573-540.001 10.394C-33.885 262.541-38.493 501.03 103.637 654.576c142.181 153.6 380.31 167.372 539.234 31.232l338.736 338.685L1024 982.1M390.764 719.856c-181.451 0-328.547-147.097-328.547-328.548 0-181.502 147.096-328.598 328.547-328.598 181.451 0 328.548 147.096 328.548 328.598-.308 181.298-147.199 328.19-328.548 328.548M271.316 391.36c0 91.955 99.583 149.452 179.249 103.475 36.966-21.35 59.75-60.774 59.75-103.475 0-92.005-99.583-149.502-179.25-103.474-36.966 21.3-59.749 60.774-59.749 103.474"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

LookupIcon.defaultProps = {
  title: 'Lookup Icon',
  decorative: true,
};

export {LookupIcon};
