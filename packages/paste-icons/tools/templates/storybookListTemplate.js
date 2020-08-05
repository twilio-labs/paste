// Map list of icons and apply transformations to the list
const mapIconList = (list, fn) =>
  list
    .filter(name => name.includes('Icon'))
    .map(fn)
    .join('\n');

// Generates the icon list component
const storybookListTemplate = iconList => {
  const importIconList = mapIconList(iconList, iconName => `import {${iconName}} from '../src/${iconName}';`);
  const renderedIconList = mapIconList(
    iconList,
    iconName =>
      `<StoryIcon><${iconName} {...props} /><Text as="p" textColor="currentColor">${iconName}</Text></StoryIcon>`
  );

  return `import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {IconSize, TextColor} from '@twilio-paste/style-props';
import {Grid, StoryIcon} from './__StoryStyles';

${importIconList}

interface IconProps {
  title?: string;
  decorative: boolean;
  size?: IconSize;
  color?: TextColor;
}

const IconList: React.FC<IconProps> = props => (
  <Grid>
    ${renderedIconList}
  </Grid>
);

export {IconList};
`;
};

module.exports = {
  storybookListTemplate,
};
