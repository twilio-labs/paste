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

const PlusIcon: React.FC<PlusIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[PlusIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M17.043 11.043h-4.086V6.957a.958.958 0 00-1.914 0v4.086H6.957a.958.958 0 000 1.914h4.086v4.086a.958.958 0 001.914 0v-4.086h4.086a.958.958 0 000-1.914z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

PlusIcon.displayName = 'PlusIcon';
export {PlusIcon};
