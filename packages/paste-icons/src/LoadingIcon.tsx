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
            d="M20.085 13.123a1 1 0 01.71 1.224A9.103 9.103 0 014.717 17.46l-.15 1.756a1 1 0 11-1.992-.17l.407-4.773a1 1 0 011.357-.848l4.47 1.728a1 1 0 11-.72 1.865l-1.691-.652a7.103 7.103 0 0012.463-2.533 1 1 0 011.223-.71zM12.008 2.892a9.1 9.1 0 017.283 3.64l.148-1.756a1 1 0 011.993.17l-.407 4.773a1 1 0 01-1.357.847l-4.47-1.727a1 1 0 01.72-1.866l1.691.653a7.103 7.103 0 00-12.463 2.533 1 1 0 01-1.932-.514 9.103 9.103 0 018.794-6.753z"
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
