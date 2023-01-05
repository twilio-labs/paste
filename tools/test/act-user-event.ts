import userEvent from '@testing-library/real-user-event';
import {act} from '@testing-library/react';

const original = {
  hover: userEvent.hover,
  click: userEvent.click,
  keyboard: userEvent.keyboard,
  tab: userEvent.tab,
  unhover: userEvent.unhover,
};

userEvent.hover = async (...args) =>
  act(async () => {
    await original.hover(...args);
  });

userEvent.click = async (...args) =>
  act(async () => {
    await original.click(...args);
  });

userEvent.keyboard = async (...args) =>
  act(async () => {
    await original.keyboard(...args);
  });

userEvent.tab = async (...args) =>
  act(async () => {
    await original.tab(...args);
  });

userEvent.unhover = async (...args) =>
  act(async () => {
    await original.unhover(...args);
  });

export default userEvent;
