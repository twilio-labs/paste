import * as React from 'react';
import {useTransition, animated} from '@twilio-paste/animation-library';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Toast} from './Toast';
import {ToastPortal} from './ToastPortal';
import {ToasterProps, ToasterPropTypes} from './types';

export const AnimatedToast = animated(Box);

interface ReturnTargetState {
  trigger: HTMLElement | null;
}

const Toaster: React.FC<ToasterProps> = ({toasts, pop, ...props}) => {
  const [refMap] = React.useState(() => new WeakMap());
  const [returnTarget, setReturnTarget] = React.useState<ReturnTargetState>({trigger: null});
  const theme = useTheme();

  const transitions = useTransition(toasts, {
    from: {height: 0, marginBottom: '0rem', opacity: 0, transform: 'translateX(100%) scale(1)'},
    enter: (item) => async (next) => {
      await next({
        height: refMap.get(item).offsetHeight,
        marginBottom: theme.space.space40,
        opacity: 1,
        transform: 'translateX(0px) scale(1)',
      });
    },
    leave: {height: 0, marginBottom: '0rem', opacity: 0, transform: 'translateX(0px) scale(0.8)'},
    config: {
      mass: 1,
      tension: 150,
      friction: 20,
    },
  });

  // Only clear the return target upon a change to the returnTarget to prevent an infinite loop caused by
  // state being updated in an effect.
  const clearReturnTarget = React.useCallback(() => {
    setReturnTarget({trigger: null});
  }, [returnTarget]);

  React.useEffect(() => {
    // When we rerender the toast stack based on the number of toasts changing, if we have successfully managed to
    // set a sensible return target, and the new number of toasts of 0, we should place the user back to where they
    // were in the UI, the return target, and clear the return target for the continuing UI session.
    if (returnTarget.trigger != null && toasts.length === 0) {
      returnTarget.trigger.focus();
      clearReturnTarget();
    }
  }, [toasts]);

  return (
    <ToastPortal {...props}>
      {transitions((styles, item, state, index) => {
        return (
          // type clash between spring styles and style object. Not sure how to type cast it
          <AnimatedToast as="div" key={state.key} style={styles as any}>
            <Toast
              key={item.id}
              onDismiss={() => pop(item.id)}
              {...item}
              ref={(ref) => {
                if (ref != null) {
                  // add a ref tot he HTMl for the item so we can use it for height calculations
                  refMap.set(item, ref);
                }
              }}
              // When a toast is the first in the stack, set focus inside
              setFocus={index === 0}
              onFocus={(e) => {
                // When we show a toast, when a user clears the toast we want them to return to the last element they
                // interacted with and triggered the toast stack. This can be found by using the relatedTarget of a
                // focus event. We do focus the user into the first toast in the stack though, so if you show more than
                // one toast in a stack, the last relatedTarget might be the last toast shown, and not the return target.
                // To always grab a sensible return target we only set it once for a toast stack session so we don't
                // grab a second or third toast. The return target is then cleared upon the last toast being removed
                // from the stack so you can grab a new return target based on what the user is doing next.
                // So if we show 2 toasts based on a button click, we set the trigger upon the first toast showing.
                // When the second toast renders, because we've already grabbed what triggered toast stack, we can safely
                // ignore it.
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

if (process.env.NODE_ENV === 'development') {
  Toaster.propTypes = ToasterPropTypes;
}

export {Toaster};
