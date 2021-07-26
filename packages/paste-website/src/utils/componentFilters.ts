import {PackageStatus} from '../constants';
import type {ComponentNode} from './types';

export const filteredComponents = (component: ComponentNode): boolean => {
  return (
    component.node.status !== PackageStatus.BACKLOG &&
    component.node.name !== '@twilio-paste/typography' &&
    component.node.name !== '@twilio-paste/inline-control-group' &&
    component.node.name !== '@twilio-paste/base-radio-checkbox' &&
    component.node.name !== '@twilio-paste/sibling-box' &&
    component.node.name !== '@twilio-paste/input-box'
  );
};
