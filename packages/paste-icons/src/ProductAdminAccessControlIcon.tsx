/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductAdminAccessControlIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAdminAccessControlIcon: React.FC<ProductAdminAccessControlIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductAdminAccessControlIcon]: Missing a title for non-decorative icon.');
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
              d="M5.862 9.846a4.186 4.186 0 013.893 2.645l.036.1h5.005a.4.4 0 01.215.063l.06.047 1.038.985a.4.4 0 01.014.566l-1.028 1.076a.4.4 0 01-.288.124l-.87.003-.567.545a.4.4 0 01-.481.056l-.071-.054-.575-.546h-.365l-.57.549a.4.4 0 01-.493.048l-.062-.049-.571-.551h-.381l-.036.1a4.175 4.175 0 01-4.438 2.605l-.205-.033a4.175 4.175 0 01.74-8.279zm0 .8l-.183.006a3.375 3.375 0 103.448 4.292.4.4 0 01.385-.29h.833a.4.4 0 01.277.112l.409.394.409-.392a.4.4 0 01.2-.104l.077-.007h.686a.4.4 0 01.276.11l.412.391.408-.39a.4.4 0 01.2-.104l.075-.007.859-.004.633-.663-.63-.599H9.502a.4.4 0 01-.357-.22l-.027-.07a3.386 3.386 0 00-3.256-2.455zm-1.935 2.068a1.43 1.43 0 11-.135.069zm.894.762a.63.63 0 10-.63 1.09.63.63 0 00.63-1.09zM13.416 1.61a3.489 3.489 0 013.498 3.281l.006.192.005 1.334h.28c.559 0 1.019.42 1.08.965l.007.118v5.473c0 .6-.486 1.086-1.086 1.086a.4.4 0 01-.08-.792l.08-.008a.286.286 0 00.279-.22l.007-.066V7.503a.286.286 0 00-.22-.277l-.066-.008-6.835-.004h-.023l-.025-.001-.666-.001a.286.286 0 00-.279.22l-.007.066v2.079a.4.4 0 01-.792.08l-.008-.08V7.498c0-.56.423-1.02.968-1.08l.118-.006h.289l-.003-1.297a3.488 3.488 0 013.473-3.504zm.015 6.863a1.43 1.43 0 110 2.858 1.43 1.43 0 010-2.858zm0 .8a.63.63 0 100 1.258.63.63 0 000-1.258zM13.42 2.41a2.689 2.689 0 00-2.671 2.53l-.005.17.003 1.302 5.379.004-.005-1.33a2.688 2.688 0 00-2.7-2.676z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductAdminAccessControlIcon.displayName = 'ProductAdminAccessControlIcon';
export {ProductAdminAccessControlIcon};
