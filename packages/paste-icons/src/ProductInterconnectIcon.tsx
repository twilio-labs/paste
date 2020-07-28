/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductInterconnectIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInterconnectIcon: React.FC<ProductInterconnectIconProps> = ({
  as,
  display,
  size,
  iconColor,
  title,
  decorative,
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductInterconnectIcon]: Missing a title for non-decorative icon.');
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
              d="M6.342 6.342a8 8 0 0111.312 0 .5.5 0 01-.705.706 7 7 0 00-9.902 0 7.005 7.005 0 007.63 11.423A7.003 7.003 0 0019 12a.5.5 0 111 0 7.935 7.935 0 01-2.346 5.658A8 8 0 016.342 6.342zm10.276 3.742a5 5 0 01-8.156 5.453.5.5 0 01.705-.706 4 4 0 006.296-4.83A4 4 0 007.997 12a.5.5 0 11-1 0 5.002 5.002 0 019.621-1.916zm-4.62.415a1.5 1.5 0 110 3.001 1.5 1.5 0 010-3z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductInterconnectIcon.displayName = 'ProductInterconnectIcon';
export {ProductInterconnectIcon};
