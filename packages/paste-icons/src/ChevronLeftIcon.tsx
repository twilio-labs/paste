/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronLeftIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ChevronLeftIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} iconColor={iconColor}>
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
              d="M12.293 8.293a1 1 0 011.497 1.32l-.083.094L11.415 12l2.292 2.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 01-.083-1.32l.083-.094 3-3z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ChevronLeftIcon.displayName = 'ChevronLeftIcon';
export {ChevronLeftIcon};
