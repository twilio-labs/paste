/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowShaftRightIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ArrowShaftRightIcon: React.FC<ArrowShaftRightIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 20 20">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M13.449 10H5.5a.5.5 0 010-1h7.949l-3.322-3.273a.421.421 0 010-.602.437.437 0 01.611 0l4.135 4.074a.421.421 0 010 .602l-4.135 4.074a.437.437 0 01-.611 0 .421.421 0 010-.602L13.449 10z"
            fillRule="evenodd"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ArrowShaftRightIcon.defaultProps = {
  title: 'Arrow Shaft Right Icon',
  decorative: true,
};

ArrowShaftRightIcon.displayName = 'ArrowShaftRightIcon';

export {ArrowShaftRightIcon};
