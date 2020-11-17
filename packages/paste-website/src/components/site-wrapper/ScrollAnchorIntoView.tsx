import * as React from 'react';
import {getCurrentPathHash} from '../../utils/RouteUtils';

const Y_OFFSET = -90;

function scrollIntoView(): void {
  const id = getCurrentPathHash();
  if (id === '' || id == null) {
    return;
  }

  const element = document.querySelector(`[id='${id.replace(/^#/, '')}']`);
  if (element != null) {
    const top = element.getBoundingClientRect().top + window.pageYOffset + Y_OFFSET;
    window.scrollTo({top, behavior: 'smooth'});
  }
}

const ScrollAnchorIntoView: React.FC = () => {
  scrollIntoView();
  return null;
};

export {ScrollAnchorIntoView};
