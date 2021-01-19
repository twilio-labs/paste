/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductInsightsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInsightsIcon: React.FC<ProductInsightsIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ProductInsightsIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductInsightsIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.99 3.656c2.93.034 5.3 2.386 5.343 5.303a5.232 5.232 0 01-2.666 4.608v1.245a1.599 1.599 0 01-1.6 1.594h-.534v1.063a.532.532 0 01-1.066 0v-1.063h-.534a1.599 1.599 0 01-1.6-1.593v-1.246a5.23 5.23 0 01-2.666-4.602c.039-2.914 2.399-5.267 5.323-5.309zM11.6 13.75H8.4v1.063c0 .293.239.53.533.53h2.134a.533.533 0 00.533-.53V13.75zM9.99 4.719A4.326 4.326 0 005.733 8.98a4.163 4.163 0 002.202 3.707h1.532v-1.906L8.023 9.344a.53.53 0 01.239-.89c.184-.048.38.005.515.14L10 9.81l1.223-1.218a.535.535 0 01.753 0 .53.53 0 01.001.751l-1.444 1.438v1.905h1.532a4.164 4.164 0 002.202-3.711A4.33 4.33 0 009.99 4.719zM3.6 8.437a.532.532 0 110 1.063H2.533a.532.532 0 110-1.063zm13.867 0a.532.532 0 110 1.063H16.4a.532.532 0 110-1.063zM3.75 3.29a.535.535 0 01.753-.016l.782.749a.53.53 0 01.015.751.535.535 0 01-.754.015l-.782-.749a.53.53 0 01-.014-.75zm12.127-.164a.53.53 0 01.359.914l-.782.75a.535.535 0 01-.753-.017.53.53 0 01.014-.75l.782-.749a.534.534 0 01.38-.148zM10 1c.295 0 .533.238.533.531v1.063a.53.53 0 01-.533.531.534.534 0 01-.533-.531V1.53c0-.293.238-.531.533-.531z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductInsightsIcon.displayName = 'ProductInsightsIcon';
export {ProductInsightsIcon};
