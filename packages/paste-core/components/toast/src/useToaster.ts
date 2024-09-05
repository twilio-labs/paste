import { uid } from "@twilio-paste/uid-library";
import * as React from "react";

import type { ToasterPush, ToasterToast, UseToasterReturnedProps } from "./types";

export const useToaster = (): UseToasterReturnedProps => {
  const isMounted = React.useRef<boolean | null>(null);
  const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      /**
       * Clear all timeouts from the toaster when the component unmounts
       */

      toasts.forEach((toast) => {
        if (toast.timeOutId) {
          window.clearTimeout(toast.timeOutId);
        }
      });
    };
  }, []);

  const pop = (id: ToasterToast["id"]): void => {
    if (!isMounted.current) {
      return;
    }

    setToasts((currentToasts) =>
      currentToasts.filter((toast) => {
        // if the target toast has a related timeOut, clear that timeout as it's no longer needed
        if (toast.id === id) {
          if (toast.timeOutId) {
            window.clearTimeout(toast.timeOutId);
          }
          if (toast.onDismiss) {
            toast.onDismiss();
          }
        }

        return toast.id !== id;
      }),
    );
  };

  const push = (newToast: ToasterPush): void => {
    if (!isMounted.current) {
      return;
    }

    const generatedID = uid(newToast);
    let timeOutId: number;
    /*
     * if you are setting a dismissAfter time, we need to grab a timeout id to use later if we need to clear the timeout
     * for that particular toast. We also need to make sure the time is an integer to prevent locking the browser
     */
    if (newToast.dismissAfter != null && Number.isInteger(newToast.dismissAfter)) {
      timeOutId = window.setTimeout(pop, newToast.dismissAfter, newToast.id || generatedID);
    }

    // add the new toast with a generatedID, timeoutid and setFocus to true. Allow for user to override
    setToasts((state) => {
      /*
       * We set a new toast to always setFocus. For all the existing toasts in the stack, we need to clear setFocus
       * without creating a new state object. If you create a new state object, you cause react spring to rerun
       * all the animations for the entire stack. So we mutate existing state instead.
       */
      const existingToasts = state.map((toast) => {
        const tmpToast = toast;
        tmpToast.setFocus = false;
        return tmpToast;
      });
      return [{ id: generatedID, timeOutId, setFocus: true, ...newToast }, ...existingToasts];
    });
  };

  return { toasts, push, pop };
};
