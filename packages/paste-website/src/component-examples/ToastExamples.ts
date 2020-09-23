export const showHideExample = `
const ShowHideToast = () => {
  const [visibleOne, setVisibleOne] = React.useState(true);
  const [visibleTwo, setVisibleTwo] = React.useState(true);
  return (
    <>
      <Stack orientation="horizontal" spacing="space60">
        <Button variant="primary" onClick={() => setVisibleOne(false)}>
          Open Toast
        </Button>
        <Button variant="secondary" onClick={() => setVisibleTwo(false)}>
          Open another Toast
        </Button>
      </Stack>
      <ToastContainer>
        <Toast hidden={visibleOne} variant="success" onDismiss={() => setVisibleOne(true)}>
          <Text as="div"><strong>Hi!</strong> I am a toast.</Text>
        </Toast>
        <Toast hidden={visibleTwo} variant="warning" onDismiss={() => setVisibleTwo(true)}>
          <Text as="div"><strong>Hi!</strong> I am another toast.</Text>
        </Toast>
      </ToastContainer>
    </>
  );
};

render(
  <ShowHideToast />
)
`.trim();
