/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductChatIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductChatIcon: React.FC<ProductChatIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ProductChatIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductChatIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.75 4c.69 0 1.25.558 1.25 1.246v7.474c0 .688-.56 1.245-1.25 1.245H9.69l-3.235 2.82a.882.882 0 01-.57.215.867.867 0 01-.885-.877v-2.158H3.25c-.69 0-1.25-.557-1.25-1.245V5.246C2 4.558 2.56 4 3.25 4h13.5zm0 .997H3.25a.25.25 0 00-.25.249v7.474c0 .137.112.249.25.249H5.5a.497.497 0 01.5.498v2.377l3.165-2.756a.501.501 0 01.335-.12h7.25a.25.25 0 00.25-.248V5.246a.25.25 0 00-.25-.25zM6 7.987c.552 0 1 .445 1 .996 0 .55-.448.996-1 .996s-1-.446-1-.996.448-.997 1-.997zm4 0c.552 0 1 .445 1 .996 0 .55-.448.996-1 .996s-1-.446-1-.996.448-.997 1-.997zm4 0c.552 0 1 .445 1 .996 0 .55-.448.996-1 .996s-1-.446-1-.996.448-.997 1-.997z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductChatIcon.displayName = 'ProductChatIcon';
export {ProductChatIcon};
