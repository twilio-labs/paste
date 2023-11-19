import * as React from "react";
import useLatest from "use-latest";

export const useWindowResizeListener = (listener: (event: UIEvent) => any): any => {
  const latestListener = useLatest(listener);

  React.useLayoutEffect(() => {
    const handler: typeof listener = (event) => {
      latestListener.current(event);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
};
