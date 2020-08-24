/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductKeysIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductKeysIcon: React.FC<ProductKeysIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductKeysIcon]: Missing a title for non-decorative icon.');
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
              d="M15.681 2a1.516 1.516 0 011.4.926c.233.56.102 1.203-.332 1.63l-.355.35 1.175 1.16c.578.586.574 1.52-.01 2.1a1.53 1.53 0 01-2.127.022L14.25 7.021l-.714.705 1.176 1.16.028.03c.571.593.553 1.53-.04 2.101a1.53 1.53 0 01-2.13-.013L11.395 9.84l-1.637 1.615a3.959 3.959 0 01-1.46 4.862 4.078 4.078 0 01-5.114-.485 3.95 3.95 0 01-.494-5.049 4.069 4.069 0 014.924-1.443l6.994-6.904c.284-.28.67-.438 1.071-.437zm.355 1.145a.51.51 0 00-.714-.002l-7.246 7.153a.508.508 0 01-.597.086 3.05 3.05 0 00-3.864.843 2.958 2.958 0 00.287 3.896 3.054 3.054 0 003.947.283 2.962 2.962 0 00.854-3.814.495.495 0 01.087-.59l2.25-2.218a.51.51 0 01.356-.145l.08.006a.507.507 0 01.278.14l1.53 1.516a.51.51 0 00.846-.224.494.494 0 00-.132-.482 1.391 1.391 0 01-.022-.024l-1.511-1.49a.494.494 0 010-.705l1.428-1.41a.525.525 0 01.714 0l1.533 1.513a.508.508 0 00.708-.019c.19-.193.19-.5 0-.692l-1.526-1.509a.496.496 0 010-.705l.714-.702a.495.495 0 000-.705zM6.045 11.26a1.759 1.759 0 011.767 1.745c0 .964-.791 1.745-1.767 1.745a1.756 1.756 0 01-1.768-1.745c0-.964.791-1.745 1.768-1.745zm0 .997a.753.753 0 00-.758.748c0 .413.34.748.758.748a.753.753 0 00.757-.748.753.753 0 00-.757-.748z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductKeysIcon.displayName = 'ProductKeysIcon';
export {ProductKeysIcon};
