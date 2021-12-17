const {hydrate} = require('react-dom');

const hydrationFinishedEvent = new CustomEvent('dsyshydrationcomplete', {
  detail: {},
  bubbles: true,
  cancelable: true,
  composed: false,
});

exports.hydrationFinishedEvent = hydrationFinishedEvent;

exports.replaceHydrateFunction = () => {
  return (first, second) => {
    return hydrate(first, second, () => {
      window.document.dispatchEvent(hydrationFinishedEvent);
    });
  };
};
