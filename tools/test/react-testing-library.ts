// eslint-disable-next-line import/no-unresolved
import * as reactTestingLibrary from '@testing-library/real-react';

// eslint-disable-next-line import/no-unresolved
export * from '@testing-library/real-react';

/**
 * export renderHook and actHook from testing-library/react-hooks library if they don't exist in @testing-library/react
 * (i.e. renderHook is only in v13+ of testing library)
 */
// eslint-disable-next-line import/no-mutable-exports, prefer-destructuring
let renderHook = reactTestingLibrary.renderHook;
// eslint-disable-next-line import/no-mutable-exports
let actHook = reactTestingLibrary.act;

if (!renderHook) {
  // eslint-disable-next-line global-require, @typescript-eslint/no-require-imports
  const rhtl = require('@testing-library/react-hooks');
  // eslint-disable-next-line prefer-destructuring
  renderHook = rhtl.renderHook;
  actHook = rhtl.act;
}

export { renderHook, actHook };
