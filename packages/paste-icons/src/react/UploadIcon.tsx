/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface UploadIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const UploadIcon: React.FC<UploadIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 20 20">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M17.156 9.5a7.656 7.656 0 10-15.312 0 7.656 7.656 0 0015.312 0zm.844 0a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zm-8-3.949V14.5a.5.5 0 11-1 0V5.551L5.727 8.873a.421.421 0 01-.602 0 .437.437 0 010-.611l4.074-4.135a.421.421 0 01.602 0l4.074 4.135a.437.437 0 010 .611.421.421 0 01-.602 0L10 5.551z"
            fillRule="evenodd"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

UploadIcon.defaultProps = {
  title: 'Upload Icon',
  decorative: true,
};

export {UploadIcon};
