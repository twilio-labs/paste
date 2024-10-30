import { act, fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react";
import * as React from "react";

import { useKeyCombination, useKeyCombinations } from "../src";
import { Default } from "../stories/index.stories";

describe("Hooks", () => {
  const wrapper = ({ children }) => <div data-testid="event-trigger">{children}</div>;

  it("should handle pressed styling", async () => {
    const { getByText } = render(<Default />);

    const controlKey = getByText("Control");
    const bKey = getByText("B");
    expect(controlKey).toBeDefined();
    expect(controlKey).toBeDefined();
    expect(controlKey).toHaveStyleRule("background-color", "rgb(249, 249, 250)");
    expect(bKey).toHaveStyleRule("background-color", "rgb(249, 249, 250)");

    await act(async () => {
      fireEvent.keyDown(controlKey, { key: "Control" });
    });

    expect(controlKey).toHaveStyleRule("background-color", "rgb(225, 227, 234)");
    expect(bKey).toHaveStyleRule("background-color", "rgb(249, 249, 250)");

    await act(async () => {
      fireEvent.keyUp(controlKey, { key: "Control" });
    });

    expect(controlKey).toHaveStyleRule("background-color", "rgb(249, 249, 250)");
    expect(bKey).toHaveStyleRule("background-color", "rgb(249, 249, 250)");
  });

  describe("useKeyCombination", () => {
    it("should update activeKeys on keydown and keyup", async () => {
      const { result } = renderHook(
        () => useKeyCombination({ keys: ["Control", "b"], onCombinationPress: jest.fn() }),
        { wrapper },
      );

      const eventTrigger = screen.getByTestId("event-trigger");
      expect(eventTrigger).toBeDefined();
      expect(result.current?.activeKeys).toEqual([]);

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "Control" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control"]);
      });

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "d" });
        fireEvent.keyDown(eventTrigger, { key: "v" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "d", "v"]);
      });

      await act(async () => {
        fireEvent.keyUp(eventTrigger, { key: "Control" });
        fireEvent.keyUp(eventTrigger, { key: "d" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["v"]);
      });
    });

    it("should call onCombinationPress when keys match", async () => {
      const onCombinationPress = jest.fn();
      const { result } = renderHook(() => useKeyCombination({ keys: ["Control", "b"], onCombinationPress }), {
        wrapper,
      });

      const eventTrigger = screen.getByTestId("event-trigger");
      expect(eventTrigger).toBeDefined();
      expect(result.current?.activeKeys).toEqual([]);

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "Control" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control"]);
      });

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "b" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "b"]);
        expect(onCombinationPress).toHaveBeenCalled();
      });
    });

    it("should not call onCombinationPress when keys do not match", async () => {
      const onCombinationPress = jest.fn();
      const { result } = renderHook(() => useKeyCombination({ keys: ["Control", "b"], onCombinationPress }), {
        wrapper,
      });

      const eventTrigger = screen.getByTestId("event-trigger");
      expect(eventTrigger).toBeDefined();
      expect(result.current?.activeKeys).toEqual([]);

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "Control" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control"]);
      });

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "d" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "d"]);
        expect(onCombinationPress).not.toHaveBeenCalled();
      });
    });

    it("should not call onCombinationPress when keys are present but more are pressed", async () => {
      const onCombinationPress = jest.fn();
      const { result } = renderHook(() => useKeyCombination({ keys: ["Control", "b"], onCombinationPress }), {
        wrapper,
      });

      const eventTrigger = screen.getByTestId("event-trigger");
      expect(eventTrigger).toBeDefined();
      expect(result.current?.activeKeys).toEqual([]);

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "Control" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control"]);
      });

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "v" });
        fireEvent.keyDown(eventTrigger, { key: "b" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "v", "b"]);
        expect(onCombinationPress).not.toHaveBeenCalled();
      });
    });

    it("should not call onCombinationPress when disabled", async () => {
      const onCombinationPress = jest.fn();
      const { result } = renderHook(
        () => useKeyCombination({ keys: ["Control", "b"], onCombinationPress, disabled: true }),
        { wrapper },
      );

      const eventTrigger = screen.getByTestId("event-trigger");
      expect(eventTrigger).toBeDefined();
      expect(result.current?.activeKeys).toEqual([]);

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "Control" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control"]);
      });

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "b" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "b"]);
        expect(onCombinationPress).not.toHaveBeenCalled();
      });
    });
  });

  describe("useKeyCombinations", () => {
    it("should update activeKeys on keydown and keyup", async () => {
      const { result } = renderHook(
        () =>
          useKeyCombinations({
            combinations: [
              { keys: ["Control", "b"], onCombinationPress: jest.fn() },
              { keys: ["Control", "c"], onCombinationPress: jest.fn() },
            ],
          }),
        { wrapper },
      );

      const eventTrigger = screen.getByTestId("event-trigger");
      expect(eventTrigger).toBeDefined();
      expect(result.current?.activeKeys).toEqual([]);

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "Control" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control"]);
      });

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "d" });
        fireEvent.keyDown(eventTrigger, { key: "v" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "d", "v"]);
      });

      await act(async () => {
        fireEvent.keyUp(eventTrigger, { key: "Control" });
        fireEvent.keyUp(eventTrigger, { key: "d" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["v"]);
      });
    });

    it("should call onCombinationPress when keys match", async () => {
      const onCombinationPress1 = jest.fn();
      const onCombinationPress2 = jest.fn();

      const { result } = renderHook(
        () =>
          useKeyCombinations({
            combinations: [
              { keys: ["Control", "b"], onCombinationPress: onCombinationPress1 },
              { keys: ["Control", "c"], onCombinationPress: onCombinationPress2 },
            ],
          }),
        { wrapper },
      );

      const eventTrigger = screen.getByTestId("event-trigger");
      expect(eventTrigger).toBeDefined();
      expect(result.current?.activeKeys).toEqual([]);

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "Control" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control"]);
      });

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "b" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "b"]);
        expect(onCombinationPress1).toHaveBeenCalled();
        expect(onCombinationPress2).not.toHaveBeenCalled();
      });

      await act(async () => {
        onCombinationPress1.mockClear();
        fireEvent.keyDown(eventTrigger, { key: "c" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "b", "c"]);
        expect(onCombinationPress1).not.toHaveBeenCalled();
        expect(onCombinationPress2).not.toHaveBeenCalled();
      });

      await act(async () => {
        fireEvent.keyUp(eventTrigger, { key: "b" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "c"]);
        expect(onCombinationPress1).not.toHaveBeenCalled();
        expect(onCombinationPress2).toHaveBeenCalled();
      });
    });

    it("should not call onCOmbinationPress when disabled", async () => {
      const onCombinationPress1 = jest.fn();
      const onCombinationPress2 = jest.fn();

      const { result } = renderHook(
        () =>
          useKeyCombinations({
            combinations: [
              { keys: ["Control", "b"], onCombinationPress: onCombinationPress1 },
              { keys: ["Control", "c"], onCombinationPress: onCombinationPress2, disabled: true },
            ],
          }),
        { wrapper },
      );

      const eventTrigger = screen.getByTestId("event-trigger");
      expect(eventTrigger).toBeDefined();
      expect(result.current?.activeKeys).toEqual([]);

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "Control" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control"]);
      });

      await act(async () => {
        fireEvent.keyDown(eventTrigger, { key: "b" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "b"]);
        expect(onCombinationPress1).toHaveBeenCalled();
        expect(onCombinationPress2).not.toHaveBeenCalled();
      });

      await act(async () => {
        onCombinationPress1.mockClear();
        fireEvent.keyDown(eventTrigger, { key: "c" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "b", "c"]);
        expect(onCombinationPress1).not.toHaveBeenCalled();
        expect(onCombinationPress2).not.toHaveBeenCalled();
      });

      await act(async () => {
        fireEvent.keyUp(eventTrigger, { key: "b" });
      });

      await waitFor(() => {
        expect(result.current?.activeKeys).toEqual(["Control", "c"]);
        expect(onCombinationPress1).not.toHaveBeenCalled();
        expect(onCombinationPress2).not.toHaveBeenCalled();
      });
    });
  });
});
