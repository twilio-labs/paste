import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductVoiceIntelligenceIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductVoiceIntelligenceIcon = React.forwardRef<HTMLElement, ProductVoiceIntelligenceIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductVoiceIntelligenceIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductVoiceIntelligenceIcon]: Missing a title for non-decorative icon.');
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
            d="M7.08 9.33l.01-.027 2.694-7.599C10.12.762 11.521 1 11.521 2v5.896h.77a.89.89 0 01.852 1.153l-.008.027-2.982 8.549c-.33.947-1.738.71-1.738-.292v-6.845h-.482A.89.89 0 017.08 9.33zm3.547-.545V2L7.933 9.599h1.376v7.734l2.981-8.548h-1.663zM4.622 3.98a.446.446 0 00-.443-.425.446.446 0 00-.45.44l-.084 11.236v.023c.01.235.204.423.444.425a.446.446 0 00.45-.441l.084-11.236V3.98zM.447 6.32c.24 0 .435.187.446.422v6.272a.446.446 0 01-.893.022V6.764c0-.245.2-.444.447-.444zm19 0c.24 0 .435.187.446.422v6.272a.446.446 0 01-.893.022V6.764c0-.245.2-.444.447-.444zm-3.413-2.764c.24.001.433.19.443.425v.022l-.083 11.236a.446.446 0 01-.45.441.446.446 0 01-.444-.425v-.023l.084-11.235a.446.446 0 01.45-.441z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductVoiceIntelligenceIcon.displayName = 'ProductVoiceIntelligenceIcon';
export { ProductVoiceIntelligenceIcon };
