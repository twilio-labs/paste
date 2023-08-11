export const LowSeverityExample = `
  const LowSeverityDelete = () => {
    return (
      <Button variant="destructive">Remove</Button>
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
          heading="Delete document from this regulatory bundle"
          isOpen={isOpen}
          onConfirm={handleClose}
          onConfirmLabel="Delete"
          onDismiss={handleClose}
          onDismissLabel="Cancel"
          destructive
        >
          You're about to delete "Plan A Productions, LLC" from this regulatory bundle. This action does not impact your other 188 regulatory bundles.
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
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleChange = (e) => {
      if (e.target.value === 'Toyota TCB Automobile (Gevelsberg)') setIsDisabled(false);
      else setIsDisabled(true);
    };

    return (
      <>
        <Button variant="destructive" onClick={handleOpen}>Delete</Button>
        <AlertDialog
          heading="Delete regulatory bundle"
          isOpen={isOpen}
          onConfirm={handleClose}
          onConfirmLabel="Delete"
          onDismiss={handleClose}
          onDismissLabel="Cancel"
          destructive
          disableDestructive={isDisabled}
        >
          You're about to delete "Toyota TCB Automobile (Gevelsberg)" and all data associated with it. This regulatory bundle will be deleted immediately. You can't undo this action.
          <Box display="flex" flexDirection="column" rowGap="space30" marginY="space50">
            <Label htmlFor="delete-input" required>
              Regulatory bundle name
            </Label>
            <Input type="text" required aria-describedby="delete-help-text" onChange={(e) => handleChange(e)} />
            <HelpText id="delete-help-text">
              To confirm this deletion, please input the name of this regulatory bundle.
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
