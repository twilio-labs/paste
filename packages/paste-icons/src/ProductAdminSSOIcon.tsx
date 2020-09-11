/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductAdminSSOIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAdminSSOIcon: React.FC<ProductAdminSSOIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductAdminSSOIcon]: Missing a title for non-decorative icon.');
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
              d="M8.261 1.726a.743.743 0 01.904.725v.629h4.747c.376 0 .687.28.736.643l.007.1v1.03a.4.4 0 01-.792.08l-.008-.08-.001-.973h-4.69v12.239h4.69v-.958a.4.4 0 01.32-.391l.08-.009a.4.4 0 01.393.32l.008.08v1.015c0 .377-.28.688-.642.737l-.101.007-4.748-.001v.63a.743.743 0 01-.196.503l-.081.076a.743.743 0 01-.626.146l-5.49-1.219a.743.743 0 01-.583-.725V3.67c0-.348.243-.65.582-.725zm.103.796L2.988 3.716v12.567l5.376 1.195V2.522zm5.548 3.303a2.459 2.459 0 012.453 2.298l.006.161v.286H17a.4.4 0 01.392.32l.008.08v4.805a.4.4 0 01-.4.4h-6.176a.4.4 0 01-.4-.4V8.97c0-.221.179-.4.4-.4l.628-.001v-.286c0-1.358 1.102-2.459 2.46-2.459zm2.687 3.545h-5.376v4.004h5.376V9.37zm-2.687.745l.092.007a.572.572 0 01.308.972v1.308a.4.4 0 01-.792.08l-.008-.08v-1.308a.57.57 0 01.307-.972l.093-.007zM5.784 8.693a1.43 1.43 0 11-.136.07zm.893.762a.63.63 0 10-.629 1.09.63.63 0 00.63-1.09zm7.235-2.83c-.868 0-1.58.667-1.653 1.516l-.006.143v.286h3.317v-.286c0-.916-.742-1.659-1.658-1.659z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductAdminSSOIcon.displayName = 'ProductAdminSSOIcon';
export {ProductAdminSSOIcon};
