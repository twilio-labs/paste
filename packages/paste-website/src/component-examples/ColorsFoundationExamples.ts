export const PrimaryColorExample = `
<Stack orientation='horizontal' spacing='space70'>
  <Button variant='primary'>Save</Button>
  <Button variant='secondary'>Save</Button>
  <Button variant='primary' size='small'>Save</Button>
  <Button variant='secondary' size='small'>Save</Button>
  <Button variant='link'>Save</Button>
  <Anchor href="https://twilio.com/" showExternal>Open in a new tab</Anchor>
</Stack>
`.trim();

export const DestructiveColorExample = `
<Stack orientation='horizontal' spacing='space70'>
  <Button variant='destructive'>Delete</Button>
  <Button variant='destructive_secondary'>Delete</Button>
  <Button variant='destructive' size='small'>Delete</Button>
  <Button variant='destructive_secondary' size='small'>Delete</Button>
  <Button variant='destructive_link'>Delete</Button>
  <Button variant='destructive' size='icon'>
    <DeleteIcon decorative={false} title="Delete"/>
  </Button>
  <Button variant='destructive_secondary' size='icon'>
    <DeleteIcon decorative={false} title="Delete"/>
  </Button>
  <Button variant='destructive' size='icon_small'>
    <DeleteIcon decorative={false} title="Delete"/>
  </Button>
  <Button variant='destructive_secondary' size='icon_small'>
    <DeleteIcon decorative={false} title="Delete"/>
  </Button>
</Stack>
`.trim();
