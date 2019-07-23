/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowRightIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({title, decorative, ...props}) => (
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
            d="M781.039 466.961L333.056 18.978C320.359 6.281 305.391 0 288.017 0c-17.374 0-32.343 6.281-45.039 18.978C230.415 31.674 224 46.643 224 64.017v895.966c0 17.241 6.415 32.343 18.978 44.906 12.696 12.696 27.798 19.111 45.039 19.111 17.374 0 32.342-6.415 45.039-19.111l447.983-447.984c12.696-12.563 18.978-27.665 18.978-44.905 0-17.374-6.282-32.342-18.978-45.039"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ArrowRightIcon.defaultProps = {
  title: 'Arrow Right Icon',
  decorative: true,
};

export {ArrowRightIcon};
