export const GA_TRACKING_ID = 'UA-145457417-1';

const isProd = process.env.NODE_ENV === 'production';

export const pageview = (url: URL) => {
  if (isProd) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

export const event = ({action, category, label, value}: GTagEvent) => {
  if (isProd) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
