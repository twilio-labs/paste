import * as React from 'react';
import {render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {AgentIcon} from '../src/AgentIcon';
import {buildListTemplate} from '../tools/templates/buildListTemplate';
import {jsonTemplate} from '../tools/templates/jsonTemplate';
import {reactIconTemplate} from '../tools/templates/reactIconTemplate';
import {
  getOutputComponentName,
  pascalCaseWordSplitter,
  cleanFileName,
  normalizeFileName,
  removeTsxExtension,
  getInputPath,
  getReactOutputPath,
  getBuildFileName,
  maybeHandleError,
} from '../tools/utils';
import {getIconNames} from '../tools/actions/listIconsAction';
import {normalizeSourceFiles} from '../tools/actions/convertNewAction';
import {filterBuiltFiles} from '../tools/actions/convertAllAction';

describe('Icons', () => {
  describe('HTML attributes', () => {
    it('should have the default element name', () => {
      const {container} = render(<AgentIcon decorative />);
      expect(container.querySelector('[data-paste-element="ICON"]')).toBeInTheDocument();
    });
    it('should have a custom element name', () => {
      const {container} = render(<AgentIcon element="CUSTOM_ICON" decorative />);
      expect(container.querySelector('[data-paste-element="CUSTOM_ICON"]')).toBeInTheDocument();
    });
  });

  describe('Customization', () => {
    it('should apply custom styles to customizaed icons', () => {
      const {container} = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            ICON: {borderRadius: 'borderRadius20', backgroundColor: 'colorBackgroundSuccess'},
            CUSTOM_ICON: {borderRadius: 'borderRadius20', backgroundColor: 'colorBackgroundDestructive'},
          }}
        >
          <>
            <AgentIcon decorative />
            <AgentIcon element="CUSTOM_ICON" decorative />
          </>
        </CustomizationProvider>
      );
      expect(container.querySelector('[data-paste-element="ICON"]')).toHaveStyleRule('border-radius', '4px');
      expect(container.querySelector('[data-paste-element="ICON"]')).toHaveStyleRule(
        'background-color',
        'rgb(20, 176, 83)'
      );
      expect(container.querySelector('[data-paste-element="CUSTOM_ICON"]')).toHaveStyleRule('border-radius', '4px');
      expect(container.querySelector('[data-paste-element="CUSTOM_ICON"]')).toHaveStyleRule(
        'background-color',
        'rgb(214, 31, 31)'
      );
    });
  });
});

describe('icons util functions', () => {
  const testIconList = ['icon1', 'icon2', 'icon3'];
  const fileName = 'iAmAFile.tsx';

  describe('tools/templates/buildListTemplate util', () => {
    it('returns the expected output', () => {
      const expectedOutput = `module.exports = [\"src/icon1.tsx\",\"src/icon2.tsx\",\"src/icon3.tsx\"];`;
      expect(buildListTemplate(testIconList)).toEqual(expectedOutput);
    });
  });

  describe('tools/templates/jsonTemplate util', () => {
    it('returns the expected output', () => {
      const expectedOutput =
        '[{"name":"icon1","svg":"/svg/icon1.svg","cjs":"/cjs/icon1.js","esm":"/esm/icon1.js"},{"name":"icon2","svg":"/svg/icon2.svg","cjs":"/cjs/icon2.js","esm":"/esm/icon2.js"},{"name":"icon3","svg":"/svg/icon3.svg","cjs":"/cjs/icon3.js","esm":"/esm/icon3.js"}]';
      expect(jsonTemplate(testIconList)).toEqual(expectedOutput);
    });
  });

  describe('tools/templates/reactIconTemplate util', () => {
    const testReactIconTemplateArgs = {componentName: 'testIcon', svg: 'testIconSVG'};
    const name = testReactIconTemplateArgs.componentName;
    const output = reactIconTemplate(testReactIconTemplateArgs);
    it('returns the expected output', () => {
      expect(typeof output).toBe('string');
      expect(output.includes(`export interface ${name}Props extends IconWrapperProps`)).toBeTruthy();
      expect(output.includes(`${name}.displayName = '${name}'`)).toBeTruthy();
    });
  });

  describe('tools/actions/convertAllAction util', () => {
    it('filters built files', () => {
      expect(filterBuiltFiles(['icon1.tsx', 'icon2', 'icon3.tsx'])).toEqual(['icon1.tsx', 'icon3.tsx']);
    });
  });

  describe('tools/actions/convertNewAction util', () => {
    it('normalizes source files', () => {
      expect(normalizeSourceFiles(['icon1.tsx', 'helpers', 'types', 'icon2.tsx'])).toEqual(['icon1', 'icon2']);
    });
  });

  describe('tools/actions/listIconsAction util', () => {
    it('gets the icon names', async () => {
      const iconNames = await getIconNames();
      expect(iconNames).toMatchSnapshot();
    });
  });

  describe('tools/utils.ts utils', () => {
    it('getOutputComponentName util returns the expected output', () => {
      expect(getOutputComponentName('brandLogoIcon.svg')).toEqual('BrandLogoIcon');
    });

    it('pascalCaseWordSplitter util returns the expected output', () => {
      expect(pascalCaseWordSplitter('hElLo iM nORA')).toEqual('h El Lo i M n ORA');
    });
    it('cleanFileName util returns the expected output', () => {
      expect(cleanFileName(fileName)).toEqual('IAmAFileTsx');
    });
    it('normalizeFileName util returns the expected output', () => {
      expect(normalizeFileName(`${fileName}--.svg`)).toEqual('iamafile');
    });

    it('removeTsxExtension util returns the expected output', () => {
      expect(removeTsxExtension('icons.tsx')).toEqual('icons');
    });
    it('getInputPath util returns the expected output', () => {
      expect(getInputPath(fileName).includes(`paste/packages/paste-icons/svg/${fileName}`)).toBeTruthy();
    });
    it('getReactOutputPath util returns the expected output', () => {
      expect(getReactOutputPath(fileName).includes(`paste/packages/paste-icons/src/IAmAFileTsxIcon.tsx`)).toBeTruthy();
    });
    it('getBuildFileName util returns the expected output', () => {
      expect(getBuildFileName(removeTsxExtension(fileName))).toEqual(`src/${fileName}`);
    });

    it('maybeHandleError util throws if error is present', () => {
      // hide console errors from terminal when throwing expected errors
      const spy = jest.spyOn(console, 'error');
      spy.mockImplementation(() => {});
      const testError = {message: 'test error'};
      expect(() => maybeHandleError('test', testError)).toThrow();
      spy.mockRestore();
    });
  });
});
