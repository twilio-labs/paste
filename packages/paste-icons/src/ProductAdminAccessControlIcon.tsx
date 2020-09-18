/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductAdminAccessControlIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAdminAccessControlIcon: React.FC<ProductAdminAccessControlIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  if (!decorative && title == null) {
    throw new Error('[ProductAdminAccessControlIcon]: Missing a title for non-decorative icon.');
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
              d="M6.008 9.945a4.038 4.038 0 013.756 2.552l.035.096h4.828c.074 0 .146.021.208.06l.058.046 1 .95c.156.147.162.392.014.547l-.992 1.038a.386.386 0 01-.277.119l-.84.003-.547.526a.386.386 0 01-.464.053l-.068-.052-.555-.526h-.352l-.55.53a.386.386 0 01-.476.046l-.06-.048-.55-.531h-.368l-.035.097a4.028 4.028 0 01-4.281 2.512l-.198-.031a4.027 4.027 0 01.714-7.987zm0 .771l-.177.006a3.256 3.256 0 103.328 4.14.386.386 0 01.37-.28h.804c.1 0 .196.04.268.109l.394.38.395-.378a.386.386 0 01.193-.1l.074-.007h.662c.099 0 .194.038.266.106l.397.377.394-.376a.386.386 0 01.192-.1l.073-.007.829-.004.61-.64-.607-.577H9.52a.386.386 0 01-.344-.212l-.027-.068a3.266 3.266 0 00-3.14-2.369zm-1.866 1.995a1.379 1.379 0 11-.13.067zm.862.735a.607.607 0 10-.607 1.052.607.607 0 00.607-1.052zM13.296 2a3.365 3.365 0 013.374 3.166l.006.184.005 1.287h.271c.538 0 .982.407 1.041.931l.007.114v5.28c0 .58-.47 1.048-1.048 1.048a.386.386 0 01-.078-.764l.078-.007c.13 0 .24-.091.269-.213l.007-.064V7.684c0-.13-.091-.239-.213-.267l-.063-.007-6.591-.005-.025.001-.024-.002h-.643c-.13 0-.24.09-.268.212l-.008.064v2.005a.386.386 0 01-.764.078l-.008-.078V7.68c0-.54.41-.985.934-1.042l.115-.006.278-.001-.002-1.25A3.365 3.365 0 0113.296 2zm.015 6.62a1.379 1.379 0 110 2.759 1.379 1.379 0 010-2.758zm0 .772a.607.607 0 100 1.215.607.607 0 000-1.215zm-.012-6.62a2.594 2.594 0 00-2.577 2.441l-.005.165.003 1.254 5.189.004-.005-1.282A2.593 2.593 0 0013.3 2.772z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ProductAdminAccessControlIcon.displayName = 'ProductAdminAccessControlIcon';
export {ProductAdminAccessControlIcon};
