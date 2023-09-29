import { act } from "@testing-library/react";
/*
 * Patch taken from this github issue: https://github.com/testing-library/user-event/issues/938#issuecomment-1111976312
 * Initially intended to wrap all userEvent apis with asynchronous act methods - specifically to help with user-event v14
 * act method is still being used here but with sychronous api calls to help with running tests across different versions of react
 */
// eslint-disable-next-line import/no-unresolved
import userEvent from "@testing-library/real-user-event";

const original = {
  hover: userEvent.hover,
  click: userEvent.click,
  keyboard: userEvent.keyboard,
  tab: userEvent.tab,
  unhover: userEvent.unhover,
};

userEvent.hover = (...args) =>
  act(() => {
    original.hover(...args);
  });

userEvent.click = (...args) =>
  act(() => {
    original.click(...args);
  });

userEvent.keyboard = (...args) =>
  act(() => {
    original.keyboard(...args);
  });

userEvent.tab = (...args) =>
  act(() => {
    original.tab(...args);
  });

userEvent.unhover = (...args) =>
  act(() => {
    original.unhover(...args);
  });

export default userEvent;
