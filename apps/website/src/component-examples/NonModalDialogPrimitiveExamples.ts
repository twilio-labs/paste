export const defaultExample = `
const NonModalDialogExample = () => {
  const nonModalDialog = useNonModalDialogPrimitiveState();
  return (
    <>
      <NonModalDialogDisclosurePrimitive {...nonModalDialog}>✊ Action</NonModalDialogDisclosurePrimitive>
      <NonModalDialogPrimitive {...nonModalDialog} aria-label="Welcome" style={{backgroundColor: '#000', zIndex:10}}>
        <NonModalDialogArrowPrimitive {...nonModalDialog} />
        <span style={{color: '#fff'}}>Black Lives Matter. We stand with the Black community</span>
      </NonModalDialogPrimitive>
    </>
  );
};

render(
  <NonModalDialogExample />
)
`.trim();

export const rightExample = `
const RightPlacementExample = () => {
  const nonModalDialog = useNonModalDialogPrimitiveState({placement: 'right'});
  return (
    <>
      <NonModalDialogDisclosurePrimitive {...nonModalDialog}>Open non-modal dialog</NonModalDialogDisclosurePrimitive>
      <NonModalDialogPrimitive {...nonModalDialog} aria-label="Welcome" style={{backgroundColor: '#000', zIndex:10}}>
        <NonModalDialogArrowPrimitive {...nonModalDialog} />
        <span style={{color: '#fff'}}>Welcome to Paste!</span>
      </NonModalDialogPrimitive>
    </>
  );
};

render(
  <RightPlacementExample />
)
`.trim();

export const gutterExample = `
const GutterExample = () => {
  const nonModalDialog = useNonModalDialogPrimitiveState({gutter: 0});
  return (
    <>
      <NonModalDialogDisclosurePrimitive {...nonModalDialog}>Open non-modal dialog</NonModalDialogDisclosurePrimitive>
      <NonModalDialogPrimitive {...nonModalDialog} aria-label="Welcome" style={{backgroundColor: '#000', zIndex:10}}>
      <span style={{color: '#fff'}}>Welcome to Paste!</span>
      </NonModalDialogPrimitive>
    </>
  );
};

render(
  <GutterExample />
)
`.trim();

export const styledExample = `
const StyledNonModalDialog = React.forwardRef(({children, ...props}, ref) => (
  <Box backgroundColor="colorBackgroundBodyInverse" borderRadius="borderRadius20" padding="space30" ref={ref} {...props}>{children}</Box>
));

const StyledExample = () => {
  const theme = useTheme();
  const nonModalDialog = useNonModalDialogPrimitiveState({placement: 'right'});
  return (
    <>
      <NonModalDialogDisclosurePrimitive {...nonModalDialog} as={Button} variant="secondary">
        Open non-modal dialog
      </NonModalDialogDisclosurePrimitive>
      <NonModalDialogPrimitive {...nonModalDialog} aria-label="Welcome" as={StyledNonModalDialog}>
        <StyledBase>
          <Text color="colorTextInverse">
            Welcome to Paste!
          </Text>
        </StyledBase>
      </NonModalDialogPrimitive>
    </>
  );
};
render(
  <StyledExample />
)
`.trim();
