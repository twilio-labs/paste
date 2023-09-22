import { ConnectivityAvailableIcon } from '@twilio-paste/icons/esm/ConnectivityAvailableIcon';
import { ConnectivityBusyIcon } from '@twilio-paste/icons/esm/ConnectivityBusyIcon';
import { ConnectivityNeutralIcon } from '@twilio-paste/icons/esm/ConnectivityNeutralIcon';
import { ConnectivityOfflineIcon } from '@twilio-paste/icons/esm/ConnectivityOfflineIcon';
import { ConnectivityUnavailableIcon } from '@twilio-paste/icons/esm/ConnectivityUnavailableIcon';
import { ProcessDisabledIcon } from '@twilio-paste/icons/esm/ProcessDisabledIcon';
import { ProcessDraftIcon } from '@twilio-paste/icons/esm/ProcessDraftIcon';
import { ProcessErrorIcon } from '@twilio-paste/icons/esm/ProcessErrorIcon';
import { ProcessInProgressIcon } from '@twilio-paste/icons/esm/ProcessInProgressIcon';
import { ProcessNeutralIcon } from '@twilio-paste/icons/esm/ProcessNeutralIcon';
import { ProcessSuccessIcon } from '@twilio-paste/icons/esm/ProcessSuccessIcon';
import { ProcessWarningIcon } from '@twilio-paste/icons/esm/ProcessWarningIcon';
import * as React from 'react';

import type { StatusBadges } from './types';

export const StatusObject: StatusBadges = {
  ProcessError: {
    badgeVariant: 'default',
    icon: <ProcessErrorIcon color="colorTextIconError" decorative size="sizeIcon10" />,
    color: 'colorTextError',
  },
  ProcessWarning: {
    badgeVariant: 'default',
    icon: <ProcessWarningIcon color="colorTextIconWarning" decorative size="sizeIcon10" />,
    color: 'colorTextWarning',
  },
  ProcessSuccess: {
    badgeVariant: 'default',
    icon: <ProcessSuccessIcon color="colorTextIconSuccess" decorative size="sizeIcon10" />,
    color: 'colorTextSuccess',
  },
  ProcessNeutral: {
    badgeVariant: 'default',
    icon: <ProcessNeutralIcon color="colorTextIconNeutral" decorative size="sizeIcon10" />,
    color: 'colorTextNeutral',
  },
  ProcessInProgress: {
    badgeVariant: 'default',
    icon: <ProcessInProgressIcon color="colorTextIconNeutral" decorative size="sizeIcon10" />,
    color: 'colorTextNeutral',
  },
  ProcessDisabled: {
    badgeVariant: 'decorative10',
    icon: <ProcessDisabledIcon color="colorTextIcon" decorative size="sizeIcon10" />,
    color: 'colorTextWeak',
  },
  ProcessDraft: {
    badgeVariant: 'decorative10',
    icon: <ProcessDraftIcon color="colorTextIcon" decorative size="sizeIcon10" />,
    color: 'colorTextWeak',
  },
  ConnectivityAvailable: {
    badgeVariant: 'default',
    icon: <ConnectivityAvailableIcon color="colorTextIconAvailable" decorative size="sizeIcon10" />,
    color: 'colorTextSuccess',
  },
  ConnectivityBusy: {
    badgeVariant: 'default',
    icon: <ConnectivityBusyIcon color="colorTextIconBusy" decorative size="sizeIcon10" />,
    color: 'colorTextWarning',
  },
  ConnectivityUnavailable: {
    badgeVariant: 'default',
    icon: <ConnectivityUnavailableIcon color="colorTextIconUnavailable" decorative size="sizeIcon10" />,
    color: 'colorTextError',
  },
  ConnectivityNeutral: {
    badgeVariant: 'default',
    icon: <ConnectivityNeutralIcon color="colorTextIconNeutral" decorative size="sizeIcon10" />,
    color: 'colorTextNeutral',
  },
  ConnectivityOffline: {
    badgeVariant: 'decorative10',
    icon: <ConnectivityOfflineIcon color="colorTextIconOffline" decorative size="sizeIcon10" />,
    color: 'colorTextWeak',
  },
} as const;
