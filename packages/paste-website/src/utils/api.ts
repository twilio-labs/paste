import fs from 'fs';
import path from 'path';

import {globby} from 'globby';
import groupBy from 'lodash/groupBy';

import {roadmapTable, systemTable} from './airtable';

export interface Package {
  name: string;
  version: string;
  status: string;
}

export interface PastePackages {
  allPasteComponent: Package[];
  allPastePrimitive: Package[];
  allPasteLayout: Package[];
  allPasteLibraries: Package[];
  allPasteThemePackage: Package[];
  allPasteDesignTokensPackage: Package[];
}

const getCategory: string = (pkgPath: string) => {
  if (pkgPath.startsWith('paste-core/components')) {
    return 'allPasteComponent';
  } else if (pkgPath.startsWith('paste-core/primitives')) {
    return 'allPastePrimitive';
  } else if (pkgPath.startsWith('paste-core/layout')) {
    return 'allPasteLayout';
  } else if (pkgPath.startsWith('paste-libraries')) {
    return 'allPasteLibraries';
  } else if (pkgPath.startsWith('paste-theme')) {
    return 'allPasteThemePackage';
  } else if (pkgPath.startsWith('paste-design-tokens')) {
    return 'allPasteDesignTokensPackage';
  }
  return '';
};

export const getAllPackages = async () => {
  const root = path.resolve(process.cwd(), '../');
  const packages = await globby(['**/package.json', '!**/node_modules', '!**/core-bundle/**'], {
    cwd: root,
  });
  const data: PastePackages = {
    allPasteComponent: [],
    allPasteDesignTokensPackage: [],
    allPasteLayout: [],
    allPasteLibraries: [],
    allPastePrimitive: [],
    allPasteThemePackage: [],
  };

  packages.forEach((packageJson) => {
    const category = getCategory(packageJson);
    if (category) {
      const fileContents = fs.readFileSync(`${root}/${packageJson}`, 'utf8');
      const {name, status, version} = JSON.parse(fileContents);
      data[category].push({name, status: status || null, version});
    }
  });

  return data;
};

export const getAllPatterns = async () => {
  const patterns = await systemTable
    .select({
      filterByFormula: 'AND({Component Category} = "pattern", Documentation, status, status != "in development")',
      sort: [{field: 'Feature'}],
      fields: ['Feature', 'status'],
    })
    .all();
  const items = patterns.map(({id, fields}) => ({id, ...fields}));

  return {allPastePattern: items};
};

export const getAllComponents = async () => {
  const components = await systemTable
    .select({
      filterByFormula: 'AND({Component Category} = "component", status)',
      sort: [{field: 'Feature'}],
      fields: [
        'Feature',
        'Documentation',
        'Figma',
        'Design committee review',
        'Engineer committee review',
        'Code',
        'status',
      ],
    })
    .all();
  const items = components.map(({id, fields}) => ({id, ...fields}));

  return items;
};

export const getRoadmap = async () => {
  const roadmap = await roadmapTable
    .select({
      filterByFormula: 'IS_AFTER({Release date}, TODAY())',
      sort: [{field: 'Release'}, {field: 'Status'}, {field: 'Release feature name'}],
      fields: ['Release feature name', 'Release', 'Release Description', 'Public Description (from System)', 'Status'],
    })
    .all();
  const items = roadmap.map(({id, fields}) => ({id, ...fields}));
  const releases = groupBy(items, 'Release');

  Object.values(releases).forEach((val) =>
    val.sort((a, b) => a['Release feature name'].localeCompare(b['Release feature name']))
  );

  return releases;
};
