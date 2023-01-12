export const GA_TRACKING_ID = 'UA-145457417-1';

export const pageview = (url: URL) => {
  console.log(url);
  /*window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })*/
}

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
    console.log(action);
  /*window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })*/
}