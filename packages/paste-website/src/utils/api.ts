import fs from 'fs';
import path from 'path';

import {globby} from 'globby';
import groupBy from 'lodash/groupBy';

import {roadmapTable} from './airtable.mjs';

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
  allPastePattern: {
    Feature: string;
    status: string;
  }[];
}

export const getNavigationData = async () => {
  const data = fs.readFileSync(path.resolve(process.cwd(), 'data/nav-data.json'), 'utf8');
  return JSON.parse(data);
};

export const getAllComponents = async () => {
  const data = fs.readFileSync(path.resolve(process.cwd(), 'data/feature-data.json'), 'utf8');

  return JSON.parse(data).filter((item) => ['component', 'layout'].includes(item['Component Category']));
};

export const getFeature = async (feature: string) => {
  const data = fs.readFileSync(path.resolve(process.cwd(), 'data/feature-data.json'), 'utf8');

  return JSON.parse(data).find((item) => item.Feature === feature);
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

export const getArticles = async () => {
  const root = path.resolve(process.cwd(), './src/pages/blog/');
  const posts = await globby(['*.mdx', '!index.mdx'], {
    cwd: root,
  });

  return posts
    .map((file) => {
      const filename = file.replace('.mdx', '');
      // eslint-disable-next-line global-require, import/no-dynamic-require
      const {meta} = require(`src/pages/blog/${filename}.mdx`);
      const date = new Date(meta.date);
      const formattedDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()).toLocaleString(
        'en-US',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }
      );

      return {
        ...meta,
        date: formattedDate,
        machineDate: meta.date,
      };
    })
    .reverse()
    .filter((entry) => entry.status !== 'draft');
};
