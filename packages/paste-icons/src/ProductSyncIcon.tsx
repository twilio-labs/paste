/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductSyncIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSyncIcon: React.FC<ProductSyncIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductSyncIcon]: Missing a title for non-decorative icon.');
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
              d="M19.5 11.5a.5.5 0 01.5.5 8.05 8.05 0 01-4.355 7.136c-.321.17-.656.314-1 .43a8.074 8.074 0 01-6.695-.675.5.5 0 01-.105-.784l.075-.062a.5.5 0 01.54-.008 6.953 6.953 0 003.54.96 7.13 7.13 0 006.695-4.768c.227-.72.33-1.474.305-2.229a.5.5 0 01.5-.5zM8.985 15.553l-1.65 1.65v.004l-.705.705h-.005L4.95 19.586v-4.033h4.035zM15 11.5a.5.5 0 01.5.5 3.5 3.5 0 01-3.5 3.498.5.5 0 110-1A2.5 2.5 0 0014.5 12a.5.5 0 01.5-.5zm-3-2.998a.5.5 0 110 1A2.5 2.5 0 009.5 12a.5.5 0 01-1 0A3.5 3.5 0 0112 8.502zM9.355 4.434a8.074 8.074 0 016.695.675.5.5 0 01.105.784l-.075.062a.5.5 0 01-.54.008 7.063 7.063 0 00-5.26-.754 6.257 6.257 0 00-1.835.75A7.025 7.025 0 005 12a.5.5 0 01-1 0 8.05 8.05 0 014.355-7.136c.321-.17.656-.314 1-.43zm9.695-.025v4.038h-4.035l1.65-1.65v-.004l.705-.705h.005L19.05 4.41z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductSyncIcon.displayName = 'ProductSyncIcon';
export {ProductSyncIcon};
