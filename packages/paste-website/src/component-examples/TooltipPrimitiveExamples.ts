export const defaultExample = `
const TooltipExample = () => {
  const tooltip = useTooltipPrimitiveState();
  return (
    <>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        ✊ Action
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip} style={{backgroundColor: '#fff', zIndex:10}}>
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
          backgroundColor="colorBackgroundPrimaryStronger"
          borderRadius="borderRadius20"
          padding="space30"
        >
          <TooltipPrimitiveArrow
            {...tooltip}
            fill="colorBackgroundPrimaryStronger"
            stroke="colorBackgroundPrimaryStronger"
          />
          <StyledBase>
            <Text color="colorTextInverse">
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
