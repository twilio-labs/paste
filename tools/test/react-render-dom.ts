import ReactDOM from 'react-dom';

type createRootReturnType = {render: (elem: JSX.Element) => void};

export function attachRootToDom(domNode: HTMLElement): createRootReturnType {
  const useCreateRoot = parseInt(ReactDOM.version.split('.')[0]);
  if (useCreateRoot >= 18) {
    const {createRoot} = require('react-dom/client');
    return createRoot(domNode);
  }

  // fallback for React verions 17 and under
  return {
    render: (elem: JSX.Element) => {
      ReactDOM.render(elem, domNode);
    },
  };
}
