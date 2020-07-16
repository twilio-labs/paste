import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {IconSize, TextColor} from '@twilio-paste/style-props';
import {Grid, StoryIcon} from './__StoryStyles';

import {ArrowBackIcon} from '../src/ArrowBackIcon';
import {ArrowDownIcon} from '../src/ArrowDownIcon';
import {ArrowForwardIcon} from '../src/ArrowForwardIcon';
import {ArrowUpIcon} from '../src/ArrowUpIcon';
import {AttachIcon} from '../src/AttachIcon';
import {CheckmarkCircleIcon} from '../src/CheckmarkCircleIcon';
import {ChevronDownIcon} from '../src/ChevronDownIcon';
import {ChevronLeftIcon} from '../src/ChevronLeftIcon';
import {ChevronRightIcon} from '../src/ChevronRightIcon';
import {ChevronUpIcon} from '../src/ChevronUpIcon';
import {CloseIcon} from '../src/CloseIcon';
import {CopyIcon} from '../src/CopyIcon';
import {DeleteIcon} from '../src/DeleteIcon';
import {DownloadIcon} from '../src/DownloadIcon';
import {ErrorIcon} from '../src/ErrorIcon';
import {InformationIcon} from '../src/InformationIcon';
import {LinkExternalIcon} from '../src/LinkExternalIcon';
import {LoadingIcon} from '../src/LoadingIcon';
import {MoreIcon} from '../src/MoreIcon';
import {PauseIcon} from '../src/PauseIcon';
import {PlayIcon} from '../src/PlayIcon';
import {PlusIcon} from '../src/PlusIcon';
import {ProductTwilioOrgIcon} from '../src/ProductTwilioOrgIcon';
import {SkipBackIcon} from '../src/SkipBackIcon';
import {SkipForwardIcon} from '../src/SkipForwardIcon';
import {SuccessIcon} from '../src/SuccessIcon';
import {UploadToCloudIcon} from '../src/UploadToCloudIcon';
import {VolumeOffIcon} from '../src/VolumeOffIcon';
import {VolumeOnIcon} from '../src/VolumeOnIcon';
import {WarningIcon} from '../src/WarningIcon';

interface IconProps {
  title?: string;
  decorative: boolean;
  size?: IconSize;
  iconColor?: TextColor;
}

const IconList: React.FC<IconProps> = props => (
  <Grid>
    <StoryIcon><ArrowBackIcon {...props} /><Text as="p" textColor="currentColor">ArrowBackIcon</Text></StoryIcon>
<StoryIcon><ArrowDownIcon {...props} /><Text as="p" textColor="currentColor">ArrowDownIcon</Text></StoryIcon>
<StoryIcon><ArrowForwardIcon {...props} /><Text as="p" textColor="currentColor">ArrowForwardIcon</Text></StoryIcon>
<StoryIcon><ArrowUpIcon {...props} /><Text as="p" textColor="currentColor">ArrowUpIcon</Text></StoryIcon>
<StoryIcon><AttachIcon {...props} /><Text as="p" textColor="currentColor">AttachIcon</Text></StoryIcon>
<StoryIcon><CheckmarkCircleIcon {...props} /><Text as="p" textColor="currentColor">CheckmarkCircleIcon</Text></StoryIcon>
<StoryIcon><ChevronDownIcon {...props} /><Text as="p" textColor="currentColor">ChevronDownIcon</Text></StoryIcon>
<StoryIcon><ChevronLeftIcon {...props} /><Text as="p" textColor="currentColor">ChevronLeftIcon</Text></StoryIcon>
<StoryIcon><ChevronRightIcon {...props} /><Text as="p" textColor="currentColor">ChevronRightIcon</Text></StoryIcon>
<StoryIcon><ChevronUpIcon {...props} /><Text as="p" textColor="currentColor">ChevronUpIcon</Text></StoryIcon>
<StoryIcon><CloseIcon {...props} /><Text as="p" textColor="currentColor">CloseIcon</Text></StoryIcon>
<StoryIcon><CopyIcon {...props} /><Text as="p" textColor="currentColor">CopyIcon</Text></StoryIcon>
<StoryIcon><DeleteIcon {...props} /><Text as="p" textColor="currentColor">DeleteIcon</Text></StoryIcon>
<StoryIcon><DownloadIcon {...props} /><Text as="p" textColor="currentColor">DownloadIcon</Text></StoryIcon>
<StoryIcon><ErrorIcon {...props} /><Text as="p" textColor="currentColor">ErrorIcon</Text></StoryIcon>
<StoryIcon><InformationIcon {...props} /><Text as="p" textColor="currentColor">InformationIcon</Text></StoryIcon>
<StoryIcon><LinkExternalIcon {...props} /><Text as="p" textColor="currentColor">LinkExternalIcon</Text></StoryIcon>
<StoryIcon><LoadingIcon {...props} /><Text as="p" textColor="currentColor">LoadingIcon</Text></StoryIcon>
<StoryIcon><MoreIcon {...props} /><Text as="p" textColor="currentColor">MoreIcon</Text></StoryIcon>
<StoryIcon><PauseIcon {...props} /><Text as="p" textColor="currentColor">PauseIcon</Text></StoryIcon>
<StoryIcon><PlayIcon {...props} /><Text as="p" textColor="currentColor">PlayIcon</Text></StoryIcon>
<StoryIcon><PlusIcon {...props} /><Text as="p" textColor="currentColor">PlusIcon</Text></StoryIcon>
<StoryIcon><ProductTwilioOrgIcon {...props} /><Text as="p" textColor="currentColor">ProductTwilioOrgIcon</Text></StoryIcon>
<StoryIcon><SkipBackIcon {...props} /><Text as="p" textColor="currentColor">SkipBackIcon</Text></StoryIcon>
<StoryIcon><SkipForwardIcon {...props} /><Text as="p" textColor="currentColor">SkipForwardIcon</Text></StoryIcon>
<StoryIcon><SuccessIcon {...props} /><Text as="p" textColor="currentColor">SuccessIcon</Text></StoryIcon>
<StoryIcon><UploadToCloudIcon {...props} /><Text as="p" textColor="currentColor">UploadToCloudIcon</Text></StoryIcon>
<StoryIcon><VolumeOffIcon {...props} /><Text as="p" textColor="currentColor">VolumeOffIcon</Text></StoryIcon>
<StoryIcon><VolumeOnIcon {...props} /><Text as="p" textColor="currentColor">VolumeOnIcon</Text></StoryIcon>
<StoryIcon><WarningIcon {...props} /><Text as="p" textColor="currentColor">WarningIcon</Text></StoryIcon>
  </Grid>
);

export {IconList};
