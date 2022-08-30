/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductSegmentIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSegmentIcon = React.forwardRef<HTMLElement, ProductSegmentIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ProductSegmentIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductSegmentIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3.559 8.273a.304.304 0 00.367-.207 6.38 6.38 0 017.456-4.294.3.3 0 00.35-.218l.264-.984a.303.303 0 00-.23-.374 8.003 8.003 0 00-9.404 5.438.3.3 0 00.212.375l.985.264zm4.964-1.11h8.745c.167 0 .302.135.302.301v1.019a.302.302 0 01-.302.301H8.523a.302.302 0 01-.302-.301V7.464c0-.166.135-.301.302-.301zm-5.785 4.053h8.746c.166 0 .301.135.301.301v1.019a.302.302 0 01-.301.301H2.738a.302.302 0 01-.302-.301v-1.019c0-.166.135-.301.302-.301zm13.488.54a.304.304 0 01.225-.029l.985.264a.299.299 0 01.212.375 8.002 8.002 0 01-9.405 5.438.306.306 0 01-.236-.252.303.303 0 01.007-.122l.264-.984a.3.3 0 01.35-.218 6.38 6.38 0 007.456-4.294.304.304 0 01.142-.177zm-1.6-6.374a.89.89 0 100-1.778.89.89 0 000 1.778zM6.273 15.507a.89.89 0 11-1.779 0 .89.89 0 011.779 0z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ProductSegmentIcon.displayName = 'ProductSegmentIcon';
export {ProductSegmentIcon};
