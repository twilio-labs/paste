export const defaultFilePicker = `
const FilePickerExample = () => {
  const id = useUID();
  const helpText = useUID();
  const [files, setFiles] = React.useState([])
  return (
    <>
    <Label htmlFor={id}>Profile picture</Label>
    <FilePicker id={id} accept="image/*" aria-describedby={helpText} onChange={(evt)=>{setFiles(evt.currentTarget.files)}}>
      <FilePickerButton variant="secondary">Upload a file</FilePickerButton>
    </FilePicker>
    <HelpText id={helpText}>Please upload an image</HelpText>
  </>
  );
}

render(
  <FilePickerExample />
)
`.trim();

export const disabledFilePicker = `
const FilePickerExample = () => {
  const id = useUID();
  const [files, setFiles] = React.useState([])
  return (
    <>
    <Label disabled htmlFor={id}>Receipt to expense</Label>
    <FilePicker id={id} accept=".pdf" disabled onChange={(evt)=>{setFiles(evt.currentTarget.files)}}>
      <FilePickerButton variant="secondary">Upload a file</FilePickerButton>
    </FilePicker>
  </>
  );
}

render(
  <FilePickerExample />
)
`.trim();

export const requiredFilePicker = `
const FilePickerExample = () => {
  const id = useUID();
  const helpText = useUID();
  const [files, setFiles] = React.useState([])
  return (
    <>
    <Label htmlFor={id} required>Proof of employment</Label>
    <FilePicker id={id} aria-describedby={helpText} required onChange={(evt)=>{setFiles(evt.currentTarget.files)}}>
      <FilePickerButton variant="secondary">Upload a file</FilePickerButton>
    </FilePicker>
    <HelpText id={helpText}>Acceptable formats include W2, I9, or latest pay stub.</HelpText>
  </>
  );
}

render(
  <FilePickerExample />
)
`.trim();

export const i18nFilePicker = `
const FilePickerExample = () => {
  const id = useUID();
  return (
    <>
    <Label htmlFor={id}>Foto de perfil</Label>
    <FilePicker id={id} accept="image/*" i18nNoSelectionText="Ningún archivo seleccionado">
      <FilePickerButton variant="secondary">Seleccione un archivo</FilePickerButton>
    </FilePicker>
  </>
  );
}

render(
  <FilePickerExample />
)
`.trim();
