/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PauseFlatIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const PauseFlatIcon: React.FC<PauseFlatIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} height="100%" width="100%" viewBox="0 0 8 10">
          <title id={uid}>{title}</title>
          <path fill="currentColor" d="M.5 1a1 1 0 112 0v8a1 1 0 11-2 0V1zm5 0a1 1 0 112 0v8a1 1 0 11-2 0V1z" />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

PauseFlatIcon.defaultProps = {
  title: 'Pause Flat Icon',
  decorative: true,
};

PauseFlatIcon.displayName = 'PauseFlatIcon';

export {PauseFlatIcon};
