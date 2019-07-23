/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CollapsedIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const CollapsedIcon: React.FC<CollapsedIconProps> = ({title, decorative, ...props}) => (
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
            d="M306.693 1024l-56.441-56.441 435.402-467.653L218 56.441 274.441 0l532.157 491.843L306.693 1024"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

CollapsedIcon.defaultProps = {
  title: 'Collapsed Icon',
  decorative: true,
};

export {CollapsedIcon};
