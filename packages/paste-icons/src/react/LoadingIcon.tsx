/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface LoadingIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const LoadingIcon: React.FC<LoadingIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
          {title ? <title id={uid}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3.6 10.118l.043.042c.038.031.07.068.098.109l3.135 3.756a.5.5 0 01-.768.641l-2.416-2.892c-.105 3.663 2.566 7.142 6.255 8.013a7.998 7.998 0 007.465-2.094.5.5 0 11.702.712 8.998 8.998 0 01-8.397 2.355c-3.968-.937-6.88-4.543-7.023-8.475L.915 14.936a.5.5 0 11-.83-.557l2.786-4.15a.5.5 0 01.73-.11zM13.86 3.243c4.268 1.007 7.277 4.942 7.21 9.202l1.59-2.367a.5.5 0 01.83.557l-2.788 4.15a.5.5 0 01-.799.042l-3.205-3.838a.5.5 0 11.768-.64l2.53 3.03c.571-4.142-2.24-8.19-6.366-9.163a7.991 7.991 0 00-7.835 2.486.5.5 0 01-.75-.663 8.991 8.991 0 018.815-2.796z"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

LoadingIcon.defaultProps = {
  title: 'Loading Icon',
  decorative: true,
};

LoadingIcon.displayName = 'LoadingIcon';

export {LoadingIcon};
