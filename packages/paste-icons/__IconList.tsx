
import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {Grid, StoryIcon} from './__StoryStyles';

import {CloseIcon} from './src/CloseIcon';
import {CopyIcon} from './src/CopyIcon';
import {ErrorIcon} from './src/ErrorIcon';
import {InformationIcon} from './src/InformationIcon';
import {LoadingIcon} from './src/LoadingIcon';
import {PlusIcon} from './src/PlusIcon';
import {WarningIcon} from './src/WarningIcon';

interface IconProps {
  title?: string;
  decorative: boolean;
  size?: number;
  color?: string;
}

const IconList: React.FC<IconProps> = props => (
  <Grid>
    <StoryIcon><CloseIcon {...props} /><Text as="p">CloseIcon</Text></StoryIcon>
<StoryIcon><CopyIcon {...props} /><Text as="p">CopyIcon</Text></StoryIcon>
<StoryIcon><ErrorIcon {...props} /><Text as="p">ErrorIcon</Text></StoryIcon>
<StoryIcon><InformationIcon {...props} /><Text as="p">InformationIcon</Text></StoryIcon>
<StoryIcon><LoadingIcon {...props} /><Text as="p">LoadingIcon</Text></StoryIcon>
<StoryIcon><PlusIcon {...props} /><Text as="p">PlusIcon</Text></StoryIcon>
<StoryIcon><WarningIcon {...props} /><Text as="p">WarningIcon</Text></StoryIcon>
  </Grid>
);

export {IconList};
