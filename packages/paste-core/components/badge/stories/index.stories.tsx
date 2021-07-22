import * as React from 'react';
import {Stack} from '@twilio-paste/stack';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';
import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';

import {Badge} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Badge',
  component: Badge,
};

export const AllBadges: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge variant="default">Default</Badge>
    <Badge variant="info">Info</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="error">Error</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="new">New</Badge>
  </Stack>
);

export const DefaultBadge: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge variant="default">Default</Badge>

    <Badge variant="default">
      <InformationIcon decorative />
      &nbsp;Default
    </Badge>

    <Badge variant="default">
      Default&nbsp;
      <InformationIcon decorative />
    </Badge>
  </Stack>
);

export const DefaultBadgeAsAnchor: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge variant="default">Default</Badge>

    <Badge variant="default">
      <InformationIcon decorative />
      &nbsp;Default
    </Badge>

    <Badge variant="default">
      Default&nbsp;
      <InformationIcon decorative />
    </Badge>
  </Stack>
);

export const DefaultBadgeAsButton: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge as="button" onClick={() => {}} variant="default">
      Default
    </Badge>

    <Badge as="button" onClick={() => {}} variant="default">
      <InformationIcon decorative />
      &nbsp;Default
    </Badge>

    <Badge as="button" onClick={() => {}} variant="default">
      Default&nbsp;
      <InformationIcon decorative />
    </Badge>
  </Stack>
);

export const InfoBadge: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge variant="info">Info</Badge>

    <Badge variant="info">
      <InformationIcon decorative />
      &nbsp;Info
    </Badge>

    <Badge variant="info">
      Info&nbsp;
      <InformationIcon decorative />
    </Badge>
  </Stack>
);
export const InfoBadgeAsButton: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge as="button" onClick={() => {}} variant="info">
      Info
    </Badge>

    <Badge as="button" onClick={() => {}} variant="info">
      <InformationIcon decorative />
      &nbsp;Info
    </Badge>

    <Badge as="button" onClick={() => {}} variant="info">
      Info&nbsp;
      <InformationIcon decorative />
    </Badge>
  </Stack>
);
export const InfoBadgeAsAnchor: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge as="a" href="#" variant="info">
      Info
    </Badge>

    <Badge as="a" href="#" variant="info">
      <InformationIcon decorative />
      &nbsp;Info
    </Badge>

    <Badge as="a" href="#" variant="info">
      Info&nbsp;
      <InformationIcon decorative />
    </Badge>
  </Stack>
);

export const WarningBadge: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge variant="warning">Warning</Badge>

    <Badge variant="warning">
      <WarningIcon decorative />
      &nbsp;Warning
    </Badge>

    <Badge variant="warning">
      Warning&nbsp;
      <WarningIcon decorative />
    </Badge>
  </Stack>
);

export const WarningBadgeAsButton: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge as="a" href="#" variant="warning">
      Warning
    </Badge>

    <Badge as="a" href="#" variant="warning">
      <WarningIcon decorative />
      &nbsp;Warning
    </Badge>

    <Badge as="a" href="#" variant="warning">
      Warning&nbsp;
      <WarningIcon decorative />
    </Badge>
  </Stack>
);

export const WarningBadgeAsAnchor: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge as="a" href="#" variant="warning">
      Warning
    </Badge>

    <Badge as="a" href="#" variant="warning">
      <WarningIcon decorative />
      &nbsp;Warning
    </Badge>

    <Badge as="a" href="#" variant="warning">
      Warning&nbsp;
      <WarningIcon decorative />
    </Badge>
  </Stack>
);

export const ErrorBadge: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge variant="error">Error</Badge>

    <Badge variant="error">
      <ErrorIcon decorative />
      &nbsp;Error
    </Badge>

    <Badge variant="error">
      Error&nbsp;
      <ErrorIcon decorative />
    </Badge>
  </Stack>
);

export const ErrorBadgeAsAnchor: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge as="a" href="#" variant="error">
      Error
    </Badge>

    <Badge as="a" href="#" variant="error">
      <ErrorIcon decorative />
      &nbsp;Error
    </Badge>

    <Badge as="a" href="#" variant="error">
      Error&nbsp;
      <ErrorIcon decorative />
    </Badge>
  </Stack>
);

export const ErrorBadgeAsButton: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge as="a" href="#" variant="error">
      Error
    </Badge>

    <Badge as="a" href="#" variant="error">
      <ErrorIcon decorative />
      &nbsp;Error
    </Badge>

    <Badge as="a" href="#" variant="error">
      Error&nbsp;
      <ErrorIcon decorative />
    </Badge>
  </Stack>
);

export const SuccessBadge: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge variant="success">Success</Badge>

    <Badge variant="success">
      <SuccessIcon decorative />
      &nbsp;Success
    </Badge>

    <Badge variant="success">
      Success&nbsp;
      <SuccessIcon decorative />
    </Badge>
  </Stack>
);

export const SuccessBadgeAsAnchor: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge as="a" href="#" variant="success">
      Success
    </Badge>

    <Badge as="a" href="#" variant="success">
      <SuccessIcon decorative />
      &nbsp;Success
    </Badge>

    <Badge as="a" href="#" variant="success">
      Success&nbsp;
      <SuccessIcon decorative />
    </Badge>
  </Stack>
);

export const SuccessBadgeAsButton: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge as="button" onClick={() => {}} variant="success">
      Success
    </Badge>

    <Badge as="button" onClick={() => {}} variant="success">
      <SuccessIcon decorative />
      &nbsp;Success
    </Badge>

    <Badge as="button" onClick={() => {}} variant="success">
      Success&nbsp;
      <SuccessIcon decorative />
    </Badge>
  </Stack>
);

export const NewBadge: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge variant="new">New</Badge>

    <Badge variant="new">
      <NewIcon decorative />
      &nbsp;New
    </Badge>

    <Badge variant="new">
      New&nbsp;
      <NewIcon decorative />
    </Badge>
  </Stack>
);

export const NewBadgeAsButton: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge as="button" onClick={() => {}} variant="new">
      New
    </Badge>

    <Badge as="button" onClick={() => {}} variant="new">
      <NewIcon decorative />
      &nbsp;New
    </Badge>

    <Badge as="button" onClick={() => {}} variant="new">
      New&nbsp;
      <NewIcon decorative />
    </Badge>
  </Stack>
);

export const NewBadgeAsAnchor: React.FC = () => (
  <Stack orientation="horizontal" spacing="space80">
    <Badge as="a" href="#" variant="new">
      New
    </Badge>

    <Badge as="a" href="#" variant="new">
      <NewIcon decorative />
      &nbsp;New
    </Badge>

    <Badge as="a" href="#" variant="new">
      New&nbsp;
      <NewIcon decorative />
    </Badge>
  </Stack>
);
