import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {InlineControlGroup} from '../src';
import type {InlineControlGroupProps} from '../src';

const MockChild: React.FC = ({children}) => {
  return <Box backgroundColor="colorBackground">{children}</Box>;
};

const MockControlGroup: React.FC<{
  showRequired?: boolean;
  showHelpText?: boolean;
  showErrorText?: boolean;
  orientation?: InlineControlGroupProps['orientation'];
}> = ({showRequired, showHelpText, showErrorText, orientation = 'vertical'}) => {
  return (
    <InlineControlGroup
      errorText={showErrorText && 'It can take error text'}
      helpText={showHelpText && 'It can take help text'}
      required={showRequired}
      orientation={orientation}
      legend="Inline control group is used for spacing inline controls such as checkboxes and radio groups"
    >
      <MockChild>Child 1</MockChild>
      <MockChild>Child 2</MockChild>
      <MockChild>Child 3</MockChild>
    </InlineControlGroup>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Inline contol group',
};

export const Vertical = (): React.ReactNode => {
  return <MockControlGroup />;
};

export const VerticalRequired = (): React.ReactNode => {
  return <MockControlGroup showRequired />;
};

export const VerticalHelpText = (): React.ReactNode => {
  return <MockControlGroup showHelpText />;
};

export const VerticalErrorText = (): React.ReactNode => {
  return <MockControlGroup showErrorText />;
};

export const VerticalAllOptions = (): React.ReactNode => {
  return <MockControlGroup showRequired showErrorText showHelpText />;
};

export const Horizontal = (): React.ReactNode => {
  return <MockControlGroup orientation="horizontal" />;
};

export const HorizontalRequired = (): React.ReactNode => {
  return <MockControlGroup orientation="horizontal" showRequired />;
};

export const HorizontalHelpText = (): React.ReactNode => {
  return <MockControlGroup orientation="horizontal" showHelpText />;
};

export const HorizontalErrorText = (): React.ReactNode => {
  return <MockControlGroup orientation="horizontal" showErrorText />;
};

export const HorizontalAllOptions = (): React.ReactNode => {
  return <MockControlGroup orientation="horizontal" showRequired showErrorText showHelpText />;
};

export const ControlSpacingTest = (): React.ReactNode => {
  return (
    <Grid gutter="space40">
      <Column>
        <MockChild>Mock UI element</MockChild>
        <MockControlGroup showRequired showHelpText />
        <MockChild>Mock UI element</MockChild>
        <MockControlGroup orientation="horizontal" showRequired showHelpText />
        <MockChild>Mock UI element</MockChild>
      </Column>
      <Column>
        <MockChild>Mock UI element</MockChild>
        <MockControlGroup showRequired showErrorText showHelpText />
        <MockChild>Mock UI element</MockChild>
        <MockControlGroup orientation="horizontal" showRequired showErrorText showHelpText />
        <MockChild>Mock UI element</MockChild>
      </Column>
    </Grid>
  );
};
