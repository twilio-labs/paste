interface ReactIconTemplateArgs {
  componentName: string;
  svg: string;
}

// Note on a11y: https://css-tricks.com/can-make-icon-system-accessible/
export const reactIconTemplate = ({ componentName, svg }: ReactIconTemplateArgs): string => `
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ${componentName}Props extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ${componentName} = React.forwardRef<HTMLElement, ${componentName}Props>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = \`${componentName}-\${useUID()}\`;

    if (!decorative && title == null) {
      throw new Error('[${componentName}]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        ${svg}
      </IconWrapper>
    );
  }
);

${componentName}.displayName = '${componentName}';
export {${componentName}};
`;
