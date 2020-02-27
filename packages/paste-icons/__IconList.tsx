
import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {IconSize, TextColor} from '@twilio-paste/style-props';
import {Grid, StoryIcon} from './__StoryStyles';

import {CheckmarkCircleIcon} from './src/CheckmarkCircleIcon';
import {ChevronDownIcon} from './src/ChevronDownIcon';
import {ChevronUpIcon} from './src/ChevronUpIcon';
import {CloseIcon} from './src/CloseIcon';
import {CopyIcon} from './src/CopyIcon';
import {ErrorIcon} from './src/ErrorIcon';
import {InformationIcon} from './src/InformationIcon';
import {LinkExternalIcon} from './src/LinkExternalIcon';
import {LoadingIcon} from './src/LoadingIcon';
import {MoreIcon} from './src/MoreIcon';
import {PlusIcon} from './src/PlusIcon';
import {ProductTwilioOrgIcon} from './src/ProductTwilioOrgIcon';
import {UploadToCloudIcon} from './src/UploadToCloudIcon';
import {WarningIcon} from './src/WarningIcon';

interface IconProps {
  title?: string;
  decorative: boolean;
  size?: IconSize;
  iconColor?: TextColor;
}

const IconList: React.FC<IconProps> = props => (
  <Grid>
    <StoryIcon><CheckmarkCircleIcon {...props} /><Text as="p" textColor="currentColor">CheckmarkCircleIcon</Text></StoryIcon>
<StoryIcon><ChevronDownIcon {...props} /><Text as="p" textColor="currentColor">ChevronDownIcon</Text></StoryIcon>
<StoryIcon><ChevronUpIcon {...props} /><Text as="p" textColor="currentColor">ChevronUpIcon</Text></StoryIcon>
<StoryIcon><CloseIcon {...props} /><Text as="p" textColor="currentColor">CloseIcon</Text></StoryIcon>
<StoryIcon><CopyIcon {...props} /><Text as="p" textColor="currentColor">CopyIcon</Text></StoryIcon>
<StoryIcon><ErrorIcon {...props} /><Text as="p" textColor="currentColor">ErrorIcon</Text></StoryIcon>
<StoryIcon><InformationIcon {...props} /><Text as="p" textColor="currentColor">InformationIcon</Text></StoryIcon>
<StoryIcon><LinkExternalIcon {...props} /><Text as="p" textColor="currentColor">LinkExternalIcon</Text></StoryIcon>
<StoryIcon><LoadingIcon {...props} /><Text as="p" textColor="currentColor">LoadingIcon</Text></StoryIcon>
<StoryIcon><MoreIcon {...props} /><Text as="p" textColor="currentColor">MoreIcon</Text></StoryIcon>
<StoryIcon><PlusIcon {...props} /><Text as="p" textColor="currentColor">PlusIcon</Text></StoryIcon>
<StoryIcon><ProductTwilioOrgIcon {...props} /><Text as="p" textColor="currentColor">ProductTwilioOrgIcon</Text></StoryIcon>
<StoryIcon><UploadToCloudIcon {...props} /><Text as="p" textColor="currentColor">UploadToCloudIcon</Text></StoryIcon>
<StoryIcon><WarningIcon {...props} /><Text as="p" textColor="currentColor">WarningIcon</Text></StoryIcon>
  </Grid>
);

export {IconList};
