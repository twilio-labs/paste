/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductVoiceIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductVoiceIcon: React.FC<ProductVoiceIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ProductVoiceIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductVoiceIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.55 18c-.239 0-.473-.065-.678-.187a34.61 34.61 0 01-4.01-2.791A35.318 35.318 0 017.3 12.726c-.72-.72-1.504-1.6-2.4-2.668a33.233 33.233 0 01-2.726-3.945 1.34 1.34 0 01.208-1.601l2.134-2.135a1.365 1.365 0 011.883 0l2.597 2.6c.519.52.519 1.363 0 1.883l-.715.71a26.959 26.959 0 002 2.22c.676.68 1.389 1.32 2.134 1.922l.715-.71c.52-.519 1.362-.519 1.882 0l2.598 2.6c.519.52.519 1.363 0 1.884l-2.134 2.135a1.338 1.338 0 01-.928.379zM5.481 3.033a.267.267 0 00-.186.08L3.162 5.248a.272.272 0 00-.043.326 31.99 31.99 0 002.614 3.795 33.798 33.798 0 002.33 2.594 32.988 32.988 0 006.358 4.921.277.277 0 00.326-.042l2.133-2.135a.267.267 0 000-.38l-2.592-2.599a.272.272 0 00-.379 0l-1.066 1.068a.533.533 0 01-.71.037l-.373-.299a27.742 27.742 0 01-2.219-1.996 28.139 28.139 0 01-2.053-2.333l-.299-.373a.534.534 0 01.043-.71l1.066-1.068a.267.267 0 000-.379L5.664 3.113a.272.272 0 00-.182-.08z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductVoiceIcon.displayName = 'ProductVoiceIcon';
export {ProductVoiceIcon};
