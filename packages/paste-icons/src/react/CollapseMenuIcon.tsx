/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CollapseMenuIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const CollapseMenuIcon: React.FC<CollapseMenuIconProps> = ({title, decorative, ...props}) => (
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
            d="M512 57.771l403.797 445.952L512 966.144 562.517 1024 1024 503.723 562.517 0 512 57.771m-512 0l403.797 445.952L0 966.144 50.517 1024 512 503.723 50.517 0 0 57.771"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

CollapseMenuIcon.defaultProps = {
  title: 'Collapse Menu Icon',
  decorative: true,
};

export {CollapseMenuIcon};
