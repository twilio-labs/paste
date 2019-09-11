import * as React from 'react';
import {getCurrentPathHash} from '../../utils/RouteUtils';

function scrollIntoView(): void {
  const id = getCurrentPathHash();
  if (id === '' || id == null) {
    return;
  }

  const element = document.querySelector(`[id='${id.replace(/^#/, '')}']`);
  if (element != null) {
    element.scrollIntoView();
  }
}

const ScrollAnchorIntoView: React.FC = () => {
  scrollIntoView();
  return null;
};

export {ScrollAnchorIntoView};
