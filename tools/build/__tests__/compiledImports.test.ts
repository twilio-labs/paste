import path from 'path';
import fs from 'fs';

const { build } = require('../esbuild');

const filePaths = {
  mainDev: path.resolve(__dirname, '../__fixtures__/random_package/src/index.tsx'),
  main: path.resolve(__dirname, '../__fixtures__/random_package/dist/index.js'),
  module: path.resolve(__dirname, '../__fixtures__/random_package/dist/index.es.js'),
  cjsDebug: path.resolve(__dirname, '../__fixtures__/random_package/dist/index.debug.js'),
  esmDebug: path.resolve(__dirname, '../__fixtures__/random_package/dist/index.debug.es.js'),
};

describe('esbuild config', () => {
  beforeAll(async () => {
    await build({
      'main:dev': filePaths.mainDev,
      main: filePaths.main,
      module: filePaths.module,
      dependencies: {
        csstype: '^3.0.2',
        lodash: '^4.17.21',
        'use-clipboard-copy': '0.2.0',
      },
      peerDependencies: {
        '@twilio-paste/design-tokens': '^7.0.0',
        '@twilio-paste/styling-library': '^0.3.1',
        '@twilio-paste/theme': '^6.0.0',
        react: '^16.8.6 || ^17.0.2 || ^18.0.0',
        'react-dom': '^16.8.6 || ^17.0.2 || ^18.0.0',
      },
      devDependencies: {
        '@twilio-paste/design-tokens': '^7.1.0',
        '@twilio-paste/styling-library': '^0.3.6',
        '@twilio-paste/theme': '^6.0.1',
        react: '^18.0.0',
        'react-dom': '^18.0.0',
      },
    });
  });

  it('should compile all expected JS formats', () => {
    expect(fs.existsSync(filePaths.main)).toBeTruthy();
    expect(fs.existsSync(filePaths.module)).toBeTruthy();
    expect(fs.existsSync(filePaths.cjsDebug)).toBeTruthy();
    expect(fs.existsSync(filePaths.esmDebug)).toBeTruthy();
  });

  it('should not have require statements for external deps, and should not have import * as foo from foo statements for JSON files in esm output', () => {
    const esmDebugFile = fs.readFileSync(filePaths.esmDebug).toString();
    expect(esmDebugFile).toMatchSnapshot();
  });
});
