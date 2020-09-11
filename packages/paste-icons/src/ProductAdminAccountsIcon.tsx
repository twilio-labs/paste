/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductAdminAccountsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAdminAccountsIcon: React.FC<ProductAdminAccountsIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductAdminAccountsIcon]: Missing a title for non-decorative icon.');
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
              d="M8.499 10.5a1 1 0 011 1.001v4.804a1 1 0 01-1 1H3.695a1 1 0 01-1-1v-4.804a1 1 0 011-1zm7.806 0a1 1 0 011 1.001v4.804a1 1 0 01-1 1h-4.804a1 1 0 01-1-1v-4.804a1 1 0 011-1zm-7.806.8H3.695a.2.2 0 00-.2.201v4.804c0 .11.09.2.2.2h4.804a.2.2 0 00.2-.2v-4.804a.2.2 0 00-.2-.2zm7.806 0h-4.804a.2.2 0 00-.2.201v4.804c0 .11.09.2.2.2h4.804a.2.2 0 00.2-.2v-4.804a.2.2 0 00-.2-.2zM8.5 2.695a1 1 0 011 1V8.5a1 1 0 01-1 1H3.695a1 1 0 01-1-1V3.695a1 1 0 011-1zm7.806 0a1 1 0 011 1V8.5a1 1 0 01-1 1h-4.804a1 1 0 01-1-1V3.695a1 1 0 011-1zm-7.806.8H3.695a.2.2 0 00-.2.2V8.5c0 .11.09.2.2.2h4.804a.2.2 0 00.2-.2V3.695a.2.2 0 00-.2-.2zm7.806 0h-4.804a.2.2 0 00-.2.2V8.5c0 .11.09.2.2.2h4.804a.2.2 0 00.2-.2V3.695a.2.2 0 00-.2-.2z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductAdminAccountsIcon.displayName = 'ProductAdminAccountsIcon';
export {ProductAdminAccountsIcon};
