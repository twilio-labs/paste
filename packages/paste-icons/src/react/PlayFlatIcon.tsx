/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PlayFlatIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const PlayFlatIcon: React.FC<PlayFlatIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 7 9">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M6.765 4.949l-6 3.97C.432 9.139 0 8.886 0 8.469V.53C0 .114.432-.139.765.081l6 3.97a.546.546 0 010 .898z"
            fillRule="nonzero"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

PlayFlatIcon.defaultProps = {
  title: 'Play Flat Icon',
  decorative: true,
};

PlayFlatIcon.displayName = 'PlayFlatIcon';

export {PlayFlatIcon};
