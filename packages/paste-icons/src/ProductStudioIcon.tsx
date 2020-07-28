/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductStudioIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductStudioIcon: React.FC<ProductStudioIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductStudioIcon]: Missing a title for non-decorative icon.');
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
              d="M6 8h13.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5V7H6a2 2 0 100 4h2v2.5a.5.5 0 00.5.5H18a1 1 0 010 2H4.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V17h7a2 2 0 100-4h-2v-2.5a.5.5 0 00-.5-.5H6a1 1 0 110-2zm8-3h5v2h-5V5zm-4 14H5v-2h5v2zm5-6H9v-2h6v2z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductStudioIcon.displayName = 'ProductStudioIcon';
export {ProductStudioIcon};
