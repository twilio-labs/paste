import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';
import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';
import {styled, css} from '@twilio-paste/styling-library';

import {Badge} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Badge',
  component: Badge,
};

const Wrapper = styled.div(
  css({
    display: 'flex',
    columnGap: 'space60',
    alignItems: 'center',
  })
);

export const AllBadges: React.FC = () => (
  <Wrapper>
    <Badge variant="default">Default</Badge>
    <Badge variant="info">Info</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="error">Error</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="new">New</Badge>
  </Wrapper>
);

export const DefaultBadge: React.FC = () => (
  <Wrapper>
    <Badge variant="default">Default</Badge>
    <Badge variant="default">
      <InformationIcon decorative />
      Default
    </Badge>
    <Badge variant="default">
      Default
      <InformationIcon decorative />
    </Badge>
  </Wrapper>
);

export const DefaultBadgeAsAnchor: React.FC = () => (
  <Wrapper>
    <Badge variant="default">Default</Badge>

    <Badge variant="default">
      <InformationIcon decorative />
      Default
    </Badge>

    <Badge variant="default">
      Default
      <InformationIcon decorative />
    </Badge>
  </Wrapper>
);

export const DefaultBadgeAsButton: React.FC = () => (
  <Box display="flex" flexDirection="column" alignContent="flex-start">
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="default">
        Default
      </Badge>

      <Badge as="button" onClick={() => {}} variant="default">
        <InformationIcon decorative />
        Default
      </Badge>

      <Badge as="button" onClick={() => {}} variant="default">
        Default
        <InformationIcon decorative />
      </Badge>
    </Wrapper>
  </Box>
);

export const InfoBadge: React.FC = () => (
  <Wrapper>
    <Badge variant="info">Info</Badge>

    <Badge variant="info">
      <InformationIcon decorative />
      Info
    </Badge>

    <Badge variant="info">
      Info
      <InformationIcon decorative />
    </Badge>
  </Wrapper>
);
export const InfoBadgeAsButton: React.FC = () => (
  <Wrapper>
    <Badge as="button" onClick={() => {}} variant="info">
      Info
    </Badge>

    <Badge as="button" onClick={() => {}} variant="info">
      <InformationIcon decorative />
      Info
    </Badge>

    <Badge as="button" onClick={() => {}} variant="info">
      Info
      <InformationIcon decorative />
    </Badge>
  </Wrapper>
);
export const InfoBadgeAsAnchor: React.FC = () => (
  <Wrapper>
    <Badge as="a" href="#" variant="info">
      Info
    </Badge>

    <Badge as="a" href="#" variant="info">
      <InformationIcon decorative />
      Info
    </Badge>

    <Badge as="a" href="#" variant="info">
      Info
      <InformationIcon decorative />
    </Badge>
  </Wrapper>
);

export const WarningBadge: React.FC = () => (
  <Wrapper>
    <Badge variant="warning">Warning</Badge>

    <Badge variant="warning">
      <WarningIcon decorative />
      Warning
    </Badge>

    <Badge variant="warning">
      Warning
      <WarningIcon decorative />
    </Badge>
  </Wrapper>
);

export const WarningBadgeAsButton: React.FC = () => (
  <Wrapper>
    <Badge as="a" href="#" variant="warning">
      Warning
    </Badge>

    <Badge as="a" href="#" variant="warning">
      <WarningIcon decorative />
      Warning
    </Badge>

    <Badge as="a" href="#" variant="warning">
      Warning
      <WarningIcon decorative />
    </Badge>
  </Wrapper>
);

export const WarningBadgeAsAnchor: React.FC = () => (
  <Wrapper>
    <Badge as="a" href="#" variant="warning">
      Warning
    </Badge>

    <Badge as="a" href="#" variant="warning">
      <WarningIcon decorative />
      Warning
    </Badge>

    <Badge as="a" href="#" variant="warning">
      Warning
      <WarningIcon decorative />
    </Badge>
  </Wrapper>
);

export const ErrorBadge: React.FC = () => (
  <Wrapper>
    <Badge variant="error">Error</Badge>

    <Badge variant="error">
      <ErrorIcon decorative />
      Error
    </Badge>

    <Badge variant="error">
      Error
      <ErrorIcon decorative />
    </Badge>
  </Wrapper>
);

export const ErrorBadgeAsAnchor: React.FC = () => (
  <Wrapper>
    <Badge as="a" href="#" variant="error">
      Error
    </Badge>

    <Badge as="a" href="#" variant="error">
      <ErrorIcon decorative />
      Error
    </Badge>

    <Badge as="a" href="#" variant="error">
      Error
      <ErrorIcon decorative />
    </Badge>
  </Wrapper>
);

export const ErrorBadgeAsButton: React.FC = () => (
  <Wrapper>
    <Badge as="a" href="#" variant="error">
      Error
    </Badge>

    <Badge as="a" href="#" variant="error">
      <ErrorIcon decorative />
      Error
    </Badge>

    <Badge as="a" href="#" variant="error">
      Error
      <ErrorIcon decorative />
    </Badge>
  </Wrapper>
);

export const SuccessBadge: React.FC = () => (
  <Wrapper>
    <Badge variant="success">Success</Badge>

    <Badge variant="success">
      <SuccessIcon decorative />
      Success
    </Badge>

    <Badge variant="success">
      Success
      <SuccessIcon decorative />
    </Badge>
  </Wrapper>
);

export const SuccessBadgeAsAnchor: React.FC = () => (
  <Wrapper>
    <Badge as="a" href="#" variant="success">
      Success
    </Badge>

    <Badge as="a" href="#" variant="success">
      <SuccessIcon decorative />
      Success
    </Badge>

    <Badge as="a" href="#" variant="success">
      Success
      <SuccessIcon decorative />
    </Badge>
  </Wrapper>
);

export const SuccessBadgeAsButton: React.FC = () => (
  <Wrapper>
    <Badge as="button" onClick={() => {}} variant="success">
      Success
    </Badge>

    <Badge as="button" onClick={() => {}} variant="success">
      <SuccessIcon decorative />
      Success
    </Badge>

    <Badge as="button" onClick={() => {}} variant="success">
      Success
      <SuccessIcon decorative />
    </Badge>
  </Wrapper>
);

export const NewBadge: React.FC = () => (
  <Wrapper>
    <Badge variant="new">New</Badge>

    <Badge variant="new">
      <NewIcon decorative />
      New
    </Badge>

    <Badge variant="new">
      New
      <NewIcon decorative />
    </Badge>
  </Wrapper>
);

export const NewBadgeAsButton: React.FC = () => (
  <Wrapper>
    <Badge as="button" onClick={() => {}} variant="new">
      New
    </Badge>

    <Badge as="button" onClick={() => {}} variant="new">
      <NewIcon decorative />
      New
    </Badge>

    <Badge as="button" onClick={() => {}} variant="new">
      New
      <NewIcon decorative />
    </Badge>
  </Wrapper>
);

export const NewBadgeAsAnchor: React.FC = () => (
  <Wrapper>
    <Badge as="a" href="#" variant="new">
      New
    </Badge>

    <Badge as="a" href="#" variant="new">
      <NewIcon decorative />
      New
    </Badge>

    <Badge as="a" href="#" variant="new">
      New
      <NewIcon decorative />
    </Badge>
  </Wrapper>
);
