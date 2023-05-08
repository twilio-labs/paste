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

import type {StatusBadges} from './types';

export const BadgeVariants = [
  'neutral',
  'warning',
  'error',
  'success',
  'new',
  'subaccount',
  'decorative10',
  'decorative20',
  'decorative30',
  'decorative40',
  'neutral_counter',
  'error_counter',
  'default',
  // the following variants are outdated but still supported to prevent breaking changes
  'info',
] as const;

export const StatusObject: StatusBadges = {
  ProcessError: {
    badgeVariant: 'default',
    icon: <ProcessErrorIcon color="colorTextIconError" decorative={false} size="sizeIcon10" title="Error" />,
    color: 'colorTextError',
  },
  ProcessWarning: {
    badgeVariant: 'default',
    icon: <ProcessWarningIcon color="colorTextIconWarning" decorative={false} size="sizeIcon10" title="Warning" />,
    color: 'colorTextWarning',
  },
  ProcessSuccess: {
    badgeVariant: 'default',
    icon: <ProcessSuccessIcon color="colorTextIconSuccess" decorative={false} size="sizeIcon10" title="Success" />,
    color: 'colorTextSuccess',
  },
  ProcessNeutral: {
    badgeVariant: 'default',
    icon: <ProcessNeutralIcon color="colorTextIconNeutral" decorative={false} size="sizeIcon10" title="Neutral" />,
    color: 'colorTextNeutral',
  },
  ProcessInProgress: {
    badgeVariant: 'default',
    icon: (
      <ProcessInProgressIcon color="colorTextIconNeutral" decorative={false} size="sizeIcon10" title="In progress" />
    ),
    color: 'colorTextNeutral',
  },
  ProcessDisabled: {
    badgeVariant: 'decorative10',
    icon: <ProcessDisabledIcon color="colorTextIcon" decorative={false} size="sizeIcon10" title="Disabled" />,
    color: 'colorTextWeak',
  },
  ProcessDraft: {
    badgeVariant: 'decorative10',
    icon: <ProcessDraftIcon color="colorTextIcon" decorative={false} size="sizeIcon10" title="Draft" />,
    color: 'colorTextWeak',
  },
  ConnectivityAvailable: {
    badgeVariant: 'default',
    icon: (
      <ConnectivityAvailableIcon
        color="colorTextIconAvailable"
        decorative={false}
        size="sizeIcon10"
        title="Available"
      />
    ),
    color: 'colorTextSuccess',
  },
  ConnectivityBusy: {
    badgeVariant: 'default',
    icon: <ConnectivityBusyIcon color="colorTextIconBusy" decorative={false} size="sizeIcon10" title="Busy" />,
    color: 'colorTextWarning',
  },
  ConnectivityUnavailable: {
    badgeVariant: 'default',
    icon: (
      <ConnectivityUnavailableIcon
        color="colorTextIconUnavailable"
        decorative={false}
        size="sizeIcon10"
        title="Unavailable"
      />
    ),
    color: 'colorTextError',
  },
  ConnectivityNeutral: {
    badgeVariant: 'default',
    icon: <ConnectivityNeutralIcon color="colorTextIconNeutral" decorative={false} size="sizeIcon10" title="Neutral" />,
    color: 'colorTextNeutral',
  },
  ConnectivityOffline: {
    badgeVariant: 'decorative10',
    icon: <ConnectivityOfflineIcon color="colorTextIconOffline" decorative={false} size="sizeIcon10" title="Offline" />,
    color: 'colorTextWeak',
  },
} as const;
