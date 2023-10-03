import type { DisclosureInitialState, DisclosureStateReturn } from "./types";

export { Disclosure, useDisclosureState } from "./Disclosure";
export type { DisclosureProps } from "./Disclosure";
export { DisclosureHeading } from "./DisclosureHeading";
export type { DisclosureHeadingProps } from "./DisclosureHeading";
export { DisclosureContent } from "./DisclosureContent";
export type { DisclosureContentProps } from "./DisclosureContent";

type DisclosureStateReturnProps = DisclosureStateReturn;
type DisclosureInitialStateProps = DisclosureInitialState;

// for documenation purposes renaming the state interfaces with Props at the end
export type { DisclosureStateReturnProps, DisclosureInitialStateProps };

export * from "./types";
