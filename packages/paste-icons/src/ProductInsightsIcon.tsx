/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductInsightsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInsightsIcon: React.FC<ProductInsightsIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductInsightsIcon]: Missing a title for non-decorative icon.');
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
              d="M11.991 6.5A5.068 5.068 0 0117 11.491a4.927 4.927 0 01-2.5 4.337V17c0 .828-.672 1.5-1.5 1.5h-.5v1a.5.5 0 11-1 0v-1H11c-.828 0-1.5-.672-1.5-1.5v-1.172A4.927 4.927 0 017 11.496 5.064 5.064 0 0111.991 6.5zM13.5 16h-3v1a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-1zm-1.509-8.5A4.064 4.064 0 008 11.511 3.92 3.92 0 0010.064 15H11.5v-1.793l-1.354-1.353a.5.5 0 11.708-.708L12 12.293l1.146-1.147a.5.5 0 01.708.708L12.5 13.207V15h1.436A3.921 3.921 0 0016 11.507 4.067 4.067 0 0011.991 7.5zM6 11a.5.5 0 110 1H5a.5.5 0 110-1zm13 0a.5.5 0 110 1h-1a.5.5 0 110-1zM6.14 6.154a.5.5 0 01.706-.015l.734.705a.5.5 0 01-.693.721l-.733-.704a.5.5 0 01-.014-.707zM17.51 6a.5.5 0 01.336.86l-.733.705a.5.5 0 01-.693-.72l.734-.706A.5.5 0 0117.51 6zM12 4a.5.5 0 01.5.5v1a.5.5 0 11-1 0v-1A.5.5 0 0112 4z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductInsightsIcon.displayName = 'ProductInsightsIcon';
export {ProductInsightsIcon};
