export const defaultExample = `
const StyledTooltip = React.forwardRef(({ style, element, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      element={element}
      zIndex="zIndex90"
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius20"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderColor="colorBorderInverse"
      maxWidth="size50"
      paddingX="space30"
      paddingY="space20"
      fontSize="fontSize30"
      {...props}
      {...style}
    />
  );
});

const TooltipExample = () => {
  const tooltip = useTooltipPrimitiveState();
  return (
    <>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        ✊ Action
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip} as={StyledTooltip}>
        Black Lives Matter. We stand with the Black community.
      </TooltipPrimitive>
    </>
  );
};

render(
  <TooltipExample />
)
`.trim();

export const rightExample = `
const RightPlacementExample = () => {
  const tooltip = useTooltipPrimitiveState({placement: 'right'});
  return (
    <>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip} style={{backgroundColor: '#fff', zIndex:10}}>
        Welcome to Paste!
      </TooltipPrimitive>
    </>
  );
};
render(
  <RightPlacementExample />
)
`.trim();

export const styledExample = `
const StyledExample = () => {
  const tooltip = useTooltipPrimitiveState({placement: 'right'});
  return (
    <>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="secondary">
        Open tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>
        <Box
          backgroundColor="colorBackgroundPrimaryWeakest"
          borderRadius="borderRadius20"
          padding="space30"
        >
          <TooltipPrimitiveArrow
            {...tooltip}
            fill="colorBackgroundPrimaryWeakest"
            stroke="colorBackgroundPrimaryWeakest"
          />
          <StyledBase>
            <Text color="colorText">
              Welcome to Paste!
            </Text>
          </StyledBase>
        </Box>
      </TooltipPrimitive>
    </>
  );
};
render(
  <StyledExample />
)
`.trim();
