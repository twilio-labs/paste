import { hasWindowObject } from './RouteUtils';

export const inCypress = (): boolean => {
  if (hasWindowObject() && window.Cypress) {
    return true;
  }
  return false;
};
