import type {ReportHandler} from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // eslint-disable-next-line promise/catch-or-return
    import('web-vitals').then(
      // eslint-disable-next-line promise/always-return
      ({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
        getCLS(onPerfEntry, true);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry, true);
        getTTFB(onPerfEntry);
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {}
    );
  }
};

export default reportWebVitals;
