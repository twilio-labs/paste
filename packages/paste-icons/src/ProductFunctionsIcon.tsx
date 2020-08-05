/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductFunctionsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductFunctionsIcon: React.FC<ProductFunctionsIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductFunctionsIcon]: Missing a title for non-decorative icon.');
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
              d="M18.714 5.461A1.263 1.263 0 0017.738 5H9.524A4.517 4.517 0 005 9.51v8.232c0 .353.15.69.412.927.229.211.528.33.84.331h.105c3.906-.34 5.445-2.966 5.53-4.67a5.016 5.016 0 003.584-4.009 5.017 5.017 0 003.504-3.818 1.245 1.245 0 00-.261-1.042zM6.272 17.988a.267.267 0 01-.181-.065.245.245 0 01-.086-.18V14.52h4.867c-.207 1.198-1.433 3.202-4.6 3.478v-.01zm4.258-4.47H6.005v-3.006H14.426a4.02 4.02 0 01-3.896 3.006zm3.519-4.008H6.005a3.513 3.513 0 013.52-3.508h8.213a.242.242 0 01.196.095c.05.056.071.132.056.206a4.018 4.018 0 01-3.941 3.207z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductFunctionsIcon.displayName = 'ProductFunctionsIcon';
export {ProductFunctionsIcon};
