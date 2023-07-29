/**
 * Inspiration curtesy of ChakraUI https://github.com/chakra-ui/chakra-ui/tree/main/packages/core/system
 */

export type As = React.ElementType;

// These are not allowed to be passed as props to a Paste component because we block styling
type BlockedGlobalHTMLAttrs = 'style' | 'className' | 'color';

// Extract the props of a React element or component
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T>;

export type HTMLPasteProps<T extends As> = Omit<PropsOf<T>, 'ref' | BlockedGlobalHTMLAttrs>;
