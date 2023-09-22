import { fireEvent, render, screen } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import * as React from 'react';

import {
  FileUploader,
  FileUploaderDropzone,
  FileUploaderDropzoneText,
  FileUploaderErrorText,
  FileUploaderHelpText,
  FileUploaderItem,
  FileUploaderItemDescription,
  FileUploaderItemTitle,
  FileUploaderItemsList,
  FileUploaderLabel,
} from '../src';
import { arrayToCsv } from '../src/utils';

const sampleMimeTypes = ['text/css', 'image/jpeg', 'image/png', 'application/pdf'];

describe('arrayToCsv', () => {
  it('should convert an array of strings to CSV', () => {
    expect(arrayToCsv(['foo', 'bar', 'baz'])).toBe('foo,bar,baz');
  });
});

describe('FileUploader', () => {
  it('should render the proper HTML', () => {
    render(
      <Theme.Provider theme="default">
        <FileUploader name="Default File Uploader">
          <FileUploaderLabel>Upload files</FileUploaderLabel>
          <FileUploaderHelpText data-testid="my-help-text">Files can be up to 50 MB.</FileUploaderHelpText>
          <FileUploaderDropzone acceptedMimeTypes={sampleMimeTypes}>
            <FileUploaderDropzoneText>Click to browse or drag files here.</FileUploaderDropzoneText>
          </FileUploaderDropzone>
          <FileUploaderErrorText data-testid="my-error-text">
            One of your files failed to upload. Please try again.
          </FileUploaderErrorText>
          <FileUploaderItemsList>
            <FileUploaderItem variant="loading">
              <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
              <FileUploaderItemDescription>Uploading...</FileUploaderItemDescription>
            </FileUploaderItem>
          </FileUploaderItemsList>
        </FileUploader>
      </Theme.Provider>,
    );

    const input = screen.getByLabelText('Upload files');
    const helpTextId = screen.getByTestId('my-help-text').id;
    const errorTextId = screen.getByTestId('my-error-text').id;
    const dropzoneTextId = screen.getByText('Click to browse or drag files here.').id;

    expect(input).toBeDefined();
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
    expect(input.getAttribute('aria-describedby')).toBe(`${errorTextId} ${helpTextId} ${dropzoneTextId}`);
    expect(input.getAttribute('name')).toBe('Default File Uploader');
    expect(input.getAttribute('accept')).toBe('text/css,image/jpeg,image/png,application/pdf');
    expect(input.getAttribute('type')).toBe('file');

    expect(screen.getByRole('list')).toBeDefined();
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByRole('button', { name: 'Remove file' })).toBeDefined();
  });

  it('should render as required when pass the required prop', () => {
    render(
      <Theme.Provider theme="default">
        <FileUploader name="Default File Uploader" required>
          <FileUploaderLabel data-testid="my-label">Upload files</FileUploaderLabel>
          <FileUploaderDropzone acceptedMimeTypes={sampleMimeTypes}>
            <FileUploaderDropzoneText>Click to browse or drag files here.</FileUploaderDropzoneText>
          </FileUploaderDropzone>
        </FileUploader>
      </Theme.Provider>,
    );

    const requiredDot = screen
      .getByTestId('my-label')
      .querySelector('[data-paste-element="FILE_UPLOADER_LABEL_REQUIRED_DOT"]');

    expect(requiredDot).toBeInTheDocument();
    expect(screen.getByLabelText('Upload files')).toBeRequired();
  });

  it('should render as disabled when pass the disabled prop', () => {
    render(
      <Theme.Provider theme="default">
        <FileUploader name="Default File Uploader" disabled>
          <FileUploaderLabel>Upload files</FileUploaderLabel>
          <FileUploaderDropzone acceptedMimeTypes={sampleMimeTypes}>
            <FileUploaderDropzoneText>Click to browse or drag files here.</FileUploaderDropzoneText>
          </FileUploaderDropzone>
        </FileUploader>
      </Theme.Provider>,
    );

    expect(screen.getByLabelText('Upload files')).toBeDisabled();
  });

  it('should call appropriate event handlers', () => {
    const onInputChangeMock: jest.Mock = jest.fn();
    const onDragOverMock: jest.Mock = jest.fn();
    const onDragLeaveMock: jest.Mock = jest.fn();
    const onDropMock: jest.Mock = jest.fn();
    const onButtonClickMock: jest.Mock = jest.fn();

    render(
      <Theme.Provider theme="default">
        <FileUploader name="Default File Uploader">
          <FileUploaderLabel>Upload files</FileUploaderLabel>
          <FileUploaderDropzone
            data-testid="my-dropzone"
            acceptedMimeTypes={sampleMimeTypes}
            onInputChange={onInputChangeMock}
            onDragOver={onDragOverMock}
            onDragLeave={onDragLeaveMock}
            onDrop={onDropMock}
          >
            <FileUploaderDropzoneText>Click to browse or drag files here.</FileUploaderDropzoneText>
          </FileUploaderDropzone>
          <FileUploaderItemsList>
            <FileUploaderItem onButtonClick={onButtonClickMock}>File1.png</FileUploaderItem>
          </FileUploaderItemsList>
        </FileUploader>
      </Theme.Provider>,
    );

    fireEvent.change(screen.getByLabelText('Upload files'), {
      target: {
        files: [new File([], 'file.png', { type: 'image/png' })],
      },
    });
    expect(onInputChangeMock).toBeCalledTimes(1);

    const dropzone = screen.getByTestId('my-dropzone');

    fireEvent.dragOver(dropzone, {
      dataTransfer: {
        dropEffect: 'copy',
      },
    });
    expect(onDragOverMock).toBeCalledTimes(1);

    fireEvent.dragLeave(dropzone);
    expect(onDragLeaveMock).toBeCalledTimes(1);

    fireEvent.drop(dropzone);
    expect(onDragLeaveMock).toBeCalledTimes(1);

    fireEvent.click(screen.getByRole('button', { name: 'Remove file' }));
    expect(onButtonClickMock).toBeCalledTimes(1);
  });

  it('should not call drag event handlers when disabled', () => {
    const onDragOverMock: jest.Mock = jest.fn();
    const onDragLeaveMock: jest.Mock = jest.fn();
    const onDropMock: jest.Mock = jest.fn();

    render(
      <Theme.Provider theme="default">
        <FileUploader name="Default File Uploader" disabled>
          <FileUploaderLabel>Upload files</FileUploaderLabel>
          <FileUploaderDropzone
            data-testid="my-dropzone"
            acceptedMimeTypes={sampleMimeTypes}
            onDragOver={onDragOverMock}
            onDragLeave={onDragLeaveMock}
            onDrop={onDropMock}
          >
            <FileUploaderDropzoneText>Click to browse or drag files here.</FileUploaderDropzoneText>
          </FileUploaderDropzone>
        </FileUploader>
      </Theme.Provider>,
    );

    const dropzone = screen.getByTestId('my-dropzone');

    fireEvent.dragOver(dropzone, {
      dataTransfer: {
        dropEffect: 'copy',
      },
    });
    expect(onDragOverMock).toBeCalledTimes(0);

    fireEvent.dragLeave(dropzone);
    expect(onDragLeaveMock).toBeCalledTimes(0);

    fireEvent.drop(dropzone);
    expect(onDragLeaveMock).toBeCalledTimes(0);
  });
});

