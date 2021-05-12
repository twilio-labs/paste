import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

export async function getAllComponentPages() {
  const context = require.context('../docs/components', false, /\.mdx$/);
  const components = [];
  for (const key of context.keys()) {
    const component = key.slice(2);
    //const content = await import(`../docs/components/${component}`);
    components.push({
      slug: component.replace('.mdx', ''),
      title: component,
      // content,
    });
  }
  return components;
}

const docsDirectory = path.join(process.cwd(), 'docs/components');

export async function getComponentPageBySlug(slug: string): any {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(docsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {data, content} = matter(fileContents);

  return {slug: realSlug, meta: data, content};
}
