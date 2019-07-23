/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowShaftUpIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ArrowShaftUpIcon: React.FC<ArrowShaftUpIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 20 20">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M11 6.551V14.5a.5.5 0 11-1 0V6.551L6.727 9.873a.421.421 0 01-.602 0 .437.437 0 010-.611l4.074-4.135a.421.421 0 01.602 0l4.074 4.135a.437.437 0 010 .611.421.421 0 01-.602 0L11 6.551z"
            fillRule="evenodd"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ArrowShaftUpIcon.defaultProps = {
  title: 'Arrow Shaft Up Icon',
  decorative: true,
};

export {ArrowShaftUpIcon};
