/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PlusIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const PlusIcon: React.FC<PlusIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
          {title ? <title id={uid}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 3.5a.5.5 0 01.5.5v7.5H20a.5.5 0 01.492.41l.008.09a.5.5 0 01-.5.5h-7.5V20a.5.5 0 01-.41.492L12 20.5a.5.5 0 01-.5-.5v-7.5H4a.5.5 0 01-.492-.41L3.5 12a.5.5 0 01.5-.5h7.5V4a.5.5 0 01.41-.492z"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

PlusIcon.defaultProps = {
  title: 'Plus Icon',
  decorative: true,
};

PlusIcon.displayName = 'PlusIcon';

export {PlusIcon};
