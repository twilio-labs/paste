/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductTwilioOrgIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductTwilioOrgIcon: React.FC<ProductTwilioOrgIconProps> = ({
  as,
  size,
  iconColor,
  title,
  decorative,
  ...props
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductTwilioOrgIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} size={size} iconColor={iconColor} {...props}>
      <UID>
        {uid => (
          <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
            {title ? <title id={uid}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21.904 5.5c.364 0 .656.146.874.437.219.292.292.656.146 1.02l-4.226 12.97c-.219.438-.583.802-1.093.948h-.365c-.364 0-.728-.146-1.02-.437l-2.55-2.55h-4.3l-.655 1.894c-.219.583-.729 1.02-1.385 1.02H1.064c-.365 0-.656-.145-.875-.437-.218-.291-.218-.656-.145-1.02l3.279-9.91c.218-.583.801-1.02 1.384-1.02h3.06l.656-1.895c.219-.583.73-1.02 1.385-1.02zm-.51 1.457H9.808L6.675 16.43h7.286c.219 0 .365.073.51.219l2.77 2.769 4.153-12.46zM7.258 9.872h-2.55l-3.134 9.473H6.82l-1.749-1.676L5 17.596c-.146-.218-.146-.437-.073-.656l2.332-7.068zm4.153-.146a1.323 1.323 0 011.676.146l.802.875.874-.802a1.323 1.323 0 011.676-.146c.073.073.073.073.146.219.51.437.51 1.239 0 1.749l-2.26 2.186c-.218.218-.655.218-.874 0l-2.186-2.332c-.073 0-.073-.073-.145-.146-.438-.583-.292-1.384.291-1.749z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductTwilioOrgIcon.displayName = 'ProductTwilioOrgIcon';
export {ProductTwilioOrgIcon};
