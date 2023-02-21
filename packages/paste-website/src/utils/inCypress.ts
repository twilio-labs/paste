import {hasWindowObject} from './RouteUtils';

export const inCypress = (): boolean => {
  if (hasWindowObject() && window.__Cypress__) {
    return true;
  }
  return false;
};
