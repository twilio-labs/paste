/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductVerifyIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductVerifyIcon: React.FC<ProductVerifyIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductVerifyIcon]: Missing a title for non-decorative icon.');
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
              d="M18.75 4.5c.69 0 1.25.553 1.25 1.234v.331c0 .393-.159.77-.44 1.047l-6.675 6.596c-.49.478-1.28.478-1.77 0l-2.47-2.439a.491.491 0 010-.7.507.507 0 01.71 0l2.47 2.438a.241.241 0 00.35 0l6.68-6.591a.49.49 0 00.145-.35v-.332a.248.248 0 00-.25-.247H5.25c-.138 0-.25.111-.25.247v5.762a.49.49 0 00.145.35l6.68 6.592a.241.241 0 00.35 0l3.97-3.92a.507.507 0 01.71 0 .491.491 0 010 .701l-3.97 3.92A1.253 1.253 0 0112 19.5a1.253 1.253 0 01-.885-.36L4.44 12.543A1.472 1.472 0 014 11.496V5.734C4 5.053 4.56 4.5 5.25 4.5h13.5zm-.25 6.824c.828 0 1.5.663 1.5 1.48a1.49 1.49 0 01-1.5 1.482 1.49 1.49 0 01-1.5-1.481 1.49 1.49 0 011.5-1.481z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductVerifyIcon.displayName = 'ProductVerifyIcon';
export {ProductVerifyIcon};
