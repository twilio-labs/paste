/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';
import { IconWrapper } from '@twilio-paste/icons/esm/helpers/IconWrapper';
import type { IconWrapperProps } from '@twilio-paste/icons/esm/helpers/IconWrapper';

export interface A11yIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const A11yIcon: React.FC<React.PropsWithChildren<A11yIconProps>> = ({
  as,
  display,
  element = 'ICON',
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `A11yIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[A11yIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 24 24" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.081 3.317a5.022 5.022 0 00-5.433.072 5.1 5.1 0 00-1.702 1.888c.856.773 1.427 1.71 1.63 2.575.178.755.157 1.428-.03 1.967-.187.533-.56.981-1.098 1.13-.559.155-1.107-.065-1.503-.496-.385-.42-.65-1.055-.772-1.86l-.001-.005a6.425 6.425 0 01.252-2.907 5.448 5.448 0 00-1.092-.539 5.02 5.02 0 00-3.479.022 5.088 5.088 0 00-2.644 2.28c-1.32 2.5-.326 5.324 2.329 7.927 2.64 2.588 6.776 4.78 11.203 5.859a.625.625 0 11-.296 1.214c-4.603-1.12-8.953-3.407-11.782-6.18-2.812-2.758-4.27-6.178-2.555-9.412l.006-.012a6.339 6.339 0 013.3-2.846 6.27 6.27 0 014.343-.027 6.71 6.71 0 011.175.559 6.348 6.348 0 012.027-2.18 6.274 6.274 0 016.791-.085l.011.007c2.639 1.73 3.265 4.755 2.639 7.98-.627 3.223-2.516 6.793-5.128 9.916a.625.625 0 01-.96-.802c2.52-3.011 4.286-6.392 4.86-9.353.575-2.957-.05-5.35-2.09-6.692zm-7.606 3.255c-.13.6-.154 1.222-.066 1.835.1.656.296 1.025.458 1.201.15.164.236.14.246.137.031-.009.158-.068.252-.338.092-.264.131-.687-.005-1.269-.11-.47-.406-1.034-.885-1.566z"
          clipRule="evenodd"
        />
      </svg>
    </IconWrapper>
  );
};

A11yIcon.displayName = 'A11yIcon';
export { A11yIcon };
