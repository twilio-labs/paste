import * as React from 'react';
import {render, screen} from '@testing-library/react';
import type {RenderOptions} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';

import {AlertDialogWithTwoActions, DestructiveAlertDialog} from '../stories/index.stories';

const ThemeWrapper: RenderOptions['wrapper'] = ({children}) => (
  <Theme.Provider theme="default">{children}</Theme.Provider>
);

describe('Alert Dialog', () => {
  it('Should render an alert dialog box', () => {
    render(<AlertDialogWithTwoActions />);
    expect(screen.getByText('Submit application')).toBeDefined();
  });

  it('Should have two, labeled buttons when a secondary label and action is given', () => {
    render(<AlertDialogWithTwoActions />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent('Cancel');
    expect(buttons[1]).toHaveTextContent('Submit');
  });

  it('Should have a destructive button style when the destructive prop is included', () => {
    render(<DestructiveAlertDialog />, {wrapper: ThemeWrapper});
    const button = screen.getByRole('button', {name: 'Delete'});
    expect(button).toHaveStyleRule('background-color', 'rgb(214, 31, 31)');
  });

  it('Should have a heading the same as the heading prop', () => {
    render(<AlertDialogWithTwoActions />);
    expect(screen.getByRole('heading')).toHaveTextContent('Submit application');
  });

  it('Should have the correct aria attributes', () => {
    render(<AlertDialogWithTwoActions />);
    expect(screen.getByRole('alertdialog')).toBeTruthy();
    expect(screen.getByRole('alertdialog').getAttribute('aria-modal')).toEqual('true');
    expect(screen.getByRole('alertdialog').getAttribute('aria-labelledby')).toEqual(
      screen.getByRole('heading').getAttribute('id')
    );
    expect(screen.getByRole('alertdialog').getAttribute('aria-describedby')).toEqual(
      screen
        .getByText('Are you sure you want to submit this application? No information can be changed after submitting.')
        .getAttribute('id')
    );
  });

  it('Should have the initial focus land on the first focusable item', () => {
    render(<AlertDialogWithTwoActions />);
    expect(document.activeElement).toEqual(screen.getAllByRole('button')[0]);
  });
});