describe('i18n', () => {
  it('should have default strings', () => {
    render(
      <Theme.Provider theme="default">
        <FileUploaderItemsList>
          <FileUploaderItem>File1.png</FileUploaderItem>
          <FileUploaderItem variant="loading">File1.png</FileUploaderItem>
          <FileUploaderItem variant="error">File1.png</FileUploaderItem>
        </FileUploaderItemsList>
      </Theme.Provider>,
    );

    expect(screen.getAllByRole('button', { name: 'Remove file' })).toHaveLength(3);
    expect(screen.getByText('(error)')).toBeDefined();
    expect(screen.getByText('(uploading file)')).toBeDefined();
  });
  it('should use the i18n props to change the strings', () => {
    render(
      <Theme.Provider theme="default">
        <FileUploaderItemsList>
          <FileUploaderItem i18nButtonText="foo button">File1.png</FileUploaderItem>
          <FileUploaderItem variant="loading" i18nLoadingText="foo loading">
            File1.png
          </FileUploaderItem>
          <FileUploaderItem variant="error" i18nErrorText="foo error">
            File1.png
          </FileUploaderItem>
        </FileUploaderItemsList>
      </Theme.Provider>,
    );

    expect(screen.getByRole('button', { name: 'foo button' })).toBeDefined();
    expect(screen.getByText('foo error')).toBeDefined();
    expect(screen.getByText('foo loading')).toBeDefined();
  });
});
