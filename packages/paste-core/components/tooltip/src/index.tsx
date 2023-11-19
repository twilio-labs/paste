import type { TooltipStateReturn } from "./Tooltip";

export { Tooltip, useTooltipState } from "./Tooltip";
export type {
  TooltipProps,
  TooltipStateReturn,
  UseTooltipInitialStateProps,
} from "./Tooltip";
// renaming TooltipStateReturn to UseTooltipStateReturnProps for documenting purposes
type UseTooltipStateReturnProps = TooltipStateReturn;
export type { UseTooltipStateReturnProps };
