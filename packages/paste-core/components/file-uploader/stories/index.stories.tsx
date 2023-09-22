import * as React from 'react';
import { DownloadIcon } from '@twilio-paste/icons/esm/DownloadIcon';
import { CustomizationProvider } from '@twilio-paste/customization';
import { useTheme } from '@twilio-paste/theme';
import { ScreenReaderOnly } from '@twilio-paste/screen-reader-only';
import type { StoryFn } from '@storybook/react';
import snakeCase from 'lodash/snakeCase';

import {
  FileUploader,
  FileUploaderItem,
  FileUploaderItemsList,
  FileUploaderItemDescription,
  FileUploaderItemTitle,
  FileUploaderDropzone,
  FileUploaderDropzoneText,
  FileUploaderLabel,
  FileUploaderHelpText,
  FileUploaderErrorText,
} from '../src';
import type { FileUploaderItemProps } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/File Uploader',
  component: FileUploader,
};

export const Default: StoryFn = () => {
  return (
    <FileUploader name="Default File Uploader">
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['text/css', 'image/jpeg', 'image/png', 'application/pdf']}>
        <FileUploaderDropzoneText>Browse files or drag them here</FileUploaderDropzoneText>
      </FileUploaderDropzone>
      <FileUploaderItemsList>
        <FileUploaderItem variant="loading">
          <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>Uploading...</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />}>
          <FileUploaderItemTitle>File2.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>9.2 MB</FileUploaderItemDescription>
        </FileUploaderItem>
      </FileUploaderItemsList>
    </FileUploader>
  );
};

export const Error: StoryFn = () => {
  return (
    <FileUploader name="Error File Uploader">
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['text/css']}>
        <FileUploaderDropzoneText>Browse files or drag them here</FileUploaderDropzoneText>
      </FileUploaderDropzone>
      <FileUploaderErrorText>One of your files failed to upload. Please try again.</FileUploaderErrorText>
      <FileUploaderItemsList>
        <FileUploaderItem variant="loading">
          <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>Uploading...</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />}>
          <FileUploaderItemTitle>File2.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>9.2 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem variant="error">
          <FileUploaderItemTitle>File3.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>
            This file is too big. You can upload files up to 50 MB.
          </FileUploaderItemDescription>
        </FileUploaderItem>
      </FileUploaderItemsList>
    </FileUploader>
  );
};

export const Disabled: StoryFn = () => {
  return (
    <FileUploader name="Disabled File Uploader" disabled>
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['text/css']}>
        <FileUploaderDropzoneText>Browse files or drag them here</FileUploaderDropzoneText>
      </FileUploaderDropzone>
    </FileUploader>
  );
};

export const Required: StoryFn = () => {
  return (
    <FileUploader name="Required File Uploader" required>
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['text/css']}>
        <FileUploaderDropzoneText>Browse files or drag them here</FileUploaderDropzoneText>
      </FileUploaderDropzone>
    </FileUploader>
  );
};

interface File {
  variant: FileUploaderItemProps['variant'];
  title: string;
  description: string;
  id: string;
}

const sampleFiles: File[] = [
  {
    variant: 'default',
    title: 'File1.png',
    description: '9.2 MB',
    id: `initial-file-0`,
  },
  {
    variant: 'loading',
    title: 'File2.png',
    description: 'Uploading...',
    id: `initial-file-1`,
  },
];

