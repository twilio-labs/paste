/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface DoNotIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const DoNotIcon: React.FC<DoNotIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 16 16">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M3.566 5.687a5 5 0 006.747 6.747L3.566 5.687zm2.121-2.121l6.747 6.747a5 5 0 00-6.747-6.747zM8 16A8 8 0 118 0a8 8 0 010 16z"
            fillRule="nonzero"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

DoNotIcon.defaultProps = {
  title: 'Do Not Icon',
  decorative: true,
};

export {DoNotIcon};
