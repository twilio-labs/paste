/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductLogsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductLogsIcon: React.FC<ProductLogsIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductLogsIcon]: Missing a title for non-decorative icon.');
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
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M19.538 4.463a1.564 1.564 0 00-1.34-.447 11.865 11.865 0 00-5.837 2.655.6.6 0 01-.35.123L12 6.792l-.01.002a.553.553 0 01-.334-.11 11.882 11.882 0 00-5.864-2.668A1.575 1.575 0 004 5.576V15.62c.002.787.585 1.45 1.365 1.554a10.826 10.826 0 015.662 2.493c.277.215.618.331.968.332L12 20h.005a1.587 1.587 0 00.984-.347 10.804 10.804 0 015.647-2.479 1.572 1.572 0 001.362-1.554V5.577a1.567 1.567 0 00-.46-1.114zM5.493 16.182A.569.569 0 015 15.619V5.577a.577.577 0 01.647-.571 10.9 10.9 0 015.38 2.456c.143.11.302.195.473.25v11.054a11.793 11.793 0 00-6.007-2.584zm13.505-.563c0 .284-.21.523-.49.562a11.792 11.792 0 00-6.008 2.585V7.709c.177-.059.342-.147.49-.26a10.88 10.88 0 015.351-2.444.575.575 0 01.657.572v10.042z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductLogsIcon.displayName = 'ProductLogsIcon';
export {ProductLogsIcon};
