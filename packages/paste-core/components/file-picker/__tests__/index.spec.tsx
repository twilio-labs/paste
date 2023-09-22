import { fireEvent, render, screen } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import * as React from 'react';

import { Customized, Default, Disabled, Required } from '../stories/index.stories';

const ThemeWrapper: RenderOptions['wrapper'] = ({ children }) => (
  <Theme.Provider theme="default">{children}</Theme.Provider>
);

describe('FilePicker', () => {
  it('should render', () => {
    const { getByText } = render(<Default data-testid="test-file-picker" />);
    expect(getByText('Select file')).toBeDefined();
    expect(screen.getByTestId('test-file-picker')).toHaveAttribute('type', 'file');
  });
  it('should render as disabled', () => {
    render(<Disabled data-testid="test-file-picker" />);
    expect(screen.getByTestId('test-file-picker').getAttribute('aria-disabled')).toBe('true');
  });
  it('should render as required', () => {
    render(<Required data-testid="test-file-picker" />);
    expect(screen.getByTestId('test-file-picker').getAttribute('aria-required')).toBe('true');
  });
  it('should set aria-describedby on the file description text', () => {
    render(<Default data-testid="test-file-picker" />);
    const textId = screen.getByText('No file uploaded').getAttribute('id');
    expect(screen.getByTestId('test-file-picker')).toHaveAttribute('aria-describedby', textId);
  });
  it('should run the passed onChange function', () => {
    const MockOnChange = jest.fn();
    render(<Default onChange={MockOnChange} data-testid="test-file-picker" />);
    fireEvent.change(screen.getByTestId('test-file-picker'), {
      target: {
        files: [new File([], 'file.png', { type: 'image/png' })],
      },
    });
    expect(MockOnChange).toHaveBeenCalledTimes(1);
  });
  it('should correctly pass the name prop', () => {
    render(<Default name="imAFilePicker" data-testid="test-file-picker" />);
    expect(screen.getByTestId('test-file-picker').getAttribute('name')).toEqual('imAFilePicker');
  });
});

describe('FilePicker customization', () => {
  it('should set an element data attribute on File Picker', () => {
    const { container } = render(<Default />);
    expect(container.querySelector('[data-paste-element="FILEPICKER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FILEPICKER_BUTTON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FILEPICKER_TEXT"]')).toBeInTheDocument();
  });
  it('should set a custom element data attribute on File Picker', () => {
    const { container } = render(<Default element="MY_FILEPICKER" />);
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER_BUTTON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER_TEXT"]')).toBeInTheDocument();
  });
  it('should add custom styling to File Picker', () => {
    const { container } = render(<Customized />, { wrapper: ThemeWrapper });
    expect(container.querySelector('[data-paste-element="FILEPICKER"]')).toHaveStyleRule(
      'font-family',
      "'TwilioSansMono',Courier,monospace",
    );
    expect(container.querySelector('[data-paste-element="FILEPICKER_BUTTON"]')).toHaveStyleRule(
      'background-color',
      'rgba(242, 47, 70, 0.1)',
    );
    expect(container.querySelector('[data-paste-element="FILEPICKER_TEXT"]')).toHaveStyleRule(
      'margin-left',
      '0.125rem',
    );
  });
  it('should add custom styling to a custom named File Picker', () => {
    const { container } = render(<Customized element="MY_FILEPICKER" />);
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER"]')).toHaveStyleRule(
      'font-family',
      "'TwilioSansMono',Courier,monospace",
    );
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER_BUTTON"]')).toHaveStyleRule(
      'background-color',
      'rgba(242, 47, 70, 0.1)',
    );
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER_TEXT"]')).toHaveStyleRule(
      'margin-left',
      '0.125rem',
    );
  });
});
