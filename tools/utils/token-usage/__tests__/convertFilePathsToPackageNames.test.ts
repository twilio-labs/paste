const {convertFilePathsToPackageNames} = require('../convertFilePathsToPackageNames');

describe('convertFilePathsToPackageNames', () => {
  it('converts filepaths to packagenames', () => {
    const filePaths = [
      '/Users/x/twilio/dsys/paste/core/components/button/src/InverseButton.tsx',
      '/Users/x/twilio/dsys/paste/core/components/grid/src/Grid.tsx',
    ];
    expect(convertFilePathsToPackageNames(filePaths)).toEqual(['@twilio-paste/button', '@twilio-paste/grid']);
  });
});
