import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {FilePicker, FilePickerButton} from '../src';

describe('FilePicker', () => {
  it('should render', () => {
    const {getByText} = render(
      <FilePicker>
        <FilePickerButton variant="secondary">Choose a file</FilePickerButton>
      </FilePicker>
    );
    expect(getByText('Choose a file')).toBeDefined();
  });
  it('should render the file input in the DOM', () => {
    render(
      <FilePicker data-testid="test-file-picker">
        <FilePickerButton variant="secondary">Choose a file</FilePickerButton>
      </FilePicker>
    );
    expect(screen.getByTestId('test-file-picker')).toHaveAttribute('type', 'file');
  });
  it('should render as disabled', () => {
    render(
      <FilePicker disabled data-testid="test-file-picker">
        <FilePickerButton variant="secondary">Choose a file</FilePickerButton>
      </FilePicker>
    );
    expect(screen.getByTestId('test-file-picker').getAttribute('aria-disabled')).toBe('true');
  });
  it('should set aria-describedby on the file description text', () => {
    render(
      <FilePicker data-testid="test-file-picker">
        <FilePickerButton variant="secondary">Choose a file</FilePickerButton>
      </FilePicker>
    );
    const textId = screen.getByText('No files selected').getAttribute('id');
    expect(screen.getByTestId('test-file-picker')).toHaveAttribute('aria-describedby', textId);
  });
});

describe('FilePicker customization', () => {
  // it('should set an element data attribute on File Picker', () => {});
  // it('should set a cusstom element data attribute on File Picker', () => {})
  // it('should add custom styling to File Picker', () => {})
  // it('should add custom styling to a custom named File Picker', () => {})
});
