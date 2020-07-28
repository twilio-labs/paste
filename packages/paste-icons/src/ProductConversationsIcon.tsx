/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductConversationsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductConversationsIcon: React.FC<ProductConversationsIconProps> = ({
  as,
  display,
  size,
  iconColor,
  title,
  decorative,
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductConversationsIcon]: Missing a title for non-decorative icon.');
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
              d="M7.885 20A.864.864 0 017 19.125v-2.152H5.25c-.69 0-1.25-.557-1.25-1.243V8.275c0-.687.56-1.243 1.25-1.243H8a3.75 3.75 0 013.5 2.306l1.935 4.926A2.79 2.79 0 0016 15.979h2.75a.25.25 0 00.25-.249V8.275a.25.25 0 00-.25-.249H16V5.153l-3.17 2.749a.502.502 0 01-.689-.059.495.495 0 01.029-.687l3.375-2.937a.88.88 0 01.944-.14.87.87 0 01.511.8v2.153h1.75c.69 0 1.25.556 1.25 1.243v7.455c0 .686-.56 1.243-1.25 1.243H16a3.8 3.8 0 01-3.5-2.336L10.57 9.71a2.755 2.755 0 00-2.54-1.685H5.25a.25.25 0 00-.25.249v7.455a.25.25 0 00.25.249h2.775v2.873l3.165-2.749a.502.502 0 01.838.268.495.495 0 01-.178.478l-3.395 2.937a.883.883 0 01-.57.214z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductConversationsIcon.displayName = 'ProductConversationsIcon';
export {ProductConversationsIcon};
