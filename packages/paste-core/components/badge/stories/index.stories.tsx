import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
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
    rowGap: 'space60',
    flexWrap: 'wrap',
    marginBottom: 'space80',
  })
);

export const AllBadges: React.FC<React.PropsWithChildren<unknown>> = () => (
  <Wrapper>
    <Badge as="span" variant="neutral">
      Neutral
    </Badge>
    <Badge as="span" variant="warning">
      Warning
    </Badge>
    <Badge as="span" variant="error">
      Error
    </Badge>
    <Badge as="span" variant="success">
      Success
    </Badge>
    <Badge as="span" variant="new">
      New
    </Badge>
    <Badge as="span" variant="decorative10">
      Decorative10
    </Badge>
    <Badge as="span" variant="decorative20">
      Decorative20
    </Badge>
    <Badge as="span" variant="decorative30">
      Decorative30
    </Badge>
    <Badge as="span" variant="decorative40">
      Decorative40
    </Badge>
    <Badge as="span" variant="neutral_counter">
      1
    </Badge>
    <Badge as="span" variant="error_counter">
      1
    </Badge>
  </Wrapper>
);

export const NeutralBadge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="neutral">
        Neutral
      </Badge>
      <Badge as="span" variant="neutral">
        <InformationIcon decorative />
        Neutral
      </Badge>
      <Badge as="span" variant="neutral">
        Neutral
        <InformationIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
    <Wrapper>
      <Badge as="a" href="#" variant="neutral">
        Neutral
      </Badge>

      <Badge as="a" href="#" variant="neutral">
        <InformationIcon decorative />
        Neutral
      </Badge>

      <Badge as="a" href="#" variant="neutral">
        Neutral
        <InformationIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="neutral">
        Neutral
      </Badge>

      <Badge as="button" onClick={() => {}} variant="neutral">
        <InformationIcon decorative />
        Neutral
      </Badge>

      <Badge as="button" onClick={() => {}} variant="neutral">
        Neutral
        <InformationIcon decorative />
      </Badge>
    </Wrapper>
  </>
);

export const WarningBadge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="warning">
        Warning
      </Badge>
      <Badge as="span" variant="warning">
        <WarningIcon decorative />
        Warning
      </Badge>
      <Badge as="span" variant="warning">
        Warning
        <WarningIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
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
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="warning">
        Warning
      </Badge>
      <Badge as="button" onClick={() => {}} variant="warning">
        <WarningIcon decorative />
        Warning
      </Badge>
      <Badge as="button" onClick={() => {}} variant="warning">
        Warning
        <WarningIcon decorative />
      </Badge>
    </Wrapper>
  </>
);

export const ErrorBadge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="error">
        Error
      </Badge>
      <Badge as="span" variant="error">
        <ErrorIcon decorative />
        Error
      </Badge>
      <Badge as="span" variant="error">
        Error
        <ErrorIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
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
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="error">
        Error
      </Badge>
      <Badge as="button" onClick={() => {}} variant="error">
        <ErrorIcon decorative />
        Error
      </Badge>
      <Badge as="button" onClick={() => {}} variant="error">
        Error
        <ErrorIcon decorative />
      </Badge>
    </Wrapper>
  </>
);

export const SuccessBadge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="success">
        Success
      </Badge>
      <Badge as="span" variant="success">
        <SuccessIcon decorative />
        Success
      </Badge>
      <Badge as="span" variant="success">
        Success
        <SuccessIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
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
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
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
  </>
);

export const NewBadge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="new">
        New
      </Badge>
      <Badge as="span" variant="new">
        <NewIcon decorative />
        New
      </Badge>
      <Badge as="span" variant="new">
        New
        <NewIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
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
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
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
  </>
);

export const Decorative10Badge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="decorative10">
        Decorative 10
      </Badge>
      <Badge as="span" variant="decorative10">
        <NewIcon decorative />
        Decorative 10
      </Badge>
      <Badge as="span" variant="decorative10">
        Decorative 10
        <NewIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
    <Wrapper>
      <Badge as="a" href="#" variant="decorative10">
        Decorative 10
      </Badge>
      <Badge as="a" href="#" variant="decorative10">
        <NewIcon decorative />
        Decorative 10
      </Badge>
      <Badge as="a" href="#" variant="decorative10">
        Decorative 10
        <NewIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="decorative10">
        Decorative 10
      </Badge>
      <Badge as="button" onClick={() => {}} variant="decorative10">
        <NewIcon decorative />
        Decorative 10
      </Badge>
      <Badge as="button" onClick={() => {}} variant="decorative10">
        Decorative 10
        <NewIcon decorative />
      </Badge>
    </Wrapper>
  </>
);

export const Decorative20Badge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="decorative20">
        Decorative 20
      </Badge>
      <Badge as="span" variant="decorative20">
        <NewIcon decorative />
        Decorative 20
      </Badge>
      <Badge as="span" variant="decorative20">
        Decorative 20
        <NewIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
    <Wrapper>
      <Badge as="a" href="#" variant="decorative20">
        Decorative 20
      </Badge>
      <Badge as="a" href="#" variant="decorative20">
        <NewIcon decorative />
        Decorative 20
      </Badge>
      <Badge as="a" href="#" variant="decorative20">
        Decorative 20
        <NewIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="decorative20">
        Decorative 20
      </Badge>
      <Badge as="button" onClick={() => {}} variant="decorative20">
        <NewIcon decorative />
        Decorative 20
      </Badge>
      <Badge as="button" onClick={() => {}} variant="decorative20">
        Decorative 20
        <NewIcon decorative />
      </Badge>
    </Wrapper>
  </>
);

