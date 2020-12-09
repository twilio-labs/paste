import * as React from 'react';
import {uid} from '@twilio-paste/uid-library';
import {ToasterToast, ToasterPush, UseToasterReturnedProps} from './types';

export const useToaster = (): UseToasterReturnedProps => {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

  const pop = (id: ToasterToast['id']): void => {
    setToasts(currentToasts =>
      currentToasts.filter(toast => {
        // if the target toast has a related timeOut, clear that timeout as it's no longer needed
        if (toast.id === id && toast.timeOutId) {
          window.clearTimeout(toast.timeOutId);
        }
        return toast.id !== id;
      })
    );
  };

  const push = (newToast: ToasterPush): void => {
    const generatedID = uid(newToast);
    let timeOutId;
    // if you are setting a dismissAfter time, we need to grab a timeout id to use later if we need to clear the timeout
    // for that particular toast. We also need to make sure the time is an integer to prevent locking the browser
    if (newToast.dismissAfter != null && Number.isInteger(newToast.dismissAfter)) {
      timeOutId = window.setTimeout(pop, newToast.dismissAfter, generatedID);
    }
    // We set a new toast to always setFocus. For all the existing toasts in the stack, we need to clear setFocus
    // without creating a new state object. If you create a new state object, you cause react spring to rerun
    // all the animations for the entire stack. So we mutate existing state instead.
    const existingToasts = toasts.map(toast => {
      const tmpToast = toast;
      tmpToast.setFocus = false;
      return tmpToast;
    });
    // add the new toast with a generatedID, timeoutid and setFocus to true. Allow for user to override
    setToasts([{id: generatedID, timeOutId, setFocus: true, ...newToast}, ...existingToasts]);
  };

  return {toasts, push, pop};
};
