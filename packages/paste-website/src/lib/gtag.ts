import { ENVIRONMENT_CONTEXT } from "../constants";

export const GA_TRACKING_ID = "UA-145457417-1";

const isProd = ENVIRONMENT_CONTEXT === "production";

export const pageview = (url: URL): void => {
  if (isProd && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
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

export const event = ({ action, category, label, value }: GTagEvent): void => {
  if (isProd && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
