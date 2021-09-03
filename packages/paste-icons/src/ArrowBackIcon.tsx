/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowBackIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowBackIcon: React.FC<ArrowBackIconProps> = ({
  as,
  display,
  element = 'ICON',
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ArrowBackIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ArrowBackIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.009 9.91l-.007.05v.08l.01.07.01.029a.489.489 0 00.205.272l3.832 3.444a.596.596 0 00.78 0 .459.459 0 00.063-.632l-.063-.069-2.957-2.659h7.605A.504.504 0 0015 10a.5.5 0 00-.42-.488l-.093-.008H6.883l2.956-2.658a.459.459 0 00.063-.632l-.063-.069a.598.598 0 00-.704-.057l-.076.057L5.227 9.59a.498.498 0 00-.206.272l-.012.049z"
        />
      </svg>
    </IconWrapper>
  );
};

ArrowBackIcon.displayName = 'ArrowBackIcon';
export {ArrowBackIcon};
