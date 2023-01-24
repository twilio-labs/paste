import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';
import {fileURLToPath} from 'url';

import {globby} from 'globby';

import {systemTable} from '../src/utils/airtable.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.resolve(__dirname, '../data');

const getCategory = (pkgPath) => {
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

const getAllPatterns = async () => {
  const patterns = await systemTable
    .select({
      filterByFormula: 'AND({Component Category} = "pattern", Documentation, status, status != "in development")',
      sort: [{field: 'Feature'}],
      fields: ['Feature', 'status'],
    })
    .all();
  return patterns.map(({fields}) => fields);
};

const getAllPackages = async () => {
  const root = path.resolve(process.cwd(), '../');
  const packages = await globby(['**/package.json', '!**/node_modules', '!**/core-bundle/**'], {
    cwd: root,
  });
  const data = {
    allPasteComponent: [],
    allPasteDesignTokensPackage: [],
    allPasteLayout: [],
    allPasteLibraries: [],
    allPastePrimitive: [],
    allPasteThemePackage: [],
    allPastePattern: [],
  };

  packages.forEach((packageJson) => {
    const category = getCategory(packageJson);
    if (category) {
      const fileContents = fs.readFileSync(`${root}/${packageJson}`, 'utf8');
      const {name, status, version} = JSON.parse(fileContents);
      data[category].push({name, status: status || null, version});
    }
  });

  const patterns = await getAllPatterns();
  data.allPastePattern = [...patterns];

  await mkdirp(dataPath, {recursive: true});
  fs.writeFileSync(path.join(dataPath, 'nav-data.json'), JSON.stringify(data, null, 2), 'utf8');
};

export const getAllFeatures = async () => {
  const features = await systemTable
    .select({
      filterByFormula: 'AND(status, status != "in development")',
      sort: [{field: 'Feature'}],
      fields: [
        'Component Category',
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
  const items = features.map(({fields}) => fields);

  fs.writeFileSync(path.join(dataPath, 'feature-data.json'), JSON.stringify(items, null, 2), 'utf8');
};

getAllPackages();
getAllFeatures();
