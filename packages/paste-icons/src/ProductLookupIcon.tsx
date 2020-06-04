/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductLookupIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductLookupIcon: React.FC<ProductLookupIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
  ...props
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductLookupIcon]: Missing a title for non-decorative icon.');
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
              d="M3.756 3.756a5.997 5.997 0 018.819 8.114l5.277 5.273a.5.5 0 010 .71.5.5 0 01-.71 0l-5.272-5.278a5.997 5.997 0 01-8.114-8.819zm4.246-.751a4.997 4.997 0 100 9.995 4.997 4.997 0 000-9.995zm0 3.498a1.5 1.5 0 110 2.999 1.5 1.5 0 010-2.999z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductLookupIcon.displayName = 'ProductLookupIcon';
export {ProductLookupIcon};
