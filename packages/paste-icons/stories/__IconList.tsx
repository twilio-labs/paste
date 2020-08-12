import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {IconSize, TextColor} from '@twilio-paste/style-props';
import {Grid, StoryIcon} from './__StoryStyles';

import {ArrowBackIcon} from '../src/ArrowBackIcon';
import {ArrowDownIcon} from '../src/ArrowDownIcon';
import {ArrowForwardIcon} from '../src/ArrowForwardIcon';
import {ArrowUpIcon} from '../src/ArrowUpIcon';
import {AttachIcon} from '../src/AttachIcon';
import {CheckboxCheckIcon} from '../src/CheckboxCheckIcon';
import {CheckboxLineIcon} from '../src/CheckboxLineIcon';
import {CheckmarkCircleIcon} from '../src/CheckmarkCircleIcon';
import {ChevronDisclosureCollapsedIcon} from '../src/ChevronDisclosureCollapsedIcon';
import {ChevronDisclosureExpandedIcon} from '../src/ChevronDisclosureExpandedIcon';
import {ChevronDisclosureIcon} from '../src/ChevronDisclosureIcon';
import {ChevronDoubleLeftIcon} from '../src/ChevronDoubleLeftIcon';
import {ChevronDoubleRightIcon} from '../src/ChevronDoubleRightIcon';
import {ChevronDownIcon} from '../src/ChevronDownIcon';
import {ChevronExpandIcon} from '../src/ChevronExpandIcon';
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
import {LogoTwilioIcon} from '../src/LogoTwilioIcon';
import {MinusIcon} from '../src/MinusIcon';
import {MoreIcon} from '../src/MoreIcon';
import {NewIcon} from '../src/NewIcon';
import {PauseIcon} from '../src/PauseIcon';
import {PinIcon} from '../src/PinIcon';
import {PlayIcon} from '../src/PlayIcon';
import {PlusIcon} from '../src/PlusIcon';
import {ProductAddOnsIcon} from '../src/ProductAddOnsIcon';
import {ProductAuthyIcon} from '../src/ProductAuthyIcon';
import {ProductAutopilotIcon} from '../src/ProductAutopilotIcon';
import {ProductBillingIcon} from '../src/ProductBillingIcon';
import {ProductCLIIcon} from '../src/ProductCLIIcon';
import {ProductChannelsIcon} from '../src/ProductChannelsIcon';
import {ProductChatIcon} from '../src/ProductChatIcon';
import {ProductCodeExchangeCommunityIcon} from '../src/ProductCodeExchangeCommunityIcon';
import {ProductCodeExchangePartnerIcon} from '../src/ProductCodeExchangePartnerIcon';
import {ProductConversationsIcon} from '../src/ProductConversationsIcon';
import {ProductDebuggerIcon} from '../src/ProductDebuggerIcon';
import {ProductElasticSIPTrunkingIcon} from '../src/ProductElasticSIPTrunkingIcon';
import {ProductFaxIcon} from '../src/ProductFaxIcon';
import {ProductFlexIcon} from '../src/ProductFlexIcon';
import {ProductFunctionsIcon} from '../src/ProductFunctionsIcon';
import {ProductInsightsIcon} from '../src/ProductInsightsIcon';
import {ProductInterconnectIcon} from '../src/ProductInterconnectIcon';
import {ProductInternetOfThingsIcon} from '../src/ProductInternetOfThingsIcon';
import {ProductKeysIcon} from '../src/ProductKeysIcon';
import {ProductLogsIcon} from '../src/ProductLogsIcon';
import {ProductLookupIcon} from '../src/ProductLookupIcon';
import {ProductMessagingIcon} from '../src/ProductMessagingIcon';
import {ProductNotifyIcon} from '../src/ProductNotifyIcon';
import {ProductPhoneNumbersIcon} from '../src/ProductPhoneNumbersIcon';
import {ProductProxyIcon} from '../src/ProductProxyIcon';
import {ProductRegionalIcon} from '../src/ProductRegionalIcon';
import {ProductSDKIcon} from '../src/ProductSDKIcon';
import {ProductSettingsIcon} from '../src/ProductSettingsIcon';
import {ProductStudioIcon} from '../src/ProductStudioIcon';
import {ProductSupportIcon} from '../src/ProductSupportIcon';
import {ProductSyncIcon} from '../src/ProductSyncIcon';
import {ProductTaskRouterIcon} from '../src/ProductTaskRouterIcon';
import {ProductTrustHubIcon} from '../src/ProductTrustHubIcon';
import {ProductTwilioOrgIcon} from '../src/ProductTwilioOrgIcon';
import {ProductUsageIcon} from '../src/ProductUsageIcon';
import {ProductVerifyIcon} from '../src/ProductVerifyIcon';
import {ProductVideoIcon} from '../src/ProductVideoIcon';
import {ProductVoiceIcon} from '../src/ProductVoiceIcon';
import {SearchIcon} from '../src/SearchIcon';
import {SkipBackIcon} from '../src/SkipBackIcon';
import {SkipForwardIcon} from '../src/SkipForwardIcon';
import {SuccessIcon} from '../src/SuccessIcon';
import {UnpinIcon} from '../src/UnpinIcon';
import {UploadToCloudIcon} from '../src/UploadToCloudIcon';
import {VolumeOffIcon} from '../src/VolumeOffIcon';
import {VolumeOnIcon} from '../src/VolumeOnIcon';
import {WarningIcon} from '../src/WarningIcon';

