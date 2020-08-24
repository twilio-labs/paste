/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronExpandIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronExpandIcon: React.FC<ChevronExpandIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ChevronExpandIcon]: Missing a title for non-decorative icon.');
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
              d="M7.613 12.21l.094.083L10 14.585l2.293-2.292a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-3 3a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 011.32-1.497zm3-9l.094.083 3 3a1 1 0 01-1.32 1.497l-.094-.083L10 5.415 7.707 7.707a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 3-3a1 1 0 011.32-.083z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ChevronExpandIcon.displayName = 'ChevronExpandIcon';
export {ChevronExpandIcon};
