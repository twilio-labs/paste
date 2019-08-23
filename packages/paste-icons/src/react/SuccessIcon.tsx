/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SuccessIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const SuccessIcon: React.FC<SuccessIconProps> = ({title, decorative, ...props}) => (
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
            d="M1 512c0 393.576 426.06 639.522 766.861 442.734C926.154 863.419 1023.605 694.631 1023.605 512c0-393.576-426.184-639.522-766.985-442.734C98.45 160.581 1 329.369 1 512m408.992 283.149L166.17 551.326l110.113-110.113 117.979 117.978 306.744-353.935 117.979 102.248-408.993 487.645"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

SuccessIcon.defaultProps = {
  title: 'Success Icon',
  decorative: true,
};

SuccessIcon.displayName = 'SuccessIcon';

export {SuccessIcon};
