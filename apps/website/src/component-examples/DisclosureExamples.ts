export const StateHookExample = `
const useDelayedDisclosureState = ({delay, ...initialState}) => {
  const disclosure = useDisclosureState(initialState);
  const [transitioning, setTransitioning] = React.useState(false);
  return {
    ...disclosure,
    transitioning,
    toggle: () => {
      setTransitioning(true);
      setTimeout(() => {
        disclosure.toggle();
        setTransitioning(false);
      }, delay);
    },
  };
};

const StateHookDisclosure = () => {
  const {transitioning, ...disclosure} = useDelayedDisclosureState({
    delay: 500,
  });
  const clickableHeading = disclosure.visible ? 'Hide with delay' : 'Show with delay';
  return (
    <>
      <Disclosure variant="contained" state={disclosure}>
        <DisclosureHeading as="h2" variant="heading20">
          {transitioning ? 'Please wait...' : clickableHeading}
        </DisclosureHeading>
        <DisclosureContent>Disclosure content</DisclosureContent>
      </Disclosure>
    </>
  );
};

render(
  <StateHookDisclosure />
)
`.trim();

export const StateHookToggleExample = `
const StateHookToggleDisclosure = () => {
  const [show, setShow] = React.useState(false);
  const disclosure = useDisclosureState();
  const toggleDisclosure = () => setShow(state => !state);
  const customDisclosureState = {
    ...disclosure,
    toggle: toggleDisclosure,
    visible: show
  };

  return (
    <>
      <Disclosure variant="contained" state={customDisclosureState}>
        <DisclosureHeading as="h2" variant="heading20">
          Disclosure Heading
        </DisclosureHeading>
        <DisclosureContent>Disclosure content</DisclosureContent>
      </Disclosure>
      <Box marginTop="space60">
        <Button onClick={toggleDisclosure} variant="primary">
          Toggle Disclosure
        </Button>
      </Box>
    </>
  );
};

render(
  <StateHookToggleDisclosure />
)
`.trim();
