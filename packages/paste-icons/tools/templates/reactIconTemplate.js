// Note on a11y: https://css-tricks.com/can-make-icon-system-accessible/
const reactIconTemplate = ({componentName, svg}) => `
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ${componentName}Props extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ${componentName}: React.FC<${componentName}Props> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[${componentName}]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} size={size} iconColor={iconColor}>
      <UID>
        {uid => (
          ${svg}
        )}
      </UID>
    </IconWrapper>
  );
}
  

${componentName}.displayName = '${componentName}';
export {${componentName}};
`;

module.exports = {
  reactIconTemplate,
};
