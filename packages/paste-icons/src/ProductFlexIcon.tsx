/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductFlexIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductFlexIcon: React.FC<ProductFlexIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductFlexIcon]: Missing a title for non-decorative icon.');
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
              d="M4.31 10.167a.5.5 0 01.54.105l4.302 4.316c.1.09.154.218.15.351v4.566a.502.502 0 01-.85.351L4.15 15.541A.457.457 0 014 15.19v-4.566c.003-.201.125-.38.31-.457zM15.205 4a.54.54 0 01.35.15l4.302 4.316a.503.503 0 01-.35.853H9.853a.501.501 0 000 1.004h2.8a.455.455 0 01.351.15l4.302 4.366a.503.503 0 01-.35.853h-5.102a.455.455 0 01-.35-.15L4.15 8.164A.457.457 0 014 7.814V4.502A.541.541 0 014.5 4z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductFlexIcon.displayName = 'ProductFlexIcon';
export {ProductFlexIcon};
