/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductPhoneNumbersIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductPhoneNumbersIcon: React.FC<ProductPhoneNumbersIconProps> = ({
  as,
  display,
  element = 'ICON',
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ProductPhoneNumbersIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductPhoneNumbersIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.749 13.562c.273.04.463.299.424.579l-.4 2.923a.503.503 0 01-.493.436h-.07a.51.51 0 01-.424-.58l.399-2.917a.516.516 0 01.193-.342.489.489 0 01.37-.1zM13.159 2.5l.092.005c.275.04.467.301.429.585l-.539 3.964h2.36c.276 0 .499.23.499.513a.506.506 0 01-.499.512h-2.495l-.499 3.59h2.47c.276 0 .5.23.5.513a.506.506 0 01-.5.513H8.376l-.589 4.359a.503.503 0 01-.499.44h-.07a.51.51 0 01-.424-.579l.574-4.22H4.499A.506.506 0 014 12.182c0-.283.223-.513.499-.513h2.994l.499-3.59H4.998a.506.506 0 01-.499-.512c0-.284.223-.513.499-.513H8.14l.55-4.108a.506.506 0 01.568-.44c.276.039.468.3.43.584l-.55 3.964h2.994l.549-4.108a.506.506 0 01.569-.44zm-1.176 5.58H8.99l-.5 3.59h2.994l.5-3.59z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductPhoneNumbersIcon.displayName = 'ProductPhoneNumbersIcon';
export {ProductPhoneNumbersIcon};
