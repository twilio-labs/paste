/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronRightIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ChevronRightIcon]: Missing a title for non-decorative icon.');
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
              d="M11.707 8.293a1 1 0 00-1.497 1.32l.083.094L12.585 12l-2.292 2.293a1 1 0 00-.083 1.32l.083.094a1 1 0 001.32.083l.094-.083 3-3a1 1 0 00.083-1.32l-.083-.094-3-3z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ChevronRightIcon.displayName = 'ChevronRightIcon';
export {ChevronRightIcon};
