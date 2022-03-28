export const BasicExample = `
function BasicExample() {
    const disclosure = useDisclosurePrimitiveState({ visible: true });
    return (
        <>
            <DisclosurePrimitive {...disclosure}>Toggle</DisclosurePrimitive>
            <DisclosurePrimitiveContent {...disclosure}>Content</DisclosurePrimitiveContent>
        </>
    );
}
`.trim();

export const ConditionallyRenderingExample = `
function ConditionallyRenderingExample() {
    const disclosure = useDisclosurePrimitiveState();
    return (
      <>
        <DisclosurePrimitive {...disclosure}>Toggle</DisclosurePrimitive>
        {/* instead of {disclosure.visible && <DisclosureContent {...disclosure}>Content</DisclosureContent>} */}
        <DisclosurePrimitiveContent {...disclosure}>
          {props => disclosure.visible && <div {...props}>Content</div>}
        </DisclosurePrimitiveContent>
      </>
    );
};
`.trim();

export const MultipleExample = `
function MultipleExample() {
    const disclosure1 = useDisclosurePrimitiveState();
    const disclosure2 = useDisclosurePrimitiveState();
  
    return (
      <>
        <DisclosurePrimitive {...disclosure1}>
          {props => (
            <DisclosurePrimitive {...props} {...disclosure2}>
              Toggle All
            </DisclosurePrimitive>
          )}
        </DisclosurePrimitive>
        <DisclosurePrimitiveContent {...disclosure1}>Content 1</DisclosurePrimitiveContent>
        <DisclosurePrimitiveContent {...disclosure2}>Content 2</DisclosurePrimitiveContent>
      </>
    );
};
`.trim();
