import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface DocumentationIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DocumentationIcon = React.forwardRef<HTMLElement, DocumentationIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `DocumentationIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[DocumentationIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.374 6.458c.05.034.091.065.126.092v9.992a7.543 7.543 0 00-.822-.389c-1.145-.464-2.951-.92-5.678-.972V5.003c2.614.05 4.5.535 5.304.897.43.194.861.414 1.07.558zm.262 11.385zm.003.003l-.002-.002-.003-.003a2.543 2.543 0 00-.26-.203 5.623 5.623 0 00-1.072-.558c-1.034-.42-2.763-.866-5.475-.901h-.008a.85.85 0 01-.576-.248.824.824 0 01-.243-.587V4.834a.829.829 0 01.53-.775A.85.85 0 012.852 4c2.811.036 4.663.5 5.828.974a6.595 6.595 0 011.32.702 6.598 6.598 0 011.32-.702c1.165-.474 3.017-.938 5.828-.974a.85.85 0 01.599.238.83.83 0 01.253.596v10.51a.824.824 0 01-.242.587.85.85 0 01-.577.248h-.008c-2.712.035-4.44.481-5.475.9a5.63 5.63 0 00-1.072.558 2.53 2.53 0 00-.26.204l-.003.003-.002.002a.499.499 0 01-.361.15.499.499 0 01-.361-.15zm.725-.003zm.958-1.69a7.539 7.539 0 00-.822.39V6.55c.035-.027.077-.058.126-.092.209-.144.64-.364 1.07-.558.804-.362 2.69-.848 5.304-.897V15.18c-2.727.052-4.533.508-5.678.972zm-7.46-6.055a.5.5 0 01.534-.463c1.156.082 2.298.311 3.397.68a.5.5 0 11-.32.949 12.726 12.726 0 00-3.148-.632.5.5 0 01-.463-.534zm0 2.61a.5.5 0 01.534-.463c1.156.083 2.298.312 3.397.681a.5.5 0 11-.32.948 12.726 12.726 0 00-3.148-.632.5.5 0 01-.463-.534zm11.817-2.076a.5.5 0 10-.072-.997 13.724 13.724 0 00-3.396.68.5.5 0 00.318.949 12.726 12.726 0 013.15-.632zm.463 2.076a.5.5 0 01-.463.534c-1.073.077-2.13.29-3.15.632a.5.5 0 01-.318-.948c1.098-.37 2.24-.598 3.396-.681a.5.5 0 01.535.463z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DocumentationIcon.displayName = 'DocumentationIcon';
export { DocumentationIcon };
