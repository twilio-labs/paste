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
              d="M7.041 10.846c2.784 0 5.04 2.329 5.04 5.202 0 .25-.195.452-.437.452H2.438A.445.445 0 012 16.048c0-2.873 2.257-5.202 5.041-5.202zm8.93 1.032c1.276.982 2.028 2.527 2.029 4.17 0 .218-.15.4-.35.443l-.088.009h-4.274a.445.445 0 01-.438-.452c0-.218.15-.4.35-.443l.088-.01h3.811l-.004-.051a4.343 4.343 0 00-1.455-2.784l-.193-.157a4.064 4.064 0 00-3.678-.675.436.436 0 01-.545-.305.454.454 0 01.295-.562 4.918 4.918 0 014.452.817zm-8.93-.128c-2.085 0-3.812 1.58-4.117 3.643l-.026.202h8.285l-.025-.202c-.295-1.992-1.915-3.534-3.903-3.638zm0-8.25c1.785 0 3.233 1.494 3.233 3.336 0 1.843-1.448 3.336-3.233 3.336-1.785 0-3.233-1.493-3.233-3.336 0-1.842 1.448-3.336 3.233-3.336zm7.95.742c1.364 1.136 1.602 3.187.536 4.624-1.066 1.436-3.048 1.733-4.468.668a3.35 3.35 0 01-.378-.335.462.462 0 01-.001-.64.428.428 0 01.62 0 2.308 2.308 0 003.532-.243c.776-1.047.603-2.542-.391-3.37a2.306 2.306 0 00-3.275.317.429.429 0 01-.618.051.462.462 0 01-.05-.637 3.163 3.163 0 014.493-.435zm-7.95.162c-1.302 0-2.357 1.089-2.357 2.432S5.74 9.268 7.041 9.268c1.301 0 2.357-1.089 2.357-2.432S8.342 4.404 7.04 4.404z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductAdminUsersIcon.displayName = 'ProductAdminUsersIcon';
export {ProductAdminUsersIcon};
