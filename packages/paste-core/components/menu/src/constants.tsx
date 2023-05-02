import * as React from 'react';
import {ProcessDisabledIcon} from '@twilio-paste/icons/esm/ProcessDisabledIcon';
import {ProcessDraftIcon} from '@twilio-paste/icons/esm/ProcessDraftIcon';
import {ProcessErrorIcon} from '@twilio-paste/icons/esm/ProcessErrorIcon';
import {ProcessInProgressIcon} from '@twilio-paste/icons/esm/ProcessInProgressIcon';
import {ProcessNeutralIcon} from '@twilio-paste/icons/esm/ProcessNeutralIcon';
import {ProcessSuccessIcon} from '@twilio-paste/icons/esm/ProcessSuccessIcon';
import {ProcessWarningIcon} from '@twilio-paste/icons/esm/ProcessWarningIcon';
import {ConnectivityAvailableIcon} from '@twilio-paste/icons/esm/ConnectivityAvailableIcon';
import {ConnectivityBusyIcon} from '@twilio-paste/icons/esm/ConnectivityBusyIcon';
import {ConnectivityUnavailableIcon} from '@twilio-paste/icons/esm/ConnectivityUnavailableIcon';
import {ConnectivityOfflineIcon} from '@twilio-paste/icons/esm/ConnectivityOfflineIcon';
import {ConnectivityNeutralIcon} from '@twilio-paste/icons/esm/ConnectivityNeutralIcon';

export const MenuItemVariants = {
  DEFAULT: 'default',
  DESTRUCTIVE: 'destructive',
  GROUP_ITEM: 'group_item',
  DESTRUCTIVE_GROUP_ITEM: 'destructive_group_item',
} as const;

export const StatusNames = {
  PROCESS_ERROR: 'ProcessError',
  PROCESS_WARNING: 'ProcessWarning',
  PROCESS_SUCCESS: 'ProcessSuccess',
  PROCESS_NEUTRAL: 'ProcessNeutral',
  PROCESS_IN_PROGRESS: 'ProcessInProgress',
  PROCESS_DISABLED: 'ProcessDisabled',
  PROCESS_DRAFT: 'ProcessDraft',
  AVAILABILITY_AVAILABLE: 'AvailabilityAvailable',
  AVAILABILITY_BUSY: 'AvailabilityBusy',
  AVAILABILITY_UNAVAILABLE: 'AvailabilityUnavailable',
  AVAILABILITY_NEUTRAL: 'AvailabilityNeutral',
  AVAILABILITY_OFFLINE: 'AvailabilityOffline',
} as const;

export const StatusIcons = {
  [StatusNames.PROCESS_NEUTRAL]: (
    <ProcessNeutralIcon color="colorTextIconNeutral" decorative={false} size="sizeIcon10" title="Neutral" />
  ),
  [StatusNames.PROCESS_IN_PROGRESS]: (
    <ProcessInProgressIcon color="colorTextIconNeutral" decorative={false} size="sizeIcon10" title="In progress" />
  ),
  [StatusNames.PROCESS_SUCCESS]: (
    <ProcessSuccessIcon color="colorTextIconSuccess" decorative={false} size="sizeIcon10" title="Success" />
  ),
  [StatusNames.PROCESS_WARNING]: (
    <ProcessWarningIcon color="colorTextIconWarning" decorative={false} size="sizeIcon10" title="Warning" />
  ),
  [StatusNames.PROCESS_ERROR]: (
    <ProcessErrorIcon color="colorTextIconError" decorative={false} size="sizeIcon10" title="Error" />
  ),
  [StatusNames.PROCESS_DISABLED]: (
    <ProcessDisabledIcon color="colorTextIcon" decorative={false} size="sizeIcon10" title="Disabled" />
  ),
  [StatusNames.PROCESS_DRAFT]: (
    <ProcessDraftIcon color="colorTextIcon" decorative={false} size="sizeIcon10" title="Draft" />
  ),
  [StatusNames.AVAILABILITY_AVAILABLE]: (
    <ConnectivityAvailableIcon color="colorTextIconAvailable" decorative={false} size="sizeIcon10" title="Available" />
  ),
  [StatusNames.AVAILABILITY_BUSY]: (
    <ConnectivityBusyIcon color="colorTextIconBusy" decorative={false} size="sizeIcon10" title="Busy" />
  ),
  [StatusNames.AVAILABILITY_UNAVAILABLE]: (
    <ConnectivityUnavailableIcon
      color="colorTextIconUnavailable"
      decorative={false}
      size="sizeIcon10"
      title="Unavailable"
    />
  ),
  [StatusNames.AVAILABILITY_OFFLINE]: (
    <ConnectivityOfflineIcon color="colorTextIconOffline" decorative={false} size="sizeIcon10" title="Offline" />
  ),
  [StatusNames.AVAILABILITY_NEUTRAL]: (
    <ConnectivityNeutralIcon color="colorTextIconNeutral" decorative={false} size="sizeIcon10" title="Neutral" />
  ),
};
