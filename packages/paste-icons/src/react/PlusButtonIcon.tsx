/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PlusButtonIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const PlusButtonIcon: React.FC<PlusButtonIconProps> = ({title, decorative, ...props}) => (
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
          <path fill="currentColor" d="M0 433.216h1024v157.536H0V433.216M433.216 0h157.536v1024H433.216V0" />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

PlusButtonIcon.defaultProps = {
  title: 'Plus Button Icon',
  decorative: true,
};

PlusButtonIcon.displayName = 'PlusButtonIcon';

export {PlusButtonIcon};
