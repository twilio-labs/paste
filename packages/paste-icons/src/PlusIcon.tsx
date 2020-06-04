/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PlusIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PlusIcon: React.FC<PlusIconProps> = ({as, display, size, color, title, decorative, ...props}) => {
  if (!decorative && title == null) {
    throw new Error('[PlusIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color} {...props}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 20 20"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M15.043 9.043h-4.086V4.957a.958.958 0 00-1.914 0v4.086H4.957a.958.958 0 000 1.914h4.086v4.086a.958.958 0 001.914 0v-4.086h4.086a.958.958 0 000-1.914z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

PlusIcon.displayName = 'PlusIcon';
export {PlusIcon};
