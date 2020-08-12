/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CheckboxLineIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CheckboxLineIcon: React.FC<CheckboxLineIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[CheckboxLineIcon]: Missing a title for non-decorative icon.');
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
            viewBox="0 0 20 20"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.5 8.5a1.5 1.5 0 01.175 2.99l-.175.01h-9a1.5 1.5 0 01-.175-2.99L5.5 8.5h9z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

CheckboxLineIcon.displayName = 'CheckboxLineIcon';
export {CheckboxLineIcon};
