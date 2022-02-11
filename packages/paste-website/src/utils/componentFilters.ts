import {PackageStatus} from '../constants';
import type {ComponentNode} from './types';

export const filteredComponents = (component: ComponentNode): boolean => {
  return (
    component.packageStatus !== PackageStatus.BACKLOG &&
    component.packageName !== '@twilio-paste/form' &&
    component.packageName !== '@twilio-paste/inline-control-group' &&
    component.packageName !== '@twilio-paste/base-radio-checkbox' &&
    component.packageName !== '@twilio-paste/sibling-box' &&
    component.packageName !== '@twilio-paste/input-box'
  );
};

export const alphabetizeComponents = (a: ComponentNode, b: ComponentNode): number => {
  if (a.name < b.name) return -1;
  return a.name > b.name ? 1 : 0;
};
