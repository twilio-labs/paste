/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CopyIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CopyIcon: React.FC<CopyIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `CopyIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[CopyIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.469 2.5c.63 0 1.15.48 1.212 1.094l.007.125-.001 1.593h1.407c.73 0 1.331.558 1.4 1.271l.006.136v9.375c0 .776-.63 1.406-1.406 1.406H6.719c-.777 0-1.407-.63-1.407-1.406v-1.407H3.719c-.631 0-1.15-.48-1.213-1.094L2.5 13.47v-9.75c0-.631.48-1.15 1.094-1.213L3.72 2.5h9.75zm2.625 3.75H6.719a.469.469 0 00-.469.469v9.375c0 .259.21.468.469.468h9.375c.259 0 .468-.21.468-.468V6.719a.469.469 0 00-.468-.469zm-2.625-2.813h-9.75a.281.281 0 00-.274.217l-.007.065v9.75c0 .133.092.244.216.274l.065.007 1.593-.001v-7.03c0-.731.558-1.332 1.271-1.4l.136-.006 7.031-.001V3.719a.281.281 0 00-.217-.274l-.064-.007z"
        />
      </svg>
    </IconWrapper>
  );
};

CopyIcon.displayName = 'CopyIcon';
export {CopyIcon};
