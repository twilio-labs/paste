/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductAdminUsersIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAdminUsersIcon: React.FC<ProductAdminUsersIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductAdminUsersIcon]: Missing a title for non-decorative icon.');
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
              d="M16.344 12.022c1.356 1.058 2.155 2.722 2.156 4.49 0 .236-.16.433-.372.478l-.093.01h-4.542a.476.476 0 01-.465-.487c0-.235.16-.431.372-.477l.093-.01h4.05l-.005-.056a4.697 4.697 0 00-1.546-2.998l-.204-.17a4.272 4.272 0 00-3.909-.726.462.462 0 01-.578-.328.49.49 0 01.313-.605 5.17 5.17 0 014.73.88zm-9.488-1.111c2.958 0 5.356 2.508 5.356 5.602a.476.476 0 01-.465.487H1.965a.476.476 0 01-.465-.487c0-3.094 2.398-5.602 5.356-5.602zm0 .973c-2.215 0-4.05 1.702-4.374 3.924l-.028.218h8.803l-.027-.218c-.313-2.145-2.034-3.806-4.146-3.918zm0-8.884c1.897 0 3.435 1.609 3.435 3.593s-1.538 3.592-3.435 3.592-3.435-1.608-3.435-3.592S4.96 3 6.856 3zm8.447.799c1.45 1.223 1.702 3.433.57 4.98-1.134 1.546-3.239 1.866-4.748.72a3.575 3.575 0 01-.402-.362.503.503 0 010-.688.451.451 0 01.658-.001c.092.096.19.185.294.264 1.098.835 2.633.602 3.458-.526.826-1.127.642-2.738-.415-3.63-1.056-.892-2.6-.74-3.48.342a.451.451 0 01-.655.056.502.502 0 01-.054-.686c1.207-1.485 3.325-1.693 4.774-.47zm-8.447.175c-1.383 0-2.504 1.172-2.504 2.619 0 1.446 1.121 2.619 2.504 2.619S9.36 8.039 9.36 6.592c0-1.446-1.121-2.618-2.504-2.618z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductAdminUsersIcon.displayName = 'ProductAdminUsersIcon';
export {ProductAdminUsersIcon};
