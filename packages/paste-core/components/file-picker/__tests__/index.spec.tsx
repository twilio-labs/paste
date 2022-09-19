import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Default, Disabled, Customized} from '../stories/index.stories';

describe('FilePicker', () => {
  it('should render', () => {
    const {getByText} = render(<Default data-testid="test-file-picker" />);
    expect(getByText('Choose a file')).toBeDefined();
  });
  it('should render the file input in the DOM', () => {
    render(<Default data-testid="test-file-picker" />);
    expect(screen.getByTestId('test-file-picker')).toHaveAttribute('type', 'file');
  });
  it('should render as disabled', () => {
    render(<Disabled data-testid="test-file-picker" />);
    expect(screen.getByTestId('test-file-picker').getAttribute('aria-disabled')).toBe('true');
  });
  it('should set aria-describedby on the file description text', () => {
    render(<Default data-testid="test-file-picker" />);
    const textId = screen.getByText('No files selected').getAttribute('id');
    expect(screen.getByTestId('test-file-picker')).toHaveAttribute('aria-describedby', textId);
  });
});

describe('FilePicker customization', () => {
  it('should set an element data attribute on File Picker', () => {
    const {container} = render(<Default />);
    expect(container.querySelector('[data-paste-element="FILEPICKER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FILEPICKER_BUTTON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="FILEPICKER_TEXT"]')).toBeInTheDocument();
  });
  it('should set a custom element data attribute on File Picker', () => {
    const {container} = render(<Default element="MY_FILEPICKER" />);
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER_BUTTON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER_TEXT"]')).toBeInTheDocument();
  });
  it('should add custom styling to File Picker', () => {
    const {container} = render(<Customized />);
    expect(container.querySelector('[data-paste-element="FILEPICKER"]')).toHaveStyle(
      "font-family: 'Fira Mono',Courier,monospace"
    );
    expect(container.querySelector('[data-paste-element="FILEPICKER_BUTTON"]')).toHaveStyle(
      'background-color: rgba(242, 47, 70, 0.1)'
    );
    expect(container.querySelector('[data-paste-element="FILEPICKER_TEXT"]')).toHaveStyle(
      'margin: 0px 0px 0px 0.125rem'
    );
  });
  it('should add custom styling to a custom named File Picker', () => {
    const {container} = render(<Customized element="MY_FILEPICKER" />);
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER"]')).toHaveStyle(
      "font-family: 'Fira Mono',Courier,monospace"
    );
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER_BUTTON"]')).toHaveStyle(
      'background-color: rgba(242, 47, 70, 0.1)'
    );
    expect(container.querySelector('[data-paste-element="MY_FILEPICKER_TEXT"]')).toHaveStyle(
      'margin: 0px 0px 0px 0.125rem'
    );
  });
});
