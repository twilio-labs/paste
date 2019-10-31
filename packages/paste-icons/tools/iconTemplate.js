// Note on a11y: https://css-tricks.com/can-make-icon-system-accessible/
const {pascalCaseWordSplitter} = require('./utils');

const iconTemplate = ({componentName, svg}) => `
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ${componentName}Props extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ${componentName}: React.FC<${componentName}Props> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        ${svg}
      )}
    </UID>
  </IconWrapper>
);

${componentName}.defaultProps = {
  title: '${pascalCaseWordSplitter(componentName)}',
  decorative: true,
}

${componentName}.displayName = '${componentName}';
export {${componentName}};
`;

module.exports = {
  iconTemplate,
};
