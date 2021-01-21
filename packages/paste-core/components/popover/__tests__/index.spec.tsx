import * as React from 'react';
import {act, render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import axe from '../../../../../.jest/axe-helper';
import {Popover, PopoverContainer, PopoverButton} from '../src';

const PopoverMock: React.FC = () => {
  return (
    <Theme.Provider theme="console">
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          This is the Twilio styled popover that you can use in all your applications.
        </Popover>
      </PopoverContainer>
    </Theme.Provider>
  );
};

const VisiblePopoverMock: React.FC = () => {
  return (
    <Theme.Provider theme="console">
      <PopoverContainer baseId="visible-popover-example" visible>
        <PopoverButton variant="primary" data-testid="open-button">
          Open popover
        </PopoverButton>
        <Popover aria-label="Popover">
          This is the Twilio styled popover that you can use in all your applications.
        </Popover>
      </PopoverContainer>
    </Theme.Provider>
  );
};

describe('Popover', () => {
  describe('Render', () => {
    it('should render', () => {
      const {asFragment} = render(<PopoverMock />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render a popover button with aria attributes', () => {
      render(<PopoverMock />);
      const renderedPopoverButton = screen.getByRole('button');
      expect(renderedPopoverButton.getAttribute('aria-haspopup')).toEqual('dialog');
      expect(renderedPopoverButton.getAttribute('aria-controls')).toEqual('popover-example');
      expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('false');
    });

    it('should render a popover button with expanded aria attributes when popover is visible', () => {
      act(() => {
        render(<VisiblePopoverMock />);
      });
      const renderedVisiblePopoverButton = screen.getByTestId('open-button');
      expect(renderedVisiblePopoverButton.getAttribute('aria-expanded')).toEqual('true');
    });

    it('should render a popover', () => {
      render(<PopoverMock />);
      const renderedPopover = screen.getByLabelText('Popover');
      expect(renderedPopover.getAttribute('role')).toEqual('dialog');
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<PopoverMock />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
