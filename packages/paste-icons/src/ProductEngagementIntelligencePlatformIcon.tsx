/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductEngagementIntelligencePlatformIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductEngagementIntelligencePlatformIcon: React.FC<ProductEngagementIntelligencePlatformIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ProductEngagementIntelligencePlatformIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductEngagementIntelligencePlatformIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 180 156"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <g fill="currentColor" fillRule="nonzero">
          <path
            fill="currentColor"
            d="M4.5 47.879a4 4 0 013.995 3.8l.005.2v56.242a4 4 0 01-7.995.2l-.005-.2V51.88a4 4 0 014-4zM175.5 47.879a4 4 0 013.995 3.8l.005.2v56.242a4 4 0 01-7.995.2l-.005-.2V51.88a4 4 0 014-4zM37.405 23a4 4 0 013.966 3.83l.004.2-.75 101.12a4 4 0 01-7.996.14l-.004-.199.75-101.12A4 4 0 0137.405 23zM143.405 23a4 4 0 013.966 3.83l.004.2-.75 101.12a4 4 0 01-7.996.14l-.004-.199.75-101.12a4 4 0 014.03-3.971zM63.455 74.729l-.08.24C61.739 80.1 65.566 85.39 71 85.39h4.315V147c0 9.02 12.604 11.143 15.56 2.621l26.683-76.938.08-.24c1.604-5.123-2.221-10.381-7.638-10.381l-6.882-.001V9c0-8.996-12.552-11.145-15.544-2.66L63.455 74.728zM95.118 9v61.062H110L83.316 147V77.39H71L95.118 9z"
          />
        </g>
      </svg>
    </IconWrapper>
  );
};

ProductEngagementIntelligencePlatformIcon.displayName = 'ProductEngagementIntelligencePlatformIcon';
export {ProductEngagementIntelligencePlatformIcon};
