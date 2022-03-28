import * as React from 'react';

import {render, screen} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {AlertDialogWithTwoActions, DestructiveAlertDialog} from '../stories/index.stories';

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
    render(<DestructiveAlertDialog />);
    expect(screen.getByText('Delete')).toHaveStyle('background-color: color-background-destructive');
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

describe('Accessibility', () => {
  it('Should have no accessibility violations for two button alert dialogs', async () => {
    const {container} = render(<AlertDialogWithTwoActions />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
