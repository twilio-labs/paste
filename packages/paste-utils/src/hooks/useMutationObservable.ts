import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

type Options = {
  config?: {
    attribute?: boolean;
    childList?: boolean;
    subtree?: boolean;
  };
  debounceTime?: number;
};
type Callback = (mutations: MutationRecord[]) => void;
const DEFAULT_OPTIONS = {
  config: { attributes: true, childList: true, subtree: true },
  debounceTime: 0,
};

/**
 * This custom hooks abstracts the usage of the MutationObserver with React components.
 * Watch for changes being made to the DOM tree and trigger a custom callback.
 * @param {Element} targetEl DOM element to be observed
 * @param {Function} cb callback that will run when there's a change in targetEl or any
 * child element (depending on the provided options)
 * @param {Object} options
 * @param {Object} options.config check \[options\](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe)
 * @param {number} [options.debounceTime=0] a number that represents the amount of time in ms
 * that you which to debounce the call to the provided callback function
 */
export function useMutationObservable(targetEl: Element, cb: Callback, options: Options = DEFAULT_OPTIONS): void {
  const [observer, setObserver] = useState<MutationObserver | null>(null);

  /* Create an observer instance */
  useEffect(() => {
    if (!cb || typeof cb !== 'function') {
      // eslint-disable-next-line no-console
      console.warn(`You must provide a valid callback function, instead you've provided ${cb}`);
      return;
    }

    const hasDebounceTime =
      options.debounceTime && typeof options.debounceTime === 'number' && options.debounceTime > 0;

    const obs = new MutationObserver(hasDebounceTime ? debounce(cb, options.debounceTime) : cb);
    setObserver(obs);
  }, [cb, options]);

  /* Start observing the targetEl */
  useEffect(() => {
    if (!observer) return;

    if (!targetEl) {
      // eslint-disable-next-line no-console
      console.warn(`You must provide a valid DOM element to observe, instead you've provided ${targetEl}`);
    }

    const { config } = options;

    try {
      observer.observe(targetEl, config);
    } catch (error) {
      // This shouldn't happen, but just in case
      // eslint-disable-next-line no-console
      console.error(error);
    }

    // Stop observing when unmounting
    // eslint-disable-next-line consistent-return
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, targetEl, options]);
}
