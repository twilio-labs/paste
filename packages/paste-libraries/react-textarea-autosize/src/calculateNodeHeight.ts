import { forceHiddenStyles } from './forceHiddenStyles';
import { getHeight } from './getHeight';
import type { SizingData } from './getSizingData';

/*
 * TODO: use labelled tuples once they are avaiable:
 *   export type CalculatedNodeHeights = [height: number, rowHeight: number];
 * https://github.com/microsoft/TypeScript/issues/28259
 */
export type CalculatedNodeHeights = number[];

export function calculateNodeHeight(
  hiddenTextarea: HTMLTextAreaElement | null,
  sizingData: SizingData,
  value: string,
  minRows = 1,
  maxRows = 999,
): CalculatedNodeHeights {
  const { paddingSize, borderSize, sizingStyle } = sizingData;
  const { boxSizing } = sizingStyle;

  if (hiddenTextarea == null) return [0, 0];

  Object.keys(sizingStyle).forEach((_key) => {
    const key = _key as keyof typeof sizingStyle;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    hiddenTextarea!.style[key] = sizingStyle[key] as any;
  });

  forceHiddenStyles(hiddenTextarea);

  hiddenTextarea.value = value;
  let height = getHeight(hiddenTextarea, sizingData);

  // measure height of a textarea with a single row
  hiddenTextarea.value = 'x';
  const rowHeight = Math.max(hiddenTextarea.scrollHeight - paddingSize, 0);

  let minHeight = rowHeight * minRows;
  if (boxSizing === 'border-box') {
    minHeight = minHeight + paddingSize + borderSize;
  }
  height = Math.max(minHeight, height);

  let maxHeight = rowHeight * maxRows;
  if (boxSizing === 'border-box') {
    maxHeight = maxHeight + paddingSize + borderSize;
  }
  height = Math.max(Math.min(maxHeight, height), 0);

  return [height, rowHeight];
}
