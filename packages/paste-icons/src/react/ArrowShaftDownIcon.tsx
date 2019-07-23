/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowShaftDownIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ArrowShaftDownIcon: React.FC<ArrowShaftDownIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 20 20">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M10 13.449V5.5a.5.5 0 111 0v7.949l3.273-3.322a.421.421 0 01.602 0 .437.437 0 010 .611l-4.074 4.135a.421.421 0 01-.602 0l-4.074-4.135a.437.437 0 010-.611.421.421 0 01.602 0L10 13.449z"
            fillRule="evenodd"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ArrowShaftDownIcon.defaultProps = {
  title: 'Arrow Shaft Down Icon',
  decorative: true,
};

export {ArrowShaftDownIcon};
