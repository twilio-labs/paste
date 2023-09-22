import * as React from 'react';
import useComposedRef from 'use-composed-ref';

import { calculateNodeHeight } from './calculateNodeHeight';
import type { SizingData } from './getSizingData';
import { getSizingData } from './getSizingData';
import { useWindowResizeListener } from './useWindowResizeListener';
import { useHiddenTextarea } from './useHiddenTextarea';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type Style = Omit<NonNullable<TextareaProps['style']>, 'maxHeight' | 'minHeight'> & {
  height?: number;
};

export type TextareaHeightChangeMeta = {
  rowHeight: number;
};
export interface TextareaAutosizeProps extends Omit<TextareaProps, 'style'> {
  maxRows?: number;
  minRows?: number;
  onHeightChange?: (height: number, meta: TextareaHeightChangeMeta) => void;
  cacheMeasurements?: boolean;
  style?: Style;
}

const TextareaAutosize: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextareaAutosizeProps> = (
  {
    cacheMeasurements,
    maxRows,
    minRows,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange = (): void => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onHeightChange = (): void => {},
    ...props
  },
  userRef: React.Ref<HTMLTextAreaElement>,
) => {
  if (process.env.NODE_ENV !== 'production' && props.style) {
    if ('maxHeight' in props.style) {
      throw new Error('Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.');
    }
    if ('minHeight' in props.style) {
      throw new Error('Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.');
    }
  }
  const isControlled = props.value !== undefined && onChange !== undefined;
  const ownRef = React.useRef<HTMLTextAreaElement | null>(null);
  const ref = useComposedRef(ownRef, userRef);
  const heightRef = React.useRef(0);
  const measurementsCacheRef = React.useRef<SizingData>();
  const hiddenTextarea = useHiddenTextarea();

  const resizeTextarea = (): void => {
    const node = ownRef.current!;
    const nodeSizingData =
      cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData(node);

    if (!nodeSizingData) {
      return;
    }

    measurementsCacheRef.current = nodeSizingData;

    const [height, rowHeight] = calculateNodeHeight(
      hiddenTextarea,
      nodeSizingData,
      node.value || node.placeholder || 'x',
      minRows,
      maxRows,
    );

    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty('height', `${height}px`, 'important');
      onHeightChange(height, { rowHeight });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    /*
     * There isn't a user resize event on the textarea, so this is a low-cost way to check if the user manually resized it
     * By default, when the user resizes a textarea, the new height is set in the style attribute
     * The way the react-textarea-autosize works, it calculates the height and sets the style attribute with !important
     * So, we can assume that if the height has important it is the autosize height and if it doesn't have important the user resized it themselves
     */
    const didUserResize = ownRef.current?.style.getPropertyPriority('height') !== 'important';

    if (!isControlled && !didUserResize) {
      resizeTextarea();
    }
    onChange(event);
  };

  if (typeof document !== 'undefined') {
    React.useLayoutEffect(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
  }

  return <textarea {...props} onChange={handleChange} ref={ref} />;
};

TextareaAutosize.displayName = 'TexareaAutosize';

// eslint-disable-next-line import/no-default-export
export default /* #__PURE__ */ React.forwardRef(TextareaAutosize);
