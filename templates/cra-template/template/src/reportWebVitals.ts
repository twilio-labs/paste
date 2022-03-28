import type {ReportHandler} from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
        getCLS(onPerfEntry, true);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry, true);
        getTTFB(onPerfEntry);
        return true;
      })
      .catch(() => console.error('web vitals import error'));
  }
};

export default reportWebVitals;
