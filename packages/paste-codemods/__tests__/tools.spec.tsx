const {generatePackageExportsMap} = require('../tools/generatePackageExportsMap');

// This is a simplified mock of paste packages
const mockGetPastePackages = (): Array<unknown> => [
  {
    name: '@twilio-paste/stack',
    version: '0.1.49',
    private: false,
    location: '/Users/sisber/twilio/dsys/paste/packages/paste-core/layout/stack',
  },
  {
    name: '@twilio-paste/box',
    version: '2.11.6',
    private: false,
    location: '/Users/sisber/twilio/dsys/paste/packages/paste-core/primitives/box',
  },
  {
    name: '@twilio-paste/combobox-primitive',
    version: '0.1.9',
    private: false,
    location: '/Users/sisber/twilio/dsys/paste/packages/paste-core/primitives/combobox',
  },
  {
    name: '@twilio-paste/disclosure-primitive',
    version: '0.2.6',
    private: false,
    location: '/Users/sisber/twilio/dsys/paste/packages/paste-core/primitives/disclosure',
  },
];

describe('generatePackageExportsMap', () => {
  it('Creates mapping file successfully from mock', async () => {
    const mockMapping = await generatePackageExportsMap(mockGetPastePackages);

    expect(mockMapping).toEqual({
      BOX_PROPS_TO_BLOCK: '@twilio-paste/core/box',
      Box: '@twilio-paste/core/box',
      ComboboxPrimitive: '@twilio-paste/core/combobox-primitive',
      DisclosurePrimitive: '@twilio-paste/core/disclosure-primitive',
      DisclosurePrimitiveContent: '@twilio-paste/core/disclosure-primitive',
      Stack: '@twilio-paste/core/stack',
      getStackChildMargins: '@twilio-paste/core/stack',
      getStackDisplay: '@twilio-paste/core/stack',
      getStackStyles: '@twilio-paste/core/stack',
      safelySpreadBoxProps: '@twilio-paste/core/box',
      useComboboxPrimitive: '@twilio-paste/core/combobox-primitive',
      useDisclosurePrimitiveState: '@twilio-paste/core/disclosure-primitive',
    });
  });

  /* Not useful, but leaving for documentation purposes
  // This is the local cache of the last run of getPastePackages, which we also mock as `mockGetPastePackages`
  // const pastePackagesFromCache = require('../../../tools/.cache/packages.json');
  // This is the local cache of the last run of generateExportsMap
  // const mappingsFromCache = require('../tools/mappings.json');

  it('Creates mapping file successfully from cache', async () => {
    const generatedMappings = await generatePackageExportsMap(() => pastePackagesFromCache);
    expect(generatedMappings).toEqual(mappingsFromCache);
  });
  */
});
