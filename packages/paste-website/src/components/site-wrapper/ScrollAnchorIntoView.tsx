import * as React from 'react';
import {getCurrentPathHash} from '../../utils/RouteUtils';

function scrollIntoView(): void {
  const id = getCurrentPathHash();
  if (id === '' || id == null) {
    return;
  }

  const element = document.querySelector(`[id='${id.replace(/^#/, '')}']`);
  if (element != null) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    element.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
  }
}

const ScrollAnchorIntoView: React.FC = () => {
  scrollIntoView();
  return null;
};

export {ScrollAnchorIntoView};
