/*
 * Credit to Chakra-UI
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/hooks/src/use-merge-refs.ts
 */
import * as React from "react";

type ReactRef<T> = React.Ref<T> | React.RefObject<T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T): void {
  if (ref == null) return;

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  try {
    ref.current = value;
    // eslint-disable-next-line unicorn/prefer-optional-catch-binding
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}

/**
 * React hook that merges react refs into a single memoized function
 *
 * @example
 * import React from "react";
 * import { useMergeRefs } from `@twilio-paste/utils`;
 *
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   return <div {...props} ref={useMergeRefs(internalRef, ref)} />;
 * });
 */
export function useMergeRefs<T>(...refs: (ReactRef<T> | undefined)[]): ReactRef<T> {
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (node: T) => {
      refs.forEach((ref) => {
        if (ref) assignRef(ref, node);
      });
    };
  }, refs);
}
