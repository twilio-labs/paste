import * as React from 'react';
import {getCurrentPathHash} from '../../utils/RouteUtils';
import {SITE_MASTHEAD_HEIGHT} from '../../constants';

// Looks a bit better to have some extra space right above where we're scrolling
const EXTRA_OFFSET = 15;

function scrollIntoView(): void {
  const id = getCurrentPathHash();
  if (id === '' || id == null) {
    return;
  }

  const element = document.querySelector(`[id='${id.replace(/^#/, '')}']`);
  if (element != null) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - SITE_MASTHEAD_HEIGHT - EXTRA_OFFSET;
    window.scrollTo({top, behavior: 'smooth'});
  }
}

const ScrollAnchorIntoView: React.FC = () => {
  scrollIntoView();
  return null;
};

export {ScrollAnchorIntoView};
