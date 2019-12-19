
import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {IconSize, TextColor} from '@twilio-paste/types';
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
  size?: IconSize;
  iconColor?: TextColor;
}

const IconList: React.FC<IconProps> = props => (
  <Grid>
    <StoryIcon><CloseIcon {...props} /><Text as="p" textColor="currentColor">CloseIcon</Text></StoryIcon>
<StoryIcon><CopyIcon {...props} /><Text as="p" textColor="currentColor">CopyIcon</Text></StoryIcon>
<StoryIcon><ErrorIcon {...props} /><Text as="p" textColor="currentColor">ErrorIcon</Text></StoryIcon>
<StoryIcon><InformationIcon {...props} /><Text as="p" textColor="currentColor">InformationIcon</Text></StoryIcon>
<StoryIcon><LoadingIcon {...props} /><Text as="p" textColor="currentColor">LoadingIcon</Text></StoryIcon>
<StoryIcon><PlusIcon {...props} /><Text as="p" textColor="currentColor">PlusIcon</Text></StoryIcon>
<StoryIcon><WarningIcon {...props} /><Text as="p" textColor="currentColor">WarningIcon</Text></StoryIcon>
  </Grid>
);

export {IconList};
