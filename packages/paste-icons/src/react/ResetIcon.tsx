/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ResetIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ResetIcon: React.FC<ResetIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 20 20">
          <title id={uid}>{title}</title>
          <path fill="currentColor" fillRule="evenodd" d="M9 8H4V3h1v3.29a6 6 0 11.46 8l.71-.71A5 5 0 105.71 7H9v1z" />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ResetIcon.defaultProps = {
  title: 'Reset Icon',
  decorative: true,
};

ResetIcon.displayName = 'ResetIcon';

export {ResetIcon};