export const DragDropExample: StoryFn = () => {
  const [screenReaderText, setScreenReaderText] = React.useState('');
  const [files, setFiles] = React.useState<File[]>(sampleFiles);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      let finishedFiles = '';

      setFiles((prev) => {
        const updatedFiles: File[] = [];
        prev.forEach((file) => {
          if (file.variant === 'loading') {
            file.variant = 'default';
            const size = Math.floor(Math.random() * (50 - 1 + 1) + 1);
            file.description = `${size} MB`;
            finishedFiles = `${finishedFiles} ${file.title}`;
          }
          updatedFiles.push(file);
        });
        return updatedFiles;
      });

      if (finishedFiles.length > 0) {
        setScreenReaderText(`Finished uploading: ${finishedFiles}`);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [files, setFiles]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { files: newFiles } = event.target;
    let newFilesNames = '';

    if (newFiles !== null) {
      Array.from(newFiles).forEach(({ name }) => {
        newFilesNames = `${newFilesNames} ${name}`;
        setFiles((prev) => {
          return [
            ...prev,
            {
              title: name,
              description: 'Uploading...',
              variant: 'loading',
              id: `${snakeCase(name)}`,
            },
          ];
        });
      });
    }

    if (newFilesNames.length > 1) {
      setScreenReaderText(`uploading: ${newFilesNames}`);
    }
  };

  const handleDragEnter = (event: React.DragEvent<HTMLLabelElement>): void => {
    const { items } = event.dataTransfer;
    setScreenReaderText(`Dragging ${items.length} files`);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>): void => {
    const { items } = event.dataTransfer;
    setScreenReaderText(`Cancelled dragging ${items.length} files`);
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>): void => {
    const { files: newFiles } = event.dataTransfer;
    setScreenReaderText(`Dropped ${newFiles.length} files`);

    if (newFiles !== null) {
      Array.from(newFiles).forEach(({ name }) => {
        setFiles((prev) => {
          return [
            ...prev,
            {
              title: name,
              description: 'Uploading...',
              variant: 'loading',
              id: `${snakeCase(name)}`,
            },
          ];
        });
      });
    }
  };

  return (
    <>
      <FileUploader name="Default File Uploader">
        <FileUploaderLabel>Upload files</FileUploaderLabel>
        <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
        <FileUploaderDropzone
          multiple
          acceptedMimeTypes={['image/*', 'application/pdf']}
          onDragEnter={handleDragEnter}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
          onInputChange={handleInputChange}
        >
          <FileUploaderDropzoneText>Browse files or drag them here</FileUploaderDropzoneText>
        </FileUploaderDropzone>
        <FileUploaderItemsList>
          {files.map(({ variant, title, description, id }) => (
            <FileUploaderItem
              variant={variant}
              key={id}
              fileIcon={<DownloadIcon decorative />}
              onButtonClick={() => {
                setFiles((prev) => {
                  return prev.filter((file) => file.id !== id);
                });
              }}
            >
              <FileUploaderItemTitle>{title}</FileUploaderItemTitle>
              <FileUploaderItemDescription>{description}</FileUploaderItemDescription>
            </FileUploaderItem>
          ))}
        </FileUploaderItemsList>
      </FileUploader>
      <ScreenReaderOnly aria-live="assertive">{screenReaderText}</ScreenReaderOnly>
    </>
  );
};

DragDropExample.parameters = {
  chromatic: { disableSnapshot: true },
};

export const ReallyLongText: StoryFn = () => {
  return (
    <FileUploader name="Really Long Text File Uploader">
      <FileUploaderLabel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </FileUploaderLabel>
      <FileUploaderHelpText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['text/css', 'image/jpeg', 'image/png', 'application/pdf']}>
        <FileUploaderDropzoneText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </FileUploaderDropzoneText>
      </FileUploaderDropzone>
      <FileUploaderItemsList>
        <FileUploaderItem variant="loading">
          <FileUploaderItemTitle>
            adskfasdkfjhaklsdjfhkalsdhfkashdfklhaslkdfhaklsjdhflkjashdlkfjhaslkdjfhalksdjhflaksjhdflkjahsdlkfjhasdjkf.png
          </FileUploaderItemTitle>
          <FileUploaderItemDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </FileUploaderItemDescription>
        </FileUploaderItem>
      </FileUploaderItemsList>
    </FileUploader>
  );
};

export const Customized: StoryFn = ({ element = 'FILE_UPLOADER', ...props }) => {
  const theme = useTheme();

  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        [`${element}`]: { maxWidth: 'size30' },
        [`${element}_DROPZONE_TEXT`]: { fontFamily: 'fontFamilyCode' },
        [`${element}_DROPZONE`]: { borderRadius: 'borderRadius0' },
        [`${element}_HELP_TEXT`]: { marginBottom: 'space10' },
        [`${element}_ITEM_CONTENT`]: { rowGap: 'space30' },
        [`${element}_ITEM_DESCRIPTION`]: { fontSize: 'fontSize40' },
        [`${element}_ITEM_TITLE`]: { fontSize: 'fontSize40' },
        [`${element}_ITEM`]: { padding: 'space10' },
        [`${element}_ITEMS_LIST`]: { rowGap: 'space10' },
        [`${element}_LABEL`]: { fontWeight: 'fontWeightNormal' },
      }}
    >
      <FileUploader name="Default File Uploader" {...props}>
        <FileUploaderLabel>Upload files</FileUploaderLabel>
        <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
        <FileUploaderDropzone acceptedMimeTypes={['text/css', 'image/jpeg', 'image/png', 'application/pdf']}>
          <FileUploaderDropzoneText>Browse files or drag them here</FileUploaderDropzoneText>
        </FileUploaderDropzone>
        <FileUploaderItemsList>
          <FileUploaderItem variant="loading">
            <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
            <FileUploaderItemDescription>Uploading...</FileUploaderItemDescription>
          </FileUploaderItem>
          <FileUploaderItem fileIcon={<DownloadIcon decorative />}>
            <FileUploaderItemTitle>File2.png</FileUploaderItemTitle>
            <FileUploaderItemDescription>9.2 MB</FileUploaderItemDescription>
          </FileUploaderItem>
        </FileUploaderItemsList>
      </FileUploader>
    </CustomizationProvider>
  );
};
