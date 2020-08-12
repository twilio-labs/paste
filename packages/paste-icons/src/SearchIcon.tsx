/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SearchIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SearchIcon: React.FC<SearchIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[SearchIcon]: Missing a title for non-decorative icon.');
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
              d="M5.527 5.527a5.213 5.213 0 017.722 6.984l2.598 2.6a.521.521 0 11-.737.736l-2.598-2.598a5.213 5.213 0 01-6.985-7.722zm.737.737a4.17 4.17 0 105.897 5.897 4.17 4.17 0 00-5.897-5.897z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

SearchIcon.displayName = 'SearchIcon';
export {SearchIcon};
