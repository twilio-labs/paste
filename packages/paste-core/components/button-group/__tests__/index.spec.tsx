import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@twilio-paste/button';
import { CustomizationProvider } from '@twilio-paste/customization';

import { ButtonGroup } from '../src';
import { Unattached } from '../stories/index.stories';

describe('ButtonGroup', () => {
  it('should render a group visibly into document', () => {
    render(<Unattached />);
    const btnGroup = screen.getByRole('group');
    expect(btnGroup).toBeVisible();
  });

  it('should render children visibly into document', () => {
    render(<Unattached />);
    const btns = screen.getAllByRole('button');
    expect(btns).toHaveLength(3);
    for (const btn of btns) {
      expect(btn).toBeVisible();
    }
  });

  it('should forward safe box props to root group role node', () => {
    render(
      <ButtonGroup aria-label="test">
        <Button variant="secondary">Pick me</Button>
        <Button variant="secondary">Or me</Button>
      </ButtonGroup>,
    );
    const btnGroup = screen.getByRole('group');
    expect(btnGroup).toHaveAttribute('aria-label', 'test');
  });
});

describe('ButtonGroup customization', () => {
  it('should set an element data attribute on ButtonGroup', () => {
    render(<Unattached />);
    const btnGroup = screen.getByRole('group');
    expect(btnGroup.dataset.pasteElement).toEqual('BUTTON_GROUP');
  });

  it('should set custom element data attributes on ButtonGroup', () => {
    render(<Unattached element="MY_BUTTON_GROUP" />);
    const btnGroup = screen.getByRole('group');
    expect(btnGroup.dataset.pasteElement).toEqual('MY_BUTTON_GROUP');
  });

  it('should add custom styling to ButtonGroup', () => {
    render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          BUTTON_GROUP: { backgroundColor: 'colorBackgroundAvailable' },
        }}
      >
        <Unattached />
      </CustomizationProvider>,
    );

    const btnGroup = screen.getByRole('group');
    expect(btnGroup).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
  });

  it('should add custom styling to a custom element for ButtonGroup', () => {
    render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          MY_BUTTON_GROUP: { backgroundColor: 'colorBackgroundAvailable' },
        }}
      >
        <Unattached element="MY_BUTTON_GROUP" />
      </CustomizationProvider>,
    );

    const btnGroup = screen.getByRole('group');
    expect(btnGroup).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
  });
});
