export const LowSeverityExample = `
const LowSeverityDelete = () => {
  return (
    <Button variant="destructive_link">Remove</Button>
  )
}

render(
  <LowSeverityDelete />
)
`.trim();

export const MediumSeverityExample = `
const MediumSeverityDelete = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Button variant="destructive" onClick={handleOpen}>Delete</Button>
      <AlertDialog
        heading="Delete from regulatory bundle?"
        isOpen={isOpen}
        onConfirm={handleClose}
        onConfirmLabel="Delete"
        onDismiss={handleClose}
        onDismissLabel="Cancel"
        destructive
      >
        You're about to delete "Plan A Productions, LLC" from this regulatory bundle. This does not impact any other regulatory bundles.
      </AlertDialog>
    </>
  )
}
render(
  <MediumSeverityDelete />
)
`.trim();

export const HighSeverityExample = `
const HighSeverityDelete = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputString, setInputString] = React.useState('');
  const [inputHasError, setInputHasError] = React.useState(false);
  const handleOpen = () => {
    if (inputString !== '') setIsDisabled(false);
    setIsOpen(true);
  };
  const handleDismiss = () => {
    setIsDisabled(true)
    setIsOpen(false)
  };
  const handleConfirm = () => {
    if (inputString === 'Toyota TCB Automobile (Gevelsberg)') {
      setIsOpen(false)
      setInputString('')
      setInputHasError(false)
    }
    else {
      setInputHasError(true)
    }
  };
  const handleChange = (e) => {
    setInputString(e.target.value)
    if (e.target.value !== '') setIsDisabled(false);
    else setIsDisabled(true);
  };

  return (
    <>
      <Button variant="destructive" onClick={handleOpen}>Delete</Button>
      <AlertDialog
        heading="Delete regulatory bundle?"
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onConfirmLabel="Delete"
        onDismiss={handleDismiss}
        onDismissLabel="Cancel"
        destructive
        onConfirmDisabled={isDisabled}
      >
        You're about to delete "Toyota TCB Automobile (Gevelsberg)" and all associated data. The bundle will be deleted immediately. You cannot undo this action.
        <Box display="flex" flexDirection="column" rowGap="space30" marginY="space50">
          <Label htmlFor="delete-input" required>
            Regulatory bundle name
          </Label>
          <Input type="text" id="delete-input" required aria-describedby="delete-help-text" onChange={(e) => handleChange(e)} hasError={inputHasError} value={inputString}/>
          <HelpText id="delete-help-text" variant={inputHasError ? 'error' : 'default'}>
            Enter the name of the bundle being deleted. Entries are case-sensitive.
          </HelpText>
        </Box>
      </AlertDialog>
    </>
  )
}

render(
  <HighSeverityDelete />
)
`.trim();

export const PostDeletionExample = `
  const MediumSeverityDelete = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleDismiss = () => setIsOpen(false);
  const toaster = useToaster();

  const handleConfirm = () => {
    setIsOpen(false)
    toaster.push({
      message: '"Plan A Productions, LLC" was deleted. To undo deletion, return to the regulatory bundle overview.',
      variant: 'success',
    })
  }
  return (
    <>
      <Button variant="destructive" onClick={handleOpen}>Delete</Button>
      <AlertDialog
        heading="Delete from regulatory bundle?"
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onConfirmLabel="Delete"
        onDismiss={handleDismiss}
        onDismissLabel="Cancel"
        destructive
      >
        You're about to delete "Plan A Productions, LLC" from this regulatory bundle. This does not impact any other regulatory bundles.
      </AlertDialog>
      <Toaster left={['space40', 'unset', 'unset']} {...toaster} />
    </>
  )
}
render(
  <MediumSeverityDelete />
)
`.trim();
