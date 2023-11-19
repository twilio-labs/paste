export const defaultFileUploader = `
const FileUploaderExample = () => {
  return (
    <FileUploader name="Default File Uploader">
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['image/*', 'application/pdf']}>
        <FileUploaderDropzoneText>
          Browse for files or drag them here
        </FileUploaderDropzoneText>
      </FileUploaderDropzone>
      <FileUploaderItemsList>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />}>
          <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>9.2 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem variant="loading">
          <FileUploaderItemTitle>File2.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>Uploading...</FileUploaderItemDescription>
        </FileUploaderItem>
      </FileUploaderItemsList>
    </FileUploader>
  );
}

render(
  <FileUploaderExample />
)
`.trim();

export const requiredFileUploader = `
const FileUploaderExample = () => {
  return (
    <FileUploader name="Default File Uploader" required>
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['image/*', 'application/pdf']}>
        <FileUploaderDropzoneText>
          Browse for files or drag them here
        </FileUploaderDropzoneText>
      </FileUploaderDropzone>
      <FileUploaderItemsList>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />} >
          <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>9.2 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />}>
          <FileUploaderItemTitle>File2.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>10.7 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />}>
          <FileUploaderItemTitle>File3.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>4.1 MB</FileUploaderItemDescription>
        </FileUploaderItem>
      </FileUploaderItemsList>
    </FileUploader>
  );
}

render(
  <FileUploaderExample />
)
`.trim();

export const disabledFileUploader = `
const FileUploaderExample = () => {
  return (
    <FileUploader name="Default File Uploader" disabled>
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['image/*', 'application/pdf']}>
        <FileUploaderDropzoneText>
          Browse for files or drag them here
        </FileUploaderDropzoneText>
      </FileUploaderDropzone>
    </FileUploader>
  );
}

render(
  <FileUploaderExample />
)
`.trim();

export const loadingFileUploader = `
const FileUploaderExample = () => {
  return (
    <FileUploader name="Default File Uploader">
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['image/*', 'application/pdf']}>
        <FileUploaderDropzoneText>
          Browse for files or drag them here
        </FileUploaderDropzoneText>
      </FileUploaderDropzone>
      <FileUploaderItemsList>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />} >
          <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>9.2 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />}>
          <FileUploaderItemTitle>File2.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>10.7 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem variant="loading">
          <FileUploaderItemTitle>File3.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>Uploading...</FileUploaderItemDescription>
        </FileUploaderItem>
      </FileUploaderItemsList>
    </FileUploader>
  );
}

render(
  <FileUploaderExample />
)
`.trim();

export const errorFileUploader = `
const FileUploaderExample = () => {
  return (
    <FileUploader name="Default File Uploader" required>
      <FileUploaderLabel>Upload files</FileUploaderLabel>
      <FileUploaderHelpText>Files can be up to 50 MB.</FileUploaderHelpText>
      <FileUploaderDropzone acceptedMimeTypes={['image/*', 'application/pdf']}>
        <FileUploaderDropzoneText>
          Browse for files or drag them here
        </FileUploaderDropzoneText>
      </FileUploaderDropzone>
      <FileUploaderErrorText>
        One of your files failed to upload. Please try again.
      </FileUploaderErrorText>
      <FileUploaderItemsList>
        <FileUploaderItem fileIcon={<DownloadIcon decorative />} >
          <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>9.2 MB</FileUploaderItemDescription>
        </FileUploaderItem>
        <FileUploaderItem variant="error">
          <FileUploaderItemTitle>File2.png</FileUploaderItemTitle>
          <FileUploaderItemDescription>
            This file is too big. You can upload files up to 50 MB.
          </FileUploaderItemDescription>
        </FileUploaderItem>
      </FileUploaderItemsList>
    </FileUploader>
  );
}

render(
  <FileUploaderExample />
)
`.trim();

export const dragDropExample = `
const sampleFiles = [
  {
    variant: 'default',
    title: 'File1.png',
    description: '9.2 MB',
    id: 'initial-file-0',
  },
  {
    variant: 'loading',
    title: 'File2.png',
    description: 'Uploading...',
    id: 'initial-file-1',
  },
];

const DragDropExample = () => {
  const [screenReaderText, setScreenReaderText] = React.useState('');
  const [files, setFiles] = React.useState(sampleFiles);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      let finishedFiles = '';

      setFiles((prev) => {
        const updatedFiles = [];
        prev.forEach((file) => {
          if (file.variant === 'loading') {
            file.variant = 'default';
            const size = Math.floor(Math.random() * (50 - 1 + 1) + 1);
            file.description = size + ' ' + 'MB';
            finishedFiles = finishedFiles + ' ' + file.title;
          }
          updatedFiles.push(file);
        });
        return updatedFiles;
      });

      if (finishedFiles.length > 0) {
        setScreenReaderText('Finished uploading: ' + finishedFiles);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [files, setFiles]);

  const handleInputChange = (event)=> {
    const {files: newFiles} = event.target;
    let newFilesNames = '';

    if (newFiles !== null) {
      Array.from(newFiles).forEach(({name}) => {
        newFilesNames = newFilesNames + ' ' + name;
        setFiles((prev) => {
          return [
            ...prev,
            {
              title: name,
              description: 'Uploading...',
              variant: 'loading',
              id: snakeCase(name),
            },
          ];
        });
      });
    }

    if (newFilesNames.length > 1) {
      setScreenReaderText('uploading: ' + newFilesNames);
    }
  };

  const handleDragEnter = (event) => {
    const {items} = event.dataTransfer;
    setScreenReaderText('Dragging ' + items.length + ' files');
  };

  const handleDragLeave = (event) => {
    const {items} = event.dataTransfer;
    setScreenReaderText('Cancelled dragging ' + items.length + ' files');
  };

  const handleDrop = (event) => {
    const {files: newFiles} = event.dataTransfer;
    setScreenReaderText('Dropped ' + newFiles.length + ' files');

    if (newFiles !== null) {
      Array.from(newFiles).forEach(({name}) => {
        setFiles((prev) => {
          return [
            ...prev,
            {
              title: name,
              description: 'Uploading...',
              variant: 'loading',
              id: snakeCase(name),
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
          <FileUploaderDropzoneText>Browse for files or drag them here</FileUploaderDropzoneText>
        </FileUploaderDropzone>
        <FileUploaderItemsList>
          {files.map(({variant, title, description, id}) => (
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
}

render(
  <DragDropExample />
)

`.trim();