interface IconProps {
  title?: string;
  decorative: boolean;
  size?: IconSize;
  color?: TextColor;
}

const IconList: React.FC<IconProps> = props => (
  <Grid>
    <StoryIcon><ArrowBackIcon {...props} /><Text as="p" textColor="currentColor">ArrowBackIcon</Text></StoryIcon>
<StoryIcon><ArrowDownIcon {...props} /><Text as="p" textColor="currentColor">ArrowDownIcon</Text></StoryIcon>
<StoryIcon><ArrowForwardIcon {...props} /><Text as="p" textColor="currentColor">ArrowForwardIcon</Text></StoryIcon>
<StoryIcon><ArrowUpIcon {...props} /><Text as="p" textColor="currentColor">ArrowUpIcon</Text></StoryIcon>
<StoryIcon><AttachIcon {...props} /><Text as="p" textColor="currentColor">AttachIcon</Text></StoryIcon>
<StoryIcon><CheckboxCheckIcon {...props} /><Text as="p" textColor="currentColor">CheckboxCheckIcon</Text></StoryIcon>
<StoryIcon><CheckboxLineIcon {...props} /><Text as="p" textColor="currentColor">CheckboxLineIcon</Text></StoryIcon>
<StoryIcon><CheckmarkCircleIcon {...props} /><Text as="p" textColor="currentColor">CheckmarkCircleIcon</Text></StoryIcon>
<StoryIcon><ChevronDisclosureCollapsedIcon {...props} /><Text as="p" textColor="currentColor">ChevronDisclosureCollapsedIcon</Text></StoryIcon>
<StoryIcon><ChevronDisclosureExpandedIcon {...props} /><Text as="p" textColor="currentColor">ChevronDisclosureExpandedIcon</Text></StoryIcon>
<StoryIcon><ChevronDisclosureIcon {...props} /><Text as="p" textColor="currentColor">ChevronDisclosureIcon</Text></StoryIcon>
<StoryIcon><ChevronDoubleLeftIcon {...props} /><Text as="p" textColor="currentColor">ChevronDoubleLeftIcon</Text></StoryIcon>
<StoryIcon><ChevronDoubleRightIcon {...props} /><Text as="p" textColor="currentColor">ChevronDoubleRightIcon</Text></StoryIcon>
<StoryIcon><ChevronDownIcon {...props} /><Text as="p" textColor="currentColor">ChevronDownIcon</Text></StoryIcon>
<StoryIcon><ChevronExpandIcon {...props} /><Text as="p" textColor="currentColor">ChevronExpandIcon</Text></StoryIcon>
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
<StoryIcon><LogoTwilioIcon {...props} /><Text as="p" textColor="currentColor">LogoTwilioIcon</Text></StoryIcon>
<StoryIcon><MinusIcon {...props} /><Text as="p" textColor="currentColor">MinusIcon</Text></StoryIcon>
<StoryIcon><MoreIcon {...props} /><Text as="p" textColor="currentColor">MoreIcon</Text></StoryIcon>
<StoryIcon><NewIcon {...props} /><Text as="p" textColor="currentColor">NewIcon</Text></StoryIcon>
<StoryIcon><PauseIcon {...props} /><Text as="p" textColor="currentColor">PauseIcon</Text></StoryIcon>
<StoryIcon><PinIcon {...props} /><Text as="p" textColor="currentColor">PinIcon</Text></StoryIcon>
<StoryIcon><PlayIcon {...props} /><Text as="p" textColor="currentColor">PlayIcon</Text></StoryIcon>
<StoryIcon><PlusIcon {...props} /><Text as="p" textColor="currentColor">PlusIcon</Text></StoryIcon>
<StoryIcon><ProductAddOnsIcon {...props} /><Text as="p" textColor="currentColor">ProductAddOnsIcon</Text></StoryIcon>
<StoryIcon><ProductAuthyIcon {...props} /><Text as="p" textColor="currentColor">ProductAuthyIcon</Text></StoryIcon>
<StoryIcon><ProductAutopilotIcon {...props} /><Text as="p" textColor="currentColor">ProductAutopilotIcon</Text></StoryIcon>
<StoryIcon><ProductBillingIcon {...props} /><Text as="p" textColor="currentColor">ProductBillingIcon</Text></StoryIcon>
<StoryIcon><ProductCLIIcon {...props} /><Text as="p" textColor="currentColor">ProductCLIIcon</Text></StoryIcon>
<StoryIcon><ProductChannelsIcon {...props} /><Text as="p" textColor="currentColor">ProductChannelsIcon</Text></StoryIcon>
<StoryIcon><ProductChatIcon {...props} /><Text as="p" textColor="currentColor">ProductChatIcon</Text></StoryIcon>
<StoryIcon><ProductCodeExchangeCommunityIcon {...props} /><Text as="p" textColor="currentColor">ProductCodeExchangeCommunityIcon</Text></StoryIcon>
<StoryIcon><ProductCodeExchangePartnerIcon {...props} /><Text as="p" textColor="currentColor">ProductCodeExchangePartnerIcon</Text></StoryIcon>
<StoryIcon><ProductConversationsIcon {...props} /><Text as="p" textColor="currentColor">ProductConversationsIcon</Text></StoryIcon>
<StoryIcon><ProductDebuggerIcon {...props} /><Text as="p" textColor="currentColor">ProductDebuggerIcon</Text></StoryIcon>
<StoryIcon><ProductElasticSIPTrunkingIcon {...props} /><Text as="p" textColor="currentColor">ProductElasticSIPTrunkingIcon</Text></StoryIcon>
<StoryIcon><ProductFaxIcon {...props} /><Text as="p" textColor="currentColor">ProductFaxIcon</Text></StoryIcon>
<StoryIcon><ProductFlexIcon {...props} /><Text as="p" textColor="currentColor">ProductFlexIcon</Text></StoryIcon>
<StoryIcon><ProductFunctionsIcon {...props} /><Text as="p" textColor="currentColor">ProductFunctionsIcon</Text></StoryIcon>
<StoryIcon><ProductInsightsIcon {...props} /><Text as="p" textColor="currentColor">ProductInsightsIcon</Text></StoryIcon>
<StoryIcon><ProductInterconnectIcon {...props} /><Text as="p" textColor="currentColor">ProductInterconnectIcon</Text></StoryIcon>
<StoryIcon><ProductInternetOfThingsIcon {...props} /><Text as="p" textColor="currentColor">ProductInternetOfThingsIcon</Text></StoryIcon>
<StoryIcon><ProductKeysIcon {...props} /><Text as="p" textColor="currentColor">ProductKeysIcon</Text></StoryIcon>
<StoryIcon><ProductLogsIcon {...props} /><Text as="p" textColor="currentColor">ProductLogsIcon</Text></StoryIcon>
<StoryIcon><ProductLookupIcon {...props} /><Text as="p" textColor="currentColor">ProductLookupIcon</Text></StoryIcon>
<StoryIcon><ProductMessagingIcon {...props} /><Text as="p" textColor="currentColor">ProductMessagingIcon</Text></StoryIcon>
<StoryIcon><ProductNotifyIcon {...props} /><Text as="p" textColor="currentColor">ProductNotifyIcon</Text></StoryIcon>
<StoryIcon><ProductPhoneNumbersIcon {...props} /><Text as="p" textColor="currentColor">ProductPhoneNumbersIcon</Text></StoryIcon>
<StoryIcon><ProductProxyIcon {...props} /><Text as="p" textColor="currentColor">ProductProxyIcon</Text></StoryIcon>
<StoryIcon><ProductRegionalIcon {...props} /><Text as="p" textColor="currentColor">ProductRegionalIcon</Text></StoryIcon>
<StoryIcon><ProductSDKIcon {...props} /><Text as="p" textColor="currentColor">ProductSDKIcon</Text></StoryIcon>
<StoryIcon><ProductSettingsIcon {...props} /><Text as="p" textColor="currentColor">ProductSettingsIcon</Text></StoryIcon>
<StoryIcon><ProductStudioIcon {...props} /><Text as="p" textColor="currentColor">ProductStudioIcon</Text></StoryIcon>
<StoryIcon><ProductSupportIcon {...props} /><Text as="p" textColor="currentColor">ProductSupportIcon</Text></StoryIcon>
<StoryIcon><ProductSyncIcon {...props} /><Text as="p" textColor="currentColor">ProductSyncIcon</Text></StoryIcon>
<StoryIcon><ProductTaskRouterIcon {...props} /><Text as="p" textColor="currentColor">ProductTaskRouterIcon</Text></StoryIcon>
<StoryIcon><ProductTrustHubIcon {...props} /><Text as="p" textColor="currentColor">ProductTrustHubIcon</Text></StoryIcon>
<StoryIcon><ProductTwilioOrgIcon {...props} /><Text as="p" textColor="currentColor">ProductTwilioOrgIcon</Text></StoryIcon>
<StoryIcon><ProductUsageIcon {...props} /><Text as="p" textColor="currentColor">ProductUsageIcon</Text></StoryIcon>
<StoryIcon><ProductVerifyIcon {...props} /><Text as="p" textColor="currentColor">ProductVerifyIcon</Text></StoryIcon>
<StoryIcon><ProductVideoIcon {...props} /><Text as="p" textColor="currentColor">ProductVideoIcon</Text></StoryIcon>
<StoryIcon><ProductVoiceIcon {...props} /><Text as="p" textColor="currentColor">ProductVoiceIcon</Text></StoryIcon>
<StoryIcon><SearchIcon {...props} /><Text as="p" textColor="currentColor">SearchIcon</Text></StoryIcon>
<StoryIcon><SkipBackIcon {...props} /><Text as="p" textColor="currentColor">SkipBackIcon</Text></StoryIcon>
<StoryIcon><SkipForwardIcon {...props} /><Text as="p" textColor="currentColor">SkipForwardIcon</Text></StoryIcon>
<StoryIcon><SuccessIcon {...props} /><Text as="p" textColor="currentColor">SuccessIcon</Text></StoryIcon>
<StoryIcon><UnpinIcon {...props} /><Text as="p" textColor="currentColor">UnpinIcon</Text></StoryIcon>
<StoryIcon><UploadToCloudIcon {...props} /><Text as="p" textColor="currentColor">UploadToCloudIcon</Text></StoryIcon>
<StoryIcon><VolumeOffIcon {...props} /><Text as="p" textColor="currentColor">VolumeOffIcon</Text></StoryIcon>
<StoryIcon><VolumeOnIcon {...props} /><Text as="p" textColor="currentColor">VolumeOnIcon</Text></StoryIcon>
<StoryIcon><WarningIcon {...props} /><Text as="p" textColor="currentColor">WarningIcon</Text></StoryIcon>
  </Grid>
);

export {IconList};
