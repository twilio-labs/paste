import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import debounce from 'lodash/debounce';

export const trackTokenFilterString = debounce((filter: string): void => {
  if (filter !== '') {
    trackCustomEvent({
      category: 'Design Tokens',
      action: 'filter',
      label: filter,
    });
  }
}, 500);
