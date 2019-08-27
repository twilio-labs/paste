/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CollapseIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const CollapseIcon: React.FC<CollapseIconProps> = ({title, decorative, ...props}) => (
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
            d="M393.846 1024h-78.769V708.923H0v-78.769h393.846V1024M1024 393.846H630.154V0h78.769v315.077H1024v78.769"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

CollapseIcon.defaultProps = {
  title: 'Collapse Icon',
  decorative: true,
};

CollapseIcon.displayName = 'CollapseIcon';

export {CollapseIcon};
