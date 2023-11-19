/**
 * Utils copied from Reakit. Needed because we wrap Composite and CompositeItem and must match their type for `as`.
 * https://github.com/ariakit/ariakit/blob/v1/packages/reakit-utils/src/types.ts#L16
 */
export type As<P = any> = React.ElementType<P>;

export type ListboxPrimitiveVariants = "single" | "multiple";
