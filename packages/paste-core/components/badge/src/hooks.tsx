import * as React from 'react';
import {useUIDSeed} from '@twilio-paste/uid-library';

import type {BadgeChildren} from './types';

const DEFAULT_ICON_SIZE = 'sizeIcon10';

export const useResizeChildIcons = (children: BadgeChildren): BadgeChildren => {
  const seed = useUIDSeed();

  if (!Array.isArray(children)) {
    return children;
  }

  return React.Children.map(children, (child) => {
    if (
      typeof child === 'object' &&
      !Array.isArray(child) &&
      typeof child?.type?.displayName === 'string' &&
      child?.type?.displayName.includes('Icon')
    ) {
      return React.cloneElement(child, {
        ...child.props,
        key: seed(child),
        size: DEFAULT_ICON_SIZE,
      });
    }
    return <React.Fragment key={seed(child)}>{child}</React.Fragment>;
  });
};
