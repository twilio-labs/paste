import * as reactTestingLibrary from '@testing-library/real-react';

export * from '@testing-library/real-react';

/**
 * export renderHook and actHook from testing-library/react-hooks library if they don't exist in @testing-library/react
 * (i.e. renderHook is only in v13+ of testing library)
 */
let renderHook = reactTestingLibrary.renderHook;
let actHook = reactTestingLibrary.act;

if (!renderHook) {
  const rhtl = require('@testing-library/react-hooks');
  renderHook = rhtl.renderHook;
  actHook = rhtl.act;
}

export {renderHook, actHook};
