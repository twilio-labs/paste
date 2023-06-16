import type {ProgressStepIncompleteProps} from './types';

export const validateProps = (props: Pick<ProgressStepIncompleteProps, 'as' | 'href' | 'onClick'>): void => {
  // Links should have a `href` prop
  if (props.as === 'a' && !props.href) {
    throw new Error('[Paste ProgressStep]Missing `href` prop on `a` element step.');
  }
  // Buttons must have an `onClick`
  if (props.as === 'button' && !props.onClick) {
    throw new Error('[Paste ProgressStep] Missing `onClick` prop on `button` element step.');
  }
  // Divs shouldn't have an `onClick`
  else if (props.as === 'div' && props.onClick) {
    throw new Error('[Paste ProgressStep] provided `onClick` to a `div` element step.');
  }
};
