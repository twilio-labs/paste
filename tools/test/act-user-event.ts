import userEvent from '@testing-library/real-user-event';
import {act} from '@testing-library/react';

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
