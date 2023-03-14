import * as React from 'react';
import {useTransition, animated, useReducedMotion} from '@twilio-paste/animation-library';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';

import {Toast} from './Toast';
import {ToastPortal} from './ToastPortal';
import {ToasterPropTypes} from './propTypes';
import type {ToasterProps} from './types';

export const AnimatedToast = animated(Box);

interface ReturnTargetState {
  trigger: HTMLElement | null;
}

const Toaster: React.FC<React.PropsWithChildren<ToasterProps>> = ({toasts, pop, ...props}) => {
  const prefersReducedMotion = useReducedMotion();
  const [refMap] = React.useState(() => new WeakMap());
  const [returnTarget, setReturnTarget] = React.useState<ReturnTargetState>({trigger: null});
  const theme = useTheme();

  /*
   * Convoluted code to fix bug in react-spring + skipAnimation being true
   * when prefersReducedMotion
   */
  const transitions = useTransition(toasts, {
    from: {
      marginBottom: '0rem',
      opacity: 0,
      transform: 'translateX(100%) scale(1)',
      height: prefersReducedMotion ? 'auto' : 0,
    },
    /*
     * We use object notation instead of function / next to fix a bug
     * with prefers reduced motion in our version of React spring
     * Similar to issue: https://github.com/pmndrs/react-spring/issues/1160
     * FIXME: try again in v9+ of react-spring
     */
    enter: prefersReducedMotion
      ? {marginBottom: theme.space.space40, opacity: 1, transform: 'translateX(0px) scale(1)'}
      : (item: any) => async (next: any) => {
          await next({
            marginBottom: theme.space.space40,
            opacity: 1,
            transform: 'translateX(0px) scale(1)',
            height: refMap.get(item).offsetHeight,
          });
        },
    leave: {
      marginBottom: '0rem',
      opacity: 0,
      transform: 'translateX(0px) scale(0.8)',
      height: prefersReducedMotion ? 'auto' : 0,
    },
    config: {
      mass: 1,
      tension: 150,
      friction: 20,
    },
  });

  /*
   * Only clear the return target upon a change to the returnTarget to prevent an infinite loop caused by
   * state being updated in an effect.
   */
  const clearReturnTarget = React.useCallback(() => {
    setReturnTarget({trigger: null});
  }, [returnTarget]);

  React.useEffect(() => {
    /*
     * When we rerender the toast stack based on the number of toasts changing, if we have successfully managed to
     * set a sensible return target, and the new number of toasts of 0, we should place the user back to where they
     * were in the UI, the return target, and clear the return target for the continuing UI session.
     */
    if (returnTarget.trigger != null && toasts.length === 0) {
      returnTarget.trigger.focus();
      clearReturnTarget();
    }
  }, [toasts]);

  return (
    <ToastPortal {...props}>
      {transitions((styles: unknown, item: any, state: {key: any}, index: number) => {
        return (
          // type clash between spring styles and style object. Not sure how to type cast it
          <AnimatedToast as="div" key={state.key} style={styles as any}>
            <Toast
              key={item.id}
              {...item}
              onDismiss={() => {
                if (item.onDismiss != null) {
                  item.onDismiss();
                }
                pop(item.id);
              }}
              ref={(ref) => {
                if (ref != null) {
                  // add a ref tot he HTMl for the item so we can use it for height calculations
                  refMap.set(item, ref);
                }
              }}
              // When a toast is the first in the stack, set focus inside
              setFocus={index === 0}
              onFocus={(e) => {
                /*
                 * When we show a toast, when a user clears the toast we want them to return to the last element they
                 * interacted with and triggered the toast stack. This can be found by using the relatedTarget of a
                 * focus event. We do focus the user into the first toast in the stack though, so if you show more than
                 * one toast in a stack, the last relatedTarget might be the last toast shown, and not the return target.
                 * To always grab a sensible return target we only set it once for a toast stack session so we don't
                 * grab a second or third toast. The return target is then cleared upon the last toast being removed
                 * from the stack so you can grab a new return target based on what the user is doing next.
                 * So if we show 2 toasts based on a button click, we set the trigger upon the first toast showing.
                 * When the second toast renders, because we've already grabbed what triggered toast stack, we can safely
                 * ignore it.
                 */
                if (e.relatedTarget && !returnTarget.trigger) {
                  setReturnTarget({trigger: e.relatedTarget as HTMLElement});
                }
              }}
            >
              {item.message}
            </Toast>
          </AnimatedToast>
        );
      })}
    </ToastPortal>
  );
};

Toaster.displayName = 'Toaster';

Toaster.propTypes = ToasterPropTypes;

export {Toaster};