export const Decorative30Badge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="decorative30">
        Decorative 30
      </Badge>
      <Badge as="span" variant="decorative30">
        <NewIcon decorative />
        Decorative 30
      </Badge>
      <Badge as="span" variant="decorative30">
        Decorative 30
        <NewIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
    <Wrapper>
      <Badge as="a" href="#" variant="decorative30">
        Decorative 30
      </Badge>
      <Badge as="a" href="#" variant="decorative30">
        <NewIcon decorative />
        Decorative 30
      </Badge>
      <Badge as="a" href="#" variant="decorative30">
        Decorative 30
        <NewIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="decorative30">
        Decorative 30
      </Badge>
      <Badge as="button" onClick={() => {}} variant="decorative30">
        <NewIcon decorative />
        Decorative 30
      </Badge>
      <Badge as="button" onClick={() => {}} variant="decorative30">
        Decorative 30
        <NewIcon decorative />
      </Badge>
    </Wrapper>
  </>
);

export const Decorative40Badge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="decorative40">
        Decorative 40
      </Badge>
      <Badge as="span" variant="decorative40">
        <NewIcon decorative />
        Decorative 40
      </Badge>
      <Badge as="span" variant="decorative40">
        Decorative 40
        <NewIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
    <Wrapper>
      <Badge as="a" href="#" variant="decorative40">
        Decorative 40
      </Badge>
      <Badge as="a" href="#" variant="decorative40">
        <NewIcon decorative />
        Decorative 40
      </Badge>
      <Badge as="a" href="#" variant="decorative40">
        Decorative 40
        <NewIcon decorative />
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="decorative40">
        Decorative 40
      </Badge>
      <Badge as="button" onClick={() => {}} variant="decorative40">
        <NewIcon decorative />
        Decorative 40
      </Badge>
      <Badge as="button" onClick={() => {}} variant="decorative40">
        Decorative 40
        <NewIcon decorative />
      </Badge>
    </Wrapper>
  </>
);

export const NeutralCounterBadge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="neutral_counter">
        1
      </Badge>
      <Badge as="span" variant="neutral_counter">
        1
      </Badge>
      <Badge as="span" variant="neutral_counter">
        1
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
    <Wrapper>
      <Badge as="a" href="#" variant="neutral_counter">
        1
      </Badge>
      <Badge as="a" href="#" variant="neutral_counter">
        1
      </Badge>
      <Badge as="a" href="#" variant="neutral_counter">
        1
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="neutral_counter">
        1
      </Badge>
      <Badge as="button" onClick={() => {}} variant="neutral_counter">
        1
      </Badge>
      <Badge as="button" onClick={() => {}} variant="neutral_counter">
        1
      </Badge>
    </Wrapper>
  </>
);

export const ErrorCounterBadge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="error_counter">
        1
      </Badge>
      <Badge as="span" variant="error_counter">
        1
      </Badge>
      <Badge as="span" variant="error_counter">
        1
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
    <Wrapper>
      <Badge as="a" href="#" variant="error_counter">
        1
      </Badge>
      <Badge as="a" href="#" variant="error_counter">
        1
      </Badge>
      <Badge as="a" href="#" variant="error_counter">
        1
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="error_counter">
        1
      </Badge>
      <Badge as="button" onClick={() => {}} variant="error_counter">
        1
      </Badge>
      <Badge as="button" onClick={() => {}} variant="error_counter">
        1
      </Badge>
    </Wrapper>
  </>
);

export const DefaultBadge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="default">
        Default
      </Badge>
      <Badge as="span" variant="default">
        Default
      </Badge>
      <Badge as="span" variant="default">
        Default
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
    <Wrapper>
      <Badge as="a" href="#" variant="default">
        Default
      </Badge>
      <Badge as="a" href="#" variant="default">
        Default
      </Badge>
      <Badge as="a" href="#" variant="default">
        Default
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="default">
        Default
      </Badge>
      <Badge as="button" onClick={() => {}} variant="default">
        Default
      </Badge>
      <Badge as="button" onClick={() => {}} variant="default">
        Default
      </Badge>
    </Wrapper>
  </>
);

export const InfoBadge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Wrapper>
      <Badge as="span" variant="info">
        Info
      </Badge>
      <Badge as="span" variant="info">
        Info
      </Badge>
      <Badge as="span" variant="info">
        Info
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
    <Wrapper>
      <Badge as="a" href="#" variant="info">
        Info
      </Badge>
      <Badge as="a" href="#" variant="info">
        Info
      </Badge>
      <Badge as="a" href="#" variant="info">
        Info
      </Badge>
    </Wrapper>
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Wrapper>
      <Badge as="button" onClick={() => {}} variant="info">
        Info
      </Badge>
      <Badge as="button" onClick={() => {}} variant="info">
        Info
      </Badge>
      <Badge as="button" onClick={() => {}} variant="info">
        Info
      </Badge>
    </Wrapper>
  </>
);

export const LongTextBadge: React.FC<React.PropsWithChildren<unknown>> = () => (
  <Wrapper>
    <Badge as="a" href="#" variant="neutral">
      <InformationIcon decorative />
      This is a badge with a lot of text
    </Badge>

    <Badge as="span" variant="neutral">
      <InformationIcon decorative />
      This is a badge with a lot of text
    </Badge>

    <Badge as="button" onClick={() => {}} variant="neutral">
      <InformationIcon decorative />
      This is a badge with a lot of text
    </Badge>
  </Wrapper>
);
