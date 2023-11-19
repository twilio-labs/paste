export const ToggleExample = `const ToggleButtons = () => {
  const [followPressed, setFollowPressed] = React.useState(false);
  const [boldPressed, setBoldPressed] = React.useState(false);
  const [pausePressed, setPausePressed] = React.useState(true);
  const [destructivePressed, setDestructivePressed] = React.useState(true)

return (
  <Box display="flex" flexDirection="row" columnGap="space60">
    <Button variant="secondary" pressed={followPressed} onClick={() => setFollowPressed(!followPressed)}>
      {followPressed ? <CheckboxCheckIcon decorative /> : <PlusIcon decorative />}
      Follow
    </Button>
    <Button variant="secondary_icon" size="icon" pressed={boldPressed} onClick={() => setBoldPressed(!boldPressed)}>
      <BoldIcon decorative={false} title="Bold" />
    </Button>
    <Button variant="secondary" size="circle" pressed={pausePressed} onClick={() => setPausePressed(!pausePressed)}>
      <ScreenReaderOnly>Pause</ScreenReaderOnly>
      {pausePressed ? <PlayIcon decorative /> : <PauseIcon decorative />}
    </Button>
    <Button variant="destructive_secondary" size="icon" pressed={destructivePressed} onClick={() => setDestructivePressed(!destructivePressed)}>
      <BoldIcon decorative={false} title="Destructive" />
    </Button>
  </Box>
); };

render(<ToggleButtons />);`.trim();
