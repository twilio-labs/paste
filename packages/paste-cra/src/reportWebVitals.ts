import {ReportHandler} from 'web-vitals';

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
      .catch(() => {});
  }
};

// eslint-disable-next-line import/no-default-export
export default reportWebVitals;
