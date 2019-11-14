
import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {Grid, StoryIcon} from './__StoryStyles';

import {LoadingIcon} from './src/LoadingIcon';
import {PlusIcon} from './src/PlusIcon';

interface IconProps {
  title?: string;
  decorative?: boolean;
  size?: number;
  color?: string;
}

const IconList: React.FC<IconProps> = props => (
  <Grid>
    <StoryIcon><LoadingIcon {...props} /><Text as="p">LoadingIcon</Text></StoryIcon>
<StoryIcon><PlusIcon {...props} /><Text as="p">PlusIcon</Text></StoryIcon>
  </Grid>
);

export {IconList};
