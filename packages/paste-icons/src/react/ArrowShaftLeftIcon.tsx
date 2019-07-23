/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowShaftLeftIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ArrowShaftLeftIcon: React.FC<ArrowShaftLeftIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 20 20">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M6.551 9H14.5a.5.5 0 110 1H6.551l3.322 3.273a.421.421 0 010 .602.437.437 0 01-.611 0L5.127 9.801a.421.421 0 010-.602l4.135-4.074a.437.437 0 01.611 0 .421.421 0 010 .602L6.551 9z"
            fillRule="evenodd"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ArrowShaftLeftIcon.defaultProps = {
  title: 'Arrow Shaft Left Icon',
  decorative: true,
};

export {ArrowShaftLeftIcon};
