/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface GoArrowIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const GoArrowIcon: React.FC<GoArrowIconProps> = ({title, decorative, ...props}) => (
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
            d="M746.967 312.7l38.7-38.7L1024 512.278 785.667 750.611l-38.7-38.7 199.578-199.633L746.967 312.7M985.3 484.909v54.738H0v-54.738h985.3"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

GoArrowIcon.defaultProps = {
  title: 'Go Arrow Icon',
  decorative: true,
};

GoArrowIcon.displayName = 'GoArrowIcon';

export {GoArrowIcon};
