/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductTaskRouterIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductTaskRouterIcon: React.FC<ProductTaskRouterIconProps> = ({
  as,
  display,
  size,
  iconColor,
  title,
  decorative,
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductTaskRouterIcon]: Missing a title for non-decorative icon.');
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
              d="M17 14l3 1.5-3 1.5v-3zM7 8c1.95 0 3.1 1.45 4 3 .9-1.55 2.05-3 4-3h.5a.5.5 0 01.5.5l-.008.09A.5.5 0 0115.5 9H15c-1.6 0-2.5 1.4-3.4 3 .9 1.6 1.8 3 3.4 3h.5a.5.5 0 110 1H15c-1.95 0-3.1-1.45-4-3-.9 1.55-2.05 3-4 3H4.5a.5.5 0 110-1H7c1.6 0 2.5-1.4 3.4-3-.9-1.6-1.8-3-3.4-3H4.5a.5.5 0 010-1zm10-1l3 1.5-3 1.5V7z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductTaskRouterIcon.displayName = 'ProductTaskRouterIcon';
export {ProductTaskRouterIcon};
