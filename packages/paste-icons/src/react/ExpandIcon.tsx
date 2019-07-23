/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ExpandIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ExpandIcon: React.FC<ExpandIconProps> = ({title, decorative, ...props}) => (
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
          <path
            fill="currentColor"
            d="M393.846 1024H0V630.154h78.769v315.077h315.077V1024M1024 393.846h-78.769V78.769H630.154V0H1024v393.846"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ExpandIcon.defaultProps = {
  title: 'Expand Icon',
  decorative: true,
};

export {ExpandIcon};
