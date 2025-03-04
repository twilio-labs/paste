import { act, renderHook } from "@testing-library/react";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import { useWindowSize } from "../src/hooks/useWindowSize";

const resizeTo = (w: number, h: number): void => {
  Object.defineProperty(window, "innerWidth", {
    value: w,
  });
  Object.defineProperty(window, "innerHeight", {
    value: h,
  });
  const resizeEvent = new Event("resize");
  window.dispatchEvent(resizeEvent);
};

const wrapper = ({ children }): React.ReactElement<any> => <Theme.Provider theme="default">{children}</Theme.Provider>;

const renderWindowSize = (): any => renderHook(() => useWindowSize(), { wrapper });

describe("useWindowSize", () => {
  // Using fake timers is necessary in order to replicate a real environment because the hook uses a useEffect
  jest.useFakeTimers();

  it("should return a window size object with the correct width and height", () => {
    const data = renderWindowSize();
    resizeTo(150, 150);
    // Advance the timer in jest to ensure the useWindowSize useEffect has run
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(typeof data.result.current).toBe("object");
    expect(data.result.current).toMatchObject({ width: 150, height: 150, breakpointIndex: 0 });
    resizeTo(500, 500);
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(data.result.current.width).toEqual(500);
  });

  it("should return undefined values before the useEffect runs", () => {
    const initialWindowSize = {
      width: undefined,
      height: undefined,
      breakpointIndex: undefined,
    };
    const data = renderWindowSize();
    expect(data.result.current).toEqual(initialWindowSize);
  });
});
