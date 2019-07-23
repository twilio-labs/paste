/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ExternalLinkIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = ({title, decorative, ...props}) => (
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
            d="M68.267 0v170.667L768 153.6 0 904.533 119.467 1024 870.4 256l-17.067 699.733H1024V0H68.267"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ExternalLinkIcon.defaultProps = {
  title: 'External Link Icon',
  decorative: true,
};

export {ExternalLinkIcon};
